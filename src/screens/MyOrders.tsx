import { View, Text, StyleSheet, FlatList, ViewBase, Image, Modal, TouchableOpacity } from "react-native";
import TopHeader from "../components/Topheader";
import CustomTabs from "../components/CustomTabs";
import images from "../assets/Images";
import { height, navigationRef, width } from "../utilities";
import { colors } from "../utilities/colors";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { apiHelper } from "../services";
import Toast from "react-native-toast-message";


interface tabProp {
    bookImg?: any;
    headText?: string;
    qty?: string;
    btnText?: string;
    price?: string;
    dev_date?: string;
}

const MyOrders = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [isActionSheetVisible, setIsActionSheetVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<tabProp | null>(null);
    const [loading, setLoading] = useState(false);

    const tabsData = [
        {
            bookImg: images.recBookOne,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Order Details",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookSec,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Order Details",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookOne,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Order Details",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookSec,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Order Details",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookOne,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Order Details",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        }
    ]

    const tabsDataSec = [
        {
            bookImg: images.recBookOne,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Write Review",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookSec,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Write Review",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookOne,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Write Review",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookSec,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Write Review",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        },
        {
            bookImg: images.recBookOne,
            headText: "Dummy Text",
            qty: "Qty: 1",
            btnText: "Write Review",
            price: "$12.90",
            dev_date: "Delivery Date: 25 Oct"
        }
    ]

    const handleOrderDetailsPress = (item: tabProp) => {
        setSelectedOrder(item);
        setIsActionSheetVisible(true);
    }

    const closeActionSheet = () => {
        setIsActionSheetVisible(false);
        setSelectedOrder(null);
    }

    const renderPendingTab = ({ item }: { item: tabProp }) => {
        return (
            <View style={{ alignItems: "center" }}>
                <View style={styles.bookCardMain}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={item.bookImg} style={styles.bookImg} />
                        <View style={styles.bookInfoMain}>
                            <Text style={styles.bookHeadText}>{item.headText}</Text>
                            <View style={{}}>
                                <Text style={styles.bookText}>{item.qty}</Text>
                            </View>
                        </View>
                        <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                    <View style={styles.btnMain}>
                        <CustomButton
                            btnHeight={height * 0.038}
                            btnWidth={width * 0.8}
                            backgroundColor={colors.marhoon}
                            text={item.btnText}
                            textColor={colors.white}
                            borderRadius={20}
                            onPress={() => handleOrderDetailsPress(item)}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const renderDeliveredTab = ({ item }: { item: tabProp }) => {
        return (
            <View style={{ alignItems: "center" }}>
                <View style={styles.bookCardMain}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={item.bookImg} style={styles.bookImg} />
                        <View style={styles.bookInfoMain}>
                            <Text style={styles.bookHeadText}>{item.headText}</Text>
                            <View style={{ }}>
                                <Text style={styles.bookText}>{item.qty}</Text>
                                <Text style={styles.bookText}>{item.dev_date}</Text>
                            </View>
                        </View>
                        <Text style={styles.priceTextSec}>{item.price}</Text>
                    </View>
                    <View style={styles.btnMain}>
                        <CustomButton
                            btnHeight={height * 0.038}
                            btnWidth={width * 0.8}
                            backgroundColor={colors.marhoon}
                            text={item.btnText}
                            textColor={colors.white}
                            borderRadius={20}
                            onPress={() => navigation.navigate("WriteReview")}
                        />
                    </View>
                </View>
            </View>
        )
    }


    const ActionSheet = () => {
        return (
            <Modal
                visible={isActionSheetVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeActionSheet}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={closeActionSheet}
                >
                    <View style={styles.actionSheet}>

                        <TouchableOpacity onPress={closeActionSheet} style={styles.actionSheetHeader}>
                            <Image source={images.toggleBar} />
                        </TouchableOpacity>

                        <View style={styles.actionSheetHeader}>
                            <Image source={images.status} style={styles.statusIcon} />
                        </View>


                        <View style={styles.orderNumberSection}>
                            <Text style={styles.actionSheetTitle}>Order Number</Text>
                            <Text style={styles.orderNumber}>#1245325</Text>
                            <Text style={styles.orderDate}>26 OCT, 2023</Text>
                        </View>

                        <View style={styles.addressSection}>
                            <Image source={images.locationIcon} style={styles.locationIcon}/>
                            <Text style={styles.addressText}>House # 73 New York, NY 10007, USA</Text>
                            <Image source={images.helpBtn} style={styles.helpBtn} />
                        </View>

                        <View style={styles.priceSection}>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Subtotal:</Text>
                                <Text style={styles.priceValue}>$59.70</Text>
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Platform Fee:</Text>
                                <Text style={styles.priceValue}>$2.82</Text>
                            </View>
                            <View style={[styles.priceRow, styles.totalRow]}>
                                <Text style={styles.totalLabel}>Total:</Text>
                                <Text style={styles.totalValue}>$75.37</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    const PendingScreen: React.FC = () => {
        return (
            <View style={{ flex: 1, top: height * 0.01 }}>
                <FlatList
                    data={tabsData}
                    renderItem={renderPendingTab}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{
                        top: height * 0.01,
                        gap: height * 0.02,
                        paddingBottom: height * 0.15,
                    }}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    const DeliveredScreen: React.FC = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={tabsDataSec}
                    renderItem={renderDeliveredTab}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{
                        top: height * 0.01,
                        gap: height * 0.02,
                        paddingBottom: height * 0.15,
                    }}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    const fetchMyOrders = async() => {
        try {
            setLoading(true)

            const {response, error} = await apiHelper(
                "GET",
                "/orders/history",
                {},
                {},
                null
            )

            console.log("Reponse from the Fetched Orders API!", response)

            if(response?.data) {
                Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: response.data.message
                })
            }
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: error?.message
            })
        }
    }

    useEffect(() => {
        fetchMyOrders();
    },[])

    return (
        <View style={{ flex: 1 }}>
            <TopHeader text="My Orders" isBackBlack={true} />

            <CustomTabs
                tabs={['Pending', 'Delivered']}
                tabContents={[PendingScreen, DeliveredScreen]}
                activeTabLoad={0}
            />

            <ActionSheet />
        </View>
    )
}

const styles = StyleSheet.create({
    bookCardMain: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 15,
        width: width * 0.85,
    },
    bookImg: {
        width: width * 0.4,
        height: height * 0.12,
        resizeMode: "contain"
    },
    bookInfoMain: {
        flexDirection: "column",
        top: height * 0.03,
        left: width * 0.01
    },
    bookHeadText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    bookText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.black
    },
    priceText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.marhoon,
        left: width * 0.05
    },
    priceTextSec: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.marhoon,
        right: width * 0.065
    },
    btnMain: {
        marginTop: height * 0.02
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.78)',
        justifyContent: 'flex-end',
    },
    actionSheet: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: height * 0.7,
    },
    actionSheetHeader: {
        alignItems: 'center',
        marginBottom: 15,
    },
    statusIcon: {
        width: width * 0.8,
        resizeMode: "contain"
    },
    actionSheetTitle: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.lg2,
        color: colors.black,
    },
    orderNumberSection: {
        marginBottom: 20,
        gap: height * 0.01
    },
    orderNumber: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.lg,
        color: colors.marhoon,
        marginBottom: 5,
    },
    orderDate: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.md,
        color: colors.darkGray,
    },
    addressSection: {
        flexDirection: "row",
        alignItems: "center"
    },
    locationIcon: {
        width: width * 0.09, 
        resizeMode: "contain"
    },
    addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    helpBtn: {
        width: width * 0.2,
        resizeMode: "contain",
        left: width * 0.06
    },
    helpCheckbox: {
        backgroundColor: colors.lightGray,
    },
    checkboxText: {
        color: colors.white,
        fontSize: fontSizes.sm,
        fontFamily: fontFamily.GilroyBold,
    },
    addressText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.black,
        left: width * 0.015
    },
    priceSection: {
        marginTop: height * 0.025
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    priceLabel: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black,
    },
    priceValue: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black,
    },
    totalRow: {
        marginTop: 10,
    },
    totalLabel: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.lg,
        color: colors.black,
    },
    totalValue: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.lg,
        color: colors.black,
    },
})

export default MyOrders;