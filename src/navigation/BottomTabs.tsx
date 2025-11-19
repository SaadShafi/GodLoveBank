import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import HomeBase from '../screens/HomeBase';
import GoldenRule from '../screens/GoldenRule';
import Register from '../screens/Register';
import { Image, View } from 'react-native';
import images from '../assets/Images';
import { colors } from '../utilities/colors';
import { height, width } from '../utilities';
import FirstBase from '../screens/FirstBase';
import ECommerce from '../screens/ECommerce';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: height * 0.02,
          left: width * 0.02,
          right: width * 0.02,
          backgroundColor: colors.white,
          borderRadius: 30,
          height: height * 0.07,
          paddingBottom: height * 0.05,
          paddingTop: height * 0.015,
          elevation: 5,   
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused ? colors.marhoon : 'transparent',
              padding: height * 0.015,
              borderRadius: 50,
            }}>
              <Image
                source={images.homeIcon}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? colors.white : colors.Gray,
                }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen
        name="HomeBase"
        component={HomeBase}
        options={{
          tabBarIcon: ({ focused }) => (
             <View style={{
              backgroundColor: focused ? colors.marhoon : 'transparent',
              padding: height * 0.015,
              borderRadius: 50,
            }}>
              <Image
                source={images.bottomTabSecIcon}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                   tintColor: focused ? colors.white : colors.Gray,
                }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen
        name="ECommerce"
        component={ECommerce}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused ? colors.marhoon : 'transparent',
              padding: height * 0.015,
              borderRadius: 50,
            }}>
              <Image
                source={images.eCommerceIcon}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? colors.white : colors.Gray,
                }}
              />
            </View>
          )
        }}
      />

       <Tab.Screen
        name="FirstBase"
        component={FirstBase}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused ? colors.marhoon : 'transparent',
              padding: height * 0.015,
              borderRadius: 50,
            }}>
              <Image
                source={images.chatIcon}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? colors.lightGray : colors.Gray,
                }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ focused }) => (
             <View style={{
              backgroundColor: focused ? colors.marhoon : 'transparent',
              padding: 10,
              borderRadius: 50,
            }}>
              <Image
                source={images.profileIcon}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? colors.white : colors.Gray,
                }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
