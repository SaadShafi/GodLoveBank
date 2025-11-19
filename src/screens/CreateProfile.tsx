import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomSelect from '../components/CustomSelect';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

type Props = NativeStackScreenProps<StackParamList, 'CreateProfile'>;

const CreateProfile = () => {
  const [city, setCity] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const countryOption = [
    { name: 'Country', id: '' },
    { name: 'United State', id: 'united state' },
    { name: 'United Kingdom', id: 'united kingdom' },
    { name: 'Other', id: 'other' },
  ];
  const cityOptions = [
    { name: 'City', id: '' },
    { name: 'New York', id: 'new york' },
    { name: 'Texas', id: 'texas' },
    { name: 'Los Angles', id: 'los angles' },
  ];
  const postalOptions = [
    { name: 'Postal Code', id: '' },
    { name: '1234', id: '1234' },
    { name: '4312', id: '4312' },
    { name: '4533', id: '4533' },
    { name: 'Other', id: 'other' },
  ];
  const genderOptions = [
    { name: 'Gender', id: '' },
    { name: 'Male', id: 'male' },
    { name: 'Female', id: 'female' },
    { name: 'Other', id: 'other' },
  ];
  const relationshipOptions = [
    { name: 'Relationship Status', id: '' },
    { name: 'Single', id: 'single' },
    { name: 'Married', id: 'married' },
  ];

  const handleAddTag = () => {
    if (bio.trim() !== '') {
      setTags([...tags, bio.trim()]);
      setBio('');
    }
  };

  const handleRemoveTag = index => {
    const updated = [...tags];
    updated.splice(index, 1);
    setTags(updated);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Profile Setup" isBack={true} />
      <View style={styles.container}>
        <View style={styles.imgMain}>
          <Image source={images.profile} style={styles.profileImg} />
          <Text style={styles.profText}>Harden Scott</Text>
        </View>

        <View style={styles.inputMain}>
          <View style={styles.row}>
            <CustomSelect
              inputWidth={width * 0.41}
              inputHeight={height * 0.06}
              selectElements={countryOption}
              borderColor={colors.lightGray}
              borderWidth={1}
              inputColor={colors.lightGray}
              borderRadius={20}
              onChangeText={setCountry}
              setSelectedElement={setCountry}
              defaultValue=""
              rightIcon={images.arrowdown}
            />
            <CustomSelect
              inputWidth={width * 0.41}
              inputHeight={height * 0.06}
              selectElements={cityOptions}
              borderColor={colors.lightGray}
              borderWidth={1}
              inputColor={colors.lightGray}
              borderRadius={20}
              onChangeText={setCity}
              setSelectedElement={setCity}
              defaultValue=""
              rightIcon={images.arrowdown}
            />
          </View>

          <View style={styles.row}>
            <CustomSelect
              inputWidth={width * 0.41}
              inputHeight={height * 0.06}
              selectElements={postalOptions}
              borderColor={colors.lightGray}
              borderWidth={1}
              inputColor={colors.lightGray}
              borderRadius={20}
              onChangeText={setPostalCode}
              setSelectedElement={setPostalCode}
              defaultValue=""
              rightIcon={images.arrowdown}
            />
            <CustomSelect
              inputWidth={width * 0.41}
              inputHeight={height * 0.06}
              selectElements={genderOptions}
              borderColor={colors.lightGray}
              borderWidth={1}
              inputColor={colors.lightGray}
              borderRadius={20}
              onChangeText={setGender}
              setSelectedElement={setGender}
              defaultValue=""
              rightIcon={images.arrowdown}
            />
          </View>

          <CustomSelect
            inputWidth={width * 0.85}
            inputHeight={height * 0.06}
            selectElements={relationshipOptions}
            borderColor={colors.lightGray}
            borderWidth={1}
            inputColor={colors.lightGray}
            borderRadius={20}
            onChangeText={setStatus}
            setSelectedElement={setStatus}
            defaultValue=""
            rightIcon={images.arrowdown}
          />

          {/* ✨ Updated Field Section */}
          <View style={styles.newHomeBaseWrapper}>
            <View style={styles.newHomeBaseCard}>
              <Text style={styles.newHomeBaseLabel}>
                Your New Self Love HomeBase
              </Text>
              <TextInput
                style={styles.newHomeBaseInput}
                placeholder="Rejection"
                placeholderTextColor={colors.black}
                value={bio}
                onChangeText={setBio}
                editable={false}
              />
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
            onPress={() => setIsModalVisible(true)} // 👈 Show modal
          />
        </View>
      </View>

      {/* ✅ Success Modal - placed outside container */}
      {isModalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.iconCircle}>
              <Image source={images.success} />
            </View>
            <Text style={styles.modalTitle}>Register Success</Text>
            <View style={{ gap: height * 0.005 }}>
              <Text style={styles.modalMessage}>
                Congratulation! Your Account Is Created.
              </Text>
              <Text style={styles.modalMessage}>
                Now You Can Easily Use This Application
              </Text>
            </View>
            <View style={{ top: height * 0.02 }}>
              <CustomButton
                text="Let's Get Started!"
                textColor={colors.white}
                backgroundColor={colors.marhoon}
                btnHeight={height * 0.06}
                btnWidth={width * 0.65}
                borderRadius={30}
                // onPress={() => setIsModalVisible(false)}
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    top: height * 0.015,
    flex: 1,
    gap: height * 0.01,
  },
  imgMain: {
    top: height * 0.03,
    alignItems: 'center',
  },
  profileImg: {
    width: width * 0.7,
    height: height * 0.15,
    resizeMode: 'contain',
  },
  profText: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.md,
    color: colors.black,
    top: height * 0.01,
  },
  inputMain: {
    alignItems: 'center',
    top: height * 0.07,
    gap: height * 0.01,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
  },
  btnMain: {
    top: height * 0.2,
  },
  newHomeBaseWrapper: {
    width: width * 0.85,
    alignSelf: 'center',
    marginVertical: height * 0.01,
    position: 'relative',
  },
  newHomeBaseCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
  },
  newHomeBaseLabel: {
    color: colors.marhoon,
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm,
    marginBottom: height * 0.015,
  },
  newHomeBaseInput: {
    color: colors.black,
    fontFamily: fontFamily.UrbanistMedium,
    fontSize: fontSizes.sm,
    paddingVertical: 4,
  },

  /** ✅ Fullscreen Modal Styles **/
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalContainer: {
    width: width * 0.8,
    height: height * 0.38,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EAF9E8',
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.02,
    marginBottom: height * 0.08,
  },
  modalTitle: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    bottom: height * 0.02,
  },
  modalMessage: {
    textAlign: 'center',
    color: colors.Gray,
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
  },
});

export default CreateProfile;
