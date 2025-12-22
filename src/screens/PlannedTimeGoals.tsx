import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';

const PlannedTimeGoals = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const [checkedStates, setCheckedStates] = useState(Array(10).fill(false));
  const [goals, setGoals] = useState<string[]>(Array(10).fill(''));
  const [plannedGoal, setPlannedGoal] = useState<string>('');


  const handleCheckboxPress = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const handleGoals = async () => {
    // ✅ sirf wo items jahan text bhi ho + checkbox bhi
    const selectedGoals = goals.filter(
      (text, index) => text.trim() !== '' && checkedStates[index]
    );
  
    console.log("Selected Goals:", selectedGoals);
  
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
        body,
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
          console.log("Planned Time fetched:", response.data.data);
  
  
        // ✅ Sirf required categories
        setPlannedGoal(categories?.["3"] ?? "PLANNED TIME GOALS");
  
  
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
        {/* <Text style={styles.goals}>PLANNED TIME GOALS</Text> */}
        {plannedGoal ? (
                  <Text style={styles.title}>{plannedGoal}</Text>
                ) : null}

        <View style={{ gap: height * 0.02 }}>
          {[0, 1, 2, 3, 4].map(index => (
            <View key={index} style={styles.inputRow}>
              <View style={{ left: width * 0.07, top: height * 0.02 }}>
                <CustomTextInput
                  placeholder="RENEWING YOUR SPIRIT"
                  placeholderTextColor={colors.black}
                  inputHeight={height * 0.06}
                  inputWidth={width * 0.75}
                  backgroundColor={colors.lightGray}
                  borderRadius={15}
                  onChangeText={setEmail}
                  editable={false}
                />
              </View>
              <BouncyCheckbox
                size={25}
                fillColor={colors.marhoon}
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: colors.marhoon }}
                innerIconStyle={{ borderWidth: 2 }}
                isChecked={checkedStates[index]}
                onPress={() => handleCheckboxPress(index)}
                style={styles.checkbox}
              />
            </View>
          ))}
        </View>

        {/* <Text style={styles.present}>PRESENT TIME GOALS</Text> */}

        <View style={{ gap: height * 0.02, top: height * 0.022 }}>
          {[5, 6, 7, 8, 9].map(index => (
            <View key={index} style={styles.inputRow}>
              <View style={{ left: width * 0.07, top: height * 0.02 }}>
                <CustomTextInput
                  placeholder="Time Goals"
                  placeholderTextColor={colors.black}
                  inputHeight={height * 0.06}
                  inputWidth={width * 0.75}
                  backgroundColor={colors.lightGray}
                  borderRadius={15}
                  onChangeText={setEmail}
                  editable={false}
                />
              </View>
              <BouncyCheckbox
                size={25}
                fillColor={colors.marhoon}
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: colors.marhoon }}
                innerIconStyle={{ borderWidth: 2 }}
                isChecked={checkedStates[index]}
                onPress={() => handleCheckboxPress(index)}
                style={styles.checkbox}
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
  present: {
    color: colors.black,
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.GilroyBold,
    top: height * 0.05,
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    left: width * 0.1,
    top: height * 0.02,
  },
  title: {
  fontSize: 22,
  fontFamily: fontFamily.UrbanistBold,
  marginVertical: 16,
  alignSelf: 'center',
  color: colors.black
},
});

export default PlannedTimeGoals;
