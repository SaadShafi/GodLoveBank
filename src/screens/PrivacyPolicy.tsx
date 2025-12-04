import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import Toast from 'react-native-toast-message';
import { useEffect, useState } from 'react';
import { apiHelper } from '../services';
import { useSelector } from 'react-redux';

const PrivacyPolicy = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [privacyContent, setPrivacyContent] = useState<string | null>(null);
  const token = useSelector((state: any) => state.role.userAuthToken);

  const privacyPolicy = async () => {
    const { response, error } = await apiHelper(
      "GET",
      "content/privacy-policy",
      {},
      token
    );

    if (response && response.status) {
      const data = response.data;
      setPrivacyContent(data);
      console.log("Response of the Privacy Policy API", data);

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Privacy Policy Fetched sucessfully",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: response?.message || "Failed to load privacy policy",
      });
    }
  };

  useEffect(() => {
    privacyPolicy();
  }, []);

  return (
     <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Privacy Policy" isBack={true} />

         <View style={{ top: height * 0.02 }}>
        {privacyContent ? (
          typeof privacyContent === 'string' ? (
            <Text style={styles.paraText}>{privacyContent}</Text>
          ) : (
            <Text style={styles.paraText}>{JSON.stringify(privacyContent)}</Text>
          )
        ) : (
          <Text style={styles.paraText}>Privacy policy not available.</Text>
        )}
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
    flexGrow: 1,
  },
  paraText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    textAlign: 'justify',
    color: colors.darkGray,
    lineHeight: height * 0.023,
  },
});

export default PrivacyPolicy;



