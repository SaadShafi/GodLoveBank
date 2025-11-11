// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { fontFamily } from '../assets/Fonts';
// import images from '../assets/Images';
// import CustomButton from '../components/CustomButton';
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';
// import { fontSizes } from '../utilities/fontsizes';

// const SelfHonesty = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   const [selectedCounts, setSelectedCounts] = useState<number[]>([]);

//   const toggleCount = (count: number) => {
//     if (selectedCounts.includes(count)) {
//       setSelectedCounts(selectedCounts.filter(item => item !== count));
//     } else {
//       setSelectedCounts([...selectedCounts, count]);
//     }
//   };

//   const isCountSelected = (count: number) => {
//     return selectedCounts.includes(count);
//   };

//   const CountButton = ({ number }: { number: number }) => (
//     <TouchableOpacity
//       style={[
//         styles.countButton,
//         isCountSelected(number) && styles.countButtonSelected,
//       ]}
//       onPress={() => toggleCount(number)}
//     >
//       <Text
//         style={[
//           styles.countText,
//           isCountSelected(number) && styles.countTextSelected,
//         ]}
//       >
//         {number}
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
//       <View style={{ position: 'absolute' }}>
//         <TopHeader isBack={true} />
//       </View>
//       <Image source={images.honesty} style={styles.img} />

//       {/* Count buttons row */}
//       <View style={styles.countsContainer}>
//         {[1, 2, 3, 4, 5].map(number => (
//           <CountButton key={number} number={number} />
//         ))}
//       </View>

//       <Text style={styles.jan}>January</Text>
//       <Text style={styles.luke}>1. ZACCHAEUS (Luke 19:1-10)</Text>
//       <Text style={styles.peter}>2. PETER DENIES JESUS (Mt. 26:57-75)</Text>
//       <Text style={styles.nanas}>3. NANAS AND SAPHIRA (Acts 5:1-11)</Text>
//       <Text style={styles.publican}>4. PUBLICAN & PHARISEE (Luke 18:9-14)</Text>

//       <View>
//         <Text style={styles.today}>
//           Today I will be honest and truthful with
//         </Text>
//         <Text style={styles.today}>God, myself, and other people!</Text>
//       </View>
//       <Image source={images.low} style={styles.low} />

//       <View style={{ gap: height * 0.02 }}>
//         <View style={styles.btn}>
//           <CustomButton
//             btnHeight={height * 0.06}
//             btnWidth={width * 0.85}
//             borderRadius={20}
//             backgroundColor={colors.lightmarhoon}
//             text="Continue"
//             textColor={colors.white}
//             onPress={() => navigation.navigate('')}
//           />
//         </View>

//         <View style={styles.btn}>
//           <CustomButton
//             btnHeight={height * 0.06}
//             btnWidth={width * 0.85}
//             borderRadius={20}
//             backgroundColor={colors.white}
//             borderColor={colors.marhoon}
//             borderWidth={1}
//             text="Move To Next Core Values"
//             textColor={colors.marhoon}
//             onPress={() => navigation.navigate('')}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   img: {
//     alignSelf: 'center',
//     bottom: height * 0.0645,
//     width: width * 0.999,
//     height: height * 0.63,
//   },
//   countsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: height * 0.03,
//     gap: 15,
//   },
//   countButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: colors.lightmarhoon,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.white,
//   },
//   countButtonSelected: {
//     backgroundColor: colors.lightGreen, // Change this to your preferred green color
//     borderColor: colors.green,
//   },
//   countText: {
//     fontSize: fontSizes.md,
//     fontFamily: fontFamily.UrbanistSemiBold,
//     color: colors.black,
//   },
//   countTextSelected: {
//     color: colors.white,
//   },
//   jan: {
//     alignSelf: 'center',
//     bottom: height * 0.35,
//     color: colors.black,
//     fontFamily: fontFamily.UrbanistExtraBold,
//     fontSize: fontSizes.lg2,
//   },
//   luke: {
//     alignSelf: 'center',
//     bottom: height * 0.32,
//     color: colors.black,
//     fontFamily: fontFamily.UrbanistSemiBold,
//     fontSize: fontSizes.sm,
//   },
//   peter: {
//     alignSelf: 'center',
//     bottom: height * 0.3,
//     color: colors.black,
//     fontFamily: fontFamily.UrbanistSemiBold,
//     fontSize: fontSizes.sm,
//   },
//   nanas: {
//     alignSelf: 'center',
//     bottom: height * 0.28,
//     color: colors.black,
//     fontFamily: fontFamily.UrbanistSemiBold,
//     fontSize: fontSizes.sm,
//   },
//   publican: {
//     alignSelf: 'center',
//     bottom: height * 0.26,
//     color: colors.black,
//     fontFamily: fontFamily.UrbanistSemiBold,
//     fontSize: fontSizes.sm,
//   },
//   today: {
//     alignSelf: 'center',
//     bottom: height * 0.2,
//     color: colors.black,
//     fontFamily: fontFamily.UrbanistSemiBold,
//     fontSize: fontSizes.md,
//   },
//   low: {
//     alignSelf: 'center',
//     bottom: height * 0.08,
//   },
//   btn: {
//     alignSelf: 'center',
//     bottom: height * 0.06,
//   },
// });

// export default SelfHonesty;

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const SelfHonesty = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedCount, setSelectedCount] = useState<number | null>(null); // ✅ single selection

  const toggleCount = (count: number) => {
    setSelectedCount(selectedCount === count ? null : count); // toggle one at a time
  };

  const isCountSelected = (count: number) => selectedCount === count;

  const CountButton = ({ number }: { number: number }) => (
    <TouchableOpacity
      style={[
        styles.countButton,
        isCountSelected(number) && styles.countButtonSelected,
      ]}
      onPress={() => toggleCount(number)}
    >
      <Text
        style={[
          styles.countText,
          isCountSelected(number) && styles.countTextSelected,
        ]}
      >
        {number}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* ✅ Fixed header on top */}
      <View style={styles.headerContainer}>
        <TopHeader isBack={true} />
      </View>

      {/* ✅ Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image source={images.honesty} style={styles.img} />

        {/* Count buttons row */}
        <View style={styles.countsContainer}>
          {[1, 2, 3, 4, 5].map(number => (
            <CountButton key={number} number={number} />
          ))}
        </View>

        <Text style={styles.jan}>January</Text>
        <Text style={styles.luke}>1. ZACCHAEUS (Luke 19:1-10)</Text>
        <Text style={styles.peter}>2. PETER DENIES JESUS (Mt. 26:57-75)</Text>
        <Text style={styles.nanas}>3. NANAS AND SAPHIRA (Acts 5:1-11)</Text>
        <Text style={styles.publican}>
          4. PUBLICAN & PHARISEE (Luke 18:9-14)
        </Text>

        <View>
          <Text style={styles.today}>
            Today I will be honest and truthful with
          </Text>
          <Text style={styles.today}>God, myself, and other people!</Text>
        </View>

        <Image source={images.low} style={styles.low} />

        <View style={{ gap: height * 0.02 }}>
          <View style={styles.btn}>
            <CustomButton
              btnHeight={height * 0.06}
              btnWidth={width * 0.85}
              borderRadius={20}
              backgroundColor={colors.lightmarhoon}
              text="Continue"
              textColor={colors.white}
              onPress={() => navigation.navigate('SelfCourage')}
            />
          </View>

          <View style={styles.btn}>
            <CustomButton
              btnHeight={height * 0.06}
              btnWidth={width * 0.85}
              borderRadius={20}
              backgroundColor={colors.white}
              borderColor={colors.marhoon}
              borderWidth={1}
              text="Move To Next Core Values"
              textColor={colors.marhoon}
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={images.audio} style={styles.audio} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  scrollContainer: {
    paddingTop: height * 0.08,
  },
  img: {
    alignSelf: 'center',
    bottom: height * 0.12,
    width: width * 0.999,
    height: height * 0.63,
  },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  countButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.lightmarhoon,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  countButtonSelected: {
    backgroundColor: colors.lightGreen,
    borderColor: colors.green,
  },
  countText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.UrbanistSemiBold,
    color: colors.black,
  },
  countTextSelected: {
    color: colors.white,
  },
  jan: {
    alignSelf: 'center',
    bottom: height * 0.4,
    color: colors.black,
    fontFamily: fontFamily.UrbanistExtraBold,
    fontSize: fontSizes.lg2,
  },
  luke: {
    alignSelf: 'center',
    bottom: height * 0.37,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  peter: {
    alignSelf: 'center',
    bottom: height * 0.35,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  nanas: {
    alignSelf: 'center',
    bottom: height * 0.33,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  publican: {
    alignSelf: 'center',
    bottom: height * 0.31,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  today: {
    alignSelf: 'center',
    bottom: height * 0.26,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.md,
  },
  low: {
    alignSelf: 'center',
    bottom: height * 0.12,
  },
  btn: {
    alignSelf: 'center',
    bottom: height * 0.09,
  },
  audio: {
    alignSelf: 'center',
    bottom: height * 0.06,
  },
});

export default SelfHonesty;
