import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
import CustomTabsSec from '../components/CustomTabsSec';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/roleSlice';

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
  const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const route = useRoute();
  const id = route?.params?.productId;
  console.log("Route in the AddBook Screen!", route)
  const [details, setDetails] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

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
            {/* Lorem Ipsum is simply Dummy text of the printing */}
            Description:
          </Text>
          <Text style={styles.bookParaText}>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took...Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took...Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took... */}
            {products.description}
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

  const fetchProductDetail = async (id: string) => {
    try {
      setLoading(true)

      const { response, error } = await apiHelper(
        "GET",
        `/products/${id}`,
        {},
        {},
        null
      )
      console.log("Response of the product details", response)

      if (response?.data) {
        setProducts(response.data.data)
        Toast.show({
          type: "success",
          text1: "Success",
          text2: response.data.message
        })
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

  const fetchProductsReviews = async (id: string) => {
    try {
      setLoading(true)

      const { response, error } = await apiHelper(
        "GET",
        `/products/${id}/reviews`,
        {},
        {},
        null
      )

      console.log("Response from the reviews fetched API!", response)

      if (response?.data) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: response.data.message
        })
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

  const postFavourite = async (videoId: number, productId: number, isFav: boolean) => {
    try {
      setLoading(true);

      const body = {
        action: isFav ? "unfavourite" : "favourite",
        type: productId ? "product" : "video",
        videoId: videoId || 0, 
        productId: productId || 0, 
      };

      const { response } = await apiHelper("POST", "/users/favourites", {}, {}, body);

      if (response?.data?.status) {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: response.data.message
        })
        // Update local state for product favourites
        if (productId) {
          setDetails(prev =>
            prev.map(p =>
              p.id === productId
                ? { ...p, is_fav: !isFav }
                : p
            )
          );
        }
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail(id);
    fetchProductsReviews(id);
  }, []);

   const handleRefresh = async () => {
    setRefreshing(true);
    await fetchProductDetail(id);
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <View style={styles.imageBelowContainer}>
          <View style={styles.topContainer}>
            <View style={styles.header}>
              <TopHeader
                isBack={true}
                favIcon={true}
                onFavouritePress={postFavourite}
                isFavourite={details?.is_fav || products?.is_fav || false}
                productId={products?.id}
              />
            </View>
            <Image
              source={{ uri: `http://18.204.175.233:3001/${products?.image}` }}
              style={styles.addBook}
            />
          </View>
          <View style={styles.HeadTextContainer}>
            <Text style={styles.dateText}>{products?.publishedDate || "18 Feb, 2023"}</Text>
            <View style={styles.headBottomContainer}>
              <View>
                <Text style={styles.headText}>{products.name || "Different Winter"}</Text>
                <Text style={styles.authorText}>{products?.author || "By Mia Jackson"}</Text>
              </View>
              <Text style={styles.headPriceText}>${products.price || "$400"}</Text>
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
            <TouchableOpacity activeOpacity={0.7} onPress={() => setCount(prev => Math.max(prev - 1, 1))}>
              <Image source={images.minusSign} style={styles.signImg} />
            </TouchableOpacity>
            <Text style={styles.counter}>{count}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setCount(prev => prev + 1)}>
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
            onPress={() => {
              dispatch(addToCart({
                id: products.id,
                name: products.name,
                price: products.price,
                image: products.image,
                description: products.description,
                inventory: products.inventory,
                authorName: products.author,
                quantity: count,
              })
            )

              navigation.navigate('Cart', {
                product: products,
                totalOrderNumber: count,
              })
            }
          }
          />
        </View>
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
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
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
    top: height * 0.3,
    padding: 10,
    height: height * 0.11,
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

export default AddBook;
