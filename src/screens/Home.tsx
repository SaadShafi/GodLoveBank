import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const data = [
    {
      id: '1',
      title1: 'Measure your',
      title2: 'spiritual Growth',
      image: images.Heart,
      navigate: 'SpiritualGrowth',
    },
    {
      id: '2',
      title1: 'THE DAILY PRAYER',
      title2: 'MACRO STRATEGY',
      image: images.macro,
      navigate: 'DailyPrayerMacro',
    },
    {
      id: '3',
      title1: 'THE A-M-E-N ',
      title2: 'CLOSING SPIRITS',
      image: images.amen,
      navigate: 'LoveDepositReps',
    },
    {
      id: '4',
      title1: 'OPENING AND',
      title2: 'CLOSING PRINCIPLE',
      image: images.spirits,
      navigate: 'ClosingSpirits',
    },
    {
      id: '5',
      title1: 'LOVE DEPOSIT',
      title2: 'INTEREST REPS',
      image: images.Compounding,
      navigate: 'LoveDepositReps',
    },
    {
      id: '6',
      title1: 'THE HOLY SPIRIT',
      title2: 'AAA CARD',
      image: images.card,
      navigate: 'LoveDepositReps',
    },
    {
      id: '7',
      title1: 'THE DAILY PURPOSE',
      title2: 'PLANNER AND JOURNAL',
      image: images.planner,
      navigate: 'LoveDepositReps',
    },
    {
      id: '8',
      title1: 'LOVE DEPOSITS &',
      title2: 'WITHDRAWALS',
      image: images.deposits,
      navigate: 'LoveDepositReps',
    },
    {
      id: '9',
      title1: 'GOD’S PURPOSE ',
      title2: 'TOOLBOX',
      image: images.toolbox,
      navigate: 'LoveDepositReps',
    },
    {
      id: '10',
      title1: 'SEVEN LAWS OF SOWING',
      title2: 'AND REAPING FAITH!',
      image: images.reapin,
      navigate: 'SevenLaws',
    },
    {
      id: '11',
      title1: 'GLB RATIONALE:THREEFOLD',
      title2: 'SPIRITUAL BEING ',
      image: images.Compounding,
      navigate: 'ThreeFoldSpirtual',
    },
    {
      id: '12',
      title1: 'PURPOSE',
      title2: 'INSTRUMENTAL GOALS',
      image: images.instruments,
      navigate: 'PurposeInstrumental',
    },
    {
      id: '13',
      title1: 'THE FIVE STATIONS OF',
      title2: 'THE GIFT JOURNEY',
      image: images.stations,
      navigate: 'GiftJourney',
    },
    {
      id: '14',
      title1: 'THE FIVE CARING ',
      title2: 'DEEDS OF THE BODY',
      image: images.deeds,
      navigate: 'CaringDeeds',
    },
    {
      id: '15',
      title1: 'THE  100%',
      title2: 'PYRAMID!',
      image: images.pyramid,
      navigate: 'Pyramid',
    },
    {
      id: '16',
      title1: 'THE  THERMOSTAT',
      title2: 'OF YOUR SOUL!',
      image: images.thermostat,
      navigate: 'Thermostat',
    },
    {
      id: '17',
      title1: 'THE FIVE STAGES OF ',
      title2: 'SPIRITUAL GROWTH',
      image: images.stages,
      navigate: 'SpirtualGrowthStages',
    },
    {
      id: '18',
      title1: 'NEW SELF-LOVE ',
      title2: 'MINDFULNESS',
      image: images.mindful,
      navigate: 'SelfLoveMindfulness',
    },
    {
      id: '19',
      title1: 'GOLD RULE OF EFFECTIVE',
      title2: 'COMMUNICATION',
      image: images.stages,
      navigate: 'GoldenRule',
    },
    {
      id: '20',
      title1: 'Gods Love Bank',
      title2: 'Curriculum',
      image: images.mindful,
      navigate: 'GodLoveBankCurriculum',
    },
    // add more items as needed
  ];

  const renderItem = ({ item }: any) => (
    <View style={{ gap: height * 0.03 }}>
      <View style={styles.container}>
        <Image source={item.image} style={styles.heart} />
        <View style={{ gap: height * 0.005 }}>
          <Text style={styles.measure}>{item.title1}</Text>
          <Text style={styles.measure}>{item.title2}</Text>
        </View>
        <View style={styles.btn}>
          <CustomButton
            text="Start"
            textColor={colors.white}
            backgroundColor={colors.marhoon}
            btnHeight={height * 0.05}
            btnWidth={width * 0.35}
            borderRadius={30}
            onPress={() => navigation.navigate(item.navigate)}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
      <TopHeader isMenu={true} notification={true} isProfile={true} />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <Text style={styles.welcome}>Welcome jaydon</Text>
            <Text style={styles.values}>Core Values</Text>
            <Image source={images.background} style={styles.img} />
          </>
        }
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: height * 0.1,
          rowGap: height * 0.03,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.xl,
    color: colors.black,
    left: width * 0.05,
    top: height * 0.02,
  },
  values: {
    fontFamily: fontFamily.UrbanistExtraBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    top: height * 0.05,
    left: width * 0.05,
  },
  img: {
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
  },
  container: {
    backgroundColor: colors.white,
    width: width * 0.9,
    height: height * 0.18,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignSelf: 'center',
    top: height * 0.03,
    justifyContent: 'center',
  },
  heart: {
    alignSelf: 'center',
    left: width * 0.3,
    top: height * 0.05,
  },
  measure: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    left: width * 0.05,
    bottom: height * 0.05,
  },
  btn: {
    bottom: height * 0.04,
    left: width * 0.05,
  },
});

export default Home;
