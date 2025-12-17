import { NavigationProp, useNavigation } from '@react-navigation/native';
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
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const Thermostat = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>THERMOSTAT OF YOUR SOUL!</Text>}
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.soul} style={styles.img} />

        <Text style={styles.description}>
          The Thermostat of Your Soul is the monitor of your soul’s deserved
          prosperity when it comes to your Health, Wealth, Relationships,
          Careers, And Salvation. It monitors what your soul feels you deserve
          in these five components of the Thermostat of Your Soul. It measures
          and regulates the prosperity or poverty of your soul at any given
          moment. Just like the thermostat in a room monitors the temperature of
          a room, then regulates the climate of the room; the thermostat of your
          soul monitors the prosperity in the five parts of your soul, then
          regulates the circumstances of your daily life. If the thermostat in a
          room is set at 20 degrees, and the room temperature is 70 degrees, the
          thermostat will change the room’s climate to 20 degrees. Likewise, if
          you think you deserve 70% prosperity in your daily life, but your soul
          only believes you deserve 20% degrees GUESS WHO WINS!
        </Text>

        <Text style={styles.prayer}>
          WHEN AND HOW TO USE THE THERMOSTAT OF YOUR SOUL!
        </Text>

        <View style={{ gap: height * 0.02, top: height * 0.04 }}>
          <View style={styles.row}>
            <Text style={styles.number}>1. </Text>
            <Text style={styles.text1}>
              You can change the Thermostat of your soul by making LOVE
              DEPOSITS!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>2. </Text>
            <Text style={styles.text2}>
              You can use the Thermostat of soul to improve your FINANCIAL
              STATUS!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>3. </Text>
            <Text style={styles.text3}>
              You can use the Thermostat to increase the prosperity in your
              HEALTH!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>4. </Text>
            <Text style={styles.text4}>
              You can use the Thermostat to increase the prosperity in your
              WEALTH!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>5. </Text>
            <Text style={styles.text5}>
              You can use the Thermostat to increase love in your RELATIONSHIPS!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>6. </Text>
            <Text style={styles.text5}>
              You can use the Thermostat to increase the prosperity in your
              CAREERS!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>7. </Text>
            <Text style={styles.text5}>
              You can use the Thermostat to increase your SPIRITUAL GROWTH!
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

export default Thermostat;
