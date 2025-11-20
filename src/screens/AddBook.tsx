import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import CustomTabsSec from '../components/CustomTabsSec';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

interface ratingProp {
  image: any;
  headText: string;
  rating: any;
  ratingText: string;
  time: string;
  desc: string;
}

const AddBook = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [count, setCount] = useState(1);

  const ratingData = [
    {
      image: images.ratingListOne,
      headText: 'Tatiana Lubin',
      rating: images.rating,
      ratingText: '4.0',
      time: '2 Days Ago',
      desc: 'Lorem ipsum dolor sit amet consectetur. Leo leo fringilla amet amet faucibus. Morbi non nunc interdum bibendum massa. Pellentesque pretium integer maecenas semper enim',
    },
    {
      image: images.ratingListSec,
      headText: 'Randy Vocarro',
      rating: images.rating,
      ratingText: '4.0',
      time: '2 Days Ago',
      desc: 'Lorem ipsum dolor sit amet consectetur. Leo leo fringilla amet amet faucibus. Morbi non nunc interdum bibendum massa. Pellentesque pretium integer maecenas semper enim',
    },
    {
      image: images.ratingListThird,
      headText: 'Ashlyn Fanci',
      rating: images.rating,
      ratingText: '4.0',
      time: '2 Days Ago',
      desc: 'Lorem ipsum dolor sit amet consectetur. Leo leo fringilla amet amet faucibus. Morbi non nunc interdum bibendum massa. Pellentesque pretium integer maecenas semper enim',
    },
  ];

  const renderRatingData = ({ item }: { item: ratingProp }) => {
    return (
      <View style={styles.ratingItemContainer}>
        <View style={styles.ratingHeader}>
          <View style={styles.profileContainer}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.nameRatingContainer}>
              <View style={styles.ratingHeadContainer}>
                <Text style={styles.nameText}>{item.headText}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <View style={styles.ratingMain}>
                <Image source={item.rating} />
                <Text style={styles.ratingListText}>{item.ratingText}</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.descText}>{item.desc}</Text>
      </View>
    );
  };

  const BookScreen: React.FC = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.bookContainer}>
          <Text style={styles.bookHeadText}>
            Lorem Ipsum is simply Dummy text of the printing
          </Text>
          <Text style={styles.bookParaText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took...Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took...Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took...
          </Text>
        </View>
      </View>
    );
  };

  const ReviewScreen: React.FC = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={ratingData}
          renderItem={renderRatingData}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingBottom: height * 0.7,
          }}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <View style={styles.imageBelowContainer}>
          <View style={styles.topContainer}>
            <View style={styles.header}>
              <TopHeader isBack={true} favIcon={true} />
            </View>
            <Image source={images.addBook} style={styles.addBook} />
          </View>
          <View style={styles.HeadTextContainer}>
            <Text style={styles.dateText}>18 Feb, 2023</Text>
            <View style={styles.headBottomContainer}>
              <View>
                <Text style={styles.headText}>Different Winter</Text>
                <Text style={styles.authorText}>By Mia Jackson</Text>
              </View>
              <Text style={styles.headPriceText}>$400</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <CustomTabsSec
            tabs={['About the Book', 'Review']}
            tabContents={[BookScreen, ReviewScreen]}
            activeTabLoad={0}
          />
        </View>
        <View style={styles.bottomMain}>
          <View style={styles.incrementMain}>
            <TouchableOpacity onPress={() => setCount(count - 1)}>
              <Image source={images.minusSign} style={styles.signImg} />
            </TouchableOpacity>
            <Text style={styles.counter}>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Image source={images.plusSign} style={styles.signImg} />
            </TouchableOpacity>
          </View>
          <CustomButton
            btnHeight={height * 0.06}
            btnWidth={width * 0.45}
            text="Add To Cart"
            textColor={colors.white}
            backgroundColor={colors.marhoon}
            borderRadius={10}
            onPress={() => navigation.navigate('Cart')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  addBook: {
    width: width * 0.999,
    height: height * 0.43,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
  },
  imageBelowContainer: {
    backgroundColor: colors.purple,
    height: height * 0.57,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  HeadTextContainer: {
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.05,
    gap: height * 0.01,
  },
  headBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.white,
  },
  headText: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg2,
    color: colors.white,
  },
  authorText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
  headPriceText: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg2,
    color: colors.white,
  },
  tabContainer: {
    marginTop: height * 0.02,
  },
  bookContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.015,
    gap: height * 0.01,
  },
  bookHeadText: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.sm,
    color: colors.black,
  },
  bookParaText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    textAlign: 'justify',
  },
  bottomMain: {
    backgroundColor: colors.lightGray,
    marginTop: height * 0.32,
    padding: 10,
    paddingHorizontal: width * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  signImg: {
    width: width * 0.11,
    resizeMode: 'contain',
  },
  incrementMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.04,
  },
  counter: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  ratingItemContainer: {
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.045,
  },
  ratingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
  },
  nameRatingContainer: {
    marginLeft: width * 0.03,
  },
  nameText: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  ratingHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.75,
  },
  smallStarRating: {
    marginRight: width * 0.02,
  },
  timeText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
  },
  descText: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.black,
    lineHeight: height * 0.02,
    textAlign: 'justify',
  },
  ratingMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    marginTop: height * 0.003,
  },
  ratingListText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.xsm,
    color: colors.black,
  },
});

export default AddBook;
