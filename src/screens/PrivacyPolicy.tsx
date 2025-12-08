
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
import HTMLView from 'react-native-htmlview';

const PrivacyPolicy = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [privacyData, setPrivacyData] = useState<any>(null);
  const token = useSelector((state: any) => state.role.userAuthToken);

  const privacyPolicy = async () => {
    const { response } = await apiHelper(
      "GET",
      "content/privacy-policy",
      {},
      token
    );

    if (response && response.status) {
      setPrivacyData(response.data.data); // ✔ Correct
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Privacy Policy fetched successfully",
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

      <ScrollView style={{ padding: width * 0.05 }}>
        {privacyData ? (
          <>
            {/* Heading */}
            <Text style={styles.heading}>{privacyData.heading}</Text>

            {/* Subheading */}
            <Text style={styles.subheading}>{privacyData.subheading}</Text>

            {/* HTML Body */}
            <HTMLView
              value={privacyData.body}   // ✔ FIXED HERE
              stylesheet={htmlStyles}
            />
          </>
        ) : (
          <Text style={styles.paraText}>Privacy policy not available.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
    marginBottom: 10,
  },
  subheading: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.gray,
    marginBottom: 15,
  },
  paraText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
    textAlign: 'justify',
  },
});

const htmlStyles = StyleSheet.create({
  p: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
    lineHeight: height * 0.023,
    bottom: height * 0.12
  },
  h1: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
  },
  h2: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.md,
    bottom: height * 0.08
  },
  h3: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    bottom: height * 0.2

  },
  li: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
  }
});

export default PrivacyPolicy;


