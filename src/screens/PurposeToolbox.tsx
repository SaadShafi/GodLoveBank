import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const PurposeToolbox = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>GOD’S PURPOSE TOOLBOX</Text>}
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.box} style={styles.img} />
        <Text style={styles.mathew}>
          THE GOD'S PURPOSE TOOLBOX (LUKE 14:25-33)
        </Text>

        <Text style={styles.description}>
          God's Purpose Toolbox is one tool of thinking with four tools in the
          toolbox. Each tool helps you discover God's purpose for your life. It
          asserts that Jesus gives us five contexts for purpose discovery. The
          first is the Context Of Your CREATION. The second is the Context Of
          Your CALLING. The third is the Context Of Your Family CLAN. The fourth
          context of purpose is the Context Of Your CAREER. And the fifth
          context is the Context of Your CROSS. The other tools in the toolbox
          are 2 The Five Components of Purpose Problem Solving, 3 The Five
          Operations of Purpose Choice Making, and 4 The Five Seasons of Purpose
          Fulfillment.
        </Text>

        <Text style={styles.prayer}>
          IDEAS ON WHEN AND HOW TO USE THE GOD'S PURPOSE TOOL!
        </Text>

        <View style={{ gap: height * 0.02, top: height * 0.04 }}>
          <View style={styles.row}>
            <Text style={styles.number}>1. </Text>
            <Text style={styles.text1}>
              When you want to find and fulfill God's lifelong purpose for your
              life?
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>2. </Text>
            <Text style={styles.text2}>
              When you want to choose instrumental goals toward fulfillment of
              purpose!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>3. </Text>
            <Text style={styles.text3}>
              When you have a problem, and you want to solve it based on God's
              purpose!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>4. </Text>
            <Text style={styles.text4}>
              When you want to use the five components of problem solving know
              history!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>5. </Text>
            <Text style={styles.text4}>
              When you want to know what season of your purpose fulfillment you
              are in!
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.audioContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            top: height * 0.03,
            gap: width * 0.02,
          }}
        >
          <TouchableOpacity>
            <Image source={images.playbutton} />
          </TouchableOpacity>
          <Text style={styles.audio}>Audio Explanation</Text>
        </View>

        <View style={styles.btn}>
          <CustomButton
            text="Continue"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={() => navigation.navigate('Toolbox')}
          />
        </View>
      </View>
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
  img: {
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
  mathew: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.04,
    top: height * 0.01,
    color: colors.black

  },
  description: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    paddingHorizontal: width * 0.04,
    textAlign: 'justify',
    top: height * 0.03,
    lineHeight: fontSizes.sm * 1.6,
    marginBottom: height * 0.03,
  },
  prayer: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.04,
    top: height * 0.02,
    color: colors.black

  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
  },
  number: {
    fontFamily: fontFamily.GilroyRegular,
    color: colors.black

  },
  text1: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.9,
  },
  text2: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.9,
  },
  text3: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  text4: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  text5: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  audioContainer: {
    backgroundColor: colors.purple,
    width: width,
    height: height * 0.23,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  audio: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.white,
    // left: width * 0.22,
    // top: height * 0.04,
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.05,
  },
});

export default PurposeToolbox;
