import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

type Props = NativeStackScreenProps<StackParamList, 'Onboarding'>;

const Register = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View>
      <View>
        <Image source={images.Logo} style={styles.logo} />
      </View>

      <View style={styles.btnMain}>
        <CustomButton
          btnHeight={height * 0.06}
          btnWidth={width * 0.9}
          borderRadius={20}
          backgroundColor={colors.marhoon}
          text="Register"
          textColor={colors.white}
          onPress={() => navigation.navigate('Registeration')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          top: height * 0.62,
        }}
      >
        <Text style={styles.member}>Already a member?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('SignInEmail')}
        >
          <Text style={styles.login}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    top: height * 0.35,
  },
  btnMain: {
    top: height * 0.65,
    alignItems: 'center',
  },
  member: {
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
    top: height * 0.05,
  },
  login: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm2,
    color: colors.marhoon,
    textDecorationLine: 'underline',
    top: height * 0.05,
  },
});

export default Register;
