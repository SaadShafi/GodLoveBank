import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const MediaLibrary = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = ['ALL', 'Love', 'Compassion', 'Forgiveness'];

  const recentVideos = [
    {
      id: '1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      duration: '25 Min',
      image: images.recent,
    },
    {
      id: '2',
      title: 'Sapien Uma Lectus habitasse fermentum',
      description: 'Sapien uma lectus habitasse fermentum.',
      duration: '20 Min',
      image: images.recent,
    },
    {
      id: '3',
      title: 'Amet Consectetur habitasse fermentum',
      description: 'Amet consectetur fermentum.',
      duration: '30 Min',
      image: images.recent,
    },
  ];

  const relatedVideos = [
    {
      id: '1',
      title: 'Lorem Ipsum Dolor Sit Amet',
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
  ];

  const allVideos = [...recentVideos, ...relatedVideos];

  // Filter videos based on search text
  const filteredVideos = allVideos.filter(
    video =>
      video.title.toLowerCase().includes(searchText.toLowerCase()) ||
      video.description.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderVideoItem = ({ item }) => (
    <View style={styles.videoItem}>
      <Image
        source={item.image}
        style={styles.videoThumbnail}
        resizeMode="cover"
      />
      <Text style={styles.videoTitle}>{item.title}</Text>
      <Text style={styles.videoDescription}>{item.description}</Text>
    </View>
  );

  const renderRecentWatchItem = ({ item }) => (
    <TouchableOpacity
      style={styles.recentVideoItem}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('MediaDetails')}
    >
      <View style={styles.recentVideoThumbnail}>
        <Image
          source={item.image}
          style={styles.videoImage}
          resizeMode="cover"
        />
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>

        <Image source={images.favIcon} style={styles.favicon} />

        <Text style={styles.recentVideoTitle}>{item.title}</Text>
        <TouchableOpacity>
          <Image source={images.video} style={styles.video} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderRelatedVideoItem = ({ item }) => (
    <View style={styles.relatedVideoItem}>
      {/* Video thumbnail */}
      <View style={styles.relatedVideoThumbnail}>
        <Image
          source={item.image}
          style={styles.relatedVideoImage}
          resizeMode="cover"
        />

        <Image source={images.favIcon} style={styles.favIcon} />
      </View>

      {/* Text content below the video */}
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
          btnWidth={width * 0.55}
          backgroundColor={colors.darkmarhoon}
          borderRadius={12}
          fontSize={fontSizes.xsm}
          onPress={() => navigation.navigate('MediaDetails')}
        />
      </View>
    </View>
  );

  const renderSection = (title: string, data: any[]) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={renderVideoItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sliderContent}
      />
    </View>
  );

  const renderRecentWatchSection = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Watch</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={recentVideos}
        renderItem={renderRecentWatchItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sliderContent}
      />
    </View>
  );

  const renderRelatedVideosSection = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Related Videos</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={relatedVideos}
        renderItem={renderRelatedVideoItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sliderContent}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <TopHeader isMenu={true} notification={true} isProfile={true} />
      </View>

      <View style={styles.subContainer}>
        <View style={styles.searchContainer}>
          <Image source={images.search} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={colors.black}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {/* Tabs - Made more compact like the design image */}
      <View style={styles.tabsOuterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
          contentContainerStyle={styles.tabsContent}
        >
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content based on search */}
      {searchText ? (
        <View style={styles.searchResults}>
          <Text style={styles.searchResultsTitle}>Search Results</Text>
          <FlatList
            data={filteredVideos}
            renderItem={renderVideoItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Recent Watch Section */}
          {renderRecentWatchSection()}

          {/* Related Videos Section */}
          {renderRelatedVideosSection()}

          {/* Watch Section */}
          {/* {renderSection('Watch', relatedVideos)} */}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    backgroundColor: colors.lightGray,
    height: height * 0.06,
    width: width * 0.9,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  searchInput: {
    flex: 1,
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.black,
    left: width * 0.02,
    padding: 0,
    margin: 0,
  },
  tabsOuterContainer: {
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
  tabsContainer: {
    height: height * 0.04,
  },
  tabsContent: {
    paddingHorizontal: width * 0.04,
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.008,
    borderRadius: 16,
    backgroundColor: colors.lightGray,
    marginRight: width * 0.025,
    height: height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: width * 0.18,
  },
  activeTab: {
    backgroundColor: colors.marhoon,
  },
  tabText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
    textAlign: 'center',
  },
  activeTabText: {
    color: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: width * 0.04,
  },
  section: {
    marginBottom: height * 0.03,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  sectionTitle: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    color: colors.black,
  },
  seeAllText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.marhoon,
  },
  sliderContent: {
    paddingRight: width * 0.04,
  },
  // Recent Watch Styles
  recentVideoItem: {
    width: width * 0.55,
    marginRight: width * 0.04,
  },
  recentVideoThumbnail: {
    width: '100%',
    height: height * 0.13,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.01,
    overflow: 'hidden',
  },
  videoImage: {
    width: '100%',
    height: '100%',
  },
  durationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(99, 29, 21, 1)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
    zIndex: 1,
  },
  durationText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.xs,
    color: colors.white,
  },
  recentVideoTitle: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    width: width * 0.35,
    top: height * 0.08,
    left: width * 0.03,
    color: colors.white,
    position: 'absolute',
  },
  recentVideoDescription: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.xs,
    color: colors.gray,
  },
  // Related Videos Styles
  relatedVideoItem: {
    width: width * 0.58,
    height: height * 0.3,
    marginRight: width * 0.04,
  },
  relatedVideoThumbnail: {
    width: '100%',
    height: height * 0.12,
    borderRadius: 18,
    marginBottom: height * 0.01,
    overflow: 'hidden',
  },
  relatedVideoImage: {
    width: '100%',
    height: '100%',
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
    color: colors.gray,
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
  // Original video styles (for other sections)
  videoItem: {
    width: width * 0.4,
    marginRight: width * 0.04,
  },
  videoThumbnail: {
    width: '100%',
    height: height * 0.12,
    borderRadius: 8,
    marginBottom: height * 0.01,
  },
  videoTitle: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.sm,
    color: colors.black,
    marginBottom: height * 0.005,
  },
  videoDescription: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.xs,
    color: colors.gray,
  },
  searchResults: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.02,
  },
  searchResultsTitle: {
    fontFamily: fontFamily.GilroyBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    marginBottom: height * 0.02,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  favicon: {
    position: 'absolute',
    left: width * 0.03,
    bottom: height * 0.075,
  },
  favIcon: {
    position: 'absolute',
    left: width * 0.03,
    bottom: height * 0.06,
  },
  video: {
    position: 'absolute',
    left: width * 0.15,
    bottom: height * 0.01,
  },
});

export default MediaLibrary;
