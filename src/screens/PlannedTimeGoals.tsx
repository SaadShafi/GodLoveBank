import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const PlannedTimeGoals = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [checkedStates, setCheckedStates] = useState(Array(10).fill(false));

  const handleCheckboxPress = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

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
        <Text style={styles.goals}>PLANNED TIME GOALS</Text>

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
            onPress={() => navigation.navigate('PurposePlanner')}
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
});

export default PlannedTimeGoals;
