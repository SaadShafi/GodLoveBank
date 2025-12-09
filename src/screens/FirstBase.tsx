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
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';
import { useEffect, useEffectEvent, useState } from 'react';

type Props = NativeStackScreenProps<StackParamList, 'FirstBase'>;

const FirstBase = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState(null);
  const [fullData, setFullData] = useState(null);


  const fetchFirstBase = async () => {
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
  
        const data = response?.data?.data;
        const list = response?.data?.data?.selfStoryList || [];
        const worthlessnessStory = list.find(
          item => item.oldSelfStory === "worthlessness"
        );
  
        setStory(worthlessnessStory);
        setFullData(data)
      } finally {
        setLoading(false)
      }
    }

      useEffect(() => {
        fetchFirstBase();
      }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="1st Base" isBack={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height * 0.1 }}
      >
        {/* OLD SELF-LOVE SECTION */}
        <View style={{ gap: width * 0.01 }}>
          <Text style={[styles.textOne, { textAlign: 'center' }]}>
            Since Your <Text style={{ color: colors.red }}>Old Self-Love</Text>
          </Text>
          <Text style={[styles.textTwo, { textAlign: 'center' }]}>
            Story was <Text style={{ color: colors.red }}>WORTHLESSNESS!</Text>
          </Text>
        </View>

        <View style={[styles.container, { paddingVertical: height * 0.015 }]}>
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              {/* WORTHLESSNESS: */}
              {story?.oldSelfStory?.toUpperCase() || ""}
              {": "}
            </Text>
            {story?.oldSelfStoryDescription}
          </Text>
        </View>

        {/* NEW SELF-LOVE SECTION */}
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
            GREATNESS!
          </Text>
        </View>

        <View
          style={[styles.subContainer, { paddingVertical: height * 0.015 }]}
        >
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              {/* GREATNESS: */}
              {story?.newSelfStory?.toUpperCase() || ""}
              {": "}
            </Text>
            {story?.newSelfStoryDescription}
          </Text>
        </View>

        {/* NEXT BUTTON */}
        <View style={styles.btnMain}>
          <CustomButton
            text="Next"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={() => navigation.navigate('SecondBase')}
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

export default FirstBase;
