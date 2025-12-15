import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
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
import React, { useEffect, useState } from 'react';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setVideoId } from '../redux/slice/roleSlice';

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
  const [loading, setLoading] = useState(false)
  const [favouriteVideos, setFavouriteVideos] = useState<any[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch()
  const [details, setDetails] = useState(null);

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

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchFavourite(); // fetch the latest favourites
    setRefreshing(false);
  };

  const renderBooks = ({ item }: { item: any }) => {
    const product = item.product;

    return (
      <TouchableOpacity
        style={styles.bookCard}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('AddBook', { productId: product.id })}
      >
        <Image
          source={{ uri: `http://18.204.175.233:3001/${product.image}` }}
          style={styles.bookImage}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.heartIconMain}
          onPress={() => handleFavouritePress(product.id, true)}
        >
          <Image source={images.filledFav} style={styles.heartIcon} />
        </TouchableOpacity>

        <View style={styles.ratingRow}>
          <Image source={images.ratingIcon} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>
            {product.averageRating || "0.0"} Rating
          </Text>
        </View>

        <View style={{ gap: height * 0.01 }}>
          <Text
            style={styles.bookTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {product.name}
          </Text>
          <Text style={styles.authorName}>By {product.author}</Text>
        </View>

        <View style={styles.amountMain}>
          <Text style={styles.amount}>${product.price}</Text>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRelatedVideoItem = ({ item }: { item: any }) => (
    <View style={styles.relatedVideoItem}>
      <View style={styles.relatedVideoThumbnail}>
        <Image source={{ uri: item.video.thumbnailUrl }} style={styles.relatedVideoImage} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleFavouritePress(item.videoId, item.is_fav)}
        >
          <Image
            source={item.is_fav ? images.filledFav : images.favIcon}
            style={styles.favIcon}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.relatedTextContent}>
        <View style={styles.dummyContainer}>
          <Text style={styles.relatedVideoSubtitle} numberOfLines={1}
            ellipsizeMode="tail">{item.video.tags}</Text>
        </View>
        <Text style={styles.relatedVideoTitle}>{item.video.title}</Text>
        <Text style={styles.relatedVideoDescription}>{item.video.shortDescription}</Text>
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
          onPress={() => navigation.navigate('MediaDetails', { VideoID: item.videoId })}
        />
      </View>
    </View>
  );

  const BookScreen: React.FC = () => {
    return (
      <View style={{ flex: 1 }}>
        {favouriteProducts.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favourite Products found.</Text>
          </View>
        ) : (
        <FlatList
          data={favouriteProducts}
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
          refreshing={refreshing}      
          onRefresh={handleRefresh}   
        />
        )}
      </View>
    );
  };

  const VideoScreen: React.FC = () => {
    return (
      <View style={{ flex: 1 }}>
        {favouriteVideos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favourite Videos found.</Text>
          </View>
        ) : (
          <FlatList
            data={favouriteVideos}
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
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        )}
      </View>
    );
  };

  const handleFavouritePress = async (videoId: number, isCurrentlyFavourite: boolean) => {
    try {
      setLoading(true);

      const body = {
        action: isCurrentlyFavourite ? "unfavourite" : "favourite",
        type: "video",
        videoId: Number(videoId),
        product: 1
      };

      const { response, error } = await apiHelper("POST", "/users/favourites", {}, {}, body);

      if (response) {
        setDetails(prev => ({
          ...prev,
          is_fav: !isCurrentlyFavourite
        }));

        const apiData = response?.data?.data;

        const apiVideos = Array.isArray(response?.data?.data)
          ? response.data.data
          : [];
        const videoIds = apiVideos.length > 0
          ? apiVideos.map(v => v.id)
          : [];
        dispatch(setVideoId(videoIds));

        Toast.show({
          type: "success",
          text1: "Success",
          text2: `Video ${!isCurrentlyFavourite ? "added to" : "removed from"} favourites`
        });
      }

      if (error) throw error;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message ?? "Failed to update favourite"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchFavourite = async () => {
    setLoading(true)

    try {
      const params = {
        type: "video"
      };

      const { response, error } = await apiHelper("GET", "/users/favourites", params, {}, {})
      console.log("response from the favourites API!", response)

      if (response) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Success"
        })
        setFavouriteVideos(response.data.data);
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message
      })
    } finally {
      setLoading(false)
    }
  }

  const favouriteProduct = async () => {
    setLoading(true)

    try {
      const params = {
        type: "product"
      };

      const { response, error } = await apiHelper("GET", "/users/favourites", params, {}, {})
      console.log("response from the favourites Products!", response)

      if (response) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Success"
        })
        setFavouriteProducts(response.data.data);
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFavourite();
    favouriteProduct();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      fetchFavourite();
      favouriteProduct();
    }, [])
  );

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
      {loading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={colors.brown} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.marhoon,
    textAlign: 'center',
  },
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
  loaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});

export default Favourites;
