import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { apiHelper } from '../services';
import { useNotificationCount } from '../hooks/notificationContext';
import { useNavigation } from '@react-navigation/native';
import { fontSizes } from '../utilities/fontsizes';
import { fontFamily } from '../assets/Fonts';

interface Notification {
  id: number;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  module?: string;
  payload?: any;
  resourceId?: number;
  updatedAt?: string;
  userId?: number;
}

export default function NotificationsScreen() {
  const navigation = useNavigation<any>()
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { decrementCount, refreshCount } = useNotificationCount(); // Initialize the hook

  const fetchNotification = async (page = 1, limit = 10) => {
    setLoading(true);
    try {
      const { response, error } = await apiHelper(
        "GET",
        "notifications",
        {
          page: page,
          limit: limit,
        },
        {},
        null
      );

      console.log("response of the fetched notification API!", response);

      if (response?.data?.data) {
        const notificationsData = response.data.data.notifications || response.data.data;
        setNotifications(notificationsData);
        console.log("Notifications fetched:", notificationsData);
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error || "Failed to fetch notifications",
        });
      }
    } catch (err) {
      console.log("Notification fetch error:", err);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "An error occurred while fetching notifications",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotification(1, 10);
    refreshCount();
  }, []);

  const markNotificationAsRead = async (notificationId: number) => {
    try {
      const { response, error } = await apiHelper(
        "PUT",
        `notifications/${notificationId}/read`,
        {},
        {},
        {}
      );

      if (response?.data.data) {
        console.log(`Notification ${notificationId} marked as read`);
        return true;
      } else {
        console.log("Failed to mark notification as read:", error);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error || "Failed to mark notification as read",
        });
        return false;
      }
    } catch (err) {
      console.log("Error marking notification as read:", err);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "An error occurred while marking notification as read",
      });
      return false;
    }
  };

  const handleNotificationPress = async (item: Notification) => {
    console.log('Notification pressed:', item.id);

    if (item.isRead) {
      handleNotificationNavigation(item);
      return;
    }
    const success = await markNotificationAsRead(item.id);

    if (success) {
      setNotifications(prevNotifications =>
        prevNotifications.map(notification =>
          notification.id === item.id
            ? { ...notification, isRead: true }
            : notification
        )
      );
      decrementCount();
    }
  };

  const handleNotificationNavigation = (item: Notification) => {
    switch (item.module) {
      case 'order':
        console.log('Navigate to order:', item.resourceId);
        break;
      default:
        console.log('No specific navigation for module:', item.module);
        break;
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchNotification(1, 10);
    refreshCount();
    setRefreshing(false);
  };

  const handleReadAll = async() => {
    try {
      setLoading(true)

      const {response, error} = await apiHelper(
        "PUT",
        "/notifications/mark-all-read",
        {},
        {},
        {}
      )
      console.log("Response from the read All Notification API!", response)

      if (response?.data?.status === true) {
        setNotifications(prevNotifications =>
          prevNotifications.map(notification => ({
            ...notification,
            isRead: true
          }))
        );
        refreshCount();
    }
    } catch (error) {
      console.log("Error Reading all Notification",error)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refreshCount();
    });

    return unsubscribe;
  }, [navigation, refreshCount]);


  return (
    <SafeAreaView style={styles.container}>
        <TopHeader text="Notification" isBack={true} />
        <TouchableOpacity activeOpacity={0.7} style={styles.readAllMain} onPress={handleReadAll}>
          <Text style={styles.readAllText}>Read All</Text>
        </TouchableOpacity>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={[
          styles.listContent,
          notifications.length === 0 && !loading && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={
          !loading ? (
            <View style={{ alignItems: 'center', marginTop: 40 }}>
              <Text style={{ color: '#6b7280', fontSize: 16 }}>
                No notifications found
              </Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => {
          const isActive = !item.isRead;

          return (
            <TouchableOpacity
              style={[
                styles.card,
                isActive ? styles.cardActive : styles.cardInactive,
                !item.isRead && { borderLeftWidth: 4, borderLeftColor: colors.marhoon },
              ]}
              activeOpacity={0.8}
              onPress={() => handleNotificationPress(item)}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isActive ? styles.iconActive : styles.iconInactive,
                ]}
              >
                <Image
                  source={images.notification}
                  style={{ width: 22, height: 22, resizeMode: 'contain' }}
                />
              </View>

              <View style={styles.textWrapper}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text
                    style={[
                      styles.cardTitle,
                      isActive ? styles.textActive : styles.textInactive,
                    ]}
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>

                  {!item.isRead && (
                    <View style={styles.unreadIndicator} />
                  )}
                </View>

                <Text
                  style={[
                    styles.cardDesc,
                    isActive ? styles.textDescActive : styles.textDescInactive,
                  ]}
                  numberOfLines={2}
                >
                  {item.message}
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                  <Text
                    style={[
                      styles.cardTime,
                      isActive ? styles.textTimeActive : styles.textTimeInactive,
                    ]}
                  >
                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </Text>

                  <Text
                    style={[
                      styles.cardTime,
                      isActive ? styles.textTimeActive : styles.textTimeInactive,
                    ]}
                  >
                    {new Date(item.createdAt).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  readAllMain: {
    marginLeft: width * 0.8,
    bottom: height * 0.043
  },
  readAllText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm2,
    color: colors.darkGray,
  },
  listContent: {
    padding: 16,
    top: -height * 0.01
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: height * 0.025,
    borderRadius: 18,
    marginBottom: height * 0.015,
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2
  },
  cardActive: {
    backgroundColor: colors.marhoon, 
  },
  cardInactive: {
    backgroundColor: colors.lightGray, 
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActive: {
    backgroundColor: colors.white, 
  },
  iconInactive: {
    backgroundColor: colors.bordercolor, 
  },
  textWrapper: {
    marginLeft: width * 0.03,
    flex: 1,
  },
  cardTitle: {
    fontSize: fontSizes.sm2,
    fontWeight: '600',
    flex: 1,
  },
  cardDesc: {
    fontSize: fontSizes.sm,
    lineHeight: height * 0.02,
    marginTop: height * 0.005,
    color: colors.black
  },
  cardTime: {
    fontSize: fontSizes.sm,
    marginTop: height * 0.001,
    color: colors.black
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.marhoon,
    marginLeft: 8,
  },
  textActive: {
    color: colors.white,
  },
  textInactive: {
    color: colors.black, 
  },
  textDescActive: {
    color: colors.white, 
  },
  textDescInactive: {
    color: colors.black, 
  },
  textTimeActive: {
    color: colors.white, 
  },
  textTimeInactive: {
    color: colors.darkGray, 
  },
  // topHeader: {
  //   backgroundColor: colors.white,
  //   height: height * 0.1,
  // },
});