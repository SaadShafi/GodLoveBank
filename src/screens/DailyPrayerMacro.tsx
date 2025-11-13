import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

// type Props = NativeStackScreenProps<StackParamList, 'SecondBase'>;

const DailyPrayerMacro = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <TopHeader
            isBack={true}
            text={
              <View style={{ position: 'absolute' }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: colors.white,
                    fontSize: fontSizes.sm2,
                    fontFamily: fontFamily.UrbanistBold,
                    left: width * 0.18,
                    // top: height * 0.01,
                    justifyContent: 'center',
                  }}
                >
                  The Daily Prayer Macro Strategy
                </Text>
              </View>
            }
          />
        </View>
        <Image source={images.prayeramacro} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.purple,
    height: height * 0.15,
    width: width * 0.9999,
    alignSelf: 'center',
    borderBottomRightRadius: 34,
    borderBottomLeftRadius: 34,
  },
  topContainer: {
    position: 'absolute',
  },
  img: {
    alignSelf: 'center',
    top: height * 0.18,
  },
});

export default DailyPrayerMacro;
