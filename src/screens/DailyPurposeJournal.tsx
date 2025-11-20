import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const DailyPurposeJournal = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');

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
                onChangeText={setEmail}
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
    height: height * 0.1,
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
});

export default DailyPurposeJournal;
