import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';

type Props = NativeStackScreenProps<StackParamList, 'Questionnaire'>;

// enable LayoutAnimation on Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const groupsData = [
  {
    id: 1,
    title: 'Group 1',
    question: 'I Often Disengage In My Life',
    options: [
      'I withdraw when I feel stressed',
      'I stop answering messages',
      'I avoid social invites',
    ],
  },
  {
    id: 2,
    title: 'Group 2',
    question: 'I Need To Be Accurate Around Others',
    options: [
      'I check details repeatedly',
      'I get anxious with mistakes',
      'I avoid risking being wrong',
    ],
  },
  {
    id: 3,
    title: 'Group 3',
    question: 'I Have Difficulty Trusting Others',
    options: [
      'I expect betrayal',
      'I keep people at a distance',
      'I question motives',
    ],
  },
  {
    id: 4,
    title: 'Group 4',
    question: 'I Often Detach Myself From Others',
    options: ['I feel numb', 'I isolate myself', 'I avoid closeness'],
  },
  {
    id: 5,
    title: 'Group 5',
    question: 'I Control Situations So I Won’t Get Hurt',
    options: [
      'I micromanage',
      'I struggle to delegate',
      'I fear unpredictability',
    ],
  },
  {
    id: 6,
    title: 'Group 6',
    question: 'I Often Feel Wronged And Mistreated',
    options: ['I replay conflicts', 'I keep score', 'I expect injustice'],
  },
  {
    id: 7,
    title: 'Group 7',
    question: 'I Often Struggle With Feeling Of Rejection',
    options: [
      'I assume I am unwanted',
      'I am sensitive to silence',
      'I avoid trying',
    ],
  },
];

const SUCCESS_GREEN =
  (colors as any).success || (colors as any).green || '#27ae60';

const Questionnaire: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false)
  const [apiQuestions, setApiQuestions] = useState({});
  const [selectedMap, setSelectedMap] = useState<
  Record<
    number,
    {
      optionIndex: number;
      optionText: string;
      category: string;
      categoryId: number;
      categoryTitle: string;
    }
  >
>({});

  const toggleOpen = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenId(prev => (prev === id ? null : id));
  };

  const onSelectOption = (
    groupId: number,
    optionIndex: number,
    optionText: string,
    category: string,
  ) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedMap(prev => ({
      ...prev,
      [groupId]: {
        optionIndex,
        optionText,
        category,
        categoryId: groupId,
        categoryTitle: groupsData.find(g => g.id === groupId)?.title || "",
      },
    }));
    setOpenId(null);
  };

  const fetchQuestions = async () => {
    setLoading(true)

    try {
      const { response, error } = await apiHelper(
        "GET",
        "general/questions",
        {},
        null
      )
      console.log("Response from the Questions API", response)
      setApiQuestions(response?.data?.data?.questions || {});
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
    fetchQuestions()
  }, [])

  const getGroupKey = (id) => `group_${id}`;

  return (
    <View style={styles.container}>
      <TopHeader isBack={true} text="Questionnaire" />

      <View style={{ gap: height * 0.001 }}>
        <Text style={styles.helperText}>
          You can learn your Old Self-Love Story in three
        </Text>
        <Text style={styles.helperText}>
          to five minutes and your New Self-Love Story in
        </Text>
        <Text style={styles.helperText}>
          approximately the same amount of time.
        </Text>
      </View>

      <View style={styles.topBadgesRow}>
        <View style={styles.redBadge}>
          <Text style={styles.badgeText}>Old Self-Love Story</Text>
        </View>
        <View style={styles.blueBadge}>
          <Text style={styles.badgeText}>New Self-Love Story</Text>
        </View>
      </View>

      <View style={{ marginTop: height * 0.035 }}>
        <Text style={styles.bestText}>
          Choose one item from each group below which BEST
        </Text>
        <Text style={[styles.bestText, { marginTop: height * 0.006 }]}>
          Describes (Click Arrow For Questions)
        </Text>
      </View>

      <ScrollView
        style={{ marginTop: height * 0.02 }}
        contentContainerStyle={{
          paddingBottom: height * 0.12,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        {groupsData.map(group => {
          const isOpen = openId === group.id;
          const isSelected = !!selectedMap[group.id];

          return (
            <View key={group.id} style={styles.rowContainer}>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => toggleOpen(group.id)}
                style={[
                  styles.groupButton,
                  isSelected ? { backgroundColor: SUCCESS_GREEN } : null,
                ]}
              >
                <Text style={styles.groupTitle}>{group.title}</Text>

                {isSelected ? (
                  <Image source={images.tick} />
                ) : (
                  <Image source={images.arrow} />
                )}
              </TouchableOpacity>

              <View style={styles.rightColumn}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => toggleOpen(group.id)}
                  style={styles.questionBox}
                >
                  <View style={styles.textContainer}>
                    <Text
                      style={styles.questionText}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {isSelected
                        ? selectedMap[group.id].optionText
                        : group.question}
                    </Text>
                  </View>
                </TouchableOpacity>
                {isOpen && (
                  <View style={styles.dropdown}>
                    {(apiQuestions[getGroupKey(group.id)] || []).map((q, idx) => (
                      <TouchableOpacity
                        key={q.id}
                        activeOpacity={0.7}
                        onPress={() => onSelectOption(group.id, idx, q.question, q.category)}
                        style={styles.optionRow}
                      >
                        <Text style={styles.optionText}>{q.question}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>
          );
        })}

        <View style={styles.btnMain}>
          <CustomButton
            btnHeight={height * 0.06}
            btnWidth={width * 0.9}
            borderRadius={20}
            backgroundColor={colors.marhoon}
            text="Next"
            textColor={colors.white}
            onPress={() => {
              navigation.navigate('BaseballDiamond', {
                selections: selectedMap
              });
            }}
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
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  helperText: {
    alignSelf: 'center',
    color: colors.black,
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
  },
  topBadgesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  redBadge: {
    backgroundColor: colors.red,
    height: height * 0.07,
    width: width * 0.4,
    borderRadius: 18,
    justifyContent: 'center',
  },
  blueBadge: {
    backgroundColor: colors.blue,
    height: height * 0.07,
    width: width * 0.4,
    borderRadius: 18,
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    alignSelf: 'center',
  },
  bestText: {
    color: colors.black,
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    left: width * 0.07,
  },
  rowContainer: {
    width: width * 0.95,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: height * 0.015,
    gap: width * 0.03,
  },
  groupButton: {
    width: width * 0.35,
    height: height * 0.08,
    borderRadius: 24,
    backgroundColor: colors.red,
    paddingHorizontal: width * 0.035,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupTitle: {
    color: '#fff',
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
  },
  rightColumn: {
    width: width * 0.57,
  },
  questionBox: {
    width: '100%',
    height: height * 0.085,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
    paddingHorizontal: width * 0.04,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  questionText: {
    color: colors.black,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    lineHeight: height * 0.022,
  },
  dropdown: {
    marginTop: height * 0.012,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.008,
    backgroundColor: 'transparent',
  },

  optionRow: {
    paddingVertical: height * 0.012,
  },

  optionText: {
    color: colors.black,
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
  },
  btnMain: {
    top: height * 0.07,
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

export default Questionnaire;