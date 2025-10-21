// import { useState } from 'react';
// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import TopHeader from '../components/Topheader';
// import { colors } from '../utilities/colors';
// import images from '../assets/Images';
// import CustomButton from '../components/CustomButton';
// import { height, width } from '../utilities';
// import { fontFamily } from '../assets/Fonts';
// import { fontSizes } from '../utilities/fontsizes';
// import { Modal, FlatList } from 'react-native';


// const countryData = [
//     { code: '+1', flag: '🇺🇸', name: 'United States' },
//     { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
//     { code: '+91', flag: '🇮🇳', name: 'India' },
//     { code: '+61', flag: '🇦🇺', name: 'Australia' },
//     { code: '+33', flag: '🇫🇷', name: 'France' },
//     { code: '+49', flag: '🇩🇪', name: 'Germany' },
//     { code: '+81', flag: '🇯🇵', name: 'Japan' },
//     { code: '+86', flag: '🇨🇳', name: 'China' },
//     { code: '+971', flag: '🇦🇪', name: 'UAE' },
//     { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
// ];


// const ForgotPassword = () => {
//     const [phone, setPhone] = useState('');
//     const [isPhoneFocused, setIsPhoneFocused] = useState(false);
//     const [showCountryPicker, setShowCountryPicker] = useState(false);
//     const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

//     const handleCountrySelect = (country) => {
//         setSelectedCountry(country);
//         setShowCountryPicker(false);
//     };

//     const renderCountryItem = ({ item }) => (
//         <TouchableOpacity
//             style={styles.countryItem}
//             onPress={() => handleCountrySelect(item)}
//         >
//             <Text style={styles.countryFlag}>{item.flag}</Text>
//             <Text style={styles.countryName}>{item.name}</Text>
//             <Text style={styles.countryCode}>{item.code}</Text>
//         </TouchableOpacity>
//     );
//     return (
//         <View style={{ flex: 1, backgroundColor: colors.white }}>
//             <TopHeader isBack={true} text="Forgot Password" />
//             <View style={styles.container}>
//                 <View style={styles.textMain}>
//                     <Text style={styles.text}>
//                         In order to reset your password you need to enter
//                     </Text>
//                     <Text style={styles.text}>your registered phone number.</Text>
//                 </View>
//                 <View style={styles.inputMain}>
//                     <View
//                         style={[
//                             styles.phoneRow,
//                             {
//                                 borderColor:
//                                     isPhoneFocused || phone ? colors.brownishRed : colors.lightGray,
//                                 backgroundColor:
//                                     isPhoneFocused || phone ? colors.bgBlue : colors.lightGray,
//                             },
//                         ]}
//                     >
//                         <TouchableOpacity
//                             style={styles.countrySelector}
//                             onPress={() => setShowCountryPicker(true)}
//                             activeOpacity={0.7}
//                         >
//                             <Text style={styles.flagEmoji}>{selectedCountry.flag}</Text>
//                             <Image source={images.arrowdown} />
//                         </TouchableOpacity>
//                         <Text style={[styles.numberText, { fontFamily: fontFamily.UrbanistMedium, fontSize: fontSizes.sm2 }]}>
//                             {selectedCountry.code}
//                         </Text>
//                         <Image source={images.line} style={styles.lineImg} />
//                         <TextInput
//                             style={[styles.phoneInput, { fontFamily: fontFamily.UrbanistMedium, fontSize: fontSizes.sm2 }]}
//                             placeholder="Phone Number"
//                             placeholderTextColor={colors.black}
//                             keyboardType="phone-pad"
//                             value={phone}
//                             onChangeText={setPhone}
//                             onFocus={() => setIsPhoneFocused(true)}
//                             onBlur={() => setIsPhoneFocused(false)}
//                         />
//                     </View>
//                     <Modal
//                         visible={showCountryPicker}
//                         animationType="slide"
//                         transparent={true}
//                         onRequestClose={() => setShowCountryPicker(false)}
//                     >
//                         <View style={styles.modalContainer}>
//                             <View style={styles.modalContent}>
//                                 <View style={styles.modalHeader}>
//                                     <Text style={styles.modalTitle}>Select Country</Text>
//                                     <TouchableOpacity
//                                         onPress={() => setShowCountryPicker(false)}
//                                         style={styles.closeButton}
//                                     >
//                                         <Text style={styles.closeText}>✕</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                                 <FlatList
//                                     data={countryData}
//                                     renderItem={renderCountryItem}
//                                     keyExtractor={(item) => item.code}
//                                     showsVerticalScrollIndicator={false}
//                                 />
//                             </View>
//                         </View>
//                     </Modal>
//                 </View>
//                 <View style={styles.btnMain}>
//                     <CustomButton
//                         text="Continue"
//                         textColor={colors.white}
//                         btnHeight={height * 0.065}
//                         btnWidth={width * 0.85}
//                         backgroundColor={colors.marhoon}
//                         borderRadius={20}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//     },
//     textMain: {
//         alignItems: 'center',
//         top: height * 0.04,
//     },
//     countrySelector: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: width * 0.02,
//     },
//     flagEmoji: {
//         fontSize: fontSizes.md,
//         marginRight: width * 0.01,
//     },
//     text: {
//         fontFamily: fontFamily.UrbanistMedium,
//         fontSize: fontSizes.sm2,
//         color: colors.black,
//     },
//     inputMain: {
//         marginTop: height * 0.08,
//         gap: height * 0.01,
//     },
//     phoneRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderColor: colors.gray,
//         borderWidth: 1,
//         borderRadius: 30,
//         paddingHorizontal: 12,
//         width: width * 0.85,
//         height: height * 0.06,
//     },
//     flag: {
//         width: width * 0.09,
//         height: height * 0.03,
//         resizeMode: 'contain',
//         marginRight: width * 0.02,
//     },
//     phoneInput: {
//         flex: 1,
//         fontSize: fontSizes.sm2,
//         color: colors.black,
//     },
//     numberText: {
//         fontFamily: fontFamily.RubikMedium,
//         fontSize: fontSizes.sm,
//         color: colors.black,
//     },
//     lineImg: {
//         height: height * 0.024,
//         width: width * 0.01,
//         resizeMode: 'contain',
//         marginLeft: width * 0.01,
//     },
//     btnMain: {
//         top: height * 0.6,
//     },
//     countryItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: colors.lightGray,
//     },
//     countryFlag: {
//         fontSize: fontSizes.md,
//         width: 30,
//     },
//     countryName: {
//         flex: 1,
//         fontFamily: fontFamily.UrbanistMedium,
//         fontSize: fontSizes.sm,
//         color: colors.black,
//         marginLeft: 10,
//     },
//     countryCode: {
//         fontFamily: fontFamily.UrbanistMedium,
//         fontSize: fontSizes.sm,
//         color: colors.gray,
//     },
//     // Modal Styles
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContent: {
//         width: width * 0.85,
//         height: height * 0.6,
//         backgroundColor: colors.white,
//         borderRadius: 20,
//         padding: 20,
//     },
//     modalHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//         borderBottomWidth: 1,
//         borderBottomColor: colors.lightGray,
//         paddingBottom: 10,
//     },
//     modalTitle: {
//         fontFamily: fontFamily.UrbanistBold,
//         fontSize: fontSizes.md,
//         color: colors.black,
//     },
//     closeButton: {
//         padding: 5,
//     },
//     closeText: {
//         fontSize: fontSizes.lg,
//         color: colors.black,
//     },
// });

// export default ForgotPassword;











import { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal,
    FlatList,
} from 'react-native';
import TopHeader from '../components/Topheader';
import { colors } from '../utilities/colors';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import { height, width } from '../utilities';
import { fontFamily } from '../assets/Fonts';
import { fontSizes } from '../utilities/fontsizes';

const countryData = [
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: '+81', flag: '🇯🇵', name: 'Japan' },
    { code: '+86', flag: '🇨🇳', name: 'China' },
    { code: '+971', flag: '🇦🇪', name: 'UAE' },
    { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
];

const ForgotPassword = () => {
    const [phone, setPhone] = useState('');
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setShowCountryPicker(false);
    };

    const renderCountryItem = ({ item }) => (
        <TouchableOpacity
            style={styles.countryItem}
            onPress={() => handleCountrySelect(item)}
        >
            <Text style={styles.countryFlag}>{item.flag}</Text>
            <Text style={styles.countryName}>{item.name}</Text>
            <Text style={styles.countryCode}>{item.code}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TopHeader isBack={true} text="Forgot Password" />
            <View style={styles.container}>
                <View style={styles.textMain}>
                    <Text style={styles.text}>
                        In order to reset your password you need to enter
                    </Text>
                    <Text style={styles.text}>your registered phone number.</Text>
                </View>

                <View style={styles.inputMain}>
                    <View
                        style={[
                            styles.phoneRow,
                            {
                                borderColor:
                                    isPhoneFocused || phone
                                        ? colors.brownishRed
                                        : colors.lightGray,
                                backgroundColor:
                                    isPhoneFocused || phone ? colors.bgBlue : colors.lightGray,
                            },
                        ]}
                    >
                        {/* Country Flag and Dropdown */}
                        <TouchableOpacity
                            style={styles.countrySelector}
                            onPress={() => setShowCountryPicker(true)}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.flagEmoji}>{selectedCountry.flag}</Text>
                            <Image
                                source={images.arrowdown}
                                style={{ marginLeft: width * 0.008, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        {/* Country Code */}
                        <Text
                            style={[
                                styles.numberText,
                                {
                                    fontFamily: fontFamily.UrbanistMedium,
                                    fontSize: fontSizes.sm2,
                                },
                            ]}
                        >
                            {selectedCountry.code}
                        </Text>

                        {/* Divider Line */}
                        <View
                            style={{
                                height: height * 0.025,
                                width: 1,
                                backgroundColor: colors.gray,
                                marginHorizontal: width * 0.02,
                            }}
                        />

                        {/* Phone Input */}
                        <TextInput
                            style={[
                                styles.phoneInput,
                                {
                                    fontFamily: fontFamily.UrbanistMedium,
                                    fontSize: fontSizes.sm2,
                                },
                            ]}
                            placeholder="Phone Number"
                            placeholderTextColor={colors.black}
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                            onFocus={() => setIsPhoneFocused(true)}
                            onBlur={() => setIsPhoneFocused(false)}
                        />
                    </View>

                    {/* Country Picker Modal */}
                    <Modal
                        visible={showCountryPicker}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setShowCountryPicker(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalTitle}>Select Country</Text>
                                    <TouchableOpacity
                                        onPress={() => setShowCountryPicker(false)}
                                        style={styles.closeButton}
                                    >
                                        <Text style={styles.closeText}>✕</Text>
                                    </TouchableOpacity>
                                </View>
                                <FlatList
                                    data={countryData}
                                    renderItem={renderCountryItem}
                                    keyExtractor={(item) => item.code}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={styles.btnMain}>
                    <CustomButton
                        text="Continue"
                        textColor={colors.white}
                        btnHeight={height * 0.065}
                        btnWidth={width * 0.85}
                        backgroundColor={colors.marhoon}
                        borderRadius={20}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textMain: {
        alignItems: 'center',
        top: height * 0.04,
    },
    countrySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: width * 0.02,
    },
    flagEmoji: {
        fontSize: fontSizes.md,
        marginRight: width * 0.01,
    },
    text: {
        fontFamily: fontFamily.UrbanistMedium,
        fontSize: fontSizes.sm2,
        color: colors.black,
    },
    inputMain: {
        marginTop: height * 0.08,
        gap: height * 0.01,
    },
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 20, // ✅ Updated from 30 → 20
        paddingHorizontal: 12,
        width: width * 0.85,
        height: height * 0.06,
    },
    phoneInput: {
        flex: 1,
        fontSize: fontSizes.sm2,
        color: colors.black,
    },
    numberText: {
        fontFamily: fontFamily.RubikMedium,
        fontSize: fontSizes.sm,
        color: colors.black,
    },
    btnMain: {
        top: height * 0.6,
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
    },
    countryFlag: {
        fontSize: fontSizes.md,
        width: 30,
    },
    countryName: {
        flex: 1,
        fontFamily: fontFamily.UrbanistMedium,
        fontSize: fontSizes.sm,
        color: colors.black,
        marginLeft: 10,
    },
    countryCode: {
        fontFamily: fontFamily.UrbanistMedium,
        fontSize: fontSizes.sm,
        color: colors.gray,
    },
    // Modal Styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: width * 0.85,
        height: height * 0.6,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        paddingBottom: 10,
    },
    modalTitle: {
        fontFamily: fontFamily.UrbanistBold,
        fontSize: fontSizes.md,
        color: colors.black,
    },
    closeButton: {
        padding: 5,
    },
    closeText: {
        fontSize: fontSizes.lg,
        color: colors.black,
    },
});

export default ForgotPassword;
