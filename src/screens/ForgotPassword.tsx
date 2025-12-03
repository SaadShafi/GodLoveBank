import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';
import CustomTextInput from '../components/CustomTextInput';

type Props = NativeStackScreenProps<StackParamList, 'OtpVerification'>;

const countryData = [
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
];

const ForgotPassword = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [email, setEmail] = useState('');
  const  [loading, setLoading] = useState(false)


//  const handleForgeotPass = async () => {
//     setLoading(true);

//     try {
//       const body = {
//         email: email,
//       };
//       const { response, error } = await apiHelper(
//         'POST',
//         'auth/forgot-password',
//         {},
//         body,
//       );
//       console.log('Forgot Password Response:', response);
//       console.log('Forgot Password body:', body);

//       if (response) {
//         Toast.show({
//           type: 'success',
//           text1: 'Success',
//           text2: 'Password Reset Successfully',
//         });
//         navigation.navigate('OtpVerification', { from: 'forget', email });

//       }
//     } catch (error) {
//       Toast.show({
//         type: 'error',
//         text1: 'Error',
//         text2: 'Something went wrong. Please try again later.',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };


const handleForgeotPass = async () => {
  setLoading(true);

  const body = { email };

  const { response, error } = await apiHelper(
    'POST',
    'auth/forgot-password',
    {},
    body,
  );

  console.log('Forgot Password Response:', response);
  console.log('Forgot Password body:', body);

  if (response) {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: response.data?.message || 'Password Reset Successfully',
    });

    navigation.navigate('OtpVerification', { from: 'forget', email });
  } 
  else {
    // ⭐⭐⭐ Show proper backend error ⭐⭐⭐
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error?.message || 'Something went wrong!',
    });
  }

  setLoading(false);
};




  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader isBack={true} text="Forgot Password" />
      <View style={styles.container}>
        <View style={styles.textMain}>
          <Text style={styles.text}>
            In order to reset your password you need to enter
          </Text>
          <Text style={styles.text}>your registered email.</Text>
        </View>

        <View style={{top: height * 0.09}}>
           <CustomTextInput
              placeholder="Enter Your Email Address"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.065}
              inputWidth={width * 0.89}
              borderRadius={20}
              value={email}
              onChangeText={setEmail}
              keyboardType="default"
              fontFamily={fontFamily.UrbanistMedium}
              fontSize={fontSizes.sm2}
            />
        </View>

        <View style={styles.btnMain}>
         <CustomButton
            text="Continue"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={handleForgeotPass}   // <-- FIXED
          />

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textMain: {
    alignItems: 'center',
    top: height * 0.04,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width * 0.02,
  },
  flagEmoji: {
    fontSize: fontSizes.md,
    marginRight: width * 0.01,
  },
  text: {
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  inputMain: {
    marginTop: height * 0.08,
    gap: height * 0.01,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20, // ✅ Updated from 30 → 20
    paddingHorizontal: 12,
    width: width * 0.85,
    height: height * 0.06,
  },
  phoneInput: {
    flex: 1,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  numberText: {
    fontFamily: fontFamily.RubikMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
  },
  btnMain: {
    top: height * 0.65,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  countryFlag: {
    fontSize: fontSizes.md,
    width: 30,
  },
  countryName: {
    flex: 1,
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
    marginLeft: 10,
  },
  countryCode: {
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm,
    color: colors.gray,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.85,
    height: height * 0.6,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingBottom: 10,
  },
  modalTitle: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.md,
    color: colors.black,
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    fontSize: fontSizes.lg,
    color: colors.black,
  },
});

export default ForgotPassword;
