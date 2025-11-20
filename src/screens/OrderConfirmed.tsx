import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import images from "../assets/Images";
import { height, width } from "../utilities";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const OrderConfirmed = () => {
    const navigation = useNavigation<NavigationProp<any>>()
    const bookData = [
        {
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
            <View style={styles.container}>
                <Image source={images.successCart} />
                <Text style={styles.headText}>Checkout Successfully</Text>
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
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

                    <View style={styles.flatlistContainer}>
                        <Text style={styles.sectionTitle}>Popular Selling Books</Text>
                        <FlatList
                            data={bookData}
                            renderItem={renderBookItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            columnWrapperStyle={styles.columnWrapper}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContent}
                        />
                    </View>
                </ScrollView>

                <View style={styles.bottomMain}>
                    <CustomButton
                    btnHeight={height * 0.06}
                    btnWidth={width * 0.45}
                    text="Cont. Shopping"
                    textColor={colors.marhoon}
                    borderColor={colors.marhoon}
                    borderWidth={1}
                    borderRadius={20}
                    onPress={() => navigation.navigate("ECommerce")}
                    />
                    <CustomButton
                    btnHeight={height * 0.06}
                    btnWidth={width * 0.4}
                    text="View Order"
                    textColor={colors.white}
                    backgroundColor={colors.marhoon}
                    borderWidth={1}
                    borderRadius={20}
                    onPress={() => navigation.navigate("MyOrders")}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: height * 0.015,
        flex: 1
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: height * 0.02,
    },
    headText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.lg2,
        color: colors.black
    },
    bookContainer: {
        width: width * 0.93,
        height: height * 0.155,
        alignSelf:'center',
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
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: height * 0.015,
    },
    flatListContent: {
        paddingBottom: height * 0.02,
    },
    sectionTitle: {
        fontSize: fontSizes.md,
        fontFamily: fontFamily.GilroyBold,
        marginBottom: height * 0.02,
    },
    bottomMain: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: width * 0.99,
        flexDirection: "row",
        justifyContent: "space-between",
        bottom: height * 0.02,
        padding: 10
    }
})

export default OrderConfirmed;