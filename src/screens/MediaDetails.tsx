// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { Image, StyleSheet, View } from 'react-native';
// import images from '../assets/Images';
// import { StackParamList } from '../navigation/MainStack';
// import { height, width } from '../utilities';

// type Props = NativeStackScreenProps<StackParamList, 'Onboarding'>;

// const MediaDetails = () => {
//   const navigation = useNavigation<NavigationProp<any>>();

//   return (
//     <View>
//       <View>
//         <Image source={images.media} style={styles.logo} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   logo: {
//     alignSelf: 'center',
//     width: width * 0.999,
//     height: height * 0.35,
//   },
// });

// export default MediaDetails;

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const MediaDetails = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View
        style={{ position: 'absolute', left: width * 0.03, top: height * 0.03 }}
      >
        <TopHeader isBack={true} favIcon={true} />
      </View>

      <View>
        <Image source={images.media} style={styles.logo} />
      </View>

      <View style={styles.therapyContainer}>
        <Text style={styles.text}>Interpersonal therapy</Text>
      </View>

      <Text style={styles.text1}>
        Lorem Ipsum dolor sit Amet Consectetur. Dictum Sapien in Phasellus
        Rhoncus Commodo.
      </Text>

      <Text style={styles.desc}>Description</Text>
      <Text style={styles.description}>
        Dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown..
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: width * 0.999,
    height: height * 0.35,
  },
  therapyContainer: {
    backgroundColor: colors.blue,
    height: height * 0.03,
    width: width * 0.4,
    borderRadius: 8,
    top: height * 0.02,
    justifyContent: 'center',
    left: width * 0.06,
  },
  text: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    alignSelf: 'center',
    color: colors.white,
  },
  text1: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    paddingHorizontal: width * 0.05,
    top: height * 0.04,
  },
  desc: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
    paddingHorizontal: width * 0.05,
    top: height * 0.08,
  },
  description: {
    fontFamily: fontFamily.GilroyMedium,
    lineHeight: fontSizes.sm2 * 1.4,
    color: colors.black,
    paddingHorizontal: width * 0.05,
    top: height * 0.09,
    textAlign: 'justify',
  },
});

export default MediaDetails;
