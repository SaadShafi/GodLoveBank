import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = NativeStackScreenProps<StackParamList, 'HomeBase'>;

const HomeBase = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState(null);
  const [fullData, setFullData] = useState(null);
  const selections = useSelector((state: RootState) => state.role.questionnaireSelections);
  // console.log("Selected group from redux!", selections)
  const selectedGroupsBody = Object.fromEntries(
    Object.entries(selections).map(([groupId, optionIndex]) => [`group_${groupId}`, optionIndex])
  );
  const route = useRoute();
  const params = route.params || {};
  const baseAssignments = params?.baseAssignments;
  const selectionsObj = params?.selectionsObj;
  const [homeBaseStory, setHomeBaseStory] = useState<any>(null);
  const [firstBaseStory, setFirstBaseStory] = useState<any>(null);
  const [secondBaseStory, setSecondBaseStory] = useState<any>(null);
  const [thirdBaseStory, setThirdBaseStory] = useState<any>(null);

  const fetchHomeBase = async () => {
    setLoading(true)

    try {

      const body = {
        selectedGroups: selectedGroupsBody
      }
      const { response, error } = await apiHelper(
        "PATCH",
        "/users/update-questions-selection",
        {},
        {},
        body
      )
      console.log("Response of the Questions Selections API!", response)

      const data = response?.data?.data;
      const list = response?.data?.data?.selfStoryList || [];

      if (baseAssignments) {
        setHomeBaseStory(list.find(item => item.oldSelfStory === baseAssignments.homeBase.category));
        setFirstBaseStory(list.find(item => item.oldSelfStory === baseAssignments.firstBase.category));
        setSecondBaseStory(list.find(item => item.oldSelfStory === baseAssignments.secondBase.category));
        setThirdBaseStory(list.find(item => item.oldSelfStory === baseAssignments.thirdBase.category));
      }

      // setStory(rejectionStory);
      setFullData(data)
      Toast.show({
        type: "success",
        text1: "Success",
        text2: response?.data.message
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
    fetchHomeBase();
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
            Story was <Text style={{ color: colors.red }}>
              {/* REJECTION! */}
              {homeBaseStory?.oldSelfStory.toUpperCase()}:
            </Text>
          </Text>
        </View>

        <View style={[styles.container, { paddingVertical: height * 0.015 }]}>
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              {homeBaseStory?.oldSelfStory.toUpperCase()}:
            </Text>
            {homeBaseStory?.oldSelfStoryDescription}
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
            {/* CHOSEN–NESS! */}
            {homeBaseStory?.newSelfStory.toUpperCase()}:
          </Text>
        </View>

        <View
          style={[styles.subContainer, { paddingVertical: height * 0.015 }]}
        >
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              {homeBaseStory?.newSelfStory.toUpperCase()}:
            </Text>
            {homeBaseStory?.newSelfStoryDescription}
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
              baseAssignments, 
              fullData,       
              selectionsObj   
            })}
          />
        </View>
      </ScrollView>
      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={colors.brown} />
        </View>
      )}
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
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});

export default HomeBase;
