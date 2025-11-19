import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import TopHeader from "../components/Topheader";
import { fontFamily } from "../assets/Fonts";
import { fontSizes } from "../utilities/fontsizes";
import { colors } from "../utilities/colors";
import { height, width } from "../utilities";
import StarRating from "react-native-star-rating-widget";
import { useState } from "react";
import images from "../assets/Images";

interface ratingProp {
    image: any;
    headText: string;
    rating: any;
    ratingText: string;
    time: string;
    desc: string;
}

const Reviews = () => {
    const [rating, setRating] = useState(0);
    const [ratingList, setRatingList] = useState(0);
    const [ratingListSec, setRatingListSec] = useState(0);
    const [ratingListThird, setRatingListThird] = useState(0);
    const [ratingListFourth, setRatingListFourth] = useState(0);
    const [ratingListFifth, setRatingListFifth] = useState(0);

    const ratingData = [
        {
            image: images.ratingListOne,
            headText: "Tatiana Lubin",
            rating: images.rating,
            ratingText: "4.0",
            time: "2 Days Ago",
            desc: "Lorem ipsum dolor sit amet consectetur. Leo leo fringilla amet amet faucibus. Morbi non nunc interdum bibendum massa. Pellentesque pretium integer maecenas semper enim"
        },
        {
            image: images.ratingListSec,
            headText: "Randy Vocarro",
            rating: images.rating,
            ratingText: "4.0",
            time: "2 Days Ago",
            desc: "Lorem ipsum dolor sit amet consectetur. Leo leo fringilla amet amet faucibus. Morbi non nunc interdum bibendum massa. Pellentesque pretium integer maecenas semper enim"
        },
        {
            image: images.ratingListThird,
            headText: "Ashlyn Fanci",
            rating: images.rating,
            ratingText: "4.0",
            time: "2 Days Ago",
            desc: "Lorem ipsum dolor sit amet consectetur. Leo leo fringilla amet amet faucibus. Morbi non nunc interdum bibendum massa. Pellentesque pretium integer maecenas semper enim"
        },
    ]

    const renderRatingData = ({ item }: { item: ratingProp }) => {
        return (
            <View style={styles.ratingItemContainer}>
                <View style={styles.ratingHeader}>
                    <View style={styles.profileContainer}>
                        <Image source={item.image} style={styles.profileImage} />
                        <View style={styles.nameRatingContainer}>
                            <View style={styles.ratingHeadContainer}>
                                <Text style={styles.nameText}>{item.headText}</Text>
                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                            <View style={styles.ratingMain}>
                                <Image source={item.rating} />
                                <Text style={styles.ratingListText}>{item.ratingText}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.descText}>{item.desc}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <TopHeader text="Reviews" isBack={true} />
            <View style={styles.container}>
                <View style={{
                    alignItems: "center",
                    marginTop: height * 0.03
                }}>
                    <Text style={styles.headText}>Overall Ratings</Text>
                    <Text style={styles.ratingText}>4.8</Text>

                    <StarRating
                        rating={4}
                        onChange={setRating}
                        maxStars={5}
                        starSize={width * 0.1}
                        color={colors.yellow}
                        starStyle={styles.starRating}
                        emptyColor={colors.Gray}
                        style={styles.starRating}
                    />

                    <Text style={styles.reviewSecText}>Based On 20 Reviews</Text>

                    <View style={styles.ratingListContainer}>
                        <View style={styles.ratingList}>
                            <Text style={styles.ratingListText}>Excelent</Text>
                            <StarRating
                                rating={5}
                                onChange={setRatingList}
                                maxStars={5}
                                starSize={width * 0.05}
                                color={colors.yellow}
                                starStyle={styles.starRating}
                                emptyColor={colors.black}
                                style={styles.starRating}
                            />
                        </View>
                        <View style={styles.ratingList}>
                            <Text style={styles.ratingListText}>Good</Text>
                            <StarRating
                                rating={4}
                                onChange={setRatingListSec}
                                maxStars={5}
                                starSize={width * 0.05}
                                color={colors.yellow}
                                starStyle={styles.starRating}
                                emptyColor={colors.Gray}
                                style={styles.starRating}
                            />
                        </View>
                        <View style={styles.ratingList}>
                            <Text style={styles.ratingListText}>Acceptable</Text>
                            <StarRating
                                rating={3}
                                onChange={setRatingListThird}
                                maxStars={5}
                                starSize={width * 0.05}
                                color={colors.yellow}
                                starStyle={styles.starRating}
                                emptyColor={colors.Gray}
                                style={styles.starRating}
                            />
                        </View>
                        <View style={styles.ratingList}>
                            <Text style={styles.ratingListText}>Improvement Needed</Text>
                            <StarRating
                                rating={2}
                                onChange={setRatingListFourth}
                                maxStars={5}
                                starSize={width * 0.05}
                                color={colors.yellow}
                                starStyle={styles.starRating}
                                emptyColor={colors.Gray}
                                style={styles.starRating}
                            />
                        </View>
                        <View style={styles.ratingList}>
                            <Text style={styles.ratingListText}>Significant Improvement Needed</Text>
                            <StarRating
                                rating={1}
                                onChange={setRatingListFifth}
                                maxStars={5}
                                starSize={width * 0.05}
                                color={colors.yellow}
                                starStyle={styles.starRating}
                                emptyColor={colors.Gray}
                                style={styles.starRating}
                            />
                        </View>
                    </View>

                    <View style={styles.border} />
                </View>

                <View style={styles.flatlistContainer}>
                    <FlatList
                        data={ratingData}
                        renderItem={renderRatingData}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{
                            paddingBottom: height * 0.2,
                        }}
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: height * 0.03
    },
    headText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.black
    },
    ratingText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.xxxl,
        color: colors.black
    },
    starRating: {
        alignItems: "center",
    },
    reviewSecText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm2,
        color: colors.black,
        marginTop: height * 0.015
    },
    ratingListContainer: {
        alignItems: "center",
        marginTop: height * 0.04,
        gap: height * 0.01
    },
    ratingList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width * 0.91
    },
    ratingListText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.xsm,
        color: colors.black,
    },
    border: {
        marginTop: height * 0.03,
        borderWidth: 0.4,
        borderColor: colors.Gray,
        width: width * 0.9,
    },
    flatlistContainer: {
        // alignItems: "center"
        flex: 1,
        marginTop: height * 0.02,
        height: height * 0.9
    },
    ratingItemContainer: {
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.045
    },
    ratingHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.01,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
    },
    nameRatingContainer: {
        marginLeft: width * 0.03,
    },
    nameText: {
        fontFamily: fontFamily.GilroyBold,
        fontSize: fontSizes.sm2,
        color: colors.black,
    },
    ratingHeadContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: width * 0.75,
    },
    smallStarRating: {
        marginRight: width * 0.02,
    },
    timeText: {
        fontFamily: fontFamily.GilroyMedium,
        fontSize: fontSizes.sm,
        color: colors.darkGray,
    },
    descText: {
        fontFamily: fontFamily.GilroyRegular,
        fontSize: fontSizes.sm,
        color: colors.black,
        lineHeight: height * 0.02,
        textAlign: "justify"
    },
    ratingMain: {
        flexDirection: "row",
        alignItems: "center",
        gap: width * 0.02,
        marginTop: height * 0.003
    }
})

export default Reviews;