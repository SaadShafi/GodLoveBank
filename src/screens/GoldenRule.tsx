import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const GoldenRule = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Background Image */}
      <Image
        source={images.rule}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Header stays fixed on top */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>The Golden Rule!</Text>}
        />
      </View>
      <View style={styles.btn}>
        <CustomButton
          text="Continue"
          textColor={colors.white}
          backgroundColor={colors.marhoon}
          btnHeight={height * 0.065}
          btnWidth={width * 0.85}
          borderRadius={20}
          onPress={() => navigation.navigate('GoldenRuleCommunication')}
        />
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
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  headerText: {
    color: colors.white,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.UrbanistBold,
    alignSelf: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 0,
  },
  btn: {
    position: 'absolute',
    bottom: height * 0.05, // Position from bottom
    alignSelf: 'center', // Center horizontally
    zIndex: 2, // Ensure button is above the image
  },
});

export default GoldenRule;
