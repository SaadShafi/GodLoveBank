import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';

interface CardType {
  toolId: number;
  subject: string;
  answer: string;
  mate: string;
  example: string;
  invitation: string;
}

const TheAmenPrinciple = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [cards, setCards] = useState<CardType[]>([
    {
      toolId: 1,
      subject: '',
      answer: '',
      mate: '',
      example: '',
      invitation: '',
    },
  ]);
  const [loading, setLoading] = useState(false);

  // Update any field in a card
  const updateCardField = (index: number, field: keyof CardType, value: string) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = value;
    setCards(updatedCards);
  };

  const handleAmenPress = async () => {
    setLoading(true);
    try {
      for (const card of cards) {
        const body = {
          toolId: card.toolId,
          answer: card.answer,
          mate: card.mate,
          example: card.example,
          invitation: card.invitation,
        };

        const { response, error } = await apiHelper(
          'POST',
          'tools/tools-of-thinking/log',
          {},
          {},
          body
        );

        if (!response?.data?.data) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: error?.message || 'Failed to log',
          });
          setLoading(false);
          return;
        }
      }

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'All Tools of Thinking logs created successfully',
      });
      navigation.navigate('AmenPrinciples');
    } catch (err) {
      console.error('Tools of Thinking error:', err);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred while logging Tools of Thinking',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>THE A-M-E-N PRINCIPLE</Text>}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image source={images.sound} style={styles.img} />
        <Image source={images.doctrine} style={styles.img} />

        {cards.map((card, index) => (
          <View key={card.toolId} style={{ gap: height * 0.02 }}>
            <Text style={styles.subject}>Write in Subject</Text>
            <View style={styles.custom}>
              <CustomTextInput
                placeholder="Type Here"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.065}
                inputWidth={width * 0.9}
                borderRadius={20}
                value={card.subject}
                onChangeText={(val) => updateCardField(index, 'subject', val)}
                keyboardType="default"
                fontFamily={fontFamily.UrbanistMedium}
                fontSize={fontSizes.sm2}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.95 }}>
              <Image source={images.bible} style={styles.img1} />
              <View style={styles.answer}>
                <CustomTextInput
                  placeholder="ANSWER"
                  placeholderTextColor={colors.black}
                  inputHeight={height * 0.065}
                  inputWidth={width * 0.3}
                  borderRadius={20}
                  value={card.answer}
                  onChangeText={(val) => updateCardField(index, 'answer', val)}
                  keyboardType="default"
                  fontFamily={fontFamily.UrbanistMedium}
                  fontSize={fontSizes.sm2}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.95 }}>
              <Image source={images.mate} style={styles.img1} />
              <View style={styles.answer}>
                <CustomTextInput
                  placeholder="MATE"
                  placeholderTextColor={colors.black}
                  inputHeight={height * 0.065}
                  inputWidth={width * 0.3}
                  borderRadius={20}
                  value={card.mate}
                  onChangeText={(val) => updateCardField(index, 'mate', val)}
                  keyboardType="default"
                  fontFamily={fontFamily.UrbanistMedium}
                  fontSize={fontSizes.sm2}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.95 }}>
              <Image source={images.example} style={styles.img1} />
              <View style={styles.answer}>
                <CustomTextInput
                  placeholder="EXAMPLE"
                  placeholderTextColor={colors.black}
                  inputHeight={height * 0.065}
                  inputWidth={width * 0.3}
                  borderRadius={20}
                  value={card.example}
                  onChangeText={(val) => updateCardField(index, 'example', val)}
                  keyboardType="default"
                  fontFamily={fontFamily.UrbanistMedium}
                  fontSize={fontSizes.sm2}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.95 }}>
              <Image source={images.self} style={styles.img1} />
              <View style={styles.answer}>
                <CustomTextInput
                  placeholder="INVITATION"
                  placeholderTextColor={colors.black}
                  inputHeight={height * 0.065}
                  inputWidth={width * 0.3}
                  borderRadius={20}
                  value={card.invitation}
                  onChangeText={(val) => updateCardField(index, 'invitation', val)}
                  keyboardType="default"
                  fontFamily={fontFamily.UrbanistMedium}
                  fontSize={fontSizes.sm2}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.audioContainer}>
        {/* <Text style={styles.audio}>Audio Explanation</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', top: height * 0.03, gap: width * 0.02 }}>
          <Image source={images.play} />
          <Image source={images.timer} style={{ top: height * 0.02 }} />
        </View> */}
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
            onPress={handleAmenPress}
            loading={loading}
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
    // left: width * 0.22,
    // top: height * 0.04,
    alignSelf: 'center',
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
