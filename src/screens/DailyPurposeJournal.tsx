import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';

const DailyPurposeJournal = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [goals, setGoals] = useState<string[]>(Array(10).fill(''));
  const [journalGoal, setJournalGoal] = useState<string>('');
  const [loading, setLoading] = useState('');


 const handleGoals = async () => {
  // ✅ sirf wo items jahan text ho
  const selectedGoals = goals.filter((text) => text.trim() !== '');

  console.log("Selected Goals:", selectedGoals);

  if (selectedGoals.length === 0) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Please enter at least one goal",
    });
    return;
  }

  setLoading(true);

  const body = {
    categoryCode: 1,
    items: selectedGoals,
  };

  try {
    const { response } = await apiHelper(
      "POST",
      "tools/daily-journal",
      {},
      {},
      body
    );

    if (response?.data?.data) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Goals saved successfully",
      });

      navigation.navigate("PurposePlanner");
    }
  } catch (err: any) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Failed to save goals",
    });
  } finally {
    setLoading(false);
  }
};



  const fetchPlanner = async () => {
      try {
        const { response } = await apiHelper(
          "GET",
          "general/metadata",
          {}
        );
    
        if (response?.status) {
          const categories =
            response?.data?.enums?.journalCategories || {};
            console.log("Daily Purpose Journal fetched:", response.data.data);
    
    
          // ✅ Sirf required categories
          setJournalGoal(categories?.["4"] ?? "Daily Purpose Journal");
    
    
          Toast.show({
            type: "success",
            text1: "Success",
            text2: "Goals fetched successfully",
          });
    
        } else {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: response?.message || "Failed to fetch goals",
          });
        }
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Something went wrong",
        });
      }
      };
    
    useEffect(() => {
      fetchPlanner();
    }, []);


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
        <View style={styles.headContainer}>
          {/* <Text style={styles.goals}>DAILY PURPOSE JOURNAL</Text> */}
          {journalGoal ? (
            <Text style={styles.title}>{journalGoal}</Text>
          ) : null}
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
                 onChangeText={(text) => {
                  const newGoals = [...goals];
                  newGoals[index] = text;
                  setGoals(newGoals);
                }}
              />
            </View>
          ))}
        </View>

        {/* <Text style={styles.present}>PRESENT TIME GOALS</Text> */}

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
                 onChangeText={(text) => {
                  const newGoals = [...goals];
                  newGoals[index] = text;
                  setGoals(newGoals);
                }}
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
            onPress={handleGoals}
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
    paddingTop: height * 0.01, // space below header
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
    title: {
  fontSize: 22,
  fontFamily: fontFamily.UrbanistBold,
  // marginVertical: 16,
  alignSelf: 'center',
  color: colors.black
},
});

export default DailyPurposeJournal;
