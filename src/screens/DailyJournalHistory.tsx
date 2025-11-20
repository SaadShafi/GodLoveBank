import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const DailyJournalHistory = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(12); // Default selected date

  // Calendar data matching your image exactly
  const calendarDays = [
    { date: 12, day: 'Mo' },
    { date: 13, day: 'Tu' },
    { date: 14, day: 'Wed' },
    { date: 15, day: 'Th' },
    { date: 16, day: 'Fr' },
    { date: 17, day: 'Sa' },
    { date: 18, day: 'Su' },
    { date: 19, day: 'Mo' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>DAILY PURPOSE PLANNER</Text>}
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Calendar Section - Exact match to your image */}
        <View style={styles.calendarWrapper}>
          {/* Month Header */}
          <View style={styles.monthHeader}>
            <Text style={styles.monthText}>March, 2023</Text>
          </View>

          {/* Horizontal Scrollable Dates */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.datesScrollContainer}
          >
            {calendarDays.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateItem,
                  selectedDate === day.date && styles.selectedDateItem,
                ]}
                onPress={() => setSelectedDate(day.date)}
              >
                <Text
                  style={[
                    styles.dateNumber,
                    selectedDate === day.date && styles.selectedDateText,
                  ]}
                >
                  {day.date}
                </Text>
                <Text
                  style={[
                    styles.dayName,
                    selectedDate === day.date && styles.selectedDateText,
                  ]}
                >
                  {day.day}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Daily Purpose Journal Section */}
        <View style={styles.headContainer}>
          <Text style={styles.goals}>DAILY PURPOSE JOURNAL</Text>
        </View>

        <View style={styles.headrecordContainer}>
          <Text style={styles.record}>Record your Thoughts & feelings</Text>
        </View>

        <View style={{ gap: height * 0.02, top: height * 0.04 }}>
          {[0, 1, 2, 3, 4].map(index => (
            <View key={index} style={styles.inputContainer}>
              <CustomTextInput
                placeholder="RENEWING YOUR SPIRIT"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.06}
                inputWidth={width * 0.85}
                backgroundColor={colors.lightGray}
                borderRadius={15}
                onChangeText={setEmail}
                editable={false}
              />
            </View>
          ))}
        </View>

        <View style={{ gap: height * 0.02, top: height * 0.063 }}>
          {[5, 6].map(index => (
            <View key={index} style={styles.inputContainer}>
              <CustomTextInput
                placeholder="Time Goals"
                placeholderTextColor={colors.black}
                inputHeight={height * 0.06}
                inputWidth={width * 0.85}
                backgroundColor={colors.lightGray}
                borderRadius={15}
                onChangeText={setEmail}
                editable={false}
              />
            </View>
          ))}
        </View>

        <View style={{ top: height * 0.1, alignSelf: 'center' }}>
          <CustomButton
            text="Done"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderColor={colors.marhoon}
            borderWidth={2}
            borderRadius={20}
            onPress={() => navigation.navigate('Home')}
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
  calendarWrapper: {
    // No background color - transparent
    marginHorizontal: width * 0.04,
    marginBottom: height * 0.03,
  },
  monthHeader: {
    marginBottom: height * 0.02,
  },
  monthText: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.GilroyBold,
    color: colors.black,
    textAlign: 'center',
  },
  datesScrollContainer: {
    paddingRight: width * 0.04,
  },
  dateItem: {
    alignItems: 'center',
    marginRight: width * 0.06,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: 12,
    minWidth: width * 0.14,
  },
  selectedDateItem: {
    backgroundColor: colors.marhoon, // Red container for selected date
  },
  dateNumber: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.GilroyBold,
    color: colors.black,
    marginBottom: 2,
  },
  dayName: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamily.GilroyRegular,
    color: colors.black,
  },
  selectedDateText: {
    color: colors.white, // White text for selected date
  },
  headContainer: {
    backgroundColor: colors.yellow,
    height: height * 0.05,
    justifyContent: 'center',
    width: width * 0.85,
    alignSelf: 'center',
    borderRadius: 15,
  },
  headrecordContainer: {
    backgroundColor: colors.Gray,
    height: height * 0.05,
    justifyContent: 'center',
    width: width * 0.8,
    alignSelf: 'center',
    borderRadius: 15,
    top: height * 0.01,
  },
  headerText: {
    color: colors.white,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.UrbanistBold,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingTop: height * 0.01,
    paddingBottom: height * 0.15,
  },
  goals: {
    color: colors.black,
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.GilroyBold,
    alignSelf: 'center',
  },
  record: {
    color: colors.black,
    fontSize: fontSizes.md,
    fontFamily: fontFamily.GilroyBold,
    alignSelf: 'center',
  },
  present: {
    color: colors.black,
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.GilroyBold,
    top: height * 0.05,
    alignSelf: 'center',
  },
  inputContainer: {
    alignItems: 'center',
  },
});

export default DailyJournalHistory;
