import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const PurposePlanner = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>DAILY PURPOSE PLANNER</Text>}
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: height * 0.02 }}>
          <View style={styles.btn}>
            <CustomButton
              text="Purpose & Present time goals"
              textColor={colors.marhoon}
              btnHeight={height * 0.065}
              btnWidth={width * 0.85}
              backgroundColor={colors.white}
              borderColor={colors.marhoon}
              borderWidth={2}
              borderRadius={20}
              onPress={() => navigation.navigate('')}
            />
          </View>

          <View style={styles.btn}>
            <CustomButton
              text="Planned Time Goals"
              textColor={colors.marhoon}
              btnHeight={height * 0.065}
              btnWidth={width * 0.85}
              backgroundColor={colors.white}
              borderColor={colors.marhoon}
              borderWidth={2}
              borderRadius={20}
              onPress={() => navigation.navigate('')}
            />
          </View>

          <View style={styles.btn}>
            <CustomButton
              text="Daily Purpose Journal"
              textColor={colors.marhoon}
              btnHeight={height * 0.065}
              btnWidth={width * 0.85}
              backgroundColor={colors.white}
              borderColor={colors.marhoon}
              borderWidth={2}
              borderRadius={20}
              onPress={() => navigation.navigate('')}
            />
          </View>

          <View style={styles.btn}>
            <CustomButton
              text="Daily Journal History"
              textColor={colors.marhoon}
              btnHeight={height * 0.065}
              btnWidth={width * 0.85}
              backgroundColor={colors.white}
              borderColor={colors.marhoon}
              borderWidth={2}
              borderRadius={20}
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.purple,
    width: width,
    height: height * 0.1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.04,
    borderBottomRightRadius: 34,
    borderBottomLeftRadius: 34,
  },
  headerText: {
    color: colors.white,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.UrbanistBold,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingTop: height * 0.01, // space below header
    paddingBottom: height * 0.05,
  },

  row: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
  },
  number: {
    fontFamily: fontFamily.GilroyRegular,
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.02,
  },
});

export default PurposePlanner;
