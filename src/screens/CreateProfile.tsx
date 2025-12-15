import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomSelect from '../components/CustomSelect';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import CustomTextInput from '../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../redux/slice/roleSlice';
import CustomProfileImgModal from '../components/CustomProfilImage';
import ImagePicker from 'react-native-image-crop-picker';
import { RootState } from '../redux/store';
import { State } from 'react-native-gesture-handler';
// import ImagePicker from 'react-native-image-crop-picker';

type Props = NativeStackScreenProps<StackParamList, 'CreateProfile'>;

const CreateProfile = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  // const [image, setImage] = useState<string | null>(null);
  // const [firstname, setFirstName] = useState('');
  // const [lastname, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const [countryName, setCountryName] = useState('');
  // const [cityName, setCityName] = useState('');
  // const [status, setStatus] = useState('');
  const [bio, setBio] = useState('');
  // const [tags, setTags] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const User = useSelector((state: RootState) => state.role.user)
  // console.log("User in the create profile!", User)
  // console.log("FirstName",User?.firstName)
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const route = useRoute()
  // console.log("Params in the create Profile!", route?.params)
  const homeBase = route.params?.baseAssignments?.homeBase?.category
  const capitalizedHomeBase = homeBase.charAt(0).toUpperCase() + homeBase.slice(1);
  // console.log("homeBase!", homeBase)
  const fullName = useSelector((state: RootState) => state.role.fullName)
  console.log("FullName in create Profile", fullName)

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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const uploadFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfileImage(image.path);
      toggleModal();
    });
  };

  const uploadFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfileImage(image.path);
      toggleModal();
    });
  };

  const handleCreateProfile = async () => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append('country', country);
      formData.append('city', city);
      formData.append('postalCode', postalCode);
      formData.append('relationshipStatus', relationshipStatus);
      formData.append('gender', gender);
      if (profileImage) {
        const fileName = profileImage.split('/').pop() || 'photo.jpg';
        const fileType = fileName.split('.').pop();

        formData.append('image', {
          uri: profileImage,
          type: `image/${fileType}`,
          name: fileName,
        });
      }

      // console.log("FormData sent in the API body!", formData.getParts?.() || formData);

      const { response, error } = await apiHelper(
        'PATCH',
        'users/update',
        undefined,                         
        { 'Content-Type': 'multipart/form-data' }, 
        formData  
      );
      console.log('Response from Create Profile:', response?.data);

      if (response) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: response.data.message,
        });
        const user = response.data.data;
        console.log("Fallback User response in the Create Profile screen!",user)
        dispatch(setUser(user));
        console.log('User dispatched from the Create Profile Screen!', response.data);
        setIsModalVisible(true);
      }
    } catch (err) {
      console.log('Create profile error:', err);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Profile update failed',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Profile Setup" isBack={true} />
      <View style={styles.container}>
        <View style={styles.imgMain}>
          <TouchableOpacity onPress={toggleModal} activeOpacity={0.7}>
            <Image 
              // source={images.profile} 
              source={profileImage ? { uri: profileImage } : images.profile} 
              style={styles.profileImg} 
            />
          </TouchableOpacity>
          <Text style={styles.profText}>
            {fullName || "Name"}
            {/* Name */}
            </Text>
        </View>

        <View style={styles.inputMain}>
          <View style={styles.row}>
            <CustomTextInput
              placeholder="Country"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.06}
              inputWidth={width * 0.41}
              borderRadius={20}
              value={country}
              onChangeText={setCountry}
              keyboardType="default"
              fontFamily={fontFamily.UrbanistMedium}
              fontSize={fontSizes.sm2}
            />
            <CustomTextInput
              placeholder="City"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.06}
              inputWidth={width * 0.41}
              borderRadius={20}
              value={city}
              onChangeText={setCity}
              keyboardType="default"
              fontFamily={fontFamily.UrbanistMedium}
              fontSize={fontSizes.sm2}
            />
          </View>

          <View style={styles.row}>
            <CustomTextInput
              placeholder="Postal Code"
              placeholderTextColor={colors.black}
              inputHeight={height * 0.06}
              inputWidth={width * 0.41}
              borderRadius={20}
              value={postalCode}
              onChangeText={setPostalCode}
              keyboardType="default"
              fontFamily={fontFamily.UrbanistMedium}
              fontSize={fontSizes.sm2}
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
            onChangeText={setRelationshipStatus}
            setSelectedElement={setRelationshipStatus}
            defaultValue=""
            rightIcon={images.arrowdown}
          />

          <View style={styles.newHomeBaseWrapper}>
            <View style={styles.newHomeBaseCard}>
              <Text style={styles.newHomeBaseLabel}>
                Your New Self Love HomeBase
              </Text>
              <TextInput
                style={styles.newHomeBaseInput}
                placeholder="Rejection"
                placeholderTextColor={colors.black}
                value={capitalizedHomeBase}
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
            onPress={handleCreateProfile}
          />
        </View>
        <CustomProfileImgModal
          modalOpen={modalOpen}
          toggleModal={toggleModal}
          camera={uploadFromCamera}
          gallery={uploadFromGallery}
        />
        {loading && (
          <View style={styles.loaderOverlay}>
            <ActivityIndicator size="large" color={colors.brown} />
          </View>
        )}
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
      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={colors.brown} />
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
    width: width * 0.35,
    height: height * 0.16,
    resizeMode: 'cover',
    borderRadius: 1000
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

export default CreateProfile;
