import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
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

  const [selectedMap, setSelectedMap] = useState<
    Record<number, { optionIndex: number; optionText: string }>
  >({});

  const toggleOpen = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenId(prev => (prev === id ? null : id));
  };

  const onSelectOption = (
    groupId: number,
    optionIndex: number,
    optionText: string,
  ) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedMap(prev => ({
      ...prev,
      [groupId]: { optionIndex, optionText },
    }));
    setOpenId(null);
  };
  const navigation = useNavigation<NavigationProp<any>>();

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
                    {group.options.map((opt, idx) => (
                      <TouchableOpacity
                        key={idx}
                        activeOpacity={0.7}
                        onPress={() => onSelectOption(group.id, idx, opt)}
                        style={styles.optionRow}
                      >
                        <Text style={styles.optionText}>{opt}</Text>
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
            onPress={() => navigation.navigate('BaseballDiamond')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Questionnaire;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },

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

  /* Row: left red button + right column (question box + dropdown) */
  rowContainer: {
    width: width * 0.95,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: height * 0.015,
    gap: width * 0.03, // Added gap between red and grey containers
  },

  /* left red button */
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

  /* right column */
  rightColumn: {
    width: width * 0.57, // Slightly reduced to accommodate the gap
  },

  /* grey question box - FIXED */
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

  /* dropdown plain text list */
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
});
