import { StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const HomeBase = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader isBack={true} text="Home Base" />

      <Text style={styles.text}>Since Your Old Self-Love</Text>
      <Text style={styles.text}>Story Was REJECTION!</Text>
      <View style={styles.container}>
        <View>
          <Text>
            REJECTION: The old self-love story of Rejection has a home base and
            a life paradigm which makes you feel unaccepted, disowned, denied,
            refused, disliked, and not good enough, like the black sheep in the
            family. It causes you to have a great fear of failure because
            failure, to you, equals rejection, and you avoid feeling rejected at
            any cost. Thus, you feel you always have to get everything right so
            you won't be rejected. Often, when you feel threatened by failure,
            you covertly close your spirit in rebellion to gain control, or you
            overtly under-compensate and settle for less in your life to avoid
            being rejected.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.GilroyExtraBold,
    fontSize: fontSizes.lg2,
    fontWeight: '700',
    color: colors.black,
    alignSelf: 'center',
  },
  container: {
    borderWidth: 1,
    height: height * 0.3,
    width: width * 0.89,
    color: colors.marhoon,
    alignSelf: 'center',
    top: height * 0.02,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default HomeBase;
