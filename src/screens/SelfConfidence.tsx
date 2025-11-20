import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const SelfConfidence = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  const toggleCount = (count: number) => {
    setSelectedCount(selectedCount === count ? null : count);
  };

  const isCountSelected = (count: number) => selectedCount === count;

  const CountButton = ({ number }: { number: number }) => (
    <TouchableOpacity
      style={[
        styles.countButton,
        isCountSelected(number) && styles.countButtonSelected,
      ]}
      onPress={() => toggleCount(number)}
    >
      <Text
        style={[
          styles.countText,
          isCountSelected(number) && styles.countTextSelected,
        ]}
      >
        {number}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* ✅ Fixed header on top */}
      <View style={styles.headerContainer}>
        <TopHeader isBack={true} />
      </View>

      {/* ✅ Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image source={images.confidence} style={styles.img} />

        {/* Count buttons row */}
        <View style={styles.countsContainer}>
          {[1, 2, 3, 4, 5].map(number => (
            <CountButton key={number} number={number} />
          ))}
        </View>

        <Text style={styles.jan}>SEPTEMBER</Text>
        <Text style={styles.luke}>1. Jesus Prays in Garden (MT.26:36-46)</Text>
        <Text style={styles.peter}>2. David and Goliath (1 Sam. 17:1-58)</Text>
        <Text style={styles.nanas}>3. Elijah’s Contest (I Kings 18:16-39)</Text>
        <Text style={styles.publican}>
          4. Solomon's Choices (1 Kgs 3:16-28)
        </Text>

        <View>
          <Text style={styles.today}>
            Today I will do the things I need to,
          </Text>
          <Text style={styles.today}>TO LOVE MYSELF, even when I </Text>
          <Text style={styles.today}>don’t want to! </Text>
        </View>

        <Image source={images.low} style={styles.low} />

        <View style={{ gap: height * 0.02 }}>
          <View style={styles.btn}>
            <CustomButton
              btnHeight={height * 0.06}
              btnWidth={width * 0.85}
              borderRadius={20}
              backgroundColor={colors.lightmarhoon}
              text="Continue"
              textColor={colors.white}
              onPress={() => navigation.navigate('')}
            />
          </View>

          <View style={styles.btn}>
            <CustomButton
              btnHeight={height * 0.06}
              btnWidth={width * 0.85}
              borderRadius={20}
              backgroundColor={colors.white}
              borderColor={colors.marhoon}
              borderWidth={1}
              text="Move To Next Core Values"
              textColor={colors.marhoon}
              onPress={() => navigation.navigate('SelfWorth')}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={images.audio} style={styles.audio} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  scrollContainer: {
    paddingTop: height * 0.08,
  },
  img: {
    alignSelf: 'center',
    bottom: height * 0.12,
    width: width * 0.999,
    height: height * 0.65,
  },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  countButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.lightmarhoon,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  countButtonSelected: {
    backgroundColor: colors.lightGreen,
    borderColor: colors.green,
  },
  countText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.UrbanistSemiBold,
    color: colors.black,
  },
  countTextSelected: {
    color: colors.white,
  },
  jan: {
    alignSelf: 'center',
    bottom: height * 0.39,
    color: colors.black,
    fontFamily: fontFamily.UrbanistExtraBold,
    fontSize: fontSizes.lg2,
  },
  luke: {
    alignSelf: 'center',
    bottom: height * 0.37,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  peter: {
    alignSelf: 'center',
    bottom: height * 0.35,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  nanas: {
    alignSelf: 'center',
    bottom: height * 0.33,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  publican: {
    alignSelf: 'center',
    bottom: height * 0.31,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  today: {
    alignSelf: 'center',
    bottom: height * 0.26,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.md,
  },
  low: {
    alignSelf: 'center',
    bottom: height * 0.12,
  },
  btn: {
    alignSelf: 'center',
    bottom: height * 0.09,
  },
  audio: {
    alignSelf: 'center',
    bottom: height * 0.06,
  },
});

export default SelfConfidence;
