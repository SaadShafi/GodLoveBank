import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useEffect, useState } from 'react';

const DailyPrayerMacro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPath, setAudioPath] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();
  const tool  = route.params;
  console.log("Params in the Daily Prayer Macro Strategy Screen!", route.params);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={
            <Text style={styles.headerText}>
              The Daily Prayer Macro Strategy
            </Text>
          }
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.prayeramacro} style={styles.img} />
        <Text style={styles.mathew}>
          THE DAILY PRAYER MACRO STRATEGY (MATTHEW 6:9-13)
        </Text>

        <Text style={styles.description}>
          The Daily Prayer Macro Strategy is designed to help you maintain your
          single most important relationship with God to keep the main things,
          the main things. You can stay in a state of prayer for a few minutes a
          day or for 24 hours a day. The strategy in the Prayer Macro Strategy
          employs the seven essential principles Jesus used in His own prayer
          life in the acronym P-E-R-F-E-C-T. When you use it, it will daily
          enhance your important relationships with Jesus, the Holy Spirit, and
          God. It then becomes a vehicle God uses to talk to you through His
          Holy Spirit, and for you to listen and talk back to Him. It is also a
          powerful tool you can use to record your conversations and experiences
          in the God’s Love Bank Journal and Planner.
        </Text>

        <Text style={styles.prayer}>WHEN AND HOW TO USE THE DAILY PRAYER</Text>
        <Text style={styles.prayer}>MACRO STRATEGY!</Text>

        <View style={{ gap: height * 0.02, top: height * 0.04 }}>
          <View style={styles.row}>
            <Text style={styles.number}>1. </Text>
            <Text style={styles.text1}>
              When you want to take your important relationship with God to the
              next level!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>2. </Text>
            <Text style={styles.text2}>
              When you want to pray for your needs, desires and wants in your
              devotional.
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>3. </Text>
            <Text style={styles.text3}>
              When you are struggling with fears, worries, doubts, and painful
              concerns!
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
            {/* <Image source={images.playbutton} /> */}
            <Image source={isPlaying ? images.play : images.playbutton} />
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
            onPress={() => navigation.navigate('AppDrawer')}
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
    height:  Platform.OS === 'ios' ? height * 0.15 : height * 0.1,
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

export default DailyPrayerMacro;
