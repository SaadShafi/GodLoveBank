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
import { useState } from 'react';
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

  const handleDateSelect = (day: any) => {
    const dateString = day.dateString;
    setSelectedDate(dateString);
    setCalendarVisible(false);

    // Filter reps based on selected date
    const repsForDate = mockRepsData[dateString] || [];
    setFilteredReps(repsForDate);
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
        {selectedDate && filteredReps.length > 0 && (
          <View style={styles.dateSection}>
            <Text style={styles.dateLabel}>{formatDate(selectedDate)}</Text>
            {filteredReps.map((rep, index) => (
              <View key={index} style={styles.repMind}>
                <Text style={styles.mindfulness}>{rep.type}</Text>
                <Text style={styles.reps}>{rep.reps} Reps</Text>
              </View>
            ))}
            <View style={styles.divider}>
              <Text style={styles.totalText}>
                Total {filteredReps.reduce((sum, rep) => sum + rep.reps, 0)}{' '}
                Reps
              </Text>
            </View>
          </View>
        )}

        {/* Show default sections when no date is selected */}
        {!selectedDate && (
          <>
            {/* Today Section */}
            <View style={styles.dateSection}>
              <Text style={styles.dateLabel}>Today</Text>

              <TouchableOpacity
                style={styles.repMind}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('AAARequestCardHistory')}
              >
                <Text style={styles.mindfulness}>19 November, 2025</Text>
                <Text style={styles.reps}>12 April, 2023</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dateSection}>
              <Text style={styles.dateLabel}>Week</Text>
              <TouchableOpacity style={styles.repMind} activeOpacity={0.7}>
                <Text style={styles.mindfulness}>12 April, 2023</Text>
                <Text style={styles.reps}>3 Request</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.repMind} activeOpacity={0.7}>
                <Text style={styles.mindfulness}>12 April, 2023</Text>
                <Text style={styles.reps}>3 Request</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dateSection}>
              <Text style={styles.dateLabel}>Month</Text>
              <TouchableOpacity style={styles.repMind} activeOpacity={0.7}>
                <Text style={styles.mindfulness}>12 April, 2023</Text>
                <Text style={styles.reps}>3 Request</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.repMind} activeOpacity={0.7}>
                <Text style={styles.mindfulness}>12 April, 2023</Text>
                <Text style={styles.reps}>3 Request</Text>
              </TouchableOpacity>
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
