import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';

const TermsConditions = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [termsCondition, setTermsCondition] = useState<string | null>(null);
  const token = useSelector((state: any) => state.role.userAuthToken);



  const privacyPolicy = async () => {
      const { response, error } = await apiHelper(
        "GET",
        "content/terms-and-conditions",
        {},
        token
      );
  
      if (response && response.status) {
        const data = response.data;
        setTermsCondition(data);
        console.log("Response of the Terms and Condition API", data);
  
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Terms and Condition Fetched sucessfully",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: response?.message || "Failed to load Terms and Condition",
        });
      }
    };
  
    useEffect(() => {
      privacyPolicy();
    }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Terms & Condition" isBack={true} />
      <View style={{ top: height * 0.02 }}>
              {termsCondition ? (
                typeof termsCondition === 'string' ? (
                  <Text style={styles.paraText}>{termsCondition}</Text>
                ) : (
                  <Text style={styles.paraText}>{JSON.stringify(termsCondition)}</Text>
                )
              ) : (
                <Text style={styles.paraText}>Terms and Condition not available.</Text>
              )}
            </View>

        <View style={styles.btn}>
          <CustomButton
            btnHeight={height * 0.06}
            btnWidth={width * 0.9}
            borderRadius={20}
            backgroundColor={colors.marhoon}
            text="I Accept"
            textColor={colors.white}
            onPress={() => navigation.goBack()}
          />
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
    top: height * 0.7,
  },
});

export default TermsConditions;
