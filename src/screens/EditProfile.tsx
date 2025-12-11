import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomSelect from '../components/CustomSelect';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CustomTextInput from '../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';
import { setUser } from '../redux/slice/roleSlice';
import CustomProfileImgModal from '../components/CustomProfilImage';
import ImagePicker from 'react-native-image-crop-picker';

type Props = NativeStackScreenProps<StackParamList, 'CreateProfile'>;

const EditProfile = () => {
  const User = useSelector((state: RootState) => state.role.user);
  const [modalOpen, setModalOpen] = useState(false);
  const [city, setCity] = useState(User.city || "");
  const navigation = useNavigation<NavigationProp<any>>();
  const [image, setImage] = useState<string | null>(null);
  const [country, setCountry] = useState(User?.country || "");
  const [postalCode, setPostalCode] = useState(User.postalCode || "");
  const [relationshipStatus, setRelationShipStatus] = useState(User.relationshipStatus || '');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('');
  // const [relationshipStatus, setRelationShipStatus] = useState('');
  const [status, setStatus] = useState('');
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState([]);
  // const [profileImage, setProfileImage] = useState<string | null>(null);
  const BASE_URL = 'http://18.204.175.233:3001/';
  const [profileImage, setProfileImage] = useState<string | null>(
    User?.image ? `${BASE_URL}${User.image}` : null
  );
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

  const handleUpdateProfile = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('country', country);
      formData.append('city', city);
      formData.append('postalCode', postalCode);
      formData.append('relationshipStatus', relationshipStatus);
      formData.append('gender', gender);
      // if (profileImage) {
      //   const fileName = profileImage.split('/').pop() || 'photo.jpg';
      //   const fileType = fileName.split('.').pop();

      //   formData.append('image', {
      //     uri: profileImage,
      //     type: `image/${fileType}`,
      //     name: fileName,
      //   });
      // }
      if (profileImage && !profileImage.startsWith('http')) {
        const fileName = profileImage.split('/').pop() || 'photo.jpg';
        const fileType = fileName.split('.').pop();

        formData.append('image', {
          uri: profileImage,
          type: `image/${fileType}`,
          name: fileName,
        });
      }

      console.log('Updating profile with formData:', {
        country,
        city,
        postalCode,
        relationshipStatus,
        gender,
        profileImageChanged: !!(
          image && !image.startsWith('http')
        ),
      });

      const { response, error } = await apiHelper(
        'PATCH',
        'users/update',
        undefined,
        { 'Content-Type': 'multipart/form-data' },
        formData,
      );

      console.log('Response from Update Profile:', response?.data);

      if (response?.data) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Profile updated successfully!',
        });
        dispatch(setUser(response.data.data));
        console.log('Updated User dispatched:', response.data.data);
        navigation.goBack();

      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to Update Profile',
        });
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err?.message || 'Profile update failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Edit Profile" isBack={true} />
      <View style={styles.container}>
        <View style={styles.imgMain}>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              source={profileImage ? { uri: profileImage } : images.profile}
              style={styles.profileImg}
            />
          </TouchableOpacity>
          <Text style={styles.profText}> {`${User?.firstName || ""} ${User?.lastName || ""}`.trim()}</Text>
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
              preselectedValue={User.gender}
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
            onChangeText={setRelationShipStatus}
            setSelectedElement={setRelationShipStatus}
            defaultValue=""
            rightIcon={images.arrowdown}
            preselectedValue={User.relationshipStatus}
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
                value={bio}
                onChangeText={setBio}
                editable={false}
              />
            </View>
          </View>
          <CustomProfileImgModal
            modalOpen={modalOpen}
            toggleModal={toggleModal}
            camera={uploadFromCamera}
            gallery={uploadFromGallery}
          />
        </View>

        <View style={styles.btnMain}>
          <CustomButton
            text="Save & Continue"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={handleUpdateProfile}
          />
        </View>
      </View>
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
    width: width * 0.33,
    height: height * 0.15,
    resizeMode: 'cover',
    borderRadius: 65,
    overflow: 'hidden',
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
    top: height * 0.28,
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
    height: height * 0.35,
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

export default EditProfile;
