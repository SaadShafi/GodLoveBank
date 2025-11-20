

// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import React from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { fontFamily } from '../assets/Fonts';
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';
// import { fontSizes } from '../utilities/fontsizes';

// const DATA = [
//   {
//     id: '1',
//     title: 'New Self Honesty',
//     bg: colors.yellow,
//     textColor: colors.black,
//   },
//   {
//     id: '2',
//     title: 'New Self Courage',
//     bg: colors.blue,
//     textColor: colors.white,
//   },
//   {
//     id: '3',
//     title: 'New Self Forgive',
//     bg: '#FF4DFF',
//     textColor: colors.white,
//   },
//   { id: '4', title: 'New Self Power', bg: '#3EB93E', textColor: colors.white },
//   {
//     id: '5',
//     title: 'New Self Purpose',
//     bg: colors.black,
//     textColor: colors.white,
//   },
//   {
//     id: '6',
//     title: 'New Self Excellence',
//     bg: '#9CF3F3',
//     textColor: colors.black,
//   },
//   { id: '7', title: 'New Self Image', bg: '#24B5FF', textColor: colors.white },
//   {
//     id: '8',
//     title: 'New Self Discipline',
//     bg: '#F6B41B',
//     textColor: colors.white,
//   },
//   { id: '9', title: 'New Self Worth', bg: colors.red, textColor: colors.white },
//   {
//     id: '10',
//     title: 'New Self Confidence',
//     bg: '#67C6A4',
//     textColor: colors.white,
//   },
//   {
//     id: '11',
//     title: 'New Self Respect',
//     bg: '#9055E5',
//     textColor: colors.white,
//   },
//   { id: '12', title: 'New Self Love', bg: '#FF54FB', textColor: colors.white },
//   {
//     id: '13',
//     title: 'New Self Prosperity',
//     bg: '#009873',
//     textColor: colors.white,
//   },
//   {
//     id: '14',
//     title: 'New Self Integrity',
//     bg: '#C5FF3D',
//     textColor: colors.black,
//   },
//   {
//     id: '15',
//     title: 'New Self Happiness',
//     bg: '#FF8700',
//     textColor: colors.white,
//   },
// ];

// const LoveDepositReps = () => {
//   const navigation = useNavigation<NavigationProp<any>>();

//   const handleCardPress = (screenName: string, title: string) => {
//     // Navigate to the respective screen
//     navigation.navigate(screenName, { title });
//   };
//   const renderItem = ({ item }: any) => (
//     <TouchableOpacity activeOpacity={0.7}>
//       <View style={[styles.buttonContainer, { backgroundColor: item.bg }]}>
//         <Text style={[styles.buttonText, { color: item.textColor }]}>
//           {item.title}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <TopHeader text="Love Deposit Reps" isBack={true} />
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         columnWrapperStyle={{
//           justifyContent: 'center',
//           gap: width * 0.06,
//           marginTop: height * 0.02,
//         }}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: height * 0.05 }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   buttonContainer: {
//     height: height * 0.08,
//     width: width * 0.4,
//     borderRadius: 20,
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontFamily: fontFamily.UrbanistBold,
//     fontSize: fontSizes.sm2,
//     alignSelf: 'center',
//   },
// });

// export default LoveDepositReps;

























import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const DATA = [
  {
    id: '1',
    title: 'New Self Honesty',
    bg: colors.yellow,
    textColor: colors.black,
  },
  {
    id: '2',
    title: 'New Self Courage',
    bg: colors.blue,
    textColor: colors.white,
  },
  {
    id: '3',
    title: 'New Self Forgive',
    bg: '#FF4DFF',
    textColor: colors.white,
  },
  { id: '4', title: 'New Self Power', bg: '#3EB93E', textColor: colors.white },
  {
    id: '5',
    title: 'New Self Purpose',
    bg: colors.black,
    textColor: colors.white,
  },
  {
    id: '6',
    title: 'New Self Excellence',
    bg: '#9CF3F3',
    textColor: colors.black,
  },
  { id: '7', title: 'New Self Image', bg: '#24B5FF', textColor: colors.white },
  {
    id: '8',
    title: 'New Self Discipline',
    bg: '#F6B41B',
    textColor: colors.white,
  },
  { id: '9', title: 'New Self Worth', bg: colors.red, textColor: colors.white },
  {
    id: '10',
    title: 'New Self Confidence',
    bg: '#67C6A4',
    textColor: colors.white,
  },
  {
    id: '11',
    title: 'New Self Respect',
    bg: '#9055E5',
    textColor: colors.white,
  },
  { id: '12', title: 'New Self Love', bg: '#FF54FB', textColor: colors.white },
  {
    id: '13',
    title: 'New Self Prosperity',
    bg: '#009873',
    textColor: colors.white,
  },
  {
    id: '14',
    title: 'New Self Integrity',
    bg: '#C5FF3D',
    textColor: colors.black,
  },
  {
    id: '15',
    title: 'New Self Happiness',
    bg: '#FF8700',
    textColor: colors.white,
  },
];

const screenMap: any = {
  '1': 'SelfHonesty',
  '2': 'SelfCourage',
  '3': 'SelfForgiveness',
  '4': 'SelfPower',
  '5': 'SelfPurpose',
  '6': 'SelfExcellence',
  '7': 'SelfImage',
  '8': 'SelfDiscipline',
  '9': 'SelfWorth',
  '10': 'SelfConfidence',
  '11': 'SelfRespect',
  '12': 'SelfLove',
  '13': 'SelfProsperity',
  '14': 'SelfIntegrity',
  '15': 'SelfHappiness',
};

const LoveDepositReps = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate(screenMap[item.id], { title: item.title })
      }>
      <View style={[styles.buttonContainer, { backgroundColor: item.bg }]}>
        <Text style={[styles.buttonText, { color: item.textColor }]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Love Deposit Reps" isBack={true} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: width * 0.06,
          marginTop: height * 0.02,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height * 0.05 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: height * 0.08,
    width: width * 0.4,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm2,
    alignSelf: 'center',
  },
});

export default LoveDepositReps;
