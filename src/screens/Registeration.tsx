
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomTextInput from '../components/CustomTextInput';
import images from '../assets/Images';
import { colors } from '../utilities/colors';
import { height, width } from '../utilities';
import CustomButton from '../components/CustomButton';
import { fontFamily } from '../assets/Fonts';
import { fontSizes } from '../utilities/fontsizes';

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

const Registeration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryPicker(false);
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}
    >
      <Text style={styles.countryFlag}>{item.flag}</Text>
      <Text style={styles.countryName}>{item.name}</Text>
      <Text style={styles.countryCode}>{item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={images.Logo} style={styles.logo} />
        <Text style={styles.welcomeText}>Register</Text>
        <View style={styles.inputMain}>
          <View style={styles.row}>
            <CustomTextInput
              placeholder="First Name"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.065}
              inputWidth={width * 0.4}
              borderRadius={20}
              value={firstName}
              onChangeText={setFirstName}
              keyboardType="default"
              fontFamily={fontFamily.UrbanistMedium}
              fontSize={fontSizes.sm2}
            />
            <CustomTextInput
              placeholder="Last Name"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.065}
              inputWidth={width * 0.4}
              borderRadius={20}
              value={lastName}
              onChangeText={setLastName}
              keyboardType="default"
              fontFamily={fontFamily.UrbanistMedium}
              fontSize={fontSizes.sm2}
            />
          </View>
          <CustomTextInput
            placeholder="Email Address"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.065}
            inputWidth={width * 0.85}
            borderRadius={20}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            fontFamily={fontFamily.UrbanistMedium}
            fontSize={fontSizes.sm2}
          />
          <View
            style={[
              styles.phoneRow,
              {
                borderColor:
                  isPhoneFocused || phone ? colors.brownishRed : colors.lightGray,
                backgroundColor:
                  isPhoneFocused || phone ? colors.bgBlue : colors.lightGray,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.countrySelector}
              onPress={() => setShowCountryPicker(true)}
              activeOpacity={0.7}
            >
              <Text style={styles.flagEmoji}>{selectedCountry.flag}</Text>
              <Image source={images.arrowdown} />
            </TouchableOpacity>
            <Text style={[styles.numberText, { fontFamily: fontFamily.UrbanistMedium, fontSize: fontSizes.sm2 }]}>
              {selectedCountry.code}
            </Text>
            <Image source={images.line} style={styles.lineImg} />
            <TextInput
              style={[styles.phoneInput, { fontFamily: fontFamily.UrbanistMedium, fontSize: fontSizes.sm2 }]}
              placeholder="Phone Number"
              placeholderTextColor={colors.black}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              onFocus={() => setIsPhoneFocused(true)}
              onBlur={() => setIsPhoneFocused(false)}
            />
          </View>
          <CustomTextInput
            placeholder="Password"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.065}
            inputWidth={width * 0.85}
            borderRadius={20}
            // isPassword={true}
            value={password}
            onChangeText={setPassword}
            fontFamily={fontFamily.UrbanistMedium}
            fontSize={fontSizes.sm2}
          />
          <CustomTextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.065}
            inputWidth={width * 0.85}
            borderRadius={20}
            // isPassword={true}
            value={confirmPassword}
            onChangeText={setconfirmPassword}
            fontFamily={fontFamily.UrbanistMedium}
            fontSize={fontSizes.sm2}
          />
        </View>

        {/* Country Picker Modal */}
        <Modal
          visible={showCountryPicker}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowCountryPicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Country</Text>
                <TouchableOpacity
                  onPress={() => setShowCountryPicker(false)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeText}>✕</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={countryData}
                renderItem={renderCountryItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.checkBoxMain}>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={24}
              fillColor={colors.marhoon}
              unfillColor={colors.white}
              isChecked={agree}
              disableBuiltInState
              iconStyle={{
                borderColor: colors.bgBlue,
                borderWidth: 2,
                borderRadius: 8,
              }}
              innerIconStyle={{
                borderRadius: 8,
              }}
              onPress={() => setAgree(!agree)}
            />
          </View>
          <View style={styles.checkBoxTextMain}>
            <View style={{ flexDirection: 'row', gap: height * 0.01 }}>
              <Text style={[styles.signIn, { fontFamily: fontFamily.UrbanistMedium, fontSize: fontSizes.sm }]}>
                Agree to God Love Bank
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
              //   onPress={() => navigation.navigate('TermsCondition')}
              >
                <Text style={styles.text}>
                  Terms & Conditions &
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', gap: height * 0.01 }}>
              <TouchableOpacity
                activeOpacity={0.7}
              //   onPress={() => navigation.navigate('PrivacyPolicy')}
              >
                <Text style={styles.text}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.btnMain}>
          <CustomButton
            btnHeight={height * 0.06}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            text="Register"
            textColor={colors.white}
          />
        </View>
        <View style={styles.bottomMain}>
          <Text style={[styles.memberText, { fontFamily: fontFamily.UrbanistMedium, fontSize: fontSizes.sm }]}>
            Already a member?
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    top: height * 0.06,
  },
  inputMain: {
    marginTop: height * 0.12,
    gap: height * 0.01,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.84,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    width: width * 0.85,
    height: height * 0.065,
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
  phoneInput: {
    flex: 1,
    fontSize: fontSizes.sm,
    color: colors.black,
  },
  numberText: {
    fontSize: fontSizes.sm,
    color: colors.black,
    left: width * 0.02,
  },
  lineImg: {
    height: height * 0.024,
    width: width * 0.01,
    resizeMode: 'contain',
    marginLeft: width * 0.04,
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
  checkBoxMain: {
    flexDirection: 'row',
    width: width * 0.85,
    top: height * 0.028,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkBoxTextMain: {
    // gap: width * 0.01,
  },
  checkboxText: {
    fontSize: fontSizes.xsm,
    color: colors.black,
    textDecorationLine: 'none',
  },
  text: {
    fontFamily: fontFamily.UrbanistBold,
    color: colors.black,
    fontSize: fontSizes.sm,
  },
  signIn: {
    fontFamily: fontFamily.UrbanistMedium,
    color: colors.black,
  },
  btnMain: {
    alignItems: 'center',
    top: height * 0.07,
  },
  bottomMain: {
    top: height * 0.1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: width * 0.009,
  },
  memberText: {
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  loginText: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm2,
    color: colors.marhoon,
  },
});

export default Registeration;