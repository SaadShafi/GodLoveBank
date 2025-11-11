import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader isMenu={true} notification={true} isProfile={true} />
      <View>
        <Text style={styles.welcome}>Welcome jaydon</Text>

        <Text style={styles.values}>Core Values</Text>
        <Image source={images.background} style={styles.img} />
        <View style={styles.container}>
          <Image source={images.Heart} style={styles.heart} />
          <View style={{ gap: height * 0.005 }}>
            <Text style={styles.measure}>Measure your</Text>
            <Text style={styles.measure}>spiritual Growth</Text>
          </View>
          <View style={styles.btn}>
            <CustomButton
              text="Start"
              textColor={colors.white}
              backgroundColor={colors.marhoon}
              btnHeight={height * 0.05}
              btnWidth={width * 0.35}
              borderRadius={30}
              onPress={() => navigation.navigate('SpiritualGrowth')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.xl,
    color: colors.black,
    left: width * 0.05,
    top: height * 0.02,
  },
  values: {
    fontFamily: fontFamily.UrbanistExtraBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    top: height * 0.05,
    left: width * 0.05,
  },
  img: {
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
  },
  container: {
    backgroundColor: colors.white,
    width: width * 0.9,
    height: height * 0.18,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignSelf: 'center',
    top: height * 0.07,
    justifyContent: 'center',
  },
  heart: {
    alignSelf: 'center',
    left: width * 0.27,
    top: height * 0.05,
  },
  measure: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    left: width * 0.05,
    bottom: height * 0.06,
  },
  btn: {
    bottom: height * 0.04,
    left: width * 0.05,
  },
});

export default Home;
