import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const Profile = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [isEnabled, setIsEnabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleLogout = () => {
    setModalOpen(false);
    navigation.navigate('getStarted');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.topHeader}>
        <TopHeader text="Profile" isMenu={true} notificationSec={true}/>
      </View>

      <TouchableOpacity
        style={styles.profileContainer}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('EditProfile')}
      >
        {/* <View style={styles.profileContainer}> */}
        <Image source={images.ProfilePic} style={styles.profileImage} />
        <Text style={styles.profileText}>Harden Scott</Text>
        {/* </View> */}
      </TouchableOpacity>

      <View style={styles.optionsWrapper}>
        <Text style={styles.settings}>Profile Settings</Text>
        <TouchableOpacity
          style={styles.optionRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <Text style={styles.settings}>Accounts Settings</Text>

        <TouchableOpacity
          style={styles.optionRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('ChangePassword')}
        >
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TermsConditions')}
        >
          <Text style={styles.optionText}>Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionRow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('FAQs')}
        >
          <Text style={styles.optionText}>FAQS</Text>
        </TouchableOpacity>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Push Notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#631D15' }}
            thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#ccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.btnMain}>
        {/* <CustomButton
          btnHeight={height * 0.06}
          btnWidth={width * 0.9}
          borderRadius={20}
          backgroundColor={colors.marhoon}
          text="Logout"
          textColor={colors.white}
          onPress={() => setModalOpen(true)}
        /> */}
        <View style={{bottom: height * 0.02}}>
          <CustomButton
            btnHeight={height * 0.06}
            btnWidth={width * 0.9}
            borderRadius={20}
            backgroundColor={colors.marhoon}
            text="Delete Account"
            textColor={colors.white}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

      {/* Delete Account Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image source={images.Bin} />
            <Text style={styles.modalTitle}>Are you Sure?</Text>
            <Text style={styles.modalSubtitle}>
              Do you really want to delete these Account,
            </Text>

            <Text style={styles.modalSubtitle2}>
              you’ll permanently lose your:
            </Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButtonModal}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Register');
                }}
              >
                <Text style={styles.deleteTextModal}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={styles.modalOverlaySec}>
          <View style={styles.modalContainerSec}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalButtons}>
              <CustomButton
                text="Cancel"
                textColor={colors.black}
                btnHeight={height * 0.05}
                btnWidth={width * 0.33}
                backgroundColor={colors.gray}
                borderRadius={10}
                onPress={toggleModal}
              />
              <CustomButton
                text="Logout"
                textColor={colors.white}
                btnHeight={height * 0.05}
                btnWidth={width * 0.33}
                backgroundColor={colors.btnBlue}
                borderRadius={10}
                onPress={handleLogout}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalOverlaySec: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.61)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerSec: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    width: width * 0.8,
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.ClashDisplayRegular,
    color: colors.darkGray,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: height * 0.02,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileContainer: {
    alignItems: 'center',
    // marginTop: height * 0.02,
  },
  profileImage: {
    width: width * 0.45,
    height: height * 0.18,
    borderRadius: 45,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  profileText: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
  },
  optionsWrapper: {
    paddingHorizontal: width * 0.05,
    top: height * 0.03,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGray,
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginVertical: 6,
  },
  optionText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  topHeader: {
    backgroundColor: colors.white,
    height: height * 0.1,
  },
  btnMain: {
    top: height * 0.06,
    alignItems: 'center',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.89,
    height: height * 0.32,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  trashIcon: {
    width: width * 0.16,
    height: height * 0.09,
    marginBottom: 15,
    tintColor: colors.btnBlue,
  },
  modalTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.GilroyBold,
    color: colors.black,
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalSubtitle2: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.black,
    textAlign: 'center',
    bottom: height * 0.02,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.marhoon,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.marhoon,
  },
  deleteButtonModal: {
    flex: 1,
    backgroundColor: colors.marhoon,
    paddingVertical: 12,
    borderRadius: 25,
    marginLeft: 10,
    alignItems: 'center',
  },
  deleteTextModal: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.white,
  },
  settings: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    color: colors.black
  },
});

export default Profile;
