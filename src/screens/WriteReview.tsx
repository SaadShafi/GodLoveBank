import { View, Text, StyleSheet, Image } from "react-native";
import TopHeader from "../components/Topheader";
import CustomButton from "../components/CustomButton";
import { height, width } from "../utilities";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import images from "../assets/Images";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import StarRating from "react-native-star-rating-widget";
import { useState } from "react";

const WriteReview = () => {
    const navigation = useNavigation<NavigationProp<any>>()
    // const [rating, setRating] = useState(0)

    return (
        <View style={{ flex: 1 }}>
            <TopHeader text="Write A Review" isBackBlack={true} />
            <View style={styles.container}>
                <View style={styles.bookCardMain}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={images.recBookOne} style={styles.bookImg} />
                        <View style={styles.bookInfoMain}>
                            <View style={styles.statusMain}>
                                <Text style={styles.orderStatusMain}>Order Status: Delivered</Text>
                                <Text style={styles.priceTextSec}>$12.56</Text>
                            </View>
                            <Text style={styles.bookHeadText}>Dummy Text</Text>
                            <Text style={styles.bookText}>Qty: 1</Text>
                            <Text style={styles.bookText}>Delivery Date: 25 Oct</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.expMain}>
                    <Text style={styles.expText}>How is your experience?</Text>
                    <Text style={styles.descText}>Lorem Ipsum is simply a dummy text of the printing and</Text>
                    <Text style={styles.descText}>typesetting industry</Text>
                    {/* <StarRating
                        rating={rating}
                        onChange={setRating}
                        maxStars={5}
                        starSize={width * 0.09}
                        // enableHalfStar={false}
                        color={colors.marhoon}
                        emptyColor={colors.lightGray}
                        style={styles.starRating}
                    /> */}

                    <TopHeader isMenu={true}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    bookCardMain: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 15,
        width: width * 0.93,
    },
    bookImg: {
        width: width * 0.3,
        height: height * 0.1,
        resizeMode: "contain"
    },
    bookInfoMain: {
        flexDirection: "column",
        left: width * 0.02
    },
    bookHeadText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.md,
        color: colors.black
    },
    bookText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black
    },
    statusMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.56
    },
    orderStatusMain: {
        backgroundColor: colors.marhoon,
        padding: 5,
        color: colors.white,
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        borderRadius: 10
    },
    priceTextSec: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.marhoon,
    },
    expMain: {
        alignItems: "center",
        marginTop: height * 0.03
    },
    expText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.lg2,
        color: colors.black
    },
    descText: {
        fontFamily: fontFamily.GilroyRegular,
        fontSize: fontSizes.sm,
        color: colors.black,
    },
    starRating: {

    }
})

export default WriteReview