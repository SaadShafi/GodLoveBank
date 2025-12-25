import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, ActivityIndicator } from "react-native";
import TopHeader from "../components/Topheader";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import { height, width } from "../utilities";
import images from "../assets/Images";
import { useEffect, useState } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { apiHelper } from "../services";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeAddressData } from "../redux/slice/roleSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Checkout = () => {
    const addressData = useSelector((state: RootState) => state.role.addressData)
    console.log("AddressData form the redux", addressData);
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const route = useRoute();
    const Data = route.params;
    console.log("Params in the Checkout Screen!", Data);
    const productsData = route?.params?.products;
    const totalItems = route?.params?.totalItems;
    const remainingItems = route?.params?.remainingItems;
    const totalPayment = route?.params?.totalPayment;
    const itemsTotal = Number(totalPayment || 0);
    const deliveryFee = 5.99;
    const salesTaxRate = 0.15;
    const platformFees = 5.99;
    const salesTax = +(itemsTotal * salesTaxRate).toFixed(2);
    const finalTotal = +(itemsTotal + deliveryFee + platformFees).toFixed(2);
    const dispatch = useDispatch();

    const toggleModal = () => {
        setModalVisible(false);
        dispatch(removeAddressData());
        navigation.popToTop();
    }

    const postOrder = async () => {
        try {
            setLoading(true)

            const body = {
                addressId: addressData.id,
                subTotal: finalTotal,
                deliveryCharges: deliveryFee,
                deliveryType: "delivery",
                orderItems: productsData.map((item: any) => ({
                    productId: Number(item.id),
                    qty: item.quantity
                }))
            }

            const { response, error } = await apiHelper(
                "POST",
                "/orders",
                {},
                {},
                body
            )

            console.log("Response from the Order Post API!", response)

            if (response?.data) {
                Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: response?.data?.message
                })

                navigation.navigate("OrderConfirmed", { ItemsData: productsData, remainingItems: remainingItems })
            }
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

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TopHeader isCross={true} text="Checkout" />
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: height * 0.30 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <View style={styles.deliveryMain}>
                        <Text style={styles.headText}>Delivery Address</Text>
                        <View style={styles.addMain}>
                            <Text style={styles.deliveryText}>Add Delivery Address</Text>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() =>
                                    navigation.navigate("AddDeliveryAddress")}
                                disabled={!!addressData}
                                style={{ opacity: addressData ? 0.5 : 1 }}
                            >
                                <Image source={images.addIcon} style={styles.addIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {addressData && (
                        <View style={styles.addressDataContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={styles.addressName}>{addressData.name}</Text>
                                    <Text style={styles.addressLabel}>{addressData.label}</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("AddDeliveryAddress")}>
                                    <Image source={images.editIcon} style={styles.editIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: width * 0.01 }}>
                                <Text style={styles.addressPhone}>{addressData?.countryCode}</Text>
                                <Text style={styles.addressPhone}>{addressData?.phoneNumber}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: width * 0.01 }}>
                                <Text style={styles.addressText}>{addressData.city},</Text>
                                <Text style={styles.addressText}>{addressData.region}</Text>
                            </View>
                            <Text style={styles.addressText}>{addressData.postalCode}</Text>
                            <Text style={styles.addressText}>{addressData.address}</Text>
                        </View>
                    )}
                    <View style={styles.OrderMain}>
                        <Text style={styles.headText}>Order Details</Text>
                        {productsData && productsData.length > 0 ? (
                            productsData.map((item, index) => {
                                const remainingItem = remainingItems.find(
                                    (ri: any) => ri.productId === item.id
                                );
                                const remainingQty = remainingItem ? remainingItem.remaining : 0;
                                const itemTotal = ((item.price) * item.quantity);

                                return (
                                    <View key={item.id} style={styles.bookContainer}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.bookText}>
                                                    {item.name.length > 25
                                                        ? `${item.name.substring(0, 25)}...`
                                                        : item.name}
                                                </Text>
                                                <Text style={styles.stockText}>
                                                    Only {remainingQty} items in stock
                                                </Text>
                                            </View>

                                            <View style={{ alignItems: "flex-end" }}>
                                                <Text style={styles.priceText}>${itemTotal.toFixed(2)}</Text>
                                                <Text style={styles.stockText}>Qty: {item.quantity}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        ) : (
                            <Text style={{ textAlign: "center", marginTop: 20 }}>No products in the cart</Text>
                        )}
                    </View>
                    <View style={styles.OrderMain}>
                        <Text style={styles.headText}>Order Summary</Text>
                        <View style={styles.summaryMain}>
                            <View style={styles.listMain}>
                                <Text style={styles.listTextOne}>Items Total</Text>
                                <Text style={styles.listTextOne}>${itemsTotal.toFixed(2)}</Text>
                            </View>
                            <View style={styles.listMain}>
                                <Text style={styles.listTextOne}>Delivery Fee</Text>
                                <Text style={styles.listTextOne}>${deliveryFee.toFixed(2)}</Text>
                            </View>
                            <View style={styles.listMain}>
                                <Text style={styles.listTextOne}>Platform Fees</Text>
                                <Text style={styles.listTextOne}>${platformFees.toFixed(2)}</Text>
                            </View>
                            <View style={styles.listMain}>
                                <Text style={styles.listTextTwo}>Total Payment</Text>
                                <Text style={styles.listTextTwo}>${finalTotal.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
                        <Text style={styles.orderTextOne}>Total {totalItems || "3"} Items</Text>
                        <Text style={styles.orderTextTwo}>${finalTotal.toFixed(2)}</Text>
                    </View>
                    <CustomButton
                        btnHeight={height * 0.06}
                        btnWidth={width * 0.35}
                        text="Place Order"
                        textColor={colors.white}
                        backgroundColor={addressData ? colors.darkmarhoon : colors.lightmarhoon}
                        borderRadius={20}
                        onPress={
                            () => postOrder()
                        }
                        disabled={!addressData}
                    />
                </View>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: colors.white,
                            width: width * 0.8,
                            paddingVertical: height * 0.04,
                            borderRadius: 40,
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: fontFamily.GilroyBold,
                                fontSize: fontSizes.md,
                                color: colors.black,
                                textAlign: 'center',
                            }}
                        >
                            Are you sure you want to{'\n'}Delete this item from Cart
                        </Text>

                        <View style={{ top: height * 0.02, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: width * 0.7 }}>
                            <CustomButton
                                text="No"
                                textColor={colors.white}
                                btnHeight={height * 0.06}
                                btnWidth={width * 0.33}
                                backgroundColor={colors.marhoon}
                                borderRadius={20}
                                onPress={() => setModalVisible(false)}
                            />
                            <CustomButton
                                text="Yes"
                                textColor={colors.white}
                                btnHeight={height * 0.06}
                                btnWidth={width * 0.33}
                                backgroundColor={colors.marhoon}
                                borderRadius={20}
                                onPress={toggleModal}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            {loading && (
                <View style={styles.loaderOverlay}>
                    <ActivityIndicator size="large" color={colors.brown} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
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
        height: height * 0.08,
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
        color: colors.Gray,
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
        marginTop: height * 0.75,
        backgroundColor: colors.lightGray,
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: width * 0.99,
        height: height * 0.25,
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
        // marginBottom: 2
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