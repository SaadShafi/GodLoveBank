// import { NavigationProp, useNavigation } from '@react-navigation/native';
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
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';
// import { fontSizes } from '../utilities/fontsizes';

// const RepsHistory = () => {
//   const navigation = useNavigation<NavigationProp<any>>();

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       {/* Header stays fixed */}
//       <View style={styles.mainContainer}>
//         <TopHeader
//           isBack={true}
//           text={<Text style={styles.headerText}>Reps History</Text>}
//         />
//       </View>

//       {/* Scrollable content */}
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Select Date Section */}
//         <TouchableOpacity style={styles.datepicker} activeOpacity={0.7}>
//           <Text style={styles.sectionTitle}>Select Date</Text>
//           <Image source={images.calender} style={styles.img} />
//         </TouchableOpacity>

//         {/* Today Section */}
//         <View style={styles.dateSection}>
//           <Text style={styles.dateLabel}>Today</Text>
//           <View style={styles.repMind}>
//             <Text style={styles.mindfulness}>NSL MINDFULNESS</Text>
//             <Text style={styles.reps}>360 Reps</Text>
//           </View>
//         </View>

//         {/* Week Section */}
//         <View style={styles.dateSection}>
//           <Text style={styles.dateLabel}>Week</Text>
//           <View style={styles.repMind}>
//             <Text style={styles.mindfulness}>NSL MINDFULNESS</Text>
//             <Text style={styles.reps}>360 Reps</Text>
//           </View>
//           <View style={styles.repMind}>
//             <Text style={styles.mindfulness}>NSL MINDFULNESS</Text>
//             <Text style={styles.reps}>360 Reps</Text>
//           </View>
//           <View style={styles.divider}>
//             <Text style={styles.totalText}>Total 720 Reps</Text>
//           </View>
//         </View>

//         {/* Month Section */}
//         <View style={styles.dateSection}>
//           <Text style={styles.dateLabel}>Month</Text>
//           <View style={styles.repMind}>
//             <Text style={styles.mindfulness}>NSL MINDFULNESS</Text>
//             <Text style={styles.reps}>500 Reps</Text>
//           </View>
//           <View style={styles.repMind}>
//             <Text style={styles.mindfulness}>NSL MINDFULNESS</Text>
//             <Text style={styles.reps}>500 Reps</Text>
//           </View>
//           <View style={styles.divider}>
//             <Text style={styles.totalText}>Total 1000 Reps</Text>
//           </View>
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
//     paddingBottom: height * 0.05,
//     paddingHorizontal: width * 0.04,
//   },
//   sectionTitle: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     paddingHorizontal: width * 0.05,
//     top: height * 0.015,
//   },
//   dateSection: {
//     gap: height * 0.02,
//   },
//   dateLabel: {
//     fontFamily: fontFamily.UrbanistBold,
//     fontSize: fontSizes.md,
//     color: colors.black,
//     top: height * 0.02,
//     marginBottom: height * 0.02,
//   },
//   repMind: {
//     backgroundColor: colors.lightGray,
//     height: height * 0.1,
//     width: width * 0.9,
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     paddingHorizontal: width * 0.03,
//     gap: height * 0.01,
//     justifyContent: 'center',
//   },
//   mindfulness: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.sm2,
//     color: colors.black,
//   },
//   reps: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm2,
//     color: colors.black,
//   },

//   divider: {
//     backgroundColor: colors.marhoon,
//     height: height * 0.05,
//     width: width * 0.85,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//   },
//   totalText: {
//     fontFamily: fontFamily.UrbanistBold,
//     fontSize: fontSizes.sm,
//     color: colors.white,
//     textAlign: 'center',
//     alignSelf: 'center',
//   },
//   img: {
//     top: height * 0.015,
//     right: width * 0.05,
//   },

//   row: {
//     flexDirection: 'row',
//     paddingHorizontal: width * 0.04,
//     marginBottom: height * 0.015,
//   },
//   number: {
//     fontFamily: fontFamily.GilroyRegular,
//   },
//   btn: {
//     alignSelf: 'center',
//     top: height * 0.05,
//   },
//   datepicker: {
//     flexDirection: 'row',
//     backgroundColor: colors.lightGray,
//     height: height * 0.05,
//     width: width * 0.85,
//     justifyContent: 'space-between',
//     borderRadius: 30,
//     alignSelf: 'center',
//   },
// });

// export default RepsHistory;

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';

// Mock data - replace with your actual data
const mockRepsData = {
  '2024-01-15': [{ type: 'NSL MINDFULNESS', reps: 360 }],
  '2024-01-16': [{ type: 'NSL MINDFULNESS', reps: 400 }],
  '2024-01-17': [
    { type: 'NSL MINDFULNESS', reps: 300 },
    { type: 'NSL MINDFULNESS', reps: 200 },
  ],
};

const AAACardHistory = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredReps, setFilteredReps] = useState<any[]>([]);
  const [repsData, setRepsData] = useState<any>({});
  const [todayReps, setTodayReps] = useState<any[]>([]);
  const [weekReps, setWeekReps] = useState<any[]>([]);
  const [monthReps, setMonthReps] = useState<any[]>([]);
  

  const handleDateSelect = (day: any) => {
  console.log("📅 DAY SELECTED 👉", day);

  const dateString = day.dateString;
  console.log("📅 SELECTED DATE 👉", dateString);

  setSelectedDate(dateString);
  setCalendarVisible(false);

  fetchAAAHistory(dateString);

    // Filter reps based on selected date
    // const repsForDate = mockRepsData[dateString] || [];
    // setFilteredReps(repsForDate);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Select Date';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const fetchAAAHistory = async (date?: string) => {
    try {
      console.log("📡 fetchAAAHistory CALLED with date 👉", date);

    const todayDate = new Date().toISOString().split('T')[0];

    const params = {
      date: date || todayDate,
    };

    console.log("📤 API PARAMS 👉", params);

    const apiRes = await apiHelper(
      "GET",
      "tools/tools-of-thinking/logs/details",
      params
    );

    console.log("📥 FULL API RESPONSE 👉", apiRes);

    const res = apiRes?.response;
    console.log("📥 API response 👉", res);

    if (res?.status === 200) {
      const logs = Array.isArray(res?.data?.data)
        ? res.data.data
        : [];

      console.log("✅ AAA LOGS 👉", logs);
      console.log("🔢 TOTAL LOGS COUNT 👉", logs.length);

      // ✅ SUCCESS TOAST
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'AAA Card History fetched successfully',
      });

      /**
       * 🔥 MAP DATA BY DATE
       */
      const mappedData: any = {};

      logs.forEach((item: any, index: number) => {
        console.log(`➡️ LOG ${index} 👉`, item);

        const dateKey = item.logDate; // YYYY-MM-DD

        if (!mappedData[dateKey]) {
          mappedData[dateKey] = [];
        }

        mappedData[dateKey].push({
          type: item?.tool?.name || 'AAA Request',
          reps: 1,
        });
      });

      console.log("🗂️ FINAL MAPPED DATA 👉", mappedData);

      // 🔥 SET MAIN DATA
      setRepsData(mappedData);

      /**
       * ✅ TODAY DATA
       */
      const todayRepsData = mappedData[todayDate] || [];
      setTodayReps(todayRepsData);

      /**
       * ✅ WEEK DATA (simple version – same data)
       * later 7 days logic bhi laga sakte hain
       */
      setWeekReps(todayRepsData);

      /**
       * ✅ MONTH DATA (simple version)
       */
      setMonthReps(todayRepsData);

      console.log("📆 TODAY REPS 👉", todayRepsData);
      console.log("📆 WEEK REPS 👉", todayRepsData);
      console.log("📆 MONTH REPS 👉", todayRepsData);

      /**
       * ✅ SELECTED DATE FILTER
       */
      if (date) {
        console.log("📌 FILTERED DATA FOR DATE 👉", date, mappedData[date]);
        setFilteredReps(mappedData[date] || []);
      }
    } else {
      console.log("❌ API FAILED 👉", res);

      Toast.show({
        type: 'error',
        text1: 'Failed',
        text2: res?.message || 'Unable to fetch AAA Card History',
      });
    }
  } catch (error: any) {
    console.log("🔥 API CATCH ERROR 👉", error);

    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error?.message || 'Something went wrong',
    });
  }
  };

    useEffect(() => {
      fetchAAAHistory();
        }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>AAA Card History</Text>}
        />
      </View>

      {/* Calendar Modal */}
      <Modal
        visible={isCalendarVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setCalendarVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDateSelect}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: colors.marhoon,
                },
              }}
              theme={{
                backgroundColor: colors.white,
                calendarBackground: colors.white,
                textSectionTitleColor: colors.black,
                selectedDayBackgroundColor: colors.marhoon,
                selectedDayTextColor: colors.white,
                todayTextColor: colors.marhoon,
                dayTextColor: colors.black,
                arrowColor: colors.marhoon,
                monthTextColor: colors.black,
                textDisabledColor: colors.lightGray,
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCalendarVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Select Date Section */}
        <TouchableOpacity
          style={styles.datepicker}
          activeOpacity={0.7}
          onPress={() => setCalendarVisible(true)}
        >
          <Text style={styles.sectionTitle}>
            {selectedDate ? formatDate(selectedDate) : 'Select Date'}
          </Text>
          <Image source={images.calender} style={styles.img} />
        </TouchableOpacity>

        {/* Show filtered results when a date is selected */}
      {!selectedDate && (
  <>
    {/* TODAY */}
    <View style={styles.dateSection}>
      <Text style={styles.dateLabel}>Today</Text>

      {todayReps.length > 0 ? (
        <View style={styles.repMind}>
          <Text style={styles.mindfulness}>
            {formatDate(new Date().toISOString().split('T')[0])}
          </Text>
          <Text style={styles.reps}>
            {todayReps.length} Request
          </Text>
        </View>
      ) : (
        <View style={styles.repMind}>
          <Text style={styles.mindfulness}>No Request Today</Text>
          <Text style={styles.reps}>0 Request</Text>
        </View>
      )}
    </View>

    {/* WEEK */}
    <View style={styles.dateSection}>
      <Text style={styles.dateLabel}>Week</Text>
      <View style={styles.repMind}>
        <Text style={styles.mindfulness}>This Week</Text>
        <Text style={styles.reps}>{weekReps.length} Request</Text>
      </View>
    </View>

    {/* MONTH */}
    <View style={styles.dateSection}>
      <Text style={styles.dateLabel}>Month</Text>
      <View style={styles.repMind}>
        <Text style={styles.mindfulness}>This Month</Text>
        <Text style={styles.reps}>{monthReps.length} Request</Text>
      </View>
    </View>
  </>
)}


        {/* Show message when no reps found for selected date */}
        {selectedDate && filteredReps.length === 0 && (
          <View style={styles.dateSection}>
            <Text style={styles.dateLabel}>{formatDate(selectedDate)}</Text>
            <View style={styles.repMind}>
              <Text style={styles.mindfulness}>No request recorded</Text>
              <Text style={styles.reps}>0 Request</Text>
            </View>
          </View>
        )}
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
    paddingBottom: height * 0.05,
    paddingHorizontal: width * 0.04,
  },
  sectionTitle: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
    paddingHorizontal: width * 0.05,
    top: height * 0.015,
  },
  dateSection: {
    gap: height * 0.02,
  },
  dateLabel: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.md,
    color: colors.black,
    top: height * 0.02,
    marginBottom: height * 0.02,
  },
  repMind: {
    backgroundColor: colors.lightGray,
    height: height * 0.1,
    width: width * 0.9,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: width * 0.03,
    gap: height * 0.01,
    justifyContent: 'center',
  },
  mindfulness: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  reps: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  divider: {
    backgroundColor: colors.marhoon,
    height: height * 0.05,
    width: width * 0.85,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  totalText: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm,
    color: colors.white,
    textAlign: 'center',
    alignSelf: 'center',
  },
  img: {
    top: height * 0.015,
    right: width * 0.05,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
  },
  number: {
    fontFamily: fontFamily.GilroyRegular,
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.05,
  },
  datepicker: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    height: height * 0.05,
    width: width * 0.85,
    justifyContent: 'space-between',
    borderRadius: 30,
    alignSelf: 'center',
  },
  // New styles for modal and calendar
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    width: width * 0.9,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: colors.marhoon,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: colors.white,
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm,
  },
});

export default AAACardHistory;
