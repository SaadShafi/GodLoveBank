// import React from 'react';
// import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// import BottomTabs from './BottomTabs'; // ⬅ your existing tabs file
// import images from '../assets/Images';

// const Drawer = createDrawerNavigator();


// // ---------------------
// //  CUSTOM DRAWER UI
// // ---------------------
// function CustomDrawer(props) {
//   return (
//     <View style={styles.drawerContainer}>

//       {/* Top Profile Section */}
//       <View style={styles.topSection}>
//         <Image source={images.userProfile} style={styles.avatar} />

//         <View>
//           <Text style={styles.name}>Harden Scott</Text>
//           <Text style={styles.email}>harden.scott@example.com</Text>
//         </View>

//         {/* Close Drawer */}
//         <TouchableOpacity
//           onPress={() => props.navigation.closeDrawer()}
//           style={styles.closeBtn}
//         >
//           <Text style={{ color: "#fff", fontSize: 20 }}>✕</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Drawer Menu */}
//       <DrawerContentScrollView contentContainerStyle={styles.menuContainer}>
        
//         <TouchableOpacity
//           style={styles.menuBtn}
//           onPress={() => props.navigation.navigate("HomeDrawer")}
//         >
//           <Text style={styles.menuText}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuBtn}>
//           <Text style={styles.menuText}>My Orders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuBtn}>
//           <Text style={styles.menuText}>Favourites</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuBtn}>
//           <Text style={styles.menuText}>Get Help</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.menuBtn}>
//           <Text style={styles.menuText}>Payment Methods</Text>
//         </TouchableOpacity>

//       </DrawerContentScrollView>

//       {/* Logout */}
//       <TouchableOpacity style={styles.logoutBtn}>
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// // ---------------------
// //  DRAWER NAVIGATION
// // ---------------------
// export default function DrawerNav() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: false,
//         drawerType: "front",
//         overlayColor: "rgba(0,0,0,0.5)",
//         drawerStyle: {
//           width: "75%",
//           backgroundColor: "transparent"
//         }
//       }}
//       drawerContent={(props) => <CustomDrawer {...props} />}
//     >
//       {/* Home loads your Bottom Tabs */}
//       <Drawer.Screen name="Home" component={BottomTabs} />
//     </Drawer.Navigator>
//   );
// }


// // ---------------------
// //  STYLES
// // ---------------------
// const styles = StyleSheet.create({
//   drawerContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderTopRightRadius: 40,
//     borderBottomRightRadius: 40,
//     overflow: "hidden",
//   },

//   topSection: {
//     backgroundColor: "#4C0F0D",
//     padding: 20,
//     borderTopRightRadius: 40,
//   },

//   avatar: {
//     width: 55,
//     height: 55,
//     borderRadius: 30,
//     marginBottom: 12,
//   },

//   name: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   email: {
//     color: "#ddd",
//     fontSize: 12,
//   },

//   closeBtn: {
//     position: "absolute",
//     right: 20,
//     top: 20,
//   },

//   menuContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },

//   menuBtn: {
//     backgroundColor: "#F6F6F6",
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     marginBottom: 15,
//   },

//   menuText: {
//     fontSize: 15,
//     color: "#000",
//   },

//   logoutBtn: {
//     backgroundColor: "#FF6A6A",
//     padding: 15,
//     borderRadius: 12,
//     margin: 20,
//   },

//   logoutText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
