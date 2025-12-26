import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect, useState, useMemo } from 'react';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState<any[]>([])
  const User = useSelector((state: RootState) => state.role.user);
  console.log(" ----- Home Screen Rendered ----")
  const navigation = useNavigation<NavigationProp<any>>();
  if (!images.background) console.warn('Background image is missing');

  const data = [
    {
      id: '1',
      title1: 'MEASURE YOUR',
      title2: 'SPIRITUAL GROWTH',
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
      navigate: 'AmenPrinciples',
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
      navigate: 'DepositInterestReps',
    },
    {
      id: '6',
      title1: 'THE HOLY SPIRIT',
      title2: 'AAA CARD',
      image: images.card,
      navigate: 'HolySpirits',
    },
    {
      id: '7',
      title1: 'THE DAILY PURPOSE',
      title2: 'PLANNER AND JOURNAL',
      image: images.planner,
      navigate: 'PurposePlanner',
    },
    {
      id: '8',
      title1: 'LOVE DEPOSITS &',
      title2: 'WITHDRAWALS',
      image: images.deposits,
      navigate: 'LoveDeposits',
    },
    {
      id: '9',
      title1: "GOD'S PURPOSE ",
      title2: 'TOOLBOX',
      image: images.toolbox,
      navigate: 'PurposeToolbox',
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
  ];

  const coreValue = {
    id: '1',
    title1: 'MEASURE YOUR',
    title2: 'SPIRITUAL GROWTH',
    image: images.Heart,
    navigate: 'SpiritualGrowth',
  };

  const mapToolToScreen = (tool: any) => {
    switch (tool.id) {
      case 18: return 'DailyPrayerMacro';
      case 19: return 'HolySpirits';
      case 20: return 'AmenPrinciples';
      case 21: return 'ClosingSpirits';
      case 22: return 'LoveDeposits';
      case 23: return 'PurposeToolbox';
      case 24: return 'SevenLaws';
      case 25: return 'ThreeFoldSpirtual';
      case 26: return 'PurposeInstrumental';
      case 27: return 'GiftJourney';
      case 28: return 'CaringDeeds';
      case 29: return 'Pyramid';
      case 30: return 'Thermostat';
      case 31: return 'SpirtualGrowthStages';
      case 32: return 'SelfLoveMindfulness';
      case 33: return 'GoldenRule';
      case 34: return 'GodLoveBankCurriculum';
      default: return 'ToolDetail'; // fallback
    }
  };

  const fetchtoolsofthinking = async () => {
    try {
      setLoading(true);

      const { response } = await apiHelper(
        "GET",
        "tools/tools-of-thinking",
        {}
      );

      if (response?.status) {
        const mappedTools = response.data.data.map((tool: any) => ({
          ...tool,
          navigate: mapToolToScreen(tool),
        }));
        console.log("Tools of Thiking", response.data.data)
        setTools(mappedTools);

      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Failed to fetch Tool of Thinking ",
        });
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchtoolsofthinking();
  }, []);

  // const renderItem = ({ item, index }: any) => {
  //   return (
  //     <View style={{ gap: height * 0.02 }}>
  //       {index === 1 && (
  //         <View style={styles.toolsContainer}>
  //           <Text style={styles.toolsText}>Tools of Thinking</Text>
  //         </View>
  //       )}
  //       <View style={{ alignItems: "center" }}>
  //         <View style={styles.containerSec}>
  //           <View style={styles.headTextMain}>
  //             <View style={styles.headText}>
  //               <Text style={styles.title}>{item.title1}</Text>
  //               <Text style={styles.title}>{item.title2}</Text>
  //             </View>
  //             <Image
  //               source={item.image ? item.image : images.Heart}
  //               style={styles.itemImg}
  //             />
  //           </View>
  //           <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(item.navigate)} style={styles.startBtnMain}>
  //             <Text style={styles.startBtnText}>Start</Text>
  //             <Image source={images.forward} style={styles.forwardImg} />
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   )
  // };

  //  const renderItem = ({ item }: any) => (
  //   <View style={{ alignItems: 'center', marginBottom: height * 0.03 }}>
  //     <View style={styles.containerSec}>
  //       <View style={styles.headTextMain}>
  //         <View style={styles.headText}>
  //           <Text style={styles.title}>{item.title1}</Text>
  //           <Text style={styles.title}>{item.title2}</Text>
  //         </View>
  //         <Image
  //           source={item.image ? item.image : images.Heart}
  //           style={styles.itemImg}
  //         />
  //       </View>
  //       <TouchableOpacity
  //         activeOpacity={0.7}
  //         onPress={() => navigation.navigate(item.navigate)}
  //         style={styles.startBtnMain}
  //       >
  //         <Text style={styles.startBtnText}>Start</Text>
  //         <Image source={images.forward} style={styles.forwardImg} />
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );

  const splitTitle = (text: string) => {
    if (!text) return { line1: '', line2: '' };

    const words = text.split(' ');
    const mid = Math.ceil(words.length / 2);

    return {
      line1: words.slice(0, mid).join(' '),
      line2: words.slice(mid).join(' '),
    };
  };


  const renderItem = ({ item }: any) => {
    const { line1, line2 } = item.title1
      ? { line1: item.title1, line2: item.title2 }
      : splitTitle(item.name);

    return (
      <View style={{ alignItems: 'center', marginBottom: height * 0.03 }}>
        <View style={styles.containerSec}>
          <View style={styles.headTextMain}>
            <View style={styles.headText}>
              <Text style={styles.title}>{line1}</Text>
              {line2 ? <Text style={styles.title}>{line2}</Text> : null}
              {/* <Text style={styles.title}>{item.title1 || item.name}</Text> */}
              {/* <Text style={styles.title}>{item.title2 || ""}</Text> */}
            </View>
            <Image source={{uri: `http://18.204.175.233:3001/${item.image}`}} style={styles.itemImg} />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(item.navigate, { tool: item })}
            style={styles.startBtnMain}
          >
            <Text style={styles.startBtnText}>Start</Text>
            <Image source={images.forward} style={styles.forwardImg} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
      <View>
        <TopHeader isMenu={true} notification={true} isProfile={true} />
      </View>
      <ImageBackground
        source={images.background}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <FlatList
          data={[coreValue, ...tools]}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <Text style={styles.welcome}>
              Welcome {User?.firstName || 'Jaydon'}
            </Text>
          }
          renderItem={({ item, index }) => {
            if (index === 0) {
              return (
                <>
                  <Text style={styles.values}>Core Values</Text>
                  {renderItem({ item })}
                  <Text style={[styles.valuesSec, { marginTop: 10 }]}>
                    Tools of Thinking
                  </Text>
                </>
              );
            }
            return renderItem({ item });
          }}
          contentContainerStyle={{
            paddingBottom: height * 0.1,
            rowGap: -height * 0.02,
          }}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size={"large"} color={colors.marhoon} />
        </View>
      )}
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
    // top: height * 0.05,
    left: width * 0.05,
  },
  valuesSec: {
    fontFamily: fontFamily.UrbanistExtraBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    left: width * 0.05,
  },
  img: {
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
  },
  // Added Tools of Thinking styles
  toolsContainer: {
    top: height * 0.03,
    paddingHorizontal: width * 0.05,
  },
  toolsText: {
    fontFamily: fontFamily.UrbanistExtraBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    textAlign: 'left',
  },
  container: {
    backgroundColor: colors.white,
    width: width * 0.9,
    height: height * 0.2,
    // paddingBottom: height * 0.025,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignSelf: 'center',
    top: height * 0.03,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  containerSec: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.018,
    marginTop: height * 0.03,
    backgroundColor: colors.white,
    borderRadius: 18,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    width: width * 0.85,
  },
  headTextMain: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headText: {
    bottom: height * 0.015
  },
  title: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  heart: {
    alignSelf: 'center',
    left: width * 0.29,
    top: height * 0.05,
  },
  itemImg: {
    height: height * 0.1,
    width: width * 0.25,
    resizeMode: "contain",
  },
  measure: {
    fontFamily: fontFamily.UrbanistBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    left: width * 0.05,
    bottom: height * 0.05,
  },
  btn: {
    bottom: height * 0.035,
    left: width * 0.05,
  },
  startBtnMain: {
    backgroundColor: colors.marhoon,
    padding: 10,
    flexDirection: "row",
    gap: width * 0.07,
    alignItems: "center",
    width: width * 0.3,
    borderRadius: 30,
    bottom: height * 0.02
  },
  startBtnText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.md,
    color: colors.white,
    left: width * 0.05
  },
  forwardImg: {
    width: width * 0.06,
    height: height * 0.018,
    resizeMode: "contain"
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
  }
});

export default Home;
