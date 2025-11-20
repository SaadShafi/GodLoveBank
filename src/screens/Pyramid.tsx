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

const Pyramid = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={
            <Text style={styles.headerText}>PURPOSE INSTRUMENTAL GOALS</Text>
          }
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.Pyramidgod} style={styles.img} />

        <Text style={styles.description}>
          The 100% Pyramid is designed to help you to fulfill Jesus’ perfect
          will of loving God, yourself, and others 100%. It asserts that
          everything you do in life is done with the sincere intent to gain love
          results. Whether it is playing a sport, working a job, developing a
          skill, trying to love your spouse, holding a conversation, praying to
          God, or simply having fun, everything you do is done with the sincere
          intent to gain love results. The challenge is that most people want
          100% love results in their life, but they often are not willing to
          give 100% effort to get it. The 100% Pyramid principle asserts that
          you get what you give in this life, no more and no less. If you give
          10%, 30%, or 60% in your efforts, you get back in return what you
          give. Most importantly the 100% Pyramid empowers you to give 100% in
          all that you do so you can ultimately invest in your Gift to achieve
          your fullest potential for God!
        </Text>

        <Text style={styles.prayer}>HOW TO USE THE 100% PYRAMID!</Text>

        <View style={{ gap: height * 0.02, top: height * 0.04 }}>
          <View style={styles.row}>
            <Text style={styles.number}>1. </Text>
            <Text style={styles.text1}>
              When you want to create a WIN/WIN SITUATION for loved ones in your
              life!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>2. </Text>
            <Text style={styles.text2}>
              When you want to daily give 100% to any goal or endeavor on your
              Gift journey!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>3. </Text>
            <Text style={styles.text3}>
              When you want to coach a team of adults, kids, or any athletic
              group how to WIN!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>4. </Text>
            <Text style={styles.text4}>
              When you want to apply the 100% Principles to any situation of
              life to WIN!
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
            onPress={() => navigation.navigate('PyramidGoals')}
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

export default Pyramid;
