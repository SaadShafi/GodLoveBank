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
import { height } from '../utilities';
import { colors } from '../utilities/colors';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { apiHelper } from '../services';

const notifications = [
  {
    id: '1',
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet consectetur. Id.',
    active: true,
  },
  {
    id: '2',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    active: false,
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet consectetur. Sed.',
    active: false,
  },
  {
    id: '4',
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    active: false,
  },
];

interface Notification {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  isRead: boolean;
  type: string;
}

export default function NotificationsScreen() {
  const token = useSelector((state: any) => state.role.userAuthToken);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);


  const fetchNotification = async () => {
    setLoading(true);
    try {
      const { response, error } = await apiHelper(
        "GET",
        "notifications",
        {},
        {}
      );
      if (response?.data?.data) {
        setNotifications(response.data.data);
        console.log("Notifications fetched:", response.data.data);
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error?.message || "Failed to fetch notifications",
        });
      }
    } catch (err) {
      console.error("Notification fetch error:", err);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "An error occurred while fetching notifications",
      });
    } finally {
      setLoading(false);
    }
  };

//   const fetchNotification = async () => {
//   setLoading(true);
//   try {
//     const { response, error } = await apiHelper(
//       'GET',
//       'notifications',
//       {},
//       token
//     );

//     const notificationsData = response?.data?.data?.notifications;

//     if (Array.isArray(notificationsData)) {
//       setNotifications(notificationsData);

//       if (notificationsData.length === 0) {
//         Toast.show({
//           type: 'success',
//           text1: 'No success',
//           text2: 'Notifications fetched successfully',
//         });
//       }
//     } else {
//       Toast.show({
//         type: 'error',
//         text1: 'Error',
//         text2: error?.message || 'Invalid notification data',
//       });
//     }
//   } catch (err) {
//     console.error('Notification fetch error:', err);
//     Toast.show({
//       type: 'error',
//       text1: 'Error',
//       text2: 'An error occurred while fetching notifications',
//     });
//   } finally {
//     setLoading(false);
//   }
// };
  useEffect(() => {
    fetchNotification();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <TopHeader text="Notification" isBack={true} />
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={[
        styles.listContent,
        notifications.length === 0 && !loading && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
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
          const isActive = item.is_read === 0; // unread = active

          return (
            <TouchableOpacity
              style={[
                styles.card,
                isActive ? styles.cardActive : styles.cardInactive,
              ]}
              activeOpacity={0.8}
              onPress={() => {
                // later: mark as read API
                console.log('Notification pressed:', item.id);
              }}
            >
              {/* Icon */}
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

              {/* Text */}
              <View style={styles.textWrapper}>
                <Text
                  style={[
                    styles.cardTitle,
                    isActive ? styles.textActive : styles.textInactive,
                  ]}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>

                <Text
                  style={[
                    styles.cardDesc,
                    isActive ? styles.textDescActive : styles.textDescInactive,
                  ]}
                  numberOfLines={2}
                >
                  {item.message || item.description}
                </Text>
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#fff',
  },
  headerIcon: {
    paddingRight: 12,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  listContent: {
    padding: 16,
    top: height * 0.01,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: height * 0.025,
    borderRadius: 18,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
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
    marginLeft: 12,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },

  textActive: {
    color: colors.white,
  },
  textInactive: {
    color: '#111827',
  },
  textDescActive: {
    color: '#f3f4f6',
  },
  textDescInactive: {
    color: '#4b5563',
  },
  topHeader: {
    backgroundColor: colors.white,
    height: height * 0.1,
  },
});
