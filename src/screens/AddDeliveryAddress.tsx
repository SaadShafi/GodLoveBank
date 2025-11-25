import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import TopHeader from "../components/Topheader";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import { height, width } from "../utilities";
import CustomTextInput from "../components/CustomTextInput";
import { useMemo, useState } from "react";
import images from "../assets/Images";
import {
    countries,
    defaultCountry,
    type Country,
} from '../utilities/countries';
import CustomSelect from "../components/CustomSelect";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomButton from "../components/CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";;

const AddDeliveryddress = () => {
    const navigation = useNavigation<NavigationProp<any>>()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState('');
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");
    const [address, setAddress] = useState("");
    const [selectedLabel, setSelectedLabel] = useState("");
    const [agree, setAgree] = useState(false);

    const regionOption = [
        { name: 'Province/Region' },
        { name: 'Region 01' },
        { name: 'Region 02' },
        { name: 'Region 03' },
        { name: 'Region 04' },
    ];

    const cityOption = [
        {
            name: "Select City"
        },
        {
            name: "City 01"
        },
        {
            name: "City 02"
        },
        {
            name: "City 03"
        },
        {
            name: "City 04"
        },
    ]

    const handleLabelPress = (label) => {
        setSelectedLabel(label);
    };

    const handleSave = () => {
        if (!name || !region || !city || !code || !address || !selectedLabel || !agree) {
            Alert.alert("Error", "Please fill all fields and select a label.");
            return;
        }

        const addressData = {
            name,
            phone,
            region,
            city,
            code,
            address,
            label: selectedLabel,
            isDefault: agree,
        };
        navigation.navigate("Checkout", { addressData });
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TopHeader text="Add Delivery Address" isBackBlack={true} />
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
                    <CustomSelect
                        inputWidth={width * 0.85}
                        inputHeight={height * 0.07}
                        selectElements={regionOption}
                        borderColor={colors.lightGray}
                        borderWidth={1}
                        inputColor={colors.lightGray}
                        borderRadius={20}
                        onChangeText={value => setRegion(value)}
                        setSelectedElement={setRegion}
                    />
                    <CustomSelect
                        inputWidth={width * 0.85}
                        inputHeight={height * 0.07}
                        selectElements={cityOption}
                        borderColor={colors.lightGray}
                        borderWidth={1}
                        inputColor={colors.lightGray}
                        borderRadius={20}
                        onChangeText={value => setCity(value)}
                        setSelectedElement={setCity}
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
        marginTop: height * 0.21
    }
})

export default AddDeliveryddress