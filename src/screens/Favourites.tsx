import { NavigationProp, useNavigation } from '@react-navigation/native';
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
import CustomTabs from '../components/CustomTabs';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

interface bookProps {
  headText: string;
  headImg: any;
  authorName: string;
  rating: string;
  ratingIcon: any;
  amount: string;
  btnText: string;
  heartIcon: any;
}

interface videoProp {
  id: string;
  title: string;
  description: string;
  image: any;
}

const Favourites = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const booksData = [
    {
      id: '1',
      headText: 'Dummy Text',
      headImg: images.recBookOne,
      authorName: 'By Devon Lane',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110,00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
    {
      id: '2',
      headText: 'Dummy Text',
      headImg: images.recBookSec,
      authorName: 'By Eleanor Penna',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110,00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
    {
      id: '3',
      headText: 'Dummy Text',
      headImg: images.recBookOne,
      authorName: 'By Devon Lane',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110,00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
    {
      id: '4',
      headText: 'Dummy Text',
      headImg: images.recBookSec,
      authorName: 'By Eleanor Penna',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110.00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
  ];

  const relatedVideos = [
    {
      id: '1',
      title: 'Lorem Ipsum Dolor',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      image: images.amet,
    },
    {
      id: '2',
      title: 'Lorem Ipsum Dolor',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      image: images.dolor,
    },
    {
      id: '3',
      title: 'Fermentum Sapien',
      description: 'Lorem ipsum dolor sit amet consectetur. ',
      image: images.recent,
    },
    {
      id: '4',
      title: 'Fermentum Sapien',
      description: 'Lorem ipsum dolor sit amet consectetur. ',
      image: images.recent,
    },
    {
      id: '5',
      title: 'Fermentum Sapien',
      description: 'Lorem ipsum dolor sit amet consectetur. ',
      image: images.recent,
    },
    {
      id: '6',
      title: 'Fermentum Sapien',
      description: 'Lorem ipsum dolor sit amet consectetur. ',
      image: images.recent,
    },
  ];

  const renderBooks = ({ item }: { item: bookProps }) => {
    return (
      <View style={styles.bookCard}>
        <Image source={item.headImg} style={styles.bookImage} />
        <TouchableOpacity activeOpacity={0.7} style={styles.heartIconMain}>
          <Image source={item.heartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
        <View style={styles.ratingRow}>
          <Image source={item.ratingIcon} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={{ gap: height * 0.01 }}>
          <Text style={styles.bookTitle}>{item.headText}</Text>
          <Text style={styles.authorName}>{item.authorName}</Text>
        </View>
        <View style={styles.amountMain}>
          <Text style={styles.amount}>{item.amount}</Text>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Text style={styles.addButtonText}>{item.btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderRelatedVideoItem = ({ item }: { item: videoProp }) => (
    <View style={styles.relatedVideoItem}>
      {/* Video thumbnail */}
      <View style={styles.relatedVideoThumbnail}>
        <Image source={item.image} style={styles.relatedVideoImage} />
        <Image source={images.favIcon} style={styles.favIcon} />
      </View>
      <View style={styles.relatedTextContent}>
        <View style={styles.dummyContainer}>
          <Text style={styles.relatedVideoSubtitle}>Dummy Text</Text>
        </View>
        <Text style={styles.relatedVideoTitle}>{item.title}</Text>
        <Text style={styles.relatedVideoDescription}>{item.description}</Text>
      </View>
      <View style={{ top: height * 0.02 }}>
        <CustomButton
          text="Watch"
          textColor={colors.white}
          btnHeight={height * 0.04}
          btnWidth={width * 0.35}
          backgroundColor={colors.darkmarhoon}
          borderRadius={12}
          fontSize={fontSizes.xsm}
          onPress={() => navigation.navigate('MediaDetails')}
        />
      </View>
    </View>
  );

  const BookScreen: React.FC = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={booksData}
          renderItem={renderBooks}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            marginTop: height * 0.015,
            paddingBottom: height * 0.15,
          }}
        />
      </View>
    );
  };

  const VideoScreen: React.FC = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={relatedVideos}
          renderItem={renderRelatedVideoItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            marginTop: height * 0.015,
            paddingBottom: height * 0.15,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <TopHeader text="Favourites" isBack={true} />
      <View style={styles.tabsContainer}>
        <CustomTabs
          tabs={['Books', 'Videos']}
          tabContents={[BookScreen, VideoScreen]}
          activeTabLoad={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: height * 0.02,
  },
  bookCard: {
    width: width * 0.47,
    height: height * 0.33,
    marginRight: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bookImage: {
    width: '100%',
    height: height * 0.18,
    borderRadius: 10,
    marginBottom: 5,
  },
  heartIconMain: {
    position: 'absolute',
    right: width * 0.05,
    top: height * 0.01,
  },
  heartIcon: {
    width: width * 0.09,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingIcon: {
    width: width * 0.045,
    height: height * 0.02,
    resizeMode: 'contain',
    marginRight: 5,
  },
  ratingText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  bookTitle: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
  },
  authorName: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
    marginBottom: 7,
  },
  amountMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
  },
  addButton: {
    backgroundColor: colors.darkmarhoon,
    width: width * 0.2,
    height: height * 0.033,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
  },
  addButtonText: {
    fontSize: fontSizes.sm2,
    color: colors.white,
    fontFamily: fontFamily.GilroyMedium,
  },
  trendingBooksMain: {
    alignItems: 'center',
    marginTop: height * 0.03,
    height: height * 0.37,
  },
  curriculumMain: {
    alignItems: 'center',
    marginTop: height * 0.03,
    height: height * 0.37,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: height * 0.015,
  },
  relatedVideoItem: {
    width: width * 0.45,
    height: height * 0.3,
    marginRight: width * 0.04,
  },
  relatedVideoThumbnail: {
    height: height * 0.12,
    borderRadius: 18,
    marginBottom: height * 0.01,
    overflow: 'hidden',
  },
  relatedVideoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  relatedTextContent: {
    // Text content styles
  },
  dummyContainer: {
    backgroundColor: colors.marhoon,
    width: width * 0.2,
    height: height * 0.025,
    borderRadius: 8,
    justifyContent: 'center',
  },
  relatedVideoSubtitle: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.xsm,
    alignSelf: 'center',
    color: colors.white,
  },
  relatedVideoTitle: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
    top: height * 0.01,
    marginBottom: height * 0.005,
  },
  relatedVideoDescription: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.xs,
    color: colors.Gray,
    top: height * 0.01,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
  playIcon: {
    width: 30,
    height: 30,
  },
  favIcon: {
    position: 'absolute',
    left: width * 0.33,
    bottom: height * 0.06,
  },
});

export default Favourites;
