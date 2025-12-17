import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const TheAmenPrinciple = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [firstName, setFirstName] = useState('');
  const [answer, setAnswer] = useState('');
  const [mate, setMate] = useState('');
  const [example, setExample] = useState('');
  const [invitation, setInvitation] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>THE A-M-E-N PRINCIPLE</Text>}
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.sound} style={styles.img} />

        <Image source={images.doctrine} style={styles.img} />

        <Text style={styles.subject}>Write in Subject</Text>
        <View style={styles.custom}>
          <CustomTextInput
            placeholder="Type Here"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.065}
            inputWidth={width * 0.9}
            borderRadius={20}
            value={firstName}
            onChangeText={setFirstName}
            keyboardType="default"
            fontFamily={fontFamily.UrbanistMedium}
            fontSize={fontSizes.sm2}
          />
        </View>

        <View style={{ gap: height * 0.02 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.95,
            }}
          >
            <Image source={images.bible} style={styles.img1} />
            <View style={styles.answer}>
              <CustomTextInput
                placeholder="ANSWER"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.065}
                inputWidth={width * 0.3}
                borderRadius={20}
                value={answer}
                onChangeText={setAnswer}
                keyboardType="default"
                fontFamily={fontFamily.UrbanistMedium}
                fontSize={fontSizes.sm2}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.95,
            }}
          >
            <Image source={images.mate} style={styles.img1} />
            <View style={styles.answer}>
              <CustomTextInput
                placeholder="MATE"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.065}
                inputWidth={width * 0.3}
                borderRadius={20}
                value={mate}
                onChangeText={setMate}
                keyboardType="default"
                fontFamily={fontFamily.UrbanistMedium}
                fontSize={fontSizes.sm2}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.95,
            }}
          >
            <Image source={images.example} style={styles.img1} />
            <View style={styles.answer}>
              <CustomTextInput
                placeholder="EXAMPLE"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.065}
                inputWidth={width * 0.3}
                borderRadius={20}
                value={example}
                onChangeText={setExample}
                keyboardType="default"
                fontFamily={fontFamily.UrbanistMedium}
                fontSize={fontSizes.sm2}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.95,
            }}
          >
            <Image source={images.self} style={styles.img1} />
            <View style={styles.answer}>
              <CustomTextInput
                placeholder="INVITATION"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.065}
                inputWidth={width * 0.3}
                borderRadius={20}
                value={invitation}
                onChangeText={setInvitation}
                keyboardType="default"
                fontFamily={fontFamily.UrbanistMedium}
                fontSize={fontSizes.sm2}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.audioContainer}>
        <Text style={styles.audio}>Audio Explanation</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            top: height * 0.03,
            gap: width * 0.02,
          }}
        >
          <Image source={images.play} />
          <Image source={images.timer} style={{ top: height * 0.02 }} />
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
    // height: height * 0.1,
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
    paddingBottom: height * 0.07,
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
    left: width * 0.22,
    top: height * 0.04,
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.05,
  },
  subject: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    paddingHorizontal: width * 0.08,
    color: colors.black

  },
  custom: {
    alignSelf: 'center',
    top: height * 0.01,
  },
  img1: {
    top: height * 0.05,
    left: width * 0.05,
  },
  answer: {
    top: height * 0.05,
    // left: width * 0.05,
  },
});

export default TheAmenPrinciple;
