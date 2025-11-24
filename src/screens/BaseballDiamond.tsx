import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

type Props = NativeStackScreenProps<StackParamList, 'BaseballDiamond'>;

const BaseballDiamond = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Self Love Home Base" isBack={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height * 0.15 }}
      >
        <Text style={styles.text}>HOW TO GET YOUR OSL SCORE:</Text>
        <Text style={styles.subText}>
          Your Old Self-Love Home Base is always the top category in this
          assessment scoring. It represents the storyline of your Old Self-Love
          Story. If you have a tie in the numbers of one or more of the
          categories, or a zero, simply sort them out by dragging the most
          painful feeling to the top and so Forth.
        </Text>

        <View style={{ gap: height * 0.015 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.87,
            }}
          >
            <View style={styles.container}>
              <Text style={styles.home}>Home Base</Text>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.reject}>Rejection (3)</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.87,
            }}
          >
            <View style={styles.container}>
              <Text style={styles.home}>1st Base</Text>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.reject}>Abandonment (2)</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.87,
            }}
          >
            <View style={styles.container}>
              <Text style={styles.home}>2st Base</Text>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.reject}>Worthlessness (1)</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.87,
            }}
          >
            <View style={styles.container}>
              <Text style={styles.home}>3st Base</Text>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.reject}>Abuse (1)</Text>
            </View>
          </View>
        </View>

        <Text style={styles.rejection}>REJECTION</Text>
        <View style={{ top: height * 0.01 }}>
          <Image source={images.rejection} style={styles.rejImg} />
          <Text style={styles.number}>3</Text>
          <Text style={styles.base}>2ND BASE</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between', width: width * 0.9, alignSelf:'center', left: width * 0.052, top: height * 0.02 }}>
          <View>
            <Text style={styles.abandonment}>ABANDONMENT</Text>
            <Image source={images.abandonment} style={styles.abandonmentImg} />
            <Text style={styles.num}>2</Text>
          <Text style={styles.thirdBase}>3RD BASE</Text>
          </View>

          <View>
          <Text style={styles.worth}>WORTHLESSNESS</Text>
          <Image source={images.worth} style={styles.abandonmentImg} />
          <Text style={styles.One}>1</Text>
          <Text style={styles.firstBase}>1ST BASE</Text>
          </View>
        </View>

        <Text style={styles.chose}>ABUSE</Text>
        <View style={{left: width * 0.27 }}>
          <Image source={images.homeBase} style={styles.homeBaseImg} />
          <Text style={styles.one}>1</Text>
          <Text style={styles.homeBase}>HOME BASE</Text>
        </View>
      </ScrollView>
        <View style={styles.btnMain}>
          <CustomButton
            text="Next"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={() => navigation.navigate('HomeBase')}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
    left: width * 0.07,
    top: height * 0.02,
  },
  subText: {
    fontFamily: fontFamily.GilroyRegular,
    lineHeight: fontSizes.sm * 1.3,
    color: colors.black,
    left: width * 0.07,
    top: height * 0.03,
    width: width * 0.87,
    textAlign: 'justify',
  },
  container: {
    backgroundColor: colors.yellow,
    height: height * 0.07,
    width: width * 0.42,
    left: width * 0.07,
    top: height * 0.06,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: colors.red,
    height: height * 0.07,
    width: width * 0.42,
    left: width * 0.07,
    top: height * 0.06,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    alignItems: 'center',
    color: colors.black,
  },
  reject: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    alignItems: 'center',
    color: colors.white,
  },
  rejection: {
    color: colors.red,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    alignSelf: 'center',
    top: height * 0.1,
  },
  abandonment: {
    color: colors.blue,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    top: height * 0.09,
  },
  worth: {
    color: colors.darkGray,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    top: height * 0.09,
    right: width * 0.05
  },
  chose: {
    color: colors.green,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    top: height * 0.09,
    left: width * 0.45,
  },
  base: {
    color: colors.red,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    alignSelf: 'center',
    top: height * 0.07,
  },
  thirdBase: {
    color: colors.blue,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.07,
    left: width * 0.04,
  },
  firstBase: {
    color: colors.darkGray,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.07,
    left: width * 0.05,
  },
  homeBase: {
    color: colors.green,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.07,
    left: width * 0.15,
  },
  rejImg: {
    alignSelf: 'center',
    top: height * 0.1,
  },
  abandonmentImg: {
    top: height * 0.1,
    // left: width * 0.12,
  },
  homeBaseImg: {
    top: height * 0.1,
    left: width * 0.12,
  },
  number: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    alignSelf: 'center',
    color: colors.white,
    top: height * 0.01,
  },
  num: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    color: colors.white,
    top: height * 0.02,
    alignSelf:'center',
    right: width * 0.03,
  },
  One: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    color: colors.white,
    top: height * 0.02,
    alignSelf:'center',
    right: width * 0.04,
  },
  one:{
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    color: colors.white,
     top: height * 0.02,
    alignSelf:'center',
    right: width * 0.26,
  },
  btnMain: {
    alignItems: 'center',
    bottom: height * 0.03,
  },
});

export default BaseballDiamond;
