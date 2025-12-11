
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { fontFamily } from '../assets/Fonts';
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';
// import { fontSizes } from '../utilities/fontsizes';
// import Toast from 'react-native-toast-message';
// import { useEffect, useState } from 'react';
// import { apiHelper } from '../services';
// import { useSelector } from 'react-redux';
// import HTMLView from 'react-native-htmlview';

// const PrivacyPolicy = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   const [privacyData, setPrivacyData] = useState<any>(null);
//   const token = useSelector((state: any) => state.role.userAuthToken);

//   const privacyPolicy = async () => {
//     const { response } = await apiHelper(
//       "GET",
//       "content/privacy-policy",
//       {},
//       token
//     );

//     if (response && response.status) {
//       setPrivacyData(response.data.data); // ✔ Correct
//       Toast.show({
//         type: "success",
//         text1: "Success",
//         text2: "Privacy Policy fetched successfully",
//       });
//     } else {
//       Toast.show({
//         type: "error",
//         text1: "Error",
//         text2: response?.message || "Failed to load privacy policy",
//       });
//     }
//   };

//   useEffect(() => {
//     privacyPolicy();
//   }, []);

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <TopHeader text="Privacy Policy" isBack={true} />

//       <ScrollView style={{ padding: width * 0.05 }}>
//         {privacyData ? (
//           <>
//             {/* Heading */}
//             <Text style={styles.heading}>{privacyData.heading}</Text>

//             {/* Subheading */}
//             <Text style={styles.subheading}>{privacyData.subheading}</Text>

//             {/* HTML Body */}
//             <HTMLView
//               value={privacyData.body}   // ✔ FIXED HERE
//               stylesheet={htmlStyles}
//             />
//           </>
//         ) : (
//           <Text style={styles.paraText}>Privacy policy not available.</Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   heading: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.md,
//     color: colors.black,
//     marginBottom: 10,
//   },
//   subheading: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.sm,
//     color: colors.gray,
//     marginBottom: 15,
//   },
//   paraText: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.darkGray,
//     textAlign: 'justify',
//   },
// });

// const htmlStyles = StyleSheet.create({
//   p: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.darkGray,
//     lineHeight: height * 0.023,
//     bottom: height * 0.12
//   },
//   h1: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.lg,
//   },
//   h2: {
//     fontFamily: fontFamily.GilroySemiBold,
//     fontSize: fontSizes.md,
//     bottom: height * 0.08
//   },
//   h3: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.sm,
//     bottom: height * 0.2

//   },
//   li: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//   }
// });

// export default PrivacyPolicy;











// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { fontFamily } from '../assets/Fonts';
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';
// import { fontSizes } from '../utilities/fontsizes';
// import Toast from 'react-native-toast-message';
// import { useEffect, useState } from 'react';
// import { apiHelper } from '../services';
// import { useSelector } from 'react-redux';
// import HTMLView from 'react-native-htmlview';

// const PrivacyPolicy = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   const [privacyData, setPrivacyData] = useState<any>(null);
//   const token = useSelector((state: any) => state.role.userAuthToken);

//   // 🔥 CLEAN HTML FUNCTION — Removes blank spacing, empty <p>, extra <br>, &nbsp, etc.
//   const cleanHTML = (html: string) => {
//     if (!html) return "";

//     return String(html)
//       .replace(/(<br\s*\/?>\s*){2,}/gi, "<br/>")      // remove double <br>
//       .replace(/<p[^>]*>\s*<\/p>/gi, "")              // remove empty <p>
//       .replace(/>\s+</g, "><")                        // remove spaces/newlines between tags
//       .replace(/&nbsp;/gi, "")                        // remove &nbsp
//       .replace(/\s{2,}/g, " ")                        // remove extra spaces
//       .trim();
//   };

//   const privacyPolicy = async () => {
//     const { response } = await apiHelper(
//       "GET",
//       "content/privacy-policy",
//       {},
//       token
//     );

//     if (response && response.status) {
//       const apiData = response.data.data;

//       // 🔥 Clean the HTML before rendering
//       const cleanedBody = cleanHTML(apiData.body);

//       setPrivacyData({
//         ...apiData,
//         body: cleanedBody, // ✔ cleaned
//       });

//       Toast.show({
//         type: "success",
//         text1: "Success",
//         text2: "Privacy Policy fetched successfully",
//       });
//     } else {
//       Toast.show({
//         type: "error",
//         text1: "Error",
//         text2: response?.message || "Failed to load privacy policy",
//       });
//     }
//   };

//   useEffect(() => {
//     privacyPolicy();
//   }, []);

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <TopHeader text="Privacy Policy" isBack={true} />

//       <ScrollView style={{ padding: width * 0.05 }}>
//         {privacyData ? (
//           <>
//             {/* <Text style={styles.heading}>{privacyData.heading}</Text>
//             <Text style={styles.subheading}>{privacyData.subheading}</Text> */}

//             {/* HTML Body */}
//             <HTMLView
//               value={privacyData.body}
//               stylesheet={htmlStyles}
//             />
//           </>
//         ) : (
//           <Text style={styles.paraText}>Privacy policy not available.</Text>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   heading: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.md,
//     color: colors.black,
//     marginBottom: 10,
//   },
//   subheading: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.sm,
//     color: colors.gray,
//     marginBottom: 15,
//   },
//   paraText: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.darkGray,
//     textAlign: 'justify',
//   },
// });

// const htmlStyles = StyleSheet.create({
//   p: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     color: colors.darkGray,
//     lineHeight: 20,
//     // marginBottom: 8,   // consistent spacing
//   },
//   h1: {
//     fontFamily: fontFamily.GilroyBold,
//     fontSize: fontSizes.lg,
//     marginTop: 10,
//     // marginBottom: 6,
//   },
//   h2: {
//     fontFamily: fontFamily.GilroySemiBold,
//     fontSize: fontSizes.md,
//     marginTop: 8,
//     // marginBottom: 5,
//   },
//   h3: {
//     fontFamily: fontFamily.GilroyMedium,
//     fontSize: fontSizes.sm,
//     marginTop: 6,
//     // marginBottom: 4,
//   },
//   li: {
//     fontFamily: fontFamily.GilroyRegular,
//     fontSize: fontSizes.sm,
//     marginBottom: 6,   // spacing under bullets
//   }
// });


// export default PrivacyPolicy;













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

  // Responsive size calculations
  const responsiveFont = (size: number) => {
    return Math.max(size, size * (width / 375)); // Base width 375 (iPhone SE)
  };

  const responsivePadding = () => {
    return width * 0.04; // Consistent padding
  };

  const responsiveLineHeight = (fontSize: number) => {
    return fontSize * 1.5; // Optimal line height ratio
  };

  // 🔥 CLEAN HTML FUNCTION — Removes blank spacing, empty <p>, extra <br>, &nbsp, etc.
  const cleanHTML = (html: string) => {
    if (!html) return "";

    return String(html)
      .replace(/(<br\s*\/?>\s*){2,}/gi, "<br/>")      // remove double <br>
      .replace(/<p[^>]*>\s*<\/p>/gi, "")              // remove empty <p>
      .replace(/>\s+</g, "><")                        // remove spaces/newlines between tags
      .replace(/&nbsp;/gi, "")                        // remove &nbsp
      .replace(/\s{2,}/g, " ")                        // remove extra spaces
      .trim();
  };

  const privacyPolicy = async () => {
    const { response } = await apiHelper(
      "GET",
      "content/privacy-policy",
      {},
      token
    );

    if (response && response.status) {
      const apiData = response.data.data;

      // 🔥 Clean the HTML before rendering
      const cleanedBody = cleanHTML(apiData.body);

      setPrivacyData({
        ...apiData,
        body: cleanedBody, // ✔ cleaned
      });

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
    <View style={styles.container}>
      <TopHeader text="Privacy Policy" isBack={true} />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {privacyData ? (
          <View style={styles.contentContainer}>
            
            {/* {privacyData.heading && (
              <Text style={styles.heading}>{privacyData.heading}</Text>
            )}
            {privacyData.subheading && (
              <Text style={styles.subheading}>{privacyData.subheading}</Text>
            )} */}

            {/* HTML Body */}
            <HTMLView
              value={privacyData.body}
              stylesheet={htmlStyles}
            />
          </View>
        ) : (
          <View style={styles.placeholderContainer}>
            <Text style={styles.paraText}>Privacy policy not available.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.05,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.04,
  },
  heading: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
    marginBottom: height * 0.015,
    lineHeight: 24,
  },
  subheading: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.gray,
    marginBottom: height * 0.025,
    lineHeight: 20,
  },
  paraText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
    textAlign: 'center',
    lineHeight:21,
  },
});

const htmlStyles = StyleSheet.create({
  // General paragraph styling
  p: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
    lineHeight:20,
    textAlign: 'justify',
  },
  
  // Headings with consistent spacing
  h1: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
    lineHeight: 28,
  },
  
  h2: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.md,
    color: colors.black,
    lineHeight:26,
  },
  
  h3: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
    lineHeight:24,
  },
  
  // Lists with proper indentation and spacing
  ul: {
    marginBottom: height * 0.015,
  },
  
  ol: {
    marginBottom: height * 0.015,
  },
  
  li: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
    lineHeight: 21,
  },
  
  // Strong/bold text
  strong: {
    fontFamily: fontFamily.GilroySemiBold,
  },
  
  b: {
    fontFamily: fontFamily.GilroySemiBold,
  },
  
  // Italic text
  em: {
    fontFamily: fontFamily.GilroyRegular,
    fontStyle: 'italic',
  },
  
  i: {
    fontFamily: fontFamily.GilroyRegular,
    fontStyle: 'italic',
  },
  
  // Links
  a: {
    color: colors.primary, // Use your primary color
    textDecorationLine: 'underline',
  },
  
  // Horizontal rule
  hr: {
    height: 1,
    backgroundColor: colors.lightGray,
    marginVertical: height * 0.02,
  },
  
  // Blockquotes
  blockquote: {
    borderLeftWidth: 3,
    borderLeftColor: colors.lightGray,
    paddingLeft: width * 0.03,
    marginVertical: height * 0.015,
    fontStyle: 'italic',
  },
  
  // Code blocks
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.003,
    borderRadius: 3,
  },
  
  pre: {
    fontFamily: 'monospace',
    backgroundColor: '#f5f5f5',
    padding: width * 0.03,
    borderRadius: 5,
    marginVertical: height * 0.015,
  },
});

export default PrivacyPolicy;
