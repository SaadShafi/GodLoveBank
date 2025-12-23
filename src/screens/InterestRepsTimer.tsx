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
  Platform,
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
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';

const InterestRepsTimer = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [selectedTime, setSelectedTime] = useState('30 Min');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const [taskText, setTaskText] = useState("");



  // ✅ UPDATED: 6 time options
  const timeOptions = [
    '5 Min',
    '10 Min',
    '15 Min',
    '20 Min',
    '25 Min',
    '30 Min',
  ];

  const getApiTimeFormat = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

  // ✅ UPDATED: dynamic minutes to seconds
  const getTimeInSeconds = (time: string) => {
    const minutes = parseInt(time); // "5 Min" -> 5
    return minutes * 60;
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
    setIsRunning(true); // ✅ start counting
  };

  // Stop timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  useEffect(() => {
  if (isRunning && timeLeft < getTimeInSeconds(selectedTime)) {
    timerRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime >= getTimeInSeconds(selectedTime) - 1) {
          setIsRunning(false); // stop automatically at max time
          return getTimeInSeconds(selectedTime);
        }
        return prevTime + 1; // ✅ count up
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
  }, [isRunning, timeLeft, selectedTime]);


  const handlecoretimer = async () => {
    // Stop timer if running
    if (isRunning && timerRef.current) {
      clearInterval(timerRef.current);
      setIsRunning(false);
  }

  setLoading(true);

  try {
    // Dynamic time from timer
    const apiTime = getApiTimeFormat(
      timeLeft || getTimeInSeconds(selectedTime)
    );

    // ✅ UPDATED BODY (as per API)
    const body = {
      time: apiTime,
      task: taskText, // <-- input / state value
    };

    console.log("Love Deposit Body:", body);

    const { response, error } = await apiHelper(
      "POST",
      "tools/love-deposit/log",
      {},
      {},
      body
    );

    if (response?.data?.data) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Love deposit logged successfully",
      });
      console.log("API RESPONSE:", response?.data);
      navigation.navigate("DepositInterestReps");
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message || "Record already added for today",
      });
    }
  } catch (err) {
    console.error("Love Deposit error:", err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "An error occurred while logging love deposit",
    });
  } finally {
    setLoading(false);
  }
};



  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={
            <Text style={styles.headerText}>COMPOUNDING INTEREST REPS</Text>
          }
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.description}>
          Users can Measure, Monitor, and Score their Spiritual Growth based on
          the number of Love Deposit Reps they have invested in the bank
          accounts of their soul! First, they must decide what type of Love
          Deposit Reps they want to invest in i. e. Exercising, Praying,
          Meditating, breathing etc. Second they must decide how much time they
          you want to spend doing 10 second Reps. (30 Minutes, 1 hour, 2 hours,
          or more).
        </Text>
        <View>
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

        <Text style={styles.invest}>Today I am investing</Text>
        <Text style={styles.invest}>Love Deposit Reps in my:</Text>

        <View style={{ alignSelf: 'center', top: height * 0.05 }}>
          <CustomTextInput
            placeholder="Type here"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.06}
            inputWidth={width * 0.9}
            backgroundColor={colors.lightGray}
            borderRadius={20}
            onChangeText={setTaskText}
          />
        </View>

        <Text style={styles.selected}>Select Time (1 Min = 6 Reps)</Text>

        {/* Time Selection Carousel */}
         <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
        >
          {timeOptions.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeOption,
                selectedTime === time && styles.selectedTimeOption,
                { marginRight: width * 0.04 }, // ✅ GAP
              ]}
              onPress={() => setSelectedTime(time)}
            >
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
        </ScrollView>

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
            onPress={handlecoretimer}
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
    // height: height * 0.1,
    height:  Platform.OS === 'ios' ? height * 0.15 : height * 0.1,
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
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    paddingHorizontal: width * 0.04,
    textAlign: 'justify',
    top: height * 0.01,
    lineHeight: fontSizes.sm * 1.6,
    marginBottom: height * 0.03,
  },
  timerImg: {
    alignSelf: 'center',
  },
  timer: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.xl,
    position: 'absolute',
    alignSelf: 'center',
    top: height * 0.12,
    color: colors.black,
  },
  button: {
    alignSelf: 'center',
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
    top: height * 0.07,
    marginBottom: height * 0.02,
    color: colors.black

  },
  // Carousel Styles
  carouselContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.08,
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
    top: height * 0.03,
  },
});

export default InterestRepsTimer;
