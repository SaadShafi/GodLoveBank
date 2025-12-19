import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';

const DATA = [
  {
    id: '1',
    title: 'New Self Honesty',
    bg: colors.yellow,
    textColor: colors.black,
  },
  {
    id: '2',
    title: 'New Self Courage',
    bg: colors.blue,
    textColor: colors.white,
  },
  {
    id: '3',
    title: 'New Self Forgive',
    bg: '#FF4DFF',
    textColor: colors.white,
  },
  { id: '4', title: 'New Self Power', bg: '#3EB93E', textColor: colors.white },
  {
    id: '5',
    title: 'New Self Purpose',
    bg: colors.black,
    textColor: colors.white,
  },
  {
    id: '6',
    title: 'New Self Excellence',
    bg: '#9CF3F3',
    textColor: colors.black,
  },
  { id: '7', title: 'New Self Image', bg: '#24B5FF', textColor: colors.white },
  {
    id: '8',
    title: 'New Self Discipline',
    bg: '#F6B41B',
    textColor: colors.white,
  },
  { id: '9', title: 'New Self Worth', bg: colors.red, textColor: colors.white },
  {
    id: '10',
    title: 'New Self Confidence',
    bg: '#67C6A4',
    textColor: colors.white,
  },
  {
    id: '11',
    title: 'New Self Respect',
    bg: '#9055E5',
    textColor: colors.white,
  },
  { id: '12', title: 'New Self Love', bg: '#FF54FB', textColor: colors.white },
  {
    id: '13',
    title: 'New Self Prosperity',
    bg: '#009873',
    textColor: colors.white,
  },
  {
    id: '14',
    title: 'New Self Integrity',
    bg: '#C5FF3D',
    textColor: colors.black,
  },
  {
    id: '15',
    title: 'New Self Happiness',
    bg: '#FF8700',
    textColor: colors.white,
  },
];

const screenMap: any = {
  16: 'SelfHonesty',
  17: 'SelfCourage',
  18: 'SelfForgiveness',
  19: 'SelfPower',
  20: 'SelfPurpose',
  21: 'SelfExcellence',
  22: 'SelfImage',
  23: 'SelfDiscipline',
  24: 'SelfConfidence',
  25: 'SelfWorth',
  26: 'SelfRespect',
  27: 'SelfLove',
  28: 'SelfProsperity',
  29: 'SelfIntegrity',
  30: 'SelfHappiness',
};

const LoveDepositReps = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);
  const [loveReps, setLoveReps] = useState(false);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate(screenMap[item.id], { title: item.title })
      }>
      <View style={[styles.buttonContainer, { backgroundColor: item.bg }]}>
        <Text style={[styles.buttonText, { color: item.textColor }]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const fetchLoveReps = async () => {
    setLoading(true);
    try {
      const { response, error } = await apiHelper(
        "GET",
        "core-values",
        {},
        {}
      );
      if (response?.data?.data) {
        setLoveReps(response.data.data);
        console.log("LoveReps fetched:", response.data.data);

        // Show success toast
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Love Deposit Reps Fetched Successfully",
      });

      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error?.message || "Failed to fetch Love Deposit Reps",
        });
      }
    } catch (err) {
      console.error("Love Deposit Reps fetch error:", err);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "An error occurred while fetching Love Deposit Reps",
      });
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      fetchLoveReps();
    }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Love Deposit Reps" isBackHome={true} />
      <FlatList
          data={loveReps} // use the fetched API data
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate(screenMap[item.id], { title: item.name }) // use name instead of title
              }>
              <View style={[styles.buttonContainer, { backgroundColor: item.colorCode }]}>
                <Text style={[styles.buttonText, { color: item.textColor || colors.white }]}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()} // ensure key is string
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'center',
            gap: width * 0.06,
            marginTop: height * 0.02,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: height * 0.05 }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: height * 0.08,
    width: width * 0.4,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm2,
    alignSelf: 'center',
  },
});

export default LoveDepositReps;
