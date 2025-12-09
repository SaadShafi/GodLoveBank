import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';

const SetNewPassword = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const route = useRoute();
  console.log("Route in the Set New Passowrd Screen",route)
  const userID = route.params?.userId
  console.log("User Id from the Params", userID)
  const OTP = route.params?.otp
  console.log("Otp from the params", OTP)


  const setPass = async () => {
     setLoading(true);
  
      try {
        const body = {
          userId: userID,
          otp: OTP,
          newPassword: confirmPassword
        }
        const { response, error } = await apiHelper("POST", "auth/reset-password", {},{}, body);
        console.log("Change Password Response:", response);
        if (response) {
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Password Changed Successfully',
          });
          navigation.navigate("SignInEmail");
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to change password',
        });
      } finally {
        setLoading(false);
      }
  }


  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Set New Password" isBack={true} />
      <View style={styles.container}>
        <View style={styles.textMain}>
          {/* <Text style={styles.text}>Please Enter your New Password</Text> */}
        </View>
        <View style={styles.inputMain}>
          <CustomTextInput
            placeholder="Password"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.06}
            inputWidth={width * 0.85}
            borderRadius={14}
            isPassword={true}
            value={password}
            onChangeText={setPassword}
          />
          <CustomTextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.06}
            inputWidth={width * 0.85}
            borderRadius={14}
            isPassword={true}
            value={confirmPassword}
            onChangeText={setconfirmPassword}
          />
        </View>
        <View style={styles.infoMain}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: height * 0.01,
              right: width * 0.03,
            }}
          >
            <Text style={styles.infoText}>.</Text>
            <Text style={styles.infoTextSec}>
              At least 12 characters long but 14 or more is better.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: height * 0.01,
              right: width * 0.03,
            }}
          >
            <Text style={[styles.infoText, { bottom: height * 0.017 }]}>.</Text>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.infoTextSec}>
                A combination of uppercase letters, lowercase letters,
              </Text>
              <Text style={styles.infoTextSec}>numbers, and symbols.</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnMain}>
          <CustomButton
            text="Continue"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            // onPress={() => navigation.navigate('SignInEmail')}
            onPress={setPass}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: height * 0.05,
  },
  textMain: {
    alignItems: 'center',
    top: height * 0.025,
  },
  text: {
    fontFamily: fontFamily.RubikLight,
    fontSize: fontSizes.sm,
    color: colors.black,
  },
  inputMain: {
    alignItems: 'center',
    gap: height * 0.02,
  },
  infoMain: {
    top: height * 0.02,
    gap: height * 0.02,
    left: width * 0.02,
  },
  infoText: {
    fontFamily: fontFamily.RubikBold,
    fontSize: fontSizes.md,
    color: colors.black,
    bottom: height * 0.004,
  },
  infoTextSec: {
    fontFamily: fontFamily.UrbanistRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
  },
  btnMain: {
    top: height * 0.07,
  },
});

export default SetNewPassword;
