import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const TermsConditions = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Terms & Condition" isBack={true} />
      <View style={styles.container}>
        <View style={{ top: height * 0.02, gap: height * 0.01 }}>
          <Text style={styles.paraText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text style={styles.paraText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text style={styles.paraText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>

        <View style={styles.btn}>
          <CustomButton
            btnHeight={height * 0.06}
            btnWidth={width * 0.9}
            borderRadius={20}
            backgroundColor={colors.marhoon}
            text="I Accept"
            textColor={colors.white}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: width * 0.06,
    backgroundColor: colors.lightBlue,
    top: height * 0.015,
    flex: 1,
  },
  paraText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    textAlign: 'justify',
    color: colors.darkGray,
    lineHeight: height * 0.023,
  },
  btn: {
    alignSelf: 'center',
    top: height * 0.12,
  },
});

export default TermsConditions;
