import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const AAARequestCardHistory = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={<Text style={styles.headerText}>Request Card History</Text>}
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.7,
            justifyContent: 'space-between',
            top: height * 0.01,
          }}
        >
          <Text style={styles.request}>Request 1</Text>
          <Text style={styles.acknowledge}>ACKNOWLEDGE</Text>
        </View>

        <Text style={styles.holy}>Honor the Holy Spirit as LORD here:</Text>

        <View style={styles.ackContainer}>
          <CustomTextInput
            placeholder="Honor the Holy Spirit"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.1}
            inputWidth={width * 0.85}
            backgroundColor={colors.lightGray}
            borderRadius={20}
            onChangeText={setEmail}
            editable={false}
          />
        </View>

        <Text style={styles.ask}>ASK</Text>
        <Text style={styles.details}>Enter details of your request here:</Text>
        <View style={styles.askContainer}>
          <CustomTextInput
            placeholder="Spirit as LORD"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.1}
            inputWidth={width * 0.85}
            backgroundColor={colors.lightGray}
            borderRadius={20}
            onChangeText={setEmail}
            editable={false}
          />
        </View>

        <Text style={styles.abide}>ABIDE</Text>
        <Text style={styles.long}>Enter long will you abide to the End:</Text>
        <View style={styles.spiritContainer}>
          <CustomTextInput
            placeholder="Spirit as LORD"
            placeholderTextColor={colors.black}
            inputHeight={height * 0.1}
            inputWidth={width * 0.85}
            backgroundColor={colors.lightGray}
            borderRadius={20}
            onChangeText={setEmail}
            editable={false}
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
  ackContainer: {
    alignSelf: 'center',
    top: height * 0.04,
  },
  askContainer: {
    alignSelf: 'center',
    top: height * 0.12,
  },
  spiritContainer: {
    alignSelf: 'center',
    top: height * 0.2,
  },
  headerText: {
    color: colors.white,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.UrbanistBold,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingTop: height * 0.01, // space below header
    paddingBottom: height * 0.07,
  },
  img: {
    alignSelf: 'center',
    marginBottom: height * 0.02,
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
  audio: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.white,
    left: width * 0.22,
    top: height * 0.04,
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.05,
  },
  btn1: {
    alignSelf: 'center',
    top: height * 0.05,
  },
  request: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    color: colors.darkRed,
    paddingHorizontal: width * 0.04,
  },
  acknowledge: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    alignSelf: 'center',
  },
  ask: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    alignSelf: 'center',
    top: height * 0.09,
  },
  abide: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    alignSelf: 'center',
    top: height * 0.18,
  },
  details: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.11,
    paddingHorizontal: width * 0.09,
  },
  long: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.19,
    paddingHorizontal: width * 0.09,
  },
  holy: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.09,
    top: height * 0.03,
  },
});

export default AAARequestCardHistory;
