import { StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import TopHeader from '../components/Topheader';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const HomeBase = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader isBack={true} text="Home Base" />

      <Text style={styles.text}>Since Your Old Self-Love</Text>
      <Text style={styles.text}>Story Was REJECTION!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.GilroyExtraBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    alignSelf: 'center',
  },
});

export default HomeBase;
