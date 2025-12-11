
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
import HTMLView from 'react-native-htmlview';

const TermsConditions = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [termsData, setTermsData] = useState<any>(null);
  const token = useSelector((state: any) => state.role.userAuthToken);


const fetchTermsAndConditions = async () => {
  const { response } = await apiHelper(
    "GET",
    "content/terms-and-conditions",
    {},
    token
  );

  if (response && response.status) {
    const raw = response.data.data.body || "";

    const cleanHTML = (html: string) => {
  let s = String(html);

  // 1) Remove ALL style attributes (kills margin, padding, line-height)
  s = s.replace(/style\s*=\s*"[^"]*"/gi, "");

  // 2) Remove all line breaks completely
  s = s.replace(/(\r\n|\n|\r)/gm, "");

  // 3) Remove all &nbsp; (backend fake spacing)
  s = s.replace(/&nbsp;/gi, "");

  // 4) Remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // 5) Remove empty tags including <p>, <div>, <span>, <br>
  s = s.replace(
    /<(p|div|span|section|article|strong|em|b|i|h1|h2|h3|h4|h5|h6)[^>]*>(\s|<br\s*\/?>)*<\/\1>/gi,
    ""
  );

  // 6) Collapse multiple <br> into SINGLE <br>
  s = s.replace(/(<br\s*\/?>\s*){2,}/gi, "<br/>");

  // 7) Remove paragraphs that contain only whitespace
  s = s.replace(/<p[^>]*>\s*<\/p>/gi, "");

  // 8) Convert block elements to inline (prevents vertical spacing)
  s = s.replace(/<(p|div|section|article)([^>]*)>/gi, "<span>");
  s = s.replace(/<\/(p|div|section|article)>/gi, "</span>");

  // 9) Remove whitespace BETWEEN tags completely
  s = s.replace(/>\s+</g, "><");

  // 10) Remove extra spaces within text
  s = s.replace(/\s{2,}/g, " ");

  // 11) Remove leading/trailing whitespace
  s = s.trim();

  return s;
};

    const cleaned = cleanHTML(raw);

    setTermsData({
      ...response.data.data,
      body: cleaned,
    });

    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Terms & Conditions fetched successfully",
    });
  } else {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: response?.message || "Failed to load Terms & Conditions",
    });
  }
};

  useEffect(() => {
    fetchTermsAndConditions();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Terms & Conditions" isBack={true} />

      <ScrollView style={{ padding: width * 0.05 }}>
       {termsData ? (
            <>
              {/* <Text style={styles.heading}>{termsData.heading}</Text>
              <Text style={styles.subheading}>{termsData.subheading}</Text> */}

              <HTMLView
                value={termsData.body}
                stylesheet={htmlStyles}
              />
            </>
          ) : (
            <Text style={styles.paraText}>Terms and Condition not available.</Text>
          )}
      </ScrollView>

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
  heading: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    marginBottom: 10,
  },
  subheading: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.md,
    color: colors.darkGray,
    marginBottom: 15,
  },
  paraText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    textAlign: 'justify',
    color: colors.darkGray,
  },
  btn: {
    alignSelf: 'center',
    marginBottom: height * 0.04,
  },
});

const htmlStyles = StyleSheet.create({
  p: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    lineHeight: height * 0.023,
    marginBottom: 8,
  },
  h1: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    marginVertical: 10,
    color: colors.black,

  },
  h2: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.md,
    marginTop: 15,
    marginBottom: 5,
    color: colors.black,

  }
});

export default TermsConditions;
