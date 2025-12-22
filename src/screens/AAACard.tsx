import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomMultiInput from '../components/CustomMultiInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const AAACard = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [cards, setCards] = useState([{ id: 1 }]);

  const addCard = () => {
    const newCardId = Date.now();
    setCards([...cards, { id: newCardId }]);
  };

  const deleteCard = (cardId: number) => {
    if (cards.length > 0) {
      setCards(cards.filter(card => card.id !== cardId));
    }
  };

  const handleAddCardPress = () => {
    addCard();
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          addCard={true}
          onAddCardPress={handleAddCardPress}
          text={
            <Text style={styles.headerText}>The Holy Spirits AAA Card</Text>
          }
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.AAA} style={styles.img} />

        {cards.map((card, index) => (
          <View
            key={card.id}
            style={[styles.cardContainer, index > 0 && styles.cardSeparator]}
          >
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteCard(card.id)}
            >
              <Text style={styles.deleteText}>×</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                width: width * 0.7,
                justifyContent: 'space-between',
                top: height * 0.01,
              }}
            >
              <Text style={styles.request}>Request {index + 1}</Text>
              <Text style={styles.acknowledge}>ACKNOWLEDGE</Text>
            </View>

            <Text style={styles.holy}>Honor the Holy Spirit as LORD here:</Text>

            <View style={styles.ackContainer}>
              <CustomMultiInput
                placeholder="Honor the Holy Spirit"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.1}
                inputWidth={width * 0.85}
                backgroundColor={colors.lightGray}
                borderRadius={20}
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.ask}>ASK</Text>
            <Text style={styles.details}>
              Enter details of your request here:
            </Text>
            <View style={styles.askContainer}>
              <CustomMultiInput
                placeholder="Spirit as LORD"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.1}
                inputWidth={width * 0.85}
                backgroundColor={colors.lightGray}
                borderRadius={20}
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.abide}>ABIDE</Text>
            <Text style={styles.long}>
              Enter long will you abide to the End:
            </Text>
            <View style={styles.spiritContainer}>
              <CustomMultiInput
                placeholder="Spirit as LORD"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.1}
                inputWidth={width * 0.85}
                backgroundColor={colors.lightGray}
                borderRadius={20}
                onChangeText={setEmail}
              />
            </View>
          </View>
        ))}
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
  cardContainer: {
    marginBottom: height * 0.03,
    height: height * 0.65,
    position: 'relative',
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: height * 0.02,
    marginHorizontal: width * 0.03,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardSeparator: {
    borderTopWidth: 2,
    borderTopColor: colors.lightGray,
    marginTop: height * 0.03,
    paddingTop: height * 0.03,
  },
  deleteButton: {
    position: 'absolute',
    right: width * 0.05,
    top: height * 0.01,
    backgroundColor: colors.marhoon,
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  deleteText: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.GilroyBold,
    lineHeight: fontSizes.lg,
  },
  ackContainer: {
    alignSelf: 'center',
    top: height * 0.04,
  },
  askContainer: {
    alignSelf: 'center',
    top: height * 0.1,
  },
  headerText: {
    color: colors.white,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.UrbanistBold,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingTop: height * 0.01,
    paddingBottom: height * 0.2,
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
  btn1: {
    alignSelf: 'center',
    top: height * 0.05,
  },
  request: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    color: colors.darkRed,
    paddingHorizontal: width * 0.04,
  },
  acknowledge: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    alignSelf: 'center',
    color: colors.black

  },
  ask: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    alignSelf: 'center',
    top: height * 0.07,
    color: colors.black

  },
  holy: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.09,
    top: height * 0.03,
    color: colors.black

  },
  details: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.09,
    color: colors.black,
    paddingHorizontal: width * 0.09,
  },
  abide: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    alignSelf: 'center',
    top: height * 0.13,
    color: colors.black

  },
  long: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.15,
    paddingHorizontal: width * 0.09,
    color: colors.black

  },
  spiritContainer: {
    alignSelf: 'center',
    top: height * 0.16,
  },
});

export default AAACard;
