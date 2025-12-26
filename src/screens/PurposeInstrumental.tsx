import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useRef, useState } from 'react';
import Video from 'react-native-video';

const PurposeInstrumental = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<Video>(null);
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();
  const tool = (route.params as any)?.tool;
  const fullUrl = tool?.audioUrl ? `http://18.204.175.233:3001/${tool.audioUrl}` : '';
  console.log("Params in the Daily Prayer Macro Strategy Screen!", route.params);


  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };


  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Header stays fixed */}
      <View style={styles.mainContainer}>
        <TopHeader
          isBack={true}
          text={
            <Text style={styles.headerText}>PURPOSE INSTRUMENTAL GOALS</Text>
          }
        />
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.instrumental} style={styles.img} />
        <Text style={styles.mathew}>PURPOSE INSTRUMENTAL GOALS</Text>

        <Text style={styles.description}>
          PURPOSE INSTRUMENTAL GOALS helps you discipline yourself daily to
          fulfill your purposes in life and to keep a record of your efforts.
          Purpose Instrumental goals are Steps, States, and Strategies toward
          the accomplishment of what you want to BE, DO, HAVE, SHARE, and
          EXPERIENCE in life.
        </Text>

        <Text style={styles.description}>
          First, they help you take daily STEPS to love and care for your mind
          and BODY.
        </Text>

        <Text style={styles.description}>
          Second, they help you create STATES to invest in, care for, and save
          the bank of your SOUL.
        </Text>

        <Text style={styles.description}>
          Third, purpose instrumental help you develop STRATEGIES to Worship,
          Pray, and Study God's Word in your SPIRIT.
        </Text>

        <Text style={styles.description}>
          To also help you design Nutritional and Healthy meals and to maintain
          Daily Hygiene and get enough Sleep, Rest, & Recreation.
        </Text>

        <Text style={styles.prayer}>
          WHEN AND HOW TO USE PURPOSE INSTRUMENTAL GOALS!
        </Text>

        <View style={{ gap: height * 0.02, top: height * 0.04 }}>
          <View style={styles.row}>
            <Text style={styles.number}>1. </Text>
            <Text style={styles.text1}>
              When you want to set Purpose Instrumental Goals for what you want
              to BE!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>2. </Text>
            <Text style={styles.text2}>
              When you want to set Purpose Instrumental Goals for what you want
              to DO!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>3. </Text>
            <Text style={styles.text3}>
              When you set Purpose Instrumental Goals for what you want to HAVE!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>4. </Text>
            <Text style={styles.text4}>
              When you want to set Purpose Instrumental Goals for what you want
              to SHARE!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.number}>5. </Text>
            <Text style={styles.text4}>
              When you set Purpose Instrumental Goals for what you want to
              EXPERIENCE!
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.audioContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            top: height * 0.03,
            gap: width * 0.02,
          }}
        >
          <TouchableOpacity activeOpacity={0.7} onPress={handlePlayPause}>
            <Image source={isPlaying ? images.play : images.playbutton} />
          </TouchableOpacity>
          <Text style={styles.audio}>Audio Explanation</Text>
        </View>
        <View style={{ marginTop: height * 0.05, paddingHorizontal: width * 0.05 }}>
          <View style={{ height: 4, backgroundColor: colors.darkGray, borderRadius: 30 }}>
            <View style={{ height: '100%', width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`, backgroundColor: colors.marhoon, borderRadius: 2 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: height * 0.01 }}>
            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            <Text style={styles.timeText}>{formatTime(duration)}</Text>
          </View>
        </View>

        <View style={styles.btn}>
          <CustomButton
            text="Continue"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.marhoon}
            borderRadius={20}
            onPress={() => navigation.navigate('InstrumentalGoals')}
          />
        </View>
      </View>
      <Video
        ref={videoRef}
        source={{ uri: fullUrl }}
        paused={!isPlaying}
        onProgress={(data) => {
          console.log('onProgress', data.currentTime);
          setCurrentTime(data.currentTime);
        }}
        onLoad={(data) => {
          console.log('onLoad', data.duration);
          setDuration(data.duration);
        }}
        onEnd={() => { videoRef.current?.seek(0); setIsPlaying(false); setCurrentTime(0); }}
        playInBackground={false}
        playWhenInactive={false}
        style={{ height: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.purple,
    width: width,
    // height: height * 0.1,
    height: Platform.OS === 'ios' ? height * 0.15 : height * 0.1,
    justifyContent: 'center',
    paddingHorizontal: width * 0.04,
    borderBottomRightRadius: 34,
    borderBottomLeftRadius: 34,
  },
  headerText: {
    color: colors.white,
    fontSize: fontSizes.sm2,
    fontFamily: fontFamily.UrbanistBold,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingTop: height * 0.01, // space below header
    paddingBottom: height * 0.05,
  },
  img: {
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
  mathew: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.04,
    top: height * 0.01,
    color: colors.black

  },
  description: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    paddingHorizontal: width * 0.04,
    textAlign: 'justify',
    top: height * 0.03,
    lineHeight: fontSizes.sm * 1.6,
    marginBottom: height * 0.03,
  },
  prayer: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    paddingHorizontal: width * 0.04,
    top: height * 0.02,
    color: colors.black

  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
  },
  number: {
    fontFamily: fontFamily.GilroyRegular,
    color: colors.black

  },
  text1: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.9,
  },
  text2: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.9,
  },
  text3: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  text4: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  text5: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    width: width * 0.87,
  },
  audioContainer: {
    backgroundColor: colors.purple,
    width: width,
    height: height * 0.23,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  audio: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.white,
    // left: width * 0.22,
    // top: height * 0.04,
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.01,
  },
  timeText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.white,
  },
});

export default PurposeInstrumental;
