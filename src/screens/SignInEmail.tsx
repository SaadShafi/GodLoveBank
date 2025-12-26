import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddressData, setFullName, setLogin, setToken, setUser, setUserEmail } from '../redux/slice/roleSlice';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';
import { RootState } from '../redux/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';


type Props = NativeStackScreenProps<StackParamList, 'Onboarding'>;

const SignInEmail = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const selectedRole = useSelector(
    (state: RootState) => state.role.selectedRole,
  );
  const User = useSelector((state: RootState) => state.role.user);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fcmToken, setFcmToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1034653006135-0gerpm0bvooml0p25vjm9pfikjbnuupb.apps.googleusercontent.com',
      offlineAccess: true,
    });

  }, []);



  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Attempt silent sign-in first
      let userInfo;
      try {
        userInfo = await GoogleSignin.signInSilently();
      } catch {
        // If silent sign-in fails, use normal sign-in
        userInfo = await GoogleSignin.signIn();
      }

      const idToken = userInfo.idToken;
      if (!idToken) throw new Error('No ID token found');

      console.log('Google idToken:', idToken);

      // Send token to backend
      const response = await fetch('auth/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      const data = await response.json();
      console.log('Backend response:', data);

    } catch (error: any) {
      console.log('Google Sign-In error:', error);
      Toast.show({
        type: 'error',
        text1: 'Google Sign-In Failed',
        text2: error.message,
      });
    }
  };




  const handleSubmit = async () => {
    setLoading(true);

    try {
      const body = {
        email: email,
        password: password,
        fcmToken: fcmToken,
      };
      const { response, error } = await apiHelper(
        'POST',
        'auth/login',
        {},
        {},
        body,
      );
      // console.log('Response from SignIn Api: ', response?.data);

      if (response?.data) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response.data.message,
        });

        const token = response.data.data.accessToken;
        // console.log("AccessToken CHECK!!", token);
        dispatch(setLogin());
        dispatch(setToken(token))
        dispatch(setUser(response.data.data.user))
        dispatch(removeAddressData())

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'AppDrawer' }],
          }),
        );
      }
      else {
        // console.log("Error Message", error)
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Please Enter a valid Email or Password"
        })
      }
    } catch (error) {
      console.log("Error", error)
      Toast.show({
        type: 'error',
        text1: 'Success',
        text2: error?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image source={images.Logo} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome back</Text>
          <View style={styles.inputMain}>
            <CustomTextInput
              placeholder="Email Address"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.06}
              inputWidth={width * 0.85}
              backgroundColor={colors.lightGray}
              borderRadius={20}
              onChangeText={setEmail}
              keyboardType='email-address'
            />
            <CustomTextInput
              placeholder="Password"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.06}
              inputWidth={width * 0.85}
              backgroundColor={colors.lightGray}
              borderRadius={20}
              isPassword={true}
              value={password}
              onChangeText={setPassword}
              keyboardType='default'
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.forgotPassMain}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', top: height * 0.04 }}>
              <CustomButton
                btnHeight={height * 0.06}
                btnWidth={width * 0.85}
                text="Login"
                backgroundColor={colors.marhoon}
                textColor={colors.white}
                borderRadius={20}
                // onPress={() => navigation.navigate('Home')}
                onPress={handleSubmit}
              />
            </View>
          </View>
          <View style={styles.belowMain}>
            <Image source={images.continue} style={styles.continueImg} />
            <View style={styles.socialMain}>
              {/* <Image source={images.googleIcon} style={styles.scialImg} /> */}
              <TouchableOpacity activeOpacity={0.7} onPress={handleGoogleSignIn}>
                <Image source={images.googleIcon} style={styles.scialImg} />
              </TouchableOpacity>
              <Image source={images.appleIcon} style={styles.scialImg} />
            </View>
            <View style={styles.memberMain}>
              <Text style={styles.memberText}>Not a member?</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Registeration')}
              >
                <Text style={styles.signUpText}>Sign up now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {loading && (
          <View style={styles.loaderOverlay}>
            <ActivityIndicator size="large" color={colors.brown} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: width * 0.35,
    height: height * 0.2,
    resizeMode: 'contain',
    top: height * 0.05,
  },
  welcomeText: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    top: height * 0.08,
  },
  inputMain: {
    marginTop: height * 0.12,
    gap: height * 0.01,
    borderRadius: 25,
  },
  forgotPassMain: {
    alignSelf: 'flex-end',
    width: width * 0.29,
    cursor: 'pointer',
  },
  forgotPass: {
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
    top: height * 0.01,
  },
  belowMain: {
    marginTop: height * 0.03,
  },
  continueImg: {
    width: width * 0.8,
    height: height * 0.15,
    resizeMode: 'contain',
  },
  socialMain: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  scialImg: {
    width: width * 0.25,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  memberMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: height * 0.05,
    gap: width * 0.01,
  },
  memberText: {
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  signUpText: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm2,
    color: colors.marhoon,
  },
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});

export default SignInEmail;
