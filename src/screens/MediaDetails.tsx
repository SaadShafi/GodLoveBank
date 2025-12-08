import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';
import { useEffect, useState } from 'react';
import { apiHelper } from '../services';
import Toast from 'react-native-toast-message';
import Video from 'react-native-video';

const MediaDetails = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);
  const route = useRoute()
  console.log("Route in the Media Details Screen!",route?.params)
  const videoId = route?.params?.VideoID
  console.log("Video Id from the params", videoId)
  const [details, setDetails] = useState(null)

  const handleFavouritePress = async (videoId: number, isCurrentlyFavourite: boolean) => {
    try {
      setLoading(true);
      
      const action = isCurrentlyFavourite ? "unfavourite" : "favourite";

      const body ={
        action: action,
        type: "video",
        videoId: videoId,
        product: 1
      }
      
      const { response, error } = await apiHelper(
        "POST",
        "/users/favourites",
        {},
        {},
        body
      );

      console.log("Response from the POST favourite API!", response)

      if (response) {
        setDetails(prev => ({
          ...prev,
          is_fav: !isCurrentlyFavourite
        }));
        
        Toast.show({
          type: "success",
          text1: "Success",
          text2: `Video ${!isCurrentlyFavourite ? "added to" : "removed from"} favourites`
        });
      }
      
      if (error) {
        throw new Error(error.message || "Failed to update favourite");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message || "Failed to update favourite"
      });
    } finally {
      setLoading(false);
    }
  };


  const fetchDetails = async () => {
    setLoading(true)

    try {
      const { response, error } = await apiHelper(
        "GET",
        `/videos/details/${videoId}`,
        {},
        {},
        null
      )
      console.log("Response of the video Details API!",response)
      const apiData = response?.data.data || []
      setDetails(apiData)
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Success"
      }) 
    } catch (error) {
       Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.message
      })
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDetails()
  },[])

  return (
    <View style={styles.container}>
      <View
        style={{ position: 'absolute', left: width * 0.03, top: height * 0.03 }}
      >
        <TopHeader isBack={true} favIcon={true}  videoId={videoId}
          onFavouritePress={handleFavouritePress}
          isFavourite={details?.is_fav || false} // Pass the current favourite status
        />
      </View>

      <View>
        {/* <Image source={images.media} style={styles.logo} /> */}
         {details && (
            <Video
              source={{ uri: details.videoUrl }}
              style={{ width: '100%', aspectRatio: 14 / 9 }}
              controls
              resizeMode="contain"
            />
          )}
      </View>

      <View style={styles.therapyContainer}>
        <Text 
          style={styles.text} 
          numberOfLines={1}
          ellipsizeMode="tail">{ details?.tags || "Interpersonal therapy"}</Text>
      </View>

      <Text style={styles.text1}>
        { details?.title || "Lorem Ipsum dolor sit Amet Consectetur. Dictum Sapien in Phasellus Rhoncus Commodo."}
      </Text>

      <Text style={styles.desc}>Description</Text>
      <Text style={styles.description}>
        { details?.description || "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.."}
      </Text>
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
  logo: {
    alignSelf: 'center',
    width: width * 0.999,
    height: height * 0.35,
  },
  therapyContainer: {
    backgroundColor: colors.blue,
    height: height * 0.03,
    width: width * 0.4,
    borderRadius: 8,
    top: height * 0.02,
    justifyContent: 'center',
    left: width * 0.06,
  },
  text: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    alignSelf: 'center',
    color: colors.white,
  },
  text1: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg2,
    color: colors.black,
    paddingHorizontal: width * 0.05,
    top: height * 0.04,
  },
  desc: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm2,
    color: colors.black,
    paddingHorizontal: width * 0.05,
    top: height * 0.08,
  },
  description: {
    fontFamily: fontFamily.GilroyMedium,
    lineHeight: fontSizes.sm2 * 1.4,
    color: colors.black,
    paddingHorizontal: width * 0.05,
    top: height * 0.09,
    textAlign: 'justify',
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

export default MediaDetails;
