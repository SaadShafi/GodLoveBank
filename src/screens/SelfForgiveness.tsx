import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import Sound from 'react-native-sound';

const SelfForgiveness = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const soundRef = useRef<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const route = useRoute<any>();
  const { coreValue } = route.params || {};
  console.log('Self Forgiveness Data:', coreValue);

  const toggleCount = (count: number) => {
    setSelectedCount(selectedCount === count ? null : count);
  };

  const isCountSelected = (count: number) => selectedCount === count;

  const CountButton = ({ number }: { number: number }) => (
    <TouchableOpacity
      style={[
        styles.countButton,
        isCountSelected(number) && styles.countButtonSelected,
      ]}
      onPress={() => toggleCount(number)}
    >
      <Text
        style={[
          styles.countText,
          isCountSelected(number) && styles.countTextSelected,
        ]}
      >
        {number}
      </Text>
    </TouchableOpacity>
  );

  Sound.setCategory('Playback');

  const playAudio = () => {
    if (!coreValue?.audioUrl) {
    console.log('Audio URL not found');
    return;
  }

  const audioFullUrl = `http://18.204.175.233:3001/${coreValue.audioUrl}`;

  console.log('Playing:', audioFullUrl);

  soundRef.current?.stop();
  soundRef.current?.release();

  soundRef.current = new Sound(audioFullUrl, undefined, (error) => {
    if (error) {
      console.log('Sound load error:', error);
      return;
    }

    soundRef.current.play((success) => {
      if (!success) {
        console.log('Playback failed');
      }
    });
  });
};

const toggleAudio = () => {
  if (isAudioPlaying) {
    // If audio is playing, pause it
    soundRef.current?.pause();
    setIsAudioPlaying(false);
  } else {
    // If audio is not playing, start it
    if (!coreValue?.audioUrl) return;
    const audioFullUrl = `http://18.204.175.233:3001/${coreValue.audioUrl}`;

    // Release previous instance
    soundRef.current?.stop();
    soundRef.current?.release();

    soundRef.current = new Sound(audioFullUrl, undefined, (error) => {
      if (error) {
        console.log('Sound load error:', error);
        return;
      }

      soundRef.current?.play((success) => {
        setIsAudioPlaying(false); // when playback ends, reset icon
        if (!success) console.log('Playback failed');
      });

      setIsAudioPlaying(true); // start playing
    });
  }
};

 useEffect(() => {
  return () => {
    soundRef.current?.stop();
    soundRef.current?.release();
  };
}, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* ✅ Fixed header on top */}
      <View style={styles.headerContainer}>
        <TopHeader isBack={true} />
      </View>

      {/* ✅ Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image source={images.forgiveness} style={styles.img} />

        {/* Count buttons row */}
        <View style={styles.countsContainer}>
          {[1, 2, 3, 4, 5].map(number => (
            <CountButton key={number} number={number} />
          ))}
        </View>

        <Text style={styles.jan}>MARCH</Text>
        <Text style={styles.luke}>
          1. The Unforgiving Servant (Mt. 18:21-35)
        </Text>
        <Text style={styles.peter}>2. Judas Betrays Jesus (Mt. 26:14-16)</Text>
        <Text style={styles.nanas}>
          3. Joseph Forgives Brothers (Gen. 45:1-28)
        </Text>
        <Text style={styles.publican}>
          4. Esau Forgives Jacob (Genesis 33:1-20)
        </Text>

        <View>
          <Text style={styles.today}>I will forgive today with God’s</Text>
          <Text style={styles.today}>forgiveness, like I’d like them to</Text>
          <Text style={styles.today}>forgive me!</Text>
        </View>

        <Image source={images.low} style={styles.low} />

        <View style={{ gap: height * 0.02 }}>
          <View style={styles.btn}>
            <CustomButton
              btnHeight={height * 0.06}
              btnWidth={width * 0.85}
              borderRadius={20}
              backgroundColor={colors.lightmarhoon}
              text="Continue"
              textColor={colors.white}
              onPress={() => navigation.navigate("CoreValuesTimer", { coreValueId: 18, fromScreen: 'SelfForgiveness' })}

            />
          </View>

          <View style={styles.btn}>
            <CustomButton
              btnHeight={height * 0.06}
              btnWidth={width * 0.85}
              borderRadius={20}
              backgroundColor={colors.white}
              borderColor={colors.marhoon}
              borderWidth={1}
              text="Move To Next Core Values"
              textColor={colors.marhoon}
              onPress={() => navigation.navigate('LoveDepositReps')}
            />
          </View>
        </View>
        {/* <TouchableOpacity activeOpacity={0.7} onPress={playAudio}>
          <Image source={images.audio} style={styles.audio} />
        </TouchableOpacity> */}
        <TouchableOpacity activeOpacity={0.7} onPress={toggleAudio}>
            <View style={{ flexDirection: 'row', alignSelf: 'center', gap: width * 0.02 }}>
              <Image source={images.audio} style={styles.audio} />
              <Image
                 source={isAudioPlaying ? images.PlayButtonImg : images.PauseButtonImg} // corrected
                   style={styles.audio}
                />
            </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  scrollContainer: {
    paddingTop: height * 0.08,
  },
  img: {
    alignSelf: 'center',
    bottom: height * 0.12,
    width: width * 0.999,
    height: height * 0.63,
  },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    top: height * 0.03
  },
  countButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.lightmarhoon,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  countButtonSelected: {
    backgroundColor: colors.lightGreen,
    borderColor: colors.green,
  },
  countText: {
    fontSize: fontSizes.md,
    fontFamily: fontFamily.UrbanistSemiBold,
    color: colors.black,
  },
  countTextSelected: {
    color: colors.white,
  },
  jan: {
    alignSelf: 'center',
    bottom: height * 0.4,
    color: colors.white,
    fontFamily: fontFamily.UrbanistExtraBold,
    fontSize: fontSizes.lg2,
  },
  luke: {
    alignSelf: 'center',
    bottom: height * 0.37,
    color: colors.white,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  peter: {
    alignSelf: 'center',
    bottom: height * 0.35,
    color: colors.white,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  nanas: {
    alignSelf: 'center',
    bottom: height * 0.33,
    color: colors.white,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  publican: {
    alignSelf: 'center',
    bottom: height * 0.31,
    color: colors.white,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.sm,
  },
  today: {
    alignSelf: 'center',
    bottom: height * 0.26,
    color: colors.black,
    fontFamily: fontFamily.UrbanistSemiBold,
    fontSize: fontSizes.md,
  },
  low: {
    alignSelf: 'center',
    bottom: height * 0.12,
  },
  btn: {
    alignSelf: 'center',
    bottom: height * 0.09,
  },
  audio: {
    alignSelf: 'center',
    bottom: height * 0.06,
  },
});

export default SelfForgiveness;
