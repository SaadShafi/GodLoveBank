import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const SpiritualGrowth = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.lightGreen }}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <TopHeader
            isBack={true}
            text={
              <View style={{ position: 'absolute' }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: colors.white,
                    fontSize: fontSizes.sm2,
                    fontFamily: fontFamily.UrbanistBold,
                    left: width * 0.18,
                    top: height * 0.01,
                    justifyContent: 'center',
                  }}
                >
                  Measure your spiritual Growth
                </Text>
              </View>
            }
          />
        </View>
        <Image source={images.spirtual} style={styles.img} />

        <View style={styles.btn}>
          <CustomButton
            btnHeight={height * 0.06}
            btnWidth={width * 0.85}
            borderRadius={20}
            backgroundColor={colors.lightmarhoon}
            text="Continue"
            textColor={colors.white}
            onPress={() => navigation.navigate('LoveDepositReps')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.purple,
    height: height * 0.1,
    width: width * 0.9999,
    alignSelf: 'center',
    borderBottomRightRadius: 34,
    borderBottomLeftRadius: 34,
  },
  topContainer: {
    position: 'absolute',
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
  },
  img: {
    alignSelf: 'center',
    top: height * 0.12,
    width: width * 0.89,
    height: height * 0.86,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.03,
  },
});

export default SpiritualGrowth;
