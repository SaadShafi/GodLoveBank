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

const GoldenRuleCommunication = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={
            <Text style={styles.headerText}>THE GOLDEN EFFECTIVE RULE</Text>
          }
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.goldenrule} style={styles.img} />
        <Text style={styles.mathew}>
          THE GOLDEN RULE OF EFFECTIVE COMMUNICATION (LUKE 6:31!)
        </Text>

        <Text style={styles.description}>
          The Golden Rule of Effective Communication is designed to help you
          understand others and be understood by them. Jesus summed up the
          Golden Rule of Effective Communication like this, "Do unto others as
          you would have them do unto you." (Luke 6:31) According to Jesus, we
          should treat others exactly like we want them to treat us. It seeks to
          understand the thinking, feelings, experiences of others, then
          accurately expressing that understanding back to them. Jesus
          introduced the concept of empathy in the golden rule over two thousand
          years ago. If you respect and treat people like they are important,
          they will do the same to you, unless something is wrong with them.
          Jesus explains, For with the same measure you mete, empathize with
          others it will be measured back to you.
        </Text>

        <Text style={styles.prayer}>HOW TO APPLY THE GOLDEN RULE!</Text>
        {/* <Text style={styles.prayer}>CLOSING SPIRITS!</Text> */}

        <View style={{ gap: height * 0.02, top: height * 0.04 }}>
          <View style={styles.row}>
            <Text style={styles.number}>1. </Text>
            <Text style={styles.text1}>
              Seek to understand the person's SPIRIT by learning what they're
              thinking.
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>2. </Text>
            <Text style={styles.text2}>
              Seek to have compassion for their SOUL by learning what they are
              feeling.
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>3. </Text>
            <Text style={styles.text3}>
              Seek to extend mercy to the person's BODY by observing their
              behavior.
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
            text="Done"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={() => navigation.navigate('Home')}
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
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
  },
  number: {
    fontFamily: fontFamily.GilroyRegular,
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

export default GoldenRuleCommunication;
