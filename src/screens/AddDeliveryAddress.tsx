import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, Modal, FlatList } from "react-native";
import TopHeader from "../components/Topheader";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import { height, width } from "../utilities";
import CustomTextInput from "../components/CustomTextInput";
import { useEffect, useMemo, useState } from "react";
import images from "../assets/Images";
import {
    countries,
    defaultCountry,
    type Country,
} from '../utilities/countries';
import CustomSelect from "../components/CustomSelect";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomButton from "../components/CustomButton";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native"; import { apiHelper } from "../services";
import Toast from "react-native-toast-message";
import { setAddressData } from "../redux/slice/roleSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

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

const AddDeliveryddress = () => {
    const addressData = useSelector((state: RootState) => state.role.addressData)
    console.log("Address Data from the redux!", addressData)
    const dispatch = useDispatch();
    const route = useRoute();
    const navigation = useNavigation<NavigationProp<any>>()
    const [name, setName] = useState("");
    const [countrycode, setCountryCode] = useState('');
    const [phone, setPhone] = useState('');
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");
    const [address, setAddress] = useState("");
    const [selectedLabel, setSelectedLabel] = useState("");
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

    useEffect(() => {
        if (addressData?.id) {
            setName(addressData.name || "");
            setPhone(addressData.phoneNumber || "");
            setCountryCode(addressData.countryCode || "+1");
            setSelectedCountry(
                countryData.find(c => c.code === addressData.countryCode) || countryData[0]
            );
            setRegion(addressData.region || "");
            setCity(addressData.city || "");
            setCode(addressData.postalCode || "");
            setAddress(addressData.address || "");
            setSelectedLabel(addressData.label || "");
            setAgree(addressData.isDefault || false);
        }
    }, [addressData]);

    const handleLabelPress = (label) => {
        setSelectedLabel(label);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }

    const handleCountrySelect = country => {
        setSelectedCountry(country);
        setCountryCode(country.code); // <-- FIXED
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

    const postAddress = async () => {
        try {
            setLoading(true)

            const body = {
                label: selectedLabel,
                name: name,
                phoneNumber: phone,
                countryCode: selectedCountry.code,
                region: region,
                city: city,
                postalCode: code,
                address: address,
                isDefault: agree
            }

            const { response, error } = await apiHelper(
                "POST",
                "/orders/addresses",
                {},
                {},
                body
            )

            console.log("Response from the Address API!", response)

            if (response?.data) {
                Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: response?.data.message
                })

                dispatch(setAddressData(response?.data.data))
            }
            navigation.goBack();
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

    const updateAddress = async () => {
        if (!addressData?.id) return;

        try {
            setLoading(true);

            const body = {
                label: selectedLabel,
                name: name,
                phoneNumber: phone,
                countryCode: selectedCountry.code,
                region: region,
                city: city,
                postalCode: code,
                address: address,
                isDefault: agree
            };

            const { response, error } = await apiHelper(
                "PUT",
                `/orders/addresses/${addressData.id}`,
                {},
                {},
                body
            );

            if (response?.data) {
                Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: response.data.message
                });

                dispatch(setAddressData(response.data.data));
            }

            navigation.goBack();
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

    const handleSave = () => {
        if (!name || !region || !city || !code || !address || !selectedLabel || !agree) {
            Alert.alert("Error", "Please fill all fields and select a label.");
            return;
        }
        if (addressData?.id) {
            updateAddress(); 
        } else {
            postAddress(); 
        }
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <TopHeader text="Add Delivhhy Address" isBackBlack={true} />
                <View style={styles.container}>
                    <Text style={styles.headText}>Add Delivery Address</Text>
                    <View style={styles.inputMain}>
                        <CustomTextInput
                            placeholder="Full Name"
                            placeholderTextColor={colors.black}
                            inputHeight={height * 0.07}
                            inputWidth={width * 0.85}
                            borderRadius={20}
                            backgroundColor={colors.lightGray}
                            value={name}
                            onChangeText={(value) => setName(value)}
                        />
                        <View
                            style={[
                                styles.phoneRow,
                                {
                                    borderColor:
                                        isPhoneFocused || phone
                                            ? colors.brownishRed
                                            : colors.lightGray,
                                    backgroundColor:
                                        isPhoneFocused || phone ? colors.lightGray : colors.lightGray,
                                },
                            ]}
                        >
                            <TouchableOpacity
                                style={styles.countrySelector}
                                onPress={() => setShowCountryPicker(true)}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.flagEmoji}>{selectedCountry.flag}</Text>
                                <Image source={images.arrowdown} />
                            </TouchableOpacity>
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
                            <Image source={images.line} style={styles.lineImg} />
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
                                        keyExtractor={item => item.code}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                            </View>
                        </Modal>
                        {/* <CustomSelect
                            inputWidth={width * 0.85}
                            inputHeight={height * 0.07}
                            selectElements={regionOption}
                            borderColor={colors.lightGray}
                            borderWidth={1}
                            inputColor={colors.lightGray}
                            borderRadius={20}
                            onChangeText={value => setRegion(value)}
                            setSelectedElement={setRegion}
                        /> */}
                        {/* <CustomSelect
                            inputWidth={width * 0.85}
                            inputHeight={height * 0.07}
                            selectElements={cityOption}
                            borderColor={colors.lightGray}
                            borderWidth={1}
                            inputColor={colors.lightGray}
                            borderRadius={20}
                            onChangeText={value => setCity(value)}
                            setSelectedElement={setCity}
                        /> */}
                        <CustomTextInput
                            placeholder="Enter your Region"
                            placeholderTextColor={colors.black}
                            inputHeight={height * 0.07}
                            inputWidth={width * 0.85}
                            borderRadius={20}
                            backgroundColor={colors.lightGray}
                            value={region}
                            onChangeText={(value) => setRegion(value)}
                        />
                        <CustomTextInput
                            placeholder="Enter your City"
                            placeholderTextColor={colors.black}
                            inputHeight={height * 0.07}
                            inputWidth={width * 0.85}
                            borderRadius={20}
                            backgroundColor={colors.lightGray}
                            value={city}
                            onChangeText={(value) => setCity(value)}
                        />
                        <CustomTextInput
                            placeholder="Area Code"
                            placeholderTextColor={colors.black}
                            inputHeight={height * 0.07}
                            inputWidth={width * 0.85}
                            borderRadius={20}
                            backgroundColor={colors.lightGray}
                            value={code}
                            onChangeText={(value) => setCode(value)}
                        />
                        <CustomTextInput
                            placeholder="Complete Address"
                            placeholderTextColor={colors.black}
                            inputHeight={height * 0.07}
                            inputWidth={width * 0.85}
                            borderRadius={20}
                            backgroundColor={colors.lightGray}
                            value={address}
                            onChangeText={(value) => setAddress(value)}
                        />
                    </View>
                    <View style={styles.bottomMain}>
                        <Text style={styles.labelTextMain}>Select Label for effective delivery</Text>
                        <View style={styles.labelMain}>
                            {["Home", "Office"].map((label) => (
                                <TouchableOpacity
                                    key={label}
                                    style={[
                                        styles.label,
                                        {
                                            backgroundColor: selectedLabel === label ? colors.marhoon : colors.white,
                                            borderColor: colors.marhoon
                                        }
                                    ]}
                                    activeOpacity={0.6}
                                    onPress={() => handleLabelPress(label)}
                                >
                                    <Text
                                        style={[
                                            styles.labelText,
                                            { color: selectedLabel === label ? colors.white : colors.darkmarhoon }
                                        ]}
                                    >
                                        {label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.checkboxMain}>
                            <BouncyCheckbox
                                size={24}
                                fillColor={colors.marhoon}
                                unfillColor={colors.white}
                                isChecked={agree}
                                disableBuiltInState
                                iconStyle={{
                                    borderColor: colors.marhoon,
                                    borderWidth: 2,
                                    borderRadius: 8,
                                }}
                                innerIconStyle={{
                                    borderRadius: 8,
                                }}
                                onPress={() => setAgree(!agree)}
                                text="Make Default Delivery Address"
                                textStyle={styles.checkboxText}
                            />
                        </View>
                    </View>
                    <View style={styles.btnMain}>
                        <CustomButton
                            btnHeight={height * 0.07}
                            btnWidth={width * 0.85}
                            text="Save"
                            textColor={colors.white}
                            borderRadius={20}
                            backgroundColor={colors.marhoon}
                            onPress={handleSave}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width * 0.09,
        marginTop: height * 0.015
    },
    headText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.md,
        color: colors.black
    },
    inputMain: {
        marginTop: height * 0.02,
        alignItems: "center",
        gap: height * 0.01
    },
    bottomMain: {
        marginTop: height * 0.03
    },
    labelTextMain: {
        fontFamily: fontFamily.GilroySemiBold,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    labelMain: {
        flexDirection: "row",
        gap: width * 0.05,
        marginTop: height * 0.02
    },
    label: {
        borderWidth: 1,
        borderColor: colors.darkmarhoon,
        backgroundColor: colors.white,
        padding: 13,
        borderRadius: 10
    },
    labelText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.darkmarhoon
    },
    checkboxMain: {
        marginTop: height * 0.02
    },
    checkboxText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    btnMain: {
        marginTop: height * 0.14
    },
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 12,
        width: width * 0.85,
        height: height * 0.065,
    },
    countrySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: width * 0.02,
    },
    flagEmoji: {
        fontSize: fontSizes.lg,
        marginRight: width * 0.01,
    },
    phoneInput: {
        flex: 1,
        fontSize: fontSizes.sm,
        color: colors.black,
    },
    numberText: {
        fontSize: fontSizes.sm,
        color: colors.black,
        left: width * 0.02,
    },
    lineImg: {
        height: height * 0.024,
        width: width * 0.01,
        resizeMode: 'contain',
        marginLeft: width * 0.04,
    },

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
})

export default AddDeliveryddress