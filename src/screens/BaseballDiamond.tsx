import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const BaseballDiamond = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Self Love Home Base" isBack={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height * 0.2 }}
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
              <Text style={styles.reject}>Chosen-Ness (1)</Text>
            </View>
          </View>
        </View>

        <Text style={styles.rejection}>REJECTION</Text>
        <View style={{ top: height * 0.01 }}>
          <Image source={images.rejection} style={styles.rejImg} />
          <Text style={styles.number}>3</Text>
          <Text style={styles.base}>2ND BASE</Text>
        </View>

        <Text style={styles.abandonment}>ABANDONMENT</Text>
        <View style={{ top: height * 0.03 }}>
          <Image source={images.abandonment} style={styles.abandonmentImg} />
          <Text style={styles.num}>2</Text>
          <Text style={styles.thirdBase}>3RD BASE</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    left: width * 0.07,
    top: height * 0.02,
  },
  subText: {
    fontFamily: fontFamily.GilroyRegular,
    lineHeight: fontSizes.sm * 1.3,
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
    top: height * 0.12,
    left: width * 0.09,
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
    left: width * 0.16,
  },
  rejImg: {
    alignSelf: 'center',
    top: height * 0.1,
  },
  abandonmentImg: {
    top: height * 0.1,
    left: width * 0.12,
  },
  number: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    alignSelf: 'center',
    color: colors.white,
    top: height * 0.03,
  },
  num: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    color: colors.white,
    top: height * 0.03,
    left: width * 0.215,
  },
});

export default BaseballDiamond;
