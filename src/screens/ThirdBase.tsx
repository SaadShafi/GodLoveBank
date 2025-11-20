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

type Props = NativeStackScreenProps<StackParamList, 'ThirdBase'>;

const ThirdBase = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="3rd Base" isBack={true} />

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
            Story was <Text style={{ color: colors.red }}>ABANDONMENT!!</Text>
          </Text>
        </View>

        <View style={[styles.container, { paddingVertical: height * 0.015 }]}>
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              ABANDONMENT:
            </Text>
            The old self-love story of Abandonment has a home base and a life
            paradigm which makes you feel a constant fear of being left,
            deserted, forsaken, neglected, and like you are alone; and this
            makes you feel misunderstood, and like you don't belong. Often,
            Abandonment causes you to not detach it. You often disengage from
            others emotionally, mentally, physically, and socially, and then you
            deny it when asked why you are actually doing it. Sometimes you may
            even become despondent to avoid being abandoned, even to the point
            of being dishonest with your own feelings. Therefore, the Stress
            Drivers for Abandonment are Disengagement, and Denial, and when you
            get desperate you may be Dishonest.
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
            ATONEMENT!
          </Text>
        </View>

        <View
          style={[styles.subContainer, { paddingVertical: height * 0.015 }]}
        >
          <Text style={styles.description}>
            <Text
              style={{ fontFamily: fontFamily.GilroyBold, color: colors.black }}
            >
              ATONEMENT:
            </Text>
            The new self-love story of Atonement makes you feel absolutely and
            totally connected to God, yourself, significant others, and your
            purpose in life. You don't allow yourself to be driven by separation
            pain anymore. You receive your atonement in every significant
            relationship in your life, especially in your relationship with the
            Holy Spirit. Atonement gives you a sense of congruency and
            connectedness in your spirit, soul, and body. As a result, you are
            able to stay engaged, focused, and connected in all of your key
            relationships. In fact, you refuse to disengage from any
            relationships in your life anymore—emotionally, mentally,
            physically, or socially. Therefore, the Spirit Drivers for the story
            of Atonement are Focus and Engagement with the Holy Spirit.
          </Text>
        </View>

        {/* NEXT BUTTON */}
        <View style={styles.btnMain}>
          <CustomButton
            text="Continue & Save"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={() => navigation.navigate('CreateProfile')}
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

export default ThirdBase;
