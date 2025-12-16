import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Modal } from "react-native";
import TopHeader from "../components/Topheader";
import images from "../assets/Images";
import { height, width } from "../utilities";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import CustomButton from "../components/CustomButton";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

const Cart = () => {
    const navigation = useNavigation<NavigationProp<any>>()
    const route = useRoute();
    const productData = route?.params?.product
    console.log("Products Data from the params!", productData)
    const [modalVisible, setModalVisible] = useState(false);
    const totalOrderNumber = route?.params?.totalOrderNumber || 1;
    const unitPrice = parseFloat(productData?.price || "0");
    const totalPrice = (unitPrice * totalOrderNumber).toFixed(2);
    const remainingInventory = productData?.inventory
        ? totalOrderNumber
            ? productData.inventory - totalOrderNumber
            : productData.inventory - 1
        : 0;

    console.log("Remaining Inventory:", remainingInventory);

    const toggleModal = () => {
        setModalVisible(false)
        navigation.navigate("ECommerce")
    }

    const bookData = [
        {
            id: "1",
            headText: "Dummy Text",
            headImg: images.recBookOne,
            authorName: "By Devon Lane",
            rating: "4.6 Rating",
            ratingIcon: images.ratingIcon,
            amount: "$110,00",
            btnText: "Add",
            heartIcon: images.heartIcon
        },
        {
            id: "2",
            headText: "Dummy Text",
            headImg: images.recBookSec,
            authorName: "By Eleanor Penna",
            rating: "4.6 Rating",
            ratingIcon: images.ratingIcon,
            amount: "$110,00",
            btnText: "Add",
            heartIcon: images.heartIcon
        },
        {
            id: "3",
            headText: "Dummy Text",
            headImg: images.recBookOne,
            authorName: "By Devon Lane",
            rating: "4.6 Rating",
            ratingIcon: images.ratingIcon,
            amount: "$110,00",
            btnText: "Add",
            heartIcon: images.heartIcon
        },
        {
            id: "4",
            headText: "Dummy Text",
            headImg: images.recBookSec,
            authorName: "By Eleanor Penna",
            rating: "4.6 Rating",
            ratingIcon: images.ratingIcon,
            amount: "$110.00",
            btnText: "Add",
            heartIcon: images.heartIcon
        },
    ]

    const renderBookItem = ({ item }) => {
        return (
            <View style={styles.bookCard}>
                <Image source={item.headImg} style={styles.bookImage} />
                <TouchableOpacity activeOpacity={0.7} style={styles.heartIconMain}>
                    <Image source={item.heartIcon} style={styles.heartIcon} />
                </TouchableOpacity>
                <View style={styles.ratingRow}>
                    <Image source={item.ratingIcon} style={styles.ratingIcon} />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <View style={{ gap: height * 0.01 }}>
                    <Text style={styles.bookTitle}>{item.headText}</Text>
                    <Text style={styles.authorName}>{item.authorName}</Text>
                </View>
                <View style={styles.amountMain}>
                    <Text style={styles.amount}>{item.amount}</Text>
                    <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
                        <Text style={styles.addButtonText}>{item.btnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <TopHeader text="Cart" isCross={true} />
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={{ paddingHorizontal: width * 0.03 }}>
                        <View style={styles.bookContainer}>
                            <View style={styles.selectedBookMain}>
                                <Image
                                    source={{ uri: `http://18.204.175.233:3001/${productData?.image}` }}
                                    style={styles.imgMain}
                                />
                                <View style={styles.textContent}>
                                    <View style={styles.headTextMain}>
                                        <Text
                                            style={styles.bookText}
                                            numberOfLines={1}
                                            ellipsizeMode="tail"
                                        >
                                            {productData?.name || "Dummy Text"}
                                        </Text>
                                        <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                                            <Image source={images.trashIcon} style={styles.trashIcon} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.bookDescription}>
                                        {productData?.description
                                            ? `${productData.description.substring(0, 25)}...`
                                            : "Lorem Ipsum is Dummy text..."}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.stockInfo}>
                                <Text style={styles.stockText}>Only {remainingInventory || "5"} items in stock</Text>
                                <Text style={styles.priceText}>${productData?.price || "12.56"}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.flatlistContainer}>
                        <Text style={styles.sectionTitle}>Popular Selling Books</Text>
                        <FlatList
                            data={bookData}
                            renderItem={renderBookItem}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            columnWrapperStyle={styles.columnWrapper}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContent}
                        />
                    </View>
                </ScrollView>
                <View style={styles.orderMain}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total {totalOrderNumber} Item{totalOrderNumber > 1 ? "s" : ""}</Text>
                        <Text style={styles.totalAmount}>${totalPrice || "25.56"}</Text>
                    </View>
                    <CustomButton
                        btnHeight={height * 0.07}
                        btnWidth={width * 0.4}
                        text="Order Now"
                        textColor={colors.white}
                        backgroundColor={colors.darkmarhoon}
                        borderRadius={20}
                        onPress={() => navigation.navigate("Checkout", {
                            products: productData,
                            totalPayment: totalPrice,
                            remainingItems: remainingInventory,
                            totalItems: totalOrderNumber
                        })}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: height * 0.02,
    },
    sectionTitle: {
        fontSize: fontSizes.md,
        fontFamily: fontFamily.GilroyBold,
        marginBottom: height * 0.02,
    },
    bookContainer: {
        width: width * 0.93,
        height: height * 0.17,
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
        color: colors.darkmarhoon,
    },
    flatListContent: {
        paddingBottom: height * 0.02,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: height * 0.015,
    },
    bookCard: {
        width: width * 0.47,
        height: height * 0.33,
        marginRight: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
    },
    bookImage: {
        width: "100%",
        height: height * 0.18,
        resizeMode: "cover",
        borderRadius: 10,
        marginBottom: 5
    },
    heartIconMain: {
        position: "absolute",
        right: width * 0.05,
        top: height * 0.01
    },
    heartIcon: {
        width: width * 0.09,
        height: height * 0.05,
        resizeMode: "contain",
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    ratingIcon: {
        width: width * 0.045,
        height: height * 0.02,
        resizeMode: "contain",
        marginRight: 5
    },
    ratingText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    bookTitle: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.md,
        color: colors.black
    },
    authorName: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black,
        marginBottom: 7
    },
    amountMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    amount: {
        fontFamily: fontFamily.GilroySemiBold,
        fontSize: fontSizes.sm2,
        color: colors.black,
    },
    addButton: {
        backgroundColor: colors.darkmarhoon,
        width: width * 0.2,
        height: height * 0.033,
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 5
    },
    addButtonText: {
        fontSize: fontSizes.sm2,
        color: colors.white,
        fontFamily: fontFamily.GilroyMedium
    },
    flatlistContainer: {
        marginTop: height * 0.01,
        paddingHorizontal: width * 0.03
    },
    orderMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.lightGray,
        padding: 15,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    totalContainer: {
        // flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        marginBottom: height * 0.015,
    },
    totalText: {
        fontSize: fontSizes.md,
        fontFamily: fontFamily.GilroySemiBold,
        color: colors.black,
    },
    totalAmount: {
        fontSize: fontSizes.lg,
        fontFamily: fontFamily.GilroyBold,
        color: colors.darkmarhoon,
    },
    orderButton: {
        backgroundColor: colors.darkmarhoon,
        borderRadius: 10,
        paddingVertical: height * 0.018,
        alignItems: "center",
    },
    orderButtonText: {
        fontSize: fontSizes.md,
        fontFamily: fontFamily.GilroyBold,
        color: colors.white,
    },

})

export default Cart;