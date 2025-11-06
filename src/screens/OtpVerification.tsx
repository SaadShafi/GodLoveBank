import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const OtpVerification = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<TextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    if (text === '') {
      // allow clearing input
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      return;
    }

    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(['', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  useEffect(() => {
    console.log('OTP Screen Params:', route.params);
  }, [route.params]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="OTP Verification" isBack={true} />

      {/* Info text */}
      <View style={{ top: height * 0.04 }}>
        <Text style={styles.otp}>
          Please enter 4-digit code we have sent you
        </Text>
        <Text style={styles.otp}>on your Phone Number</Text>
      </View>

      {/* OTP input boxes */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref!)}
            style={[
              styles.otpBox,
              {
                borderColor:
                  focusedIndex === index ? colors.marhoon : colors.lightGray,
                backgroundColor:
                  focusedIndex === index ? colors.lightGray : colors.lightGray,
              },
            ]}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            onKeyPress={e => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          />
        ))}
      </View>

      {/* Resend */}
      <TouchableOpacity
        onPress={handleResend}
        disabled={timer > 0}
        style={styles.resendButton}
      >
        <Text style={styles.resendText}>
          {timer > 0
            ? `Resend in 00:${timer < 10 ? `0${timer}` : timer}`
            : 'Resend Code'}
        </Text>
      </TouchableOpacity>

      <View style={styles.btnMain}>
        <CustomButton
          btnHeight={height * 0.06}
          btnWidth={width * 0.85}
          borderRadius={20}
          backgroundColor={colors.marhoon}
          text="Continue"
          textColor={colors.white}
          onPress={() =>
            route.params?.from === 'register'
              ? navigation.navigate('Questionnaire')
              : navigation.navigate('SetNewPassword')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otp: {
    fontFamily: fontFamily.UrbanistRegular,
    fontSize: fontSizes.sm2,
    alignSelf: 'center',
    color: colors.black,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.05,
  },
  otpBox: {
    width: width * 0.16,
    height: height * 0.07,
    borderWidth: 1,
    backgroundColor: colors.gray,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.Rubikregular,
    marginHorizontal: 8,
    color: colors.black,
    top: height * 0.15,
  },

  resendButton: {
    top: height * 0.2,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.marhoon,
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 14,
  },
  resendText: {
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm2,
    color: colors.marhoon,
  },
  btnMain: {
    top: height * 0.55,
    alignItems: 'center',
  },
});

export default OtpVerification;
