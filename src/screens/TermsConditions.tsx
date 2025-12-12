
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { fontFamily } from '../assets/Fonts';
// import CustomButton from '../components/CustomButton';
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';
// import { fontSizes } from '../utilities/fontsizes';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import Toast from 'react-native-toast-message';
// import { apiHelper } from '../services';
// import HTMLView from 'react-native-htmlview';

// const TermsConditions = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   const [termsData, setTermsData] = useState<any>(null);
//   const token = useSelector((state: any) => state.role.userAuthToken);


// const fetchTermsAndConditions = async () => {
//   const { response } = await apiHelper(
//     "GET",
//     "content/terms-and-conditions",
//     {},
//     token
//   );

//   if (response && response.status) {
//     const raw = response.data.data.body || "";

//     const cleanHTML = (html: string) => {
//   let s = String(html);

//   // 1) Remove ALL style attributes (kills margin, padding, line-height)
//   s = s.replace(/style\s*=\s*"[^"]*"/gi, "");

//   // 2) Remove all line breaks completely
//   s = s.replace(/(\r\n|\n|\r)/gm, "");

//   // 3) Remove all &nbsp; (backend fake spacing)
//   s = s.replace(/&nbsp;/gi, "");

//   // 4) Remove HTML comments
//   s = s.replace(/<!--[\s\S]*?-->/g, "");

//   // 5) Remove empty tags including <p>, <div>, <span>, <br>
//   s = s.replace(
//     /<(p|div|span|section|article|strong|em|b|i|h1|h2|h3|h4|h5|h6)[^>]*>(\s|<br\s*\/?>)*<\/\1>/gi,
//     ""
//   );

//   // 6) Collapse multiple <br> into SINGLE <br>
//   s = s.replace(/(<br\s*\/?>\s*){2,}/gi, "<br/>");

//   // 7) Remove paragraphs that contain only whitespace
//   s = s.replace(/<p[^>]*>\s*<\/p>/gi, "");

//   // 8) Convert block elements to inline (prevents vertical spacing)
//   s = s.replace(/<(p|div|section|article)([^>]*)>/gi, "<span>");
//   s = s.replace(/<\/(p|div|section|article)>/gi, "</span>");

//   // 9) Remove whitespace BETWEEN tags completely
//   s = s.replace(/>\s+</g, "><");

//   // 10) Remove extra spaces within text
//   s = s.replace(/\s{2,}/g, " ");

//   // 11) Remove leading/trailing whitespace
//   s = s.trim();

//   return s;
// };

//     const cleaned = cleanHTML(raw);

//     setTermsData({
//       ...response.data.data,
//       body: cleaned,
//     });

//     Toast.show({
//       type: "success",
//       text1: "Success",
//       text2: "Terms & Conditions fetched successfully",
//     });
//   } else {
//     Toast.show({
//       type: "error",
//       text1: "Error",
//       text2: response?.message || "Failed to load Terms & Conditions",
//     });
//   }
// };

//   useEffect(() => {
//     fetchTermsAndConditions();
//   }, []);

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <TopHeader text="Terms & Conditions" isBack={true} />

//       <ScrollView style={{ padding: width * 0.05 }}>
//        {termsData ? (
//             <>
//               {/* <Text style={styles.heading}>{termsData.heading}</Text>
//               <Text style={styles.subheading}>{termsData.subheading}</Text> */}

//               <HTMLView
//                 value={termsData.body}
//                 stylesheet={htmlStyles}
//               />
//             </>
//           ) : (
//             <Text style={styles.paraText}>Terms and Condition not available.</Text>
//           )}
//       </ScrollView>

//       <View style={styles.btn}>
//         <CustomButton
//           btnHeight={height * 0.06}
//           btnWidth={width * 0.9}
//           borderRadius={20}
//           backgroundColor={colors.marhoon}
//           text="I Accept"
//           textColor={colors.white}
//           onPress={() => navigation.goBack()}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   heading: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.lg,
//     color: colors.black,
//     marginBottom: 10,
//   },
//   subheading: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.md,
//     color: colors.black,
//     marginBottom: 15,
//   },
//   paraText: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     textAlign: 'justify',
//     color: colors.black,
//   },
//   btn: {
//     alignSelf: 'center',
//     marginBottom: height * 0.04,
//   },
// });

// const htmlStyles = StyleSheet.create({
//   p: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.black,
//     lineHeight: height * 0.023,
//     marginBottom: 8,
//   },
//   h1: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.lg,
//     marginVertical: 10,
//     color: colors.black,

//   },
//   h2: {
//     fontFamily: fontFamily.GilroySemiBold,
//     fontSize: fontSizes.md,
//     marginTop: 15,
//     marginBottom: 5,
//     color: colors.black,

//   }
// });

// export default TermsConditions;












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
    try {
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
          
          // Remove style attributes
          s = s.replace(/style\s*=\s*"[^"]*"/gi, "");
          
          // Replace &nbsp; with regular space
          s = s.replace(/&nbsp;/gi, " ");
          
          // Remove HTML comments
          s = s.replace(/<!--[\s\S]*?-->/g, "");
          
          // Clean up excessive whitespace
          s = s.replace(/\s+/g, ' ');
          
          // Wrap in div if needed
          if (!s.startsWith('<') && s.trim().length > 0) {
            s = `<div>${s}</div>`;
          }
          
          return s.trim();
        };

        const cleaned = cleanHTML(raw);
        
        setTermsData({
          ...response.data.data,
          body: cleaned,
        });
      } else {
        throw new Error(response?.message || "Failed to load Terms & Conditions");
      }
    } catch (error: any) {
      console.error("Error fetching terms:", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message || "Failed to load Terms & Conditions",
      });
    }
  };

  useEffect(() => {
    fetchTermsAndConditions();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Terms & Conditions" isBack={true} />

      <ScrollView 
        style={{ 
          padding: width * 0.05,
          backgroundColor: colors.white // Ensure background is white
        }}
        contentContainerStyle={{ 
          paddingBottom: height * 0.1,
          backgroundColor: colors.white 
        }}
      >
        {termsData ? (
          <>
            {/* Optional headings */}
            {/* {termsData.heading && (
              <Text style={styles.heading}>{termsData.heading}</Text>
            )}
            {termsData.subheading && (
              <Text style={styles.subheading}>{termsData.subheading}</Text>
            )} */}
            
            {/* HTML Content */}
            {termsData.body ? (
              <HTMLView
                value={termsData.body}
                stylesheet={htmlStyles}
                addLineBreaks={false}
              />
            ) : (
              <Text style={styles.paraText}>No content available.</Text>
            )}
          </>
        ) : (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading Terms & Conditions...</Text>
          </View>
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
    color: colors.black, // Ensure black color
    marginBottom: 10,
  },
  subheading: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.md,
    color: colors.black, // Ensure black color
    marginBottom: 15,
  },
  paraText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    textAlign: 'justify',
    color: colors.black, // Ensure black color
    lineHeight: height * 0.023,
    // marginBottom: 8,
  },
  btn: {
    alignSelf: 'center',
    marginBottom: height * 0.04,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height * 0.5,
  },
  loadingText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.md,
    color: colors.grey,
  },
});

// UPDATED htmlStyles - Fixed color issue
const htmlStyles = StyleSheet.create({
  // Default style for all HTML elements
  '*': {
    color: colors.black, // This will apply black color to ALL elements
  },
  div: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  p: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    lineHeight: height * 0.023,
    // marginBottom: 8,
    textAlign: 'justify',
    backgroundColor: 'transparent',
  },
  span: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    lineHeight: height * 0.023,
    backgroundColor: 'transparent',
  },
  h1: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    marginVertical: 10,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  h2: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.md,
    // marginTop: 15,
    // marginBottom: 5,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  h3: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.sm,
    // marginTop: 10,
    // marginBottom: 5,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  strong: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  b: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  em: {
    fontFamily: fontFamily.GilroyItalic,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  i: {
    fontFamily: fontFamily.GilroyItalic,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    backgroundColor: 'transparent',
  },
  ul: {
    // marginBottom: 10,
    backgroundColor: 'transparent',
  },
  ol: {
    // marginBottom: 10,
    backgroundColor: 'transparent',
  },
  li: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black, // Explicit black
    lineHeight: height * 0.023,
    // marginBottom: 4,
    backgroundColor: 'transparent',
  },
  // Text node style
  text: {
    color: colors.black, // This handles raw text nodes
  },
});

export default TermsConditions;
