import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { StackParamList } from '../navigation/MainStack';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

type Props = NativeStackScreenProps<StackParamList, 'BaseballDiamond'>;

const BaseballDiamond = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();
  console.log("Route Check!", route)

  const countMap = {
    rejection: 0,
    abandonment: 0,
    worthlessness: 0,
    abuse: 0
  };

  const selectionsObj = route.params?.selections || {};
  const selections = Object.values(selectionsObj); // converts the object into an array

  selections.forEach(item => {
    const category = item.category.toLowerCase();
    if (countMap[category] !== undefined) {
      countMap[category] += 1;
    }
  });

  const sortedCategories = Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])  
    .map(([category, count]) => ({ category, count }));


  const baseAssignments = {
    homeBase: sortedCategories[0],   
    firstBase: sortedCategories[1],
    secondBase: sortedCategories[2],
    thirdBase: sortedCategories[3]
  };

  const categoryImages: Record<string, any> = {
    secondBase: images.secondBase,
    thirdBase: images.thirdBase,
    firstBase: images.firstBase,
    homeBase: images.homeBase
  };

  const categoryColors: Record<string, string> = {
    rejection: colors.red,
    abandonment: colors.blue,
    worthlessness: colors.darkGray,
    abuse: colors.green,
    '': colors.black
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Self Love Home Base" isBack={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height * 0.15 }}
      >
        <Text style={styles.text}>HOW TO GET YOUR OSL SCORE:</Text>
        <Text style={styles.subText}>
          Your Old Self-Love Home Base is always the top category in this
          assessment scoring. It represents the storyline of your Old Self-Love
          Story. If you have a tie in the numbers of one or more of the
          categories, or a zero, simply sort them out by dragging the most
          painful feeling to the top and so Forth.
        </Text>

        <View style={{ gap: height * 0.015 }}>
          {Object.entries(baseAssignments).map(([baseName, data], index) => (
            <View
              key={baseName}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width * 0.87,
              }}
            >
              <View style={styles.container}>
                <Text style={styles.home}>
                  {baseName.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </Text>
              </View>
              <View style={styles.subContainer}>
                <Text style={styles.reject}>
                  {data.category.toUpperCase()} ({data.count})
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ marginTop: height * 0.05, alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Text 
            style={[styles.rejection, { 
              color: colors.red 
              }]}>
              {baseAssignments.secondBase.category.toUpperCase()}
            </Text>
            <Image
              source={categoryImages.secondBase}
              style={styles.rejImg}
            />
            <Text style={styles.One}>{baseAssignments.secondBase.count}</Text>
            <Text style={styles.base}>2ND BASE</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width * 0.8 }}>
            <View style={{ alignItems: 'center', marginBottom: height * 0.05 }}>
              <Text style={[styles.rejection, { color: colors.blue }]}>
                {baseAssignments.thirdBase.category.toUpperCase()}
              </Text>
              <Image
                source={categoryImages.thirdBase}
                style={styles.homeBaseImg}
              />
              <Text style={styles.one}>{baseAssignments.thirdBase.count}</Text>
              <Text style={styles.thirdBase}>3RD BASE</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[styles.rejection, { color: colors.darkGray }]}>
                {baseAssignments.firstBase.category.toUpperCase()}
              </Text>
              <Image
                source={categoryImages.firstBase}
                style={styles.abandonmentImg}
              />
              <Text style={styles.num}>{baseAssignments.firstBase.count}</Text>
              <Text style={styles.firstBase}>1ST BASE</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.rejection, { color: colors.green }]}>
              {baseAssignments.homeBase.category.toUpperCase()}
            </Text>
            <Image
              source={categoryImages.homeBase}
              style={styles.homeBaseImg}
            />
            <Text style={styles.number}>{baseAssignments.homeBase.count}</Text>
            <Text style={styles.homeBase}>HOME BASE</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnMain}>
        <CustomButton
          text="Next"
          textColor={colors.white}
          btnHeight={height * 0.065}
          btnWidth={width * 0.85}
          backgroundColor={colors.marhoon}
          borderRadius={20}
          onPress={() => navigation.navigate('HomeBase')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
    left: width * 0.07,
    top: height * 0.02,
  },
  subText: {
    fontFamily: fontFamily.GilroyRegular,
    lineHeight: fontSizes.sm * 1.3,
    color: colors.black,
    left: width * 0.07,
    top: height * 0.03,
    width: width * 0.87,
    textAlign: 'justify',
  },
  container: {
    backgroundColor: colors.yellow,
    height: height * 0.07,
    width: width * 0.42,
    left: width * 0.07,
    top: height * 0.06,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: colors.red,
    height: height * 0.07,
    width: width * 0.42,
    left: width * 0.07,
    top: height * 0.06,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    alignItems: 'center',
    color: colors.black,
  },
  reject: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    alignItems: 'center',
    color: colors.white,
  },
  rejection: {
    color: colors.red,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    alignSelf: 'center',
    top: height * 0.1,
  },
  abandonment: {
    color: colors.blue,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    top: height * 0.09,
  },
  worth: {
    color: colors.darkGray,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    top: height * 0.09,
    right: width * 0.05
  },
  chose: {
    color: colors.green,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    top: height * 0.1,
    left: width * 0.45,
  },
  base: {
    color: colors.red,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    alignSelf: 'center',
    top: height * 0.07,
  },
  thirdBase: {
    color: colors.blue,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.07,
    left: width * 0.02,
  },
  firstBase: {
    color: colors.darkGray,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.07,
  },
  homeBase: {
    color: colors.green,
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    top: height * 0.07,
  },
  rejImg: {
    alignItems: 'center',
    top: height * 0.1,
    left: width * 0.005
  },
  abandonmentImg: {
    top: height * 0.1,
    right: width * 0.015
  },
  homeBaseImg: {
    top: height * 0.1,
    left: width * 0.01,
  },
  number: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    alignSelf: 'center',
    color: colors.white,
    top: height * 0.016,
    left: width * 0.01
  },
  num: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    color: colors.white,
    top: height * 0.013,
    alignSelf: 'center',
    right: width * 0.02,
  },
  One: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    color: colors.white,
    top: height * 0.015,
    alignSelf: 'center',
    right: width * 0.006,
  },
  one: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.xl,
    color: colors.white,
    top: height * 0.013,
    alignSelf: 'center',
    left: width * 0.01,
  },
  btnMain: {
    alignItems: 'center',
    bottom: height * 0.03,
  },
});

export default BaseballDiamond;
