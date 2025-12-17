import { useEffect, useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import Toast from 'react-native-toast-message';
import { apiHelper } from '../services';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [faqs, setFaqsData] = useState<any>(null);


  const data = [
    {
      id: 1,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
      desc: 'You can get in touch with us through below platforms. Our team will reach out to you as soon as possible.',
    },
    {
      id: 2,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
      desc: 'Details for reason 2 go here.',
    },
    {
      id: 3,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
      desc: 'Details for reason 3 go here.',
    },
    {
      id: 4,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
      desc: 'Other details go here.',
    },
  ];

  const toggleDropdown = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

    const fetchfaqs = async () => {
    const { response } = await apiHelper(
      "GET",
      "general/faqs",
      {},
    );
  
    if (response && response.status) {
      setFaqsData(response.data.data);  // ✅ correct
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Faqs fetched successfully",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: response?.message || "Failed to fetched faqs",
      });
    }
  };
  
  
    useEffect(() => {
      fetchfaqs();
    }, []);


  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.topHeader}>
        <TopHeader text="FAQs" isBack={true} />
      </View>

      <ScrollView contentContainerStyle={{}}>
        {(faqs || []).map((item, index) => (
          <View key={item.id} style={styles.card}>
            <TouchableOpacity
              onPress={() => toggleDropdown(index)}
              style={styles.row}
              activeOpacity={0.7}
            >
              <Text style={styles.title}>{item.question}</Text>
              {activeIndex === index ? (
                <TouchableOpacity onPress={() => setActiveIndex(null)}>
                  <Image source={images.cross} />
                </TouchableOpacity>
              ) : (
                <Image source={images.back} />
              )}
            </TouchableOpacity>

            {activeIndex === index && (
              <View style={styles.dropdown}>
                <Text style={styles.desc}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    width: width * 0.9,
    alignSelf: 'center',
    top: Platform.OS === 'ios' ? height * 0.06 : height * 0.01,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.07,
    paddingVertical: height * 0.02,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: 16,
    color: colors.black,
  },
  arrow: {
    fontSize: 20,
    color: colors.gray,
  },
  icon: {
    height: 18,
    width: 18,
    tintColor: colors.black,
  },
  dropdown: {
    marginTop: 12,
  },
  desc: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: 14,
    color: colors.darkGray,
    lineHeight: 20,
  },
  topHeader: {
    backgroundColor: colors.white,
    height: height * 0.1,
  },
});

export default FAQs;
