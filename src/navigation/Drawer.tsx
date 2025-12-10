import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  CommonActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import { logout } from '../redux/slice/authSlice';
import { removeUser } from '../redux/slice/roleSlice';
import { RootState } from '../redux/store';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import MainStack from './MainStack';
import BottomTabs from './BottomTabs';
import { hideLoader } from '../redux/slice/screenSlice';
import Toast from 'react-native-toast-message';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const User = useSelector((state: RootState) => state.role.user);
  console.log("User ID from redux in the Drawer!", User);


  return (
    <Drawer.Navigator
      key={User?.id}  // forces re-render when user changes
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'rgba(0,0,0,0.5)',
        drawerStyle: {
          flex: 1,
          width: '70%',
          backgroundColor: colors.transparent,
        },
      }}
    >
      <Drawer.Screen
        name="MainApp"
        component={BottomTabs}
        options={{ swipeEnabled: false }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const User = useSelector((state: RootState) => state.role.user);
  console.log("User from redux in the Drawer!", User);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleLogout = () => {
    dispatch(removeUser());
    dispatch(logout());

    setModalOpen(false);

    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Profile Logged out Successfully',
    });

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'SignInEmail' }],
      }),
    );

    console.log('User logged out successfully');
  };

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
    props.navigation.closeDrawer();
  };

  const UserDrawerList = [
    {
      title: 'Home',
      screen: 'Home',
    },
    {
      title: 'My Orders',
      screen: 'MyOrders',
    },
    {
      title: 'Favourites',
      screen: 'Favourites',
    },
    {
      title: 'Get Help',
      screen: 'CustomerSupport',
    },
    {
      title: 'Payment Methods',
      screen: 'PaymentMethod',
    },
  ];

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const BASE_URL = 'http://18.204.175.233:3001/';

  const getFullImageUrl = (path: string) => {
    if (!path) return null;
    return `${BASE_URL}${path}`;
  };

  return (
    <View style={styles.gradientContainer}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientMiddle}>
        <Image source={images.drawerBg} style={styles.drawerBgImg} />
      </View>
      <SafeAreaView style={styles.container}>

        <View style={styles.profileSection}>
          <TouchableOpacity
            style={{ right: width * 0.04 }}
            activeOpacity={0.7}
          >
            <Image
              // source={images.drawerProf}
               source={
                  User?.image
                    ? { uri: getFullImageUrl(User.image) }
                    : images.drawerProf
                }
              style={styles.profileImage}
            />
          </TouchableOpacity>

          <View style={styles.profileTextContainer}>
            {/* <Text style={styles.profileName}>{User?.full_name || "Name"}</Text>
            <Text style={styles.profileEmail}>{truncateText(User?.email || "info@yourmail.com", 15)}</Text> */}
            <Text style={styles.profileName}>
              {User?.firstName && User?.lastName
                ? `${User.firstName} ${User.lastName}`
                : "Name"}
            </Text>
            <Text style={styles.profileEmail}>
              {truncateText(User?.email || "info@yourmail.com", 25)}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          props.navigation.closeDrawer();
        }}>
          <Image source={images.crossIcon} style={styles.closeButton} />
        </TouchableOpacity>

        <View style={styles.menuContainer}>
          {UserDrawerList.map((data, index) => (
            <View style={styles.menuItemMain} key={index}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  if (data.onPress) {
                    data.onPress();
                  } else {
                    handleNavigation(data.screen);
                  }
                }}
                activeOpacity={0.5}
              >
                <Text style={styles.menuText}>{data.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutMain} activeOpacity={0.7} onPress={toggleModal}>
          <Text style={styles.logoutText}>Logout</Text>
          <Image source={images.logoutIcon} />
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalOpen}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.bottomContainer}>
              <Text style={styles.modalTitle}>Logout</Text>

              <Text style={styles.modalMessage}>
                Are you sure you want to log out?
              </Text>

              <View style={styles.modalButtons}>
                <CustomButton
                  btnHeight={height * 0.06}
                  btnWidth={width * 0.43}
                  text='Cancel'
                  textColor={colors.black}
                  borderWidth={1}
                  borderColor={colors.black}
                  backgroundColor={colors.white}
                  borderRadius={30}
                  onPress={toggleModal}
                />
                <CustomButton
                  btnHeight={height * 0.06}
                  btnWidth={width * 0.43}
                  text='Yes, Logout'
                  textColor={colors.white}
                  backgroundColor={colors.logoutColor}
                  borderRadius={30}
                  onPress={handleLogout}
                />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
    backgroundColor: colors.white,
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.125,
    backgroundColor: colors.darkmarhoon,
  },
  gradientMiddle: {
    position: 'absolute',
    top: height * 0.12,
    height: height * 0.09,
    right: -width * 0.001,
    backgroundColor: colors.darkmarhoon
  },
  drawerBgImg: {
    width: width * 0.9,
    height: height * 0.9,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  drawerBackIcon: {
    width: width * 0.04,
    height: height * 0.04,
    resizeMode: 'contain',
  },
  closeButton: {
    width: width * 0.045,
    resizeMode: "contain",
    left: width * 0.55,
    bottom: height * 0.025
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.darkmarhoon,
    top: height * 0.08
  },
  profileImage: {
    width: width * 0.2,
    height: height * 0.085,
    resizeMode: 'cover',
    borderRadius: width * 0.09,
    marginRight: width * 0.03
  },
  profileTextContainer: {
    right: width * 0.03,
  },
  profileName: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.white,
  },
  profileEmail: {
    fontSize: fontSizes.xsm,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.white,
  },
  menuContainer: {
    flex: 1,
    paddingTop: height * 0.1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
    backgroundColor: colors.lightGray,
    padding: 19,
    borderRadius: 30,
    width: width * 0.5,
  },
  menuItemMain: {
    height: height * 0.075,
    width: width * 0.69,
    justifyContent: 'center',
    alignItems: "center",
    right: width * 0.06,
  },
  menuText: {
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.black,
    width: width * 0.5,
  },

  logoutMain: {
    backgroundColor: colors.logoutColor,
    bottom: height * 0.06,
    padding: 19,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.04
  },
  logoutText: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.lg,
    color: colors.white
  },


  // modalOverlay: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(0, 0, 0, 0.61)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // modalContainer: {
  //   backgroundColor: colors.white,
  //   padding: 20,
  //   borderRadius: 15,
  //   width: width * 0.8,
  //   alignItems: 'center',
  // },
  // modalTitle: {
  //   fontSize: fontSizes.lg2,
  //   fontFamily: fontFamily.ClashDisplayMedium,
  //   color: colors.black,
  //   marginBottom: 10,
  // },
  // modalMessage: {
  //   fontSize: fontSizes.md,
  //   fontFamily: fontFamily.ClashDisplayRegular,
  //   color: colors.darkGray,
  //   textAlign: 'center',
  //   marginBottom: 20,
  // },
  // modalButtons: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   gap: height * 0.02,
  // },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },

  bottomContainer: {
    width: '100%',
    backgroundColor: colors.white,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
  },

  modalTitle: {
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.black,
    marginBottom: 10,
  },

  modalMessage: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.GilroyMedium,
    color: colors.darkGray,
    textAlign: 'center',
    marginBottom: 25,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default DrawerNavigator;