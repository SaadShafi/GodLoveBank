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

type Props = NativeStackScreenProps<StackParamList, 'SecondBase'>;

const SecondBase = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="2nd Base" isBack={true} />

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
            Story was <Text style={{ color: colors.red }}>ABUSE!</Text>
          </Text>
        </View>

        <View style={[styles.container, { paddingVertical: height * 0.015 }]}>
          <Text style={styles.description}>
            <Text style={{ fontFamily: fontFamily.GilroyBold }}>ABUSE:</Text>
            The old self-love story of Abuse has a home base and a life
            paradigm, mistreated, cheated, victimized, battered, robbed, and
            defenseless. You always feel like someone is going to hurt or harm
            you. Since you have been betrayed by someone you once trusted, you
            sabotage relationships with people trusting other real people. You
            then blame them for doing it. What you are really doing is testing
            your loved ones to see if they truly love you, and if you can trust
            trusting even in your relationship with God. Therefore, the Stress
            Drivers for the story of Abuse are Sabotage, and Blame, and when you
            get desperate you may Project your own abuse on others.
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
            PURPOSE!
          </Text>
        </View>

        <View
          style={[styles.subContainer, { paddingVertical: height * 0.015 }]}
        >
          <Text style={styles.description}>
            <Text style={{ fontFamily: fontFamily.GilroyBold }}>PURPOSE:</Text>
            The new self-love story of Purpose makes you feel a sense of calling
            on earth for a purpose. Your purpose gives you a sense of meaning,
            significance, and value in your life. In spite of what has happened
            for the good of your purpose and you have a destiny to fulfill. Now
            you live with daily passion, your passion equal to purpose, and God
            has called you to fulfill. Your painful experiences have taught you
            to find purpose. Now, you hold yourself accountable and responsible
            to the logic of the Holy Spirit without complaining or blaming or
            murmuring. Therefore, the Spirit Drivers for the story of Purpose
            are Accountability and Responsibility to the Holy Spirit!
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
            onPress={() => navigation.navigate('ThirdBase')}
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
    height: height * 0.36,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 16,
    top: height * 0.02,
  },
  subContainer: {
    borderWidth: 1,
    borderColor: colors.marhoon,
    height: height * 0.36,
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
  },
  btnMain: {
    top: height * 0.08,
    alignItems: 'center',
  },
});

export default SecondBase;
