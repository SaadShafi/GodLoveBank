import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const CustomerSupport = () => {
    const navigation = useNavigation<NavigationProp<any>>();
  
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Customer Support" isBack={true} />

      <Image source={images.support} style={styles.img} />
      <Text style={styles.text}>How we can help you?</Text>

      <View style={{ gap: height * 0.005 }}>
        <Text style={styles.subText}>
          Lorem Ipsum is simply dummy text of the
        </Text>
        <Text style={styles.subText}>
          printing and typesetting industry. Lorem Ipsum
        </Text>
        <Text style={styles.subText}>
          has been the industry's standard dummy text
        </Text>
        <Text style={styles.subText}>ever since the 1500s,</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: width * 0.06 }}>
        <TouchableOpacity style={styles.emailContainer} activeOpacity={0.7}>
          <Image source={images.email} style={styles.emailImg} />
          <Text style={styles.email}>Email Us</Text>
        </TouchableOpacity>

           
        <TouchableOpacity style={styles.emailContainer} activeOpacity={0.7}  onPress={() => navigation.navigate('Chat')}>
          <Image source={images.chat} style={styles.emailImg} />
          <Text style={styles.email}>Chat with Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    top: height * 0.05,
  },
  emailImg: {
    alignSelf: 'center',
    top: height * 0.035,
  },
  text: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    alignSelf: 'center',
    top: height * 0.08,
  },
  subText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm2,
    color: colors.black,
    alignSelf: 'center',
    top: height * 0.1,
  },
  emailContainer: {
    backgroundColor: colors.lightGray,
    height: height * 0.18,
    width: width * 0.4,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    top: height * 0.16,
    left: width * 0.06,
  },
  email: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    alignSelf: 'center',
    top: height * 0.07,
  },
});

export default CustomerSupport;


