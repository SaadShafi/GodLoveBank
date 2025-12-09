import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useEffect, useState } from 'react';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';

type Props = NativeStackScreenProps<StackParamList, 'HomeBase'>;

const HomeBase = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState(null);
  const [fullData, setFullData] = useState(null);

  const fetchHomrBase = async () => {
    setLoading(true)

    try {

      const body = {
        "selectedGroups": {
          "group_1": 2,
          "group_2": 3,
          "group_3": 4,
          "group_4": 5,
          "group_5": 6,
          "group_6": 7,
          "group_7": 8
        }
      }
      const { response, error } = await apiHelper(
        "PATCH",
        "/users/update-questions-selection",
        {},
        {},
        body
      )
      console.log("Response of the video Details API!", response)

       const data = response?.data?.data;
      const list = response?.data?.data?.selfStoryList || [];

      // find rejection → chosenness pair
      const rejectionStory = list.find(
        item => item.oldSelfStory === "rejection"
      );

      setStory(rejectionStory);
      setFullData(data)
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Success"
      })
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHomrBase();
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Home Base" isBack={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height * 0.1 }}
      >
        <View style={{ gap: width * 0.01 }}>
          <Text style={[styles.textOne, { textAlign: 'center' }]}>
            Since Your <Text style={{ color: colors.red }}>Old Self-Love</Text>
          </Text>
          <Text style={[styles.textTwo, { textAlign: 'center' }]}>
            Story was <Text style={{ color: colors.red }}>REJECTION!</Text>
          </Text>
        </View>

        <View style={[styles.container, { paddingVertical: height * 0.015 }]}>
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              {/* REJECTION: */}
              {story?.oldSelfStory?.toUpperCase() || ""}
              {": "}
            </Text>
            {/* The Old Self–Love Story Of Rejection Has A Home Base And A Life
            Paradigm Which Makes You Feel Unaccepted, Disowned, Denied, Refused,
            Disliked, And Not Good Enough, Like The Black Sheep In The Family.
            It Causes You To Have A Great Fear Of Failure Because Failure, To
            You, Equals Rejection, And You Avoid Feeling Rejected At Any Cost.
            Thus, You Feel You Always Have To Get Everything Right So You Won't
            Be Rejected. Often, When You Feel Threatened By Failure, You
            Covertly Close Your Spirit In Rebellion To Gain Control, Or You
            Overtly Under–Compensate And Settle For Less In Your Life To Avoid
            Being Rejected. You Also Have A Very Hard Time Trusting Others In
            Your Life. Therefore, The Stress Drivers For Rejection Are Distrust,
            Under–Compensation, And Rebellion. */}
            {story?.oldSelfStoryDescription}
          </Text>
        </View>

        <View style={{ top: height * 0.05, gap: width * 0.01 }}>
          <Text style={[styles.textOne, { textAlign: 'center' }]}>
            Your <Text style={{ color: colors.blue }}>New Self-Love</Text>
            <Text style={{ color: colors.black }}> Story Is</Text>
          </Text>
          <Text
            style={[
              styles.textTwo,
              { color: colors.blue, textAlign: 'center' },
            ]}
          >
            CHOSEN–NESS!
          </Text>
        </View>

        <View
          style={[styles.subContainer, { paddingVertical: height * 0.015 }]}
        >
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              {/* CHOSENNESS: */}
              {story?.newSelfStory?.toUpperCase() || ""}
              {": "}
            </Text>
            {/* The New Self–Love Story Of Chosenness Makes You Feel Chosen, Unique,
            Special, Appointed, Selected, Accepted, And Truly Loved. You Now
            Know You Are Chosen For A Unique Purpose In Life; Consequently, It
            Causes You To Feel A Sense Of Calling And Chosenness In Everything
            You Are Appointed And Chosen To Do. Since You Know And Own That You
            Are Chosen, You Do Not Settle For Less. You No Longer Allow Yourself
            To Associate Fear And Failure With Rejection. You Know Rejection Is
            "Because Of," But Your Chosenness Is "In Spite Of." Now You Trust
            God, Yourself, And Significant Others, Knowing That You Can't Fail
            In Anything As Long As You Trust And Obey The Logic And Reason Of
            The Holy Spirit. Therefore, The Spirit Drivers For Chosenness Are
            Trust And Obey. */}
            {story?.newSelfStoryDescription}
          </Text>
        </View>

        <View style={styles.btnMain}>
          <CustomButton
            text="Next" 
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={() => navigation.navigate('FirstBase', {
            story,
            fullData,
})}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textOne: {
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.GilroyExtraBold,
    alignSelf: 'center',
    color: colors.black,
  },
  textTwo: {
    fontSize: fontSizes.lg2,
    fontFamily: fontFamily.GilroyExtraBold,
    alignSelf: 'center',
    color: colors.black,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.marhoon,
    height: height * 0.4,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 16,
    top: height * 0.02,
  },
  subContainer: {
    borderWidth: 1,
    borderColor: colors.marhoon,
    height: height * 0.4,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 16,
    top: height * 0.06,
  },
  description: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.8,
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    lineHeight: fontSizes.sm * 1.3,
    textAlign: 'justify',
    color: colors.black,
  },
  btnMain: {
    top: height * 0.08,
    alignItems: 'center',
  },
});

export default HomeBase;
