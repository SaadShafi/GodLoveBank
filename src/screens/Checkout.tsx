import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import TopHeader from "../components/Topheader";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import { height, width } from "../utilities";
import images from "../assets/Images";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const Checkout = ({ route }) => {
    const navigation = useNavigation<NavigationProp<any>>()
    const Data = route.params
    console.log("Data", Data)
    const [selectedPayment, setSelectedPayment] = useState('Apple Pay');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const paymentMethods = ['Apple Pay', 'Credit Card', 'PayPal', 'Google Pay', 'Cash on Delivery'];

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TopHeader isCross={true} text="Checkout" />
            <View style={styles.container}>
                <View style={styles.deliveryMain}>
                    <Text style={styles.headText}>Delivery Address</Text>
                    <View style={styles.addMain}>
                        <Text style={styles.deliveryText}>Add Delivery Address</Text>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("AddDeliveryddress")}>
                            <Image source={images.addIcon} style={styles.addIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                {Data?.addressData && (
                    <View style={styles.addressDataContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                           <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Text style={styles.addressName}>{Data.addressData.name}</Text>
                                <Text style={styles.addressLabel}>{Data.addressData.label}</Text>
                           </View>
                            <View>
                                <Image source={images.editIcon} style={styles.editIcon} />
                            </View>
                        </View>
                        <Text style={styles.addressText}>{Data.addressData.address}</Text>
                        {Data.addressData.phone && (
                            <Text style={styles.addressPhone}>{Data.addressData.phone}</Text>
                        )}
                        <View >
                            <Text>{Data.addressData.city}</Text>
                            <Text>{Data.addressData.region}</Text>
                            <Text>{Data.addressData.code}</Text>
                        </View>
                    </View>
                )}
                <View style={styles.OrderMain}>
                    <Text style={styles.headText}>OrderMain</Text>
                    <View style={styles.bookContainer}>
                        <View style={styles.selectedBookMain}>
                            <Image source={images.recBookSec} style={styles.imgMain} />
                            <View style={styles.textContent}>
                                <View style={styles.headTextMain}>
                                    <Text style={styles.bookText}>Mapo Tofu</Text>
                                    <TouchableOpacity>
                                        <Image source={images.trashIcon} style={styles.trashIcon} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.bookDescription}>Lorem Ipsum is Dummy text...</Text>
                            </View>
                        </View>
                        <View style={styles.stockInfo}>
                            <Text style={styles.stockText}>Only 5 items in stock</Text>
                            <Text style={styles.priceText}>$12.56</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.OrderMain}>
                    <Text style={styles.headText}>Order Summary</Text>
                    <View style={styles.summaryMain}>
                        <View style={styles.listMain}>
                            <Text style={styles.listTextOne}>Items Total</Text>
                            <Text style={styles.listTextOne}>$12.56</Text>
                        </View>
                        <View style={styles.listMain}>
                            <Text style={styles.listTextOne}>Delivery Fee</Text>
                            <Text style={styles.listTextOne}>$2.50</Text>
                        </View>
                        <View style={styles.listMain}>
                            <Text style={styles.listTextOne}>Sales Tax</Text>
                            <Text style={styles.listTextOne}>$-1.55</Text>
                        </View>
                        <View style={styles.listMain}>
                            <Text style={styles.listTextTwo}>Total Payment</Text>
                            <Text style={styles.listTextTwo}>$13.36</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.paymentMethodMain}>
                <Text style={styles.headText}>Select Payment Method</Text>
                <View style={styles.dropDownMain}>
                    <Image source={images.applePay} />
                    <View style={styles.methodMain}>
                        <View>
                            <Text style={styles.methodText}>Apple Pay</Text>
                            <Text style={styles.methodNumber}>**** **** **** 1234</Text>
                        </View>
                        <View>
                            <Image source={images.arrowdown} />
                        </View>
                    </View>
                </View>
                <View style={styles.orderMain}>
                    <View style={styles.orderTextMain}>
                        <Text style={styles.orderTextOne}>Totsl 3 Items</Text>
                        <Text style={styles.orderTextTwo}>$25.56</Text>
                    </View>
                    <CustomButton
                        btnHeight={height * 0.06}
                        btnWidth={width * 0.35}
                        text="Place Order"
                        textColor={colors.white}
                        backgroundColor={colors.darkmarhoon}
                        borderRadius={20}
                        onPress={Data?.addressData ? () => navigation.navigate("OrderConfirmed") : console.log("btn pressed")}
                        disabled={!Data?.addressData}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width * 0.04,
        marginTop: height * 0.01
    },
    deliveryMain: {
        gap: height * 0.01
    },
    headText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.md,
        color: colors.black
    },
    deliveryText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    addMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.lightGray,
        alignItems: "center",
        padding: 10,
        borderRadius: 20
    },
    addIcon: {
        width: width * 0.13,
        height: height * 0.05,
        resizeMode: "contain"
    },
    OrderMain: {
        marginTop: height * 0.015
    },
    bookContainer: {
        width: width * 0.93,
        height: height * 0.155,
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    selectedBookMain: {
        flexDirection: "row",
        marginBottom: 10,
    },
    imgMain: {
        width: width * 0.35,
        height: height * 0.135,
        resizeMode: "cover",
        borderRadius: 15,
    },
    textContent: {
        marginLeft: width * 0.03,
        justifyContent: 'space-between',
    },
    headTextMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.47,
        top: height * 0.01
    },
    bookText: {
        fontSize: fontSizes.md,
        fontFamily: fontFamily.GilroyBold,
        color: colors.black,
        marginRight: 10,
    },
    bookDescription: {
        fontSize: fontSizes.sm,
        fontFamily: fontFamily.GilroyMedium,
        color: colors.darkGray,
        bottom: height * 0.0665
    },
    trashIcon: {
        width: width * 0.05,
        height: height * 0.025,
        resizeMode: "contain"
    },
    stockInfo: {
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "flex-start",
        bottom: height * 0.065,
        left: width * 0.375,
        gap: 5
    },
    stockText: {
        fontSize: fontSizes.sm,
        fontFamily: fontFamily.GilroyMedium,
        color: colors.gray,
    },
    priceText: {
        fontSize: fontSizes.lg,
        fontFamily: fontFamily.GilroyBold,
        color: colors.marhoon,
    },
    summaryMain: {
        backgroundColor: colors.lightGray,
        width: width * 0.92,
        height: height * 0.15,
        borderRadius: 15,
        marginTop: height * 0.015,
        padding: 17,
        gap: height * 0.01
    },
    listMain: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listTextOne: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    listTextTwo: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    paymentMethodMain: {
        position: "absolute",
        marginTop: height * 0.79,
        backgroundColor: colors.lightGray,
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: width * 0.99,
        paddingHorizontal: width * 0.05
    },
    dropDownMain: {
        marginTop: height * 0.01,
        backgroundColor: colors.white,
        width: width * 0.85,
        borderRadius: 20,
        padding: 20,
        flexDirection: "row"
    },
    methodMain: {
        marginLeft: width * 0.03,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.65
    },
    methodText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    methodNumber: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    orderMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: height * 0.02
    },
    orderTextMain: {
        marginLeft: width * 0.025
    },
    orderTextOne: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    orderTextTwo: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.md,
        color: colors.darkmarhoon
    },
    addressDataContainer: {
        backgroundColor: colors.lightGray,
        padding: 15,
        borderRadius: 15,
        marginTop: height * 0.01,
        marginBottom: height * 0.01,
    },
    addressName: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.black,
        marginBottom: 2
    },
    addressLabel: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.white,
        backgroundColor: colors.darkmarhoon,
        padding: 10,
        borderRadius: 10,
        marginLeft: width * 0.03
    },
    addressText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.black,
        marginBottom: 2
    },
    addressDetails: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.darkGray,
        marginBottom: 2
    },
    addressPhone: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.darkGray
    },
    editIcon: {
        width: width * 0.09,
        height: height * 0.04,
        resizeMode: "contain"
    }
})

export default Checkout