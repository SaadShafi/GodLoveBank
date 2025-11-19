// import React from 'react';
// import {
//   FlatList,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import images from '../assets/Images';
// import TopHeader from '../components/Topheader';
// import { height, width } from '../utilities';
// import { colors } from '../utilities/colors';

// const notifications = [
//   {
//     id: '1',
//     title: 'Lorem ipsum dolor',
//     description: 'Lorem ipsum dolor sit amet consectetur. Id.',
//     active: true,
//   },
//   {
//     id: '2',
//     title: 'Lorem ipsum',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     active: false,
//   },
//   {
//     id: '3',
//     title: 'Lorem ipsum dolor sit amet',
//     description: 'Lorem ipsum dolor sit amet consectetur. Sed.',
//     active: false,
//   },
//   {
//     id: '4',
//     title: 'Lorem ipsum dolor',
//     description: 'Lorem ipsum dolor sit amet consectetur.',
//     active: false,
//   },
// ];

// export default function NotificationsScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.topHeader}>
//         <TopHeader text="Notification" isBack={true} />
//       </View>

//       {/* Notifications List */}
//       <FlatList
//         data={notifications}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.listContent}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={[
//               styles.card,
//               item.active ? styles.cardActive : styles.cardInactive,
//             ]}
//             activeOpacity={0.8}
//           >
//             {/* Icon */}
//             <View
//               style={[
//                 styles.iconWrapper,
//                 item.active ? styles.iconActive : styles.iconInactive,
//               ]}

//             ></View>
//             <Image
//               source={images.notification}
//               style={{ right: width * 0.07 }}
//             />
//             <View style={styles.textWrapper}>
//               <Text
//                 style={[
//                   styles.cardTitle,
//                   item.active ? styles.textActive : styles.textInactive,
//                 ]}
//                 numberOfLines={1}
//               >
//                 {item.title}
//               </Text>
//               <Text
//                 style={[
//                   styles.cardDesc,
//                   item.active ? styles.textDescActive : styles.textDescInactive,
//                 ]}
//                 numberOfLines={2}
//               >
//                 {item.description}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6', // gray-100
//   },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e7eb', // gray-200
//     backgroundColor: '#fff',
//   },
//   headerIcon: {
//     paddingRight: 12,
//   },
//   headerTitle: {
//     flex: 1,
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000',
//   },

//   listContent: {
//     padding: 16,
//     top: height * 0.01,
//   },

//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: height * 0.025,
//     borderRadius: 18,
//     marginBottom: 12,
//     shadowColor: colors.black,
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   cardActive: {
//     backgroundColor: colors.marhoon,
//   },
//   cardInactive: {
//     backgroundColor: colors.lightGray,
//   },

//   iconWrapper: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconActive: {
//     backgroundColor: colors.white,
//   },
//   iconInactive: {
//     backgroundColor: colors.bordercolor,
//   },

//   textWrapper: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   cardDesc: {
//     fontSize: 14,
//     lineHeight: 20,
//     marginTop: 2,
//   },

//   textActive: {
//     color: colors.white,
//   },
//   textInactive: {
//     color: '#111827',
//   },
//   textDescActive: {
//     color: '#f3f4f6',
//   },
//   textDescInactive: {
//     color: '#4b5563',
//   },
//   topHeader: {
//     backgroundColor: colors.white,
//     height: height * 0.1,
//   },
// });

import React from 'react';
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

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <TopHeader text="Notification" isBack={true} />
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              item.active ? styles.cardActive : styles.cardInactive,
            ]}
            activeOpacity={0.8}
          >
            {/* Icon */}
            <View
              style={[
                styles.iconWrapper,
                item.active ? styles.iconActive : styles.iconInactive,
              ]}
            >
              <Image
                source={images.notification}
                style={{ width: 22, height: 22, resizeMode: 'contain' }}
              />
            </View>

            <View style={styles.textWrapper}>
              <Text
                style={[
                  styles.cardTitle,
                  item.active ? styles.textActive : styles.textInactive,
                ]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  styles.cardDesc,
                  item.active ? styles.textDescActive : styles.textDescInactive,
                ]}
                numberOfLines={2}
              >
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
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
