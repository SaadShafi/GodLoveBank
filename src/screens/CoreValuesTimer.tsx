// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { fontFamily } from '../assets/Fonts';
// import images from '../assets/Images';
// import CustomButton from '../components/CustomButton';
// import CustomTextInput from '../components/CustomTextInput';
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';
// import { fontSizes } from '../utilities/fontsizes';

// const InterestRepsTimer = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   const [email, setEmail] = useState('');
//   const [selectedTime, setSelectedTime] = useState('30 Min');

//   // Time options for the carousel
//   const timeOptions = ['30 Min', '01 Hour', '2 Hour'];

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       {/* Header stays fixed */}
//       <View style={styles.mainContainer}>
//         <TopHeader
//           isBack={true}
//           text={
//             <Text style={styles.headerText}>COMPOUNDING INTEREST REPS</Text>
//           }
//         />
//       </View>

//       {/* Scrollable content */}
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         <Text style={styles.description}>
//           Users can Measure, Monitor, and Score their Spiritual Growth based on
//           the number of Love Deposit Reps they have invested in the bank
//           accounts of their soul! First, they must decide what type of Love
//           Deposit Reps they want to invest in i. e. Exercising, Praying,
//           Meditating, breathing etc. Second they must decide how much time they
//           you want to spend doing 10 second Reps. (30 Minutes, 1 hour, 2 hours,
//           or more).
//         </Text>
//         <View>
//           <Image source={images.repstimer} style={styles.timerImg} />
//           <Text style={styles.timer}>00:00:00</Text>
//         </View>

//         <TouchableOpacity>
//           <Image source={images.start} style={styles.button} />
//         </TouchableOpacity>

//         <Text style={styles.invest}>Today I am investing</Text>
//         <Text style={styles.invest}>Love Deposit Reps in my:</Text>

//         <View style={{ alignSelf: 'center', top: height * 0.05 }}>
//           <CustomTextInput
//             placeholder="EXERCISING"
//             placeholderTextColor={colors.black}
//             inputHeight={height * 0.06}
//             inputWidth={width * 0.9}
//             backgroundColor={colors.lightGray}
//             borderRadius={20}
//             onChangeText={setEmail}
//           />
//         </View>

//         <Text style={styles.selected}>Select Time (1 Min = 6 Reps)</Text>

//         {/* Time Selection Carousel */}
//         <View style={styles.carouselContainer}>
//           {timeOptions.map((time, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.timeOption,
//                 selectedTime === time && styles.selectedTimeOption,
//               ]}
//               onPress={() => setSelectedTime(time)}
//             >
//               {/* Timer Icon */}
//               <Image
//                 source={images.time}
//                 style={[
//                   styles.timerIcon,
//                   selectedTime === time && styles.selectedTimerIcon,
//                 ]}
//               />
//               <Text
//                 style={[
//                   styles.timeText,
//                   selectedTime === time && styles.selectedTimeText,
//                 ]}
//               >
//                 {time}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.btn1}>
//           <CustomButton
//             text="Mark as Complete"
//             textColor={colors.white}
//             btnHeight={height * 0.06}
//             btnWidth={width * 0.85}
//             backgroundColor={colors.marhoon}
//             borderColor={colors.marhoon}
//             borderWidth={1}
//             borderRadius={20}
//             onPress={() => navigation.navigate('RepsHistory')}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: colors.purple,
//     width: width,
//     height: height * 0.1,
//     justifyContent: 'center',
//     paddingHorizontal: width * 0.04,
//     borderBottomRightRadius: 34,
//     borderBottomLeftRadius: 34,
//   },
//   headerText: {
//     color: colors.white,
//     fontSize: fontSizes.sm2,
//     fontFamily: fontFamily.UrbanistBold,
//     alignSelf: 'center',
//   },
//   scrollContainer: {
//     paddingTop: height * 0.01,
//     paddingBottom: height * 0.1,
//   },
//   img: {
//     alignSelf: 'center',
//     marginBottom: height * 0.02,
//   },
//   mathew: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.sm,
//     paddingHorizontal: width * 0.04,
//     top: height * 0.01,
//   },
//   description: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     paddingHorizontal: width * 0.04,
//     textAlign: 'justify',
//     top: height * 0.01,
//     lineHeight: fontSizes.sm * 1.6,
//     marginBottom: height * 0.03,
//   },
//   timerImg: {
//     alignSelf: 'center',
//   },
//   timer: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.xl,
//     position: 'absolute',
//     alignSelf: 'center',
//     top: height * 0.13,
//   },
//   button: {
//     alignSelf: 'center',
//   },
//   invest: {
//     alignSelf: 'center',
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.md,
//     top: height * 0.02,
//   },
//   selected: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.sm2,
//     paddingHorizontal: width * 0.05,
//     top: height * 0.07,
//     marginBottom: height * 0.02,
//   },
//   // Carousel Styles
//   carouselContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: width * 0.05,
//     marginTop: height * 0.08,
//     marginBottom: height * 0.02,
//   },
//   timeOption: {
//     backgroundColor: colors.lightGray,
//     paddingVertical: height * 0.015,
//     paddingHorizontal: width * 0.06,
//     height: height * 0.09,
//     borderRadius: 20,
//     minWidth: width * 0.25,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedTimeOption: {
//     backgroundColor: colors.marhoon,
//   },
//   timerIcon: {
//     width: width * 0.045,
//     height: height * 0.02,
//     marginBottom: height * 0.005,
//     tintColor: colors.black,
//   },
//   selectedTimerIcon: {
//     tintColor: colors.white,
//   },
//   timeText: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//   },
//   selectedTimeText: {
//     color: colors.white,
//     fontFamily: fontFamily.GilroyBold,
//   },
//   prayer: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.sm,
//     paddingHorizontal: width * 0.04,
//     top: height * 0.02,
//   },
//   row: {
//     flexDirection: 'row',
//     paddingHorizontal: width * 0.04,
//     marginBottom: height * 0.015,
//   },
//   number: {
//     fontFamily: fontFamily.GilroyRegular,
//   },
//   text1: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     width: width * 0.9,
//   },
//   text2: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     width: width * 0.9,
//   },
//   text3: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     width: width * 0.87,
//   },
//   text4: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     width: width * 0.87,
//   },
//   text5: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     width: width * 0.87,
//   },
//   audioContainer: {
//     backgroundColor: colors.purple,
//     width: width,
//     height: height * 0.23,
//     borderTopLeftRadius: 34,
//     borderTopRightRadius: 34,
//   },
//   audio: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.sm2,
//     color: colors.white,
//     alignSelf: 'center',
//   },
//   btn: {
//     alignSelf: 'center',
//     top: height * 0.05,
//   },
//   btn1: {
//     alignSelf: 'center',
//     top: height * 0.03,
//   },
// });

// export default InterestRepsTimer;

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const CoreValuesTimer = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [selectedTime, setSelectedTime] = useState('30 Min');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Time options for the carousel
  const timeOptions = ['30 Min', '01 Hour', '2 Hour'];

  // Convert selected time to seconds
  const getTimeInSeconds = (time: string) => {
    if (time === '30 Min') return 30 * 60;
    if (time === '01 Hour') return 60 * 60;
    if (time === '2 Hour') return 2 * 60 * 60;
    return 0;
  };

  // Format time to HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start timer
  const startTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(getTimeInSeconds(selectedTime));
    }
    setIsRunning(true);
  };

  // Stop timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset timer when selection changes
  useEffect(() => {
    setTimeLeft(getTimeInSeconds(selectedTime));
    setIsRunning(false);
  }, [selectedTime]);

  // Timer logic
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={
            <Text style={styles.headerText}>CORE VALUE (ROM. 12:1-3; NIV)</Text>
          }
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.description}>
         Set the timer for the amount of time you will
        </Text>
        <Text style={styles.description}>spend memorizing the core value!</Text>
        <View style={{top: height * 0.04}}>
          <Image source={images.repstimer} style={styles.timerImg} />
          <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        </View>

        {!isRunning ? (
          <TouchableOpacity onPress={startTimer}>
            <Image source={images.start} style={styles.button} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={stopTimer}>
            <Image source={images.stop} style={styles.button} />
          </TouchableOpacity>
        )}

        {/* <Text style={styles.invest}>Today I am investing</Text>
        <Text style={styles.invest}>Love Deposit Reps in my:</Text> */}

        {/* <View style={{ alignSelf: 'center', top: height * 0.05 }}>
          <CustomTextInput
            placeholder="EXERCISING"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.06}
            inputWidth={width * 0.9}
            backgroundColor={colors.lightGray}
            borderRadius={20}
            onChangeText={setEmail}
          />
        </View> */}

        <Text style={styles.selected}>Select Time (1 Min = 6 Reps)</Text>

        {/* Time Selection Carousel */}
        <View style={styles.carouselContainer}>
          {timeOptions.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeOption,
                selectedTime === time && styles.selectedTimeOption,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              {/* Timer Icon */}
              <Image
                source={images.time}
                style={[
                  styles.timerIcon,
                  selectedTime === time && styles.selectedTimerIcon,
                ]}
              />
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && styles.selectedTimeText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.btn1}>
          <CustomButton
            text="Mark as Complete"
            textColor={colors.white}
            btnHeight={height * 0.06}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderColor={colors.marhoon}
            borderWidth={1}
            borderRadius={20}
            onPress={() => navigation.navigate('CoreValuesTimerTwo')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.purple,
    width: width,
    height: height * 0.1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.04,
    borderBottomRightRadius: 34,
    borderBottomLeftRadius: 34,
  },
  headerText: {
    color: colors.white,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.UrbanistBold,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingTop: height * 0.01,
    paddingBottom: height * 0.1,
  },
  img: {
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
  mathew: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.04,
    top: height * 0.01,
  },
  description: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
    // paddingHorizontal: width * 0.04,
    alignSelf:"center",
    top: height * 0.01,
    lineHeight: fontSizes.sm * 1.6,
    
  },
  timerImg: {
    alignSelf: 'center',
    top: height * 0.04
  },
  timer: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.xl,
    position: 'absolute',
    alignSelf: 'center',
    top: height * 0.155,
  },
  button: {
    alignSelf: 'center',
    top: height * 0.08
  },
  invest: {
    alignSelf: 'center',
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.md,
    top: height * 0.02,
    color: colors.black
  },
  selected: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    paddingHorizontal: width * 0.05,
    top: height * 0.12,
    marginBottom: height * 0.02,
    color: colors.black

  },
  // Carousel Styles
  carouselContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.12,
    marginBottom: height * 0.02,
  },
  timeOption: {
    backgroundColor: colors.lightGray,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    height: height * 0.09,
    borderRadius: 20,
    minWidth: width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTimeOption: {
    backgroundColor: colors.marhoon,
  },
  timerIcon: {
    width: width * 0.045,
    height: height * 0.02,
    marginBottom: height * 0.005,
    tintColor: colors.black,
  },
  selectedTimerIcon: {
    tintColor: colors.white,
  },
  timeText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
  },
  selectedTimeText: {
    color: colors.white,
    fontFamily: fontFamily.GilroyBold,
  },
  prayer: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.04,
    top: height * 0.02,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
  },
  number: {
    fontFamily: fontFamily.GilroyRegular,
  },
  text1: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.9,
  },
  text2: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.9,
  },
  text3: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  text4: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  text5: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  audioContainer: {
    backgroundColor: colors.purple,
    width: width,
    height: height * 0.23,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  audio: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.white,
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.05,
  },
  btn1: {
    alignSelf: 'center',
    top: height * 0.04,
  },
});

export default CoreValuesTimer;
