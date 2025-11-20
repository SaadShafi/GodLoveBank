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

type Props = NativeStackScreenProps<StackParamList, 'FirstBase'>;

const FirstBase = () => {
  const navigation = useNavigation<NavigationProp<any>>();

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
              WORTHLESSNESS:
            </Text>
            The old self-love story of Worthlessness has home base and a life
            paradigm which makes you feel unworthy, undeserving, insignificant,
            inadequate, unimportant, and useless—like something valuable is
            missing in your soul. It makes you feel like you are never good
            enough. And this, in turn, causes you to underestimate your true
            worth. Worthlessness compels you to have a tendency to
            over-compensate and control everyone around you so you and don't
            feel the pain of worthlessness. Often, in your attempt to avoid
            feeling worthless you may begin to become manipulative in your
            words, thoughts, actions, and deeds. Therefore, the Stress Drivers
            for the story of Worthlessness are Overcompensation,you may result
            to Manipulation.
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
              GREATNESS:
            </Text>
            The new self-love story of Greatness makes you feel worthy. Since
            the Holy Spirit is great and He lives in you, now you feel great
            because you know Greater is He who is in you, than he who is in the
            world. This makes you feel worthy, deserving, significant,
            sufficient, important, and very valuable. You accept your greatness
            as a part of your spiritual inheritance and you believe that you are
            destined for greatness, for greatness underestimates your true
            worth. You avoid over-compensation and you refuse to control anyone
            or anything to get what you want. Instead, you learn to surrender
            and depend on the Holy Spirit to get what you want in life.
            Therefore, the Spirit Drivers for Greatness are Surrender and Depend
            on the power of the Holy Spirit.
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
