import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomTextInput from '../components/CustomTextInput';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useEffect, useState } from 'react';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';

interface Prop {
  headText?: string;
  headImg?: any;
  authorName?: string;
  rating?: string;
  ratingIcon?: any;
  amount?: string;
  btnText?: string;
  heartIcon?: any;
}

const ECommerce = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<any[]>([]);

  const recommendedData = [
    {
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

  const trendingBooksDate = [
    {
      headText: 'Dummy Text',
      headImg: images.trendingBooksOne,
      authorName: 'By Devon Lane',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110,00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
    {
      headText: 'Dummy Text',
      headImg: images.trendingBooksSec,
      authorName: 'By Devon Lane',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110,00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
    {
      headText: 'Dummy Text',
      headImg: images.trendingBooksOne,
      authorName: 'By Devon Lane',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110,00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
    {
      headText: 'Dummy Text',
      headImg: images.trendingBooksSec,
      authorName: 'By Devon Lane',
      rating: '4.6 Rating',
      ratingIcon: images.ratingIcon,
      amount: '$110,00',
      btnText: 'Add',
      heartIcon: images.heartIcon,
    },
  ];

  const curriculumData = [
    {
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

  const renderRecommendedBooks = ({ item }: { item: Prop }) => {
    return (

      <TouchableOpacity style={styles.bookCard} activeOpacity={0.7} onPress={() => navigation.navigate('AddBook')}>
        <Image source={item.headImg} style={styles.bookImage} />
        <TouchableOpacity activeOpacity={0.7} style={styles.heartIconMain}>
          <Image source={item.heartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
        <View style={styles.ratingRow}>
          <Image source={item.ratingIcon} style={styles.ratingIcon} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Reviews')}
          >
            <Text style={styles.ratingText}>{item.rating}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: height * 0.01 }}>
          <Text style={styles.bookTitle}>{item.headText}</Text>
          <Text style={styles.authorName}>{item.authorName}</Text>
        </View>
        <View style={styles.amountMain}>
          <Text style={styles.amount}>{item.amount}</Text>
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.addButtonText}>{item.btnText}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTrendingBooks = ({ item }: { item: Prop }) => {
    return (
      <TouchableOpacity style={styles.bookCard} activeOpacity={0.7} onPress={() => navigation.navigate('AddBook')}>
        <Image source={item.headImg} style={styles.bookImage} />
        <TouchableOpacity activeOpacity={0.7} style={styles.heartIconMain}>
          <Image source={item.heartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
        <View style={styles.ratingRow}>
          <Image source={item.ratingIcon} style={styles.ratingIcon} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Reviews')}
          >
            <Text style={styles.ratingText}>{item.rating}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: height * 0.01 }}>
          <Text style={styles.bookTitle}>{item.headText}</Text>
          <Text style={styles.authorName}>{item.authorName}</Text>
        </View>
        <View style={styles.amountMain}>
          <Text style={styles.amount}>{item.amount}</Text>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.addButtonText}>{item.btnText}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCurriculum = ({ item }: { item: Prop }) => {
    return (
      <View style={styles.bookCard}>
        <Image source={item.headImg} style={styles.bookImage} />
        <TouchableOpacity activeOpacity={0.7} style={styles.heartIconMain}>
          <Image source={item.heartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
        <View style={styles.ratingRow}>
          <Image source={item.ratingIcon} style={styles.ratingIcon} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Reviews')}
          >
            <Text style={styles.ratingText}>{item.rating}</Text>
          </TouchableOpacity>
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

  const renderMyBooks = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        style={styles.bookCard}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('AddBook', { productId: item.id })}
      >
        <Image
          source={{ uri: `http://18.204.175.233:3001/${item.image}` }}
          style={styles.bookImage}
        />

        <TouchableOpacity activeOpacity={0.7} style={styles.heartIconMain} onPress={() => postFavourite(item.id, item.is_fav)}>
          <Image
            source={item.is_fav ? images.filledFav : images.heartIcon}
            style={styles.heartIcon}
          />
        </TouchableOpacity>

        <View style={styles.ratingRow}>
          <Image source={images.ratingIcon} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>
            {item.averageRating || "0.0"} Rating
          </Text>
        </View>

        <View style={{ gap: height * 0.01 }}>
          <Text
            style={styles.bookTitle}
            numberOfLines={1}
            ellipsizeMode="tail">{item.name}</Text>
          <Text style={styles.authorName}>By {item.author}</Text>
        </View>

        <View style={styles.amountMain}>
          <Text style={styles.amount}>${item.price}</Text>
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const fetchCategories = async () => {
    try {
      setLoading(true)

      const { response, error } = await apiHelper(
        "GET",
        "/products/categories",
        {},
        {},
        null
      )

      console.log("Ecommerce Categories Data!", response?.data)
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

  const fetchProducts = async () => {
    try {
      setLoading(true)

      const { response, error } = await apiHelper(
        "GET",
        "/products",
        {},
        {},
        null
      )

      console.log("Response from the fetched Products!", response)

      if (response?.data.data.products) {
        setProducts(response.data.data.products);

        Toast.show({
          type: "success",
          text1: "Success",
          text2: response.data.message
        })
      }
    } catch (error) {
      console.log("Error while Fetching Products", error)
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message
      })
    } finally {
      setLoading(false)
    }
  }

  const postFavourite = async (productId: number, isFav: boolean) => {
    try {
      setLoading(true);

      const body = {
        action: isFav ? "unfavourite" : "favourite",
        type: "product",
        videoId: 1,
        productId: productId
      };

      const { response } = await apiHelper(
        "POST",
        "/users/favourites",
        {},
        {},
        body
      );

      console.log("Response while posting Favourites", response)

      if (response?.data?.status) {
        // update UI locally
        setProducts(prev =>
          prev.map(p =>
            p.id === productId
              ? { ...p, is_fav: !isFav }
              : p
          )
        );
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
    fetchCategories()
    fetchProducts();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <TopHeader
        isMenu={true}
        isProfile={true}
        notification={true}
        isCart={true}
      />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <CustomTextInput
            inputHeight={height * 0.06}
            inputWidth={width * 0.85}
            placeholder="Search"
            placeholderTextColor={colors.black}
            borderRadius={30}
            leftIcon={<Image source={images.searchIcon} />}
          />
        </View>

        <ScrollView
          contentContainerStyle={{
            paddingBottom: height * 0.3,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.recommendedBooksMain}>
            <View style={styles.recommendedHeadText}>
              <Text style={styles.recommendedTextOne}>
                Recommended Books For You
              </Text>
              <Text style={styles.seeAllText}>See All</Text>
            </View>
            <FlatList
              data={recommendedData}
              renderItem={renderRecommendedBooks}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                marginTop: height * 0.01,
                left: width * 0.03,
              }}
            />
          </View>
          {/* <View style={styles.trendingBooksMain}>
            <View style={styles.recommendedHeadText}>
              <Text style={styles.recommendedTextOne}>Trending Books</Text>
              <Text style={styles.seeAllText}>See All</Text>
            </View>
            <FlatList
              data={trendingBooksDate}
              renderItem={renderTrendingBooks}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                marginTop: height * 0.01,
                left: width * 0.03,
              }}
            />
          </View> */}
          {/* <View style={styles.curriculumMain}>
            <View style={styles.recommendedHeadText}>
              <Text style={styles.recommendedTextOne}>ELB Curriculum</Text>
              <Text style={styles.seeAllText}>See All</Text>
            </View>
            <FlatList
              data={curriculumData}
              renderItem={renderCurriculum}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                marginTop: height * 0.01,
                left: width * 0.03,
              }}
            />
          </View> */}




          <View style={styles.curriculumMain}>
            <View style={styles.recommendedHeadText}>
              <Text style={styles.recommendedTextOne}>My Books</Text>
              <Text style={styles.seeAllText}>See All</Text>
            </View>

            {products.length === 0 ? (
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                No books available
              </Text>
            ) : (
              <FlatList
                data={products}
                renderItem={renderMyBooks}
                keyExtractor={item => String(item.id)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 10,
                  marginTop: height * 0.01,
                  left: width * 0.03,
                }}
              />
            )}
          </View>
        </ScrollView>
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
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    backgroundColor: colors.white,
    zIndex: 1,
  },
  recommendedBooksMain: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  recommendedHeadText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.85,
  },
  recommendedTextOne: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.md,
    color: colors.black,
  },
  seeAllText: {
    fontFamily: fontFamily.GilroyLight,
    fontSize: fontSizes.sm,
    color: colors.black,
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
    bottom: height * 0.005,
  },
  addButton: {
    backgroundColor: colors.darkmarhoon,
    width: width * 0.2,
    height: height * 0.033,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 5,
    bottom: height * 0.005,
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

export default ECommerce;
