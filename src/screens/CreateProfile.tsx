// import { useState } from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import TopHeader from '../components/Topheader';
// import { colors } from '../utilities/colors';
// import images from '../assets/Images';
// import CustomSelect from '../components/CustomSelect';
// import { height, width } from '../utilities';
// import CustomMultiInput from '../components/CustomMultiInput';
// import CustomButton from '../components/CustomButton';
// import { fontFamily } from '../assets/Fonts';
// import { fontSizes } from '../utilities/fontsizes';


// const CreateProfile = () => {
//     const [city, setCity] = useState('');
//     const [country, setCountry] = useState('');
//     const [postalCode, setPostalCode] = useState('');
//     const [gender, setGender] = useState('');
//     const [status, setStatus] = useState('');
//     const [bio, setBio] = useState('');

//     const countryOption = [
//         { name: 'Country', id: '' },
//         { name: 'Bangladesh', id: 'bangladesh' },
//         { name: 'Saudia Arabia', id: 'saudia arabia' },
//         { name: 'Other', id: 'other' },
//     ];
//     const cityOptions = [
//         { name: 'City', id: '' },
//         { name: 'Lahore', id: 'lahore' },
//         { name: 'Quetta', id: 'quetta' },
//         { name: 'Other', id: 'other' },
//     ];
//     const postalOptions = [
//         { name: 'Postal Code', id: '' },
//         { name: '1234', id: '1234' },
//         { name: '4312', id: '4312' },
//         { name: '4533', id: '4533' },
//         { name: 'Other', id: 'other' },
//     ];
//     const genderOptions = [
//         { name: 'Gender', id: '' },
//         { name: 'Male', id: 'male' },
//         { name: 'Female', id: 'female' },
//         { name: 'Other', id: 'other' },
//     ];
//     const relationshipOptions = [
//         { name: 'Relationship Status', id: '' },
//         { name: 'Single', id: 'single' },
//         { name: 'Married', id: 'married' },
//     ];

//     return (
//         <View style={{ flex: 1, backgroundColor: colors.white }}>
//             <TopHeader text="Create Profile" isBackBlack={true} />
//             <View style={styles.container}>
//                 <View style={styles.imgMain}>
//                     <Image source={images.profile} style={styles.profileImg} />
//                     <Text style={styles.profText}>Harold Smith</Text>
//                 </View>
//                 <View style={styles.inputMain}>
//                     <View style={styles.row}>
//                         <CustomSelect
//                             inputWidth={width * 0.41}
//                             inputHeight={height * 0.06}
//                             selectElements={countryOption}
//                             borderColor={country ? colors.lightGray : colors.lightGray}
//                             borderWidth={1}
//                             inputColor={country ? colors.lightGray : colors.lightGray}
//                             borderRadius={18}
//                             onChangeText={value => setCountry(value)}
//                             setSelectedElement={setCountry}
//                             defaultValue=""
//                         />
//                         <CustomSelect
//                             inputWidth={width * 0.41}
//                             inputHeight={height * 0.06}
//                             selectElements={cityOptions}
//                             borderColor={city ? colors.lightGray : colors.lightGray}
//                             borderWidth={1}
//                             inputColor={city ? colors.lightGray : colors.lightGray}
//                             borderRadius={18}
//                             onChangeText={value => setCity(value)}
//                             setSelectedElement={setCity}
//                             defaultValue=""
//                         />
//                     </View>
//                     <View style={styles.row}>
//                         <CustomSelect
//                             inputWidth={width * 0.41}
//                             inputHeight={height * 0.06}
//                             selectElements={postalOptions}
//                             borderColor={postalCode ? colors.lightGray : colors.lightGray}
//                             borderWidth={1}
//                             inputColor={postalCode ? colors.lightGray : colors.lightGray}
//                             borderRadius={18}
//                             onChangeText={value => setPostalCode(value)}
//                             setSelectedElement={setPostalCode}
//                             defaultValue=""
//                         />
//                         <CustomSelect
//                             inputWidth={width * 0.41}
//                             inputHeight={height * 0.06}
//                             selectElements={genderOptions}
//                             borderColor={gender ? colors.lightGray : colors.lightGray}
//                             borderWidth={1}
//                             inputColor={gender ? colors.lightGray : colors.lightGray}
//                             borderRadius={18}
//                             onChangeText={value => setGender(value)}
//                             setSelectedElement={setGender}
//                             defaultValue=""
//                         />
//                     </View>
//                     <CustomSelect
//                         inputWidth={width * 0.85}
//                         inputHeight={height * 0.06}
//                         selectElements={relationshipOptions}
//                         borderColor={status ? colors.lightGray : colors.lightGray}
//                         borderWidth={1}
//                         inputColor={status ? colors.lightGray : colors.lightGray}
//                         borderRadius={18}
//                         onChangeText={value => setStatus(value)}
//                         setSelectedElement={setStatus}
//                         defaultValue=""
//                     />
//                     <CustomMultiInput
//                         inputHeight={height * 0.13}
//                         inputWidth={width * 0.85}
//                         borderRadius={18}
//                         backgroundColor={bio ? colors.lightGray : colors.lightGray}
//                         placeholder="Type Here"
//                         placeholderTextColor={colors.black}
//                     />
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
//         backgroundColor: colors.lightBlue,
//         top: height * 0.015,
//         flex: 1,
//     },
//     imgMain: {
//         top: height * 0.03,
//         alignItems: 'center',
//     },
//     profileImg: {
//         width: width * 0.7,
//         height: height * 0.15,
//         resizeMode: 'contain',
//     },
//     profText: {
//         fontFamily: fontFamily.UrbanistBold,
//         fontSize: fontSizes.md,
//         color: colors.black,
//         top: height * 0.01,
//     },
//     inputMain: {
//         alignItems: 'center',
//         top: height * 0.07,
//         gap: height * 0.01,
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: width * 0.85,
//     },
//     btnMain: {
//         top: height * 0.3,
//     },
// });

// export default CreateProfile;



















import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import TopHeader from '../components/Topheader';
import { colors } from '../utilities/colors';
import images from '../assets/Images';
import CustomSelect from '../components/CustomSelect';
import { height, width } from '../utilities';
import CustomButton from '../components/CustomButton';
import { fontFamily } from '../assets/Fonts';
import { fontSizes } from '../utilities/fontsizes';

const CreateProfile = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [bio, setBio] = useState('');
    const [tags, setTags] = useState([]);

    const countryOption = [
        { name: 'Country', id: '' },
        { name: 'Bangladesh', id: 'bangladesh' },
        { name: 'Saudia Arabia', id: 'saudia arabia' },
        { name: 'Other', id: 'other' },
    ];
    const cityOptions = [
        { name: 'City', id: '' },
        { name: 'Lahore', id: 'lahore' },
        { name: 'Quetta', id: 'quetta' },
        { name: 'Other', id: 'other' },
    ];
    const postalOptions = [
        { name: 'Postal Code', id: '' },
        { name: '1234', id: '1234' },
        { name: '4312', id: '4312' },
        { name: '4533', id: '4533' },
        { name: 'Other', id: 'other' },
    ];
    const genderOptions = [
        { name: 'Gender', id: '' },
        { name: 'Male', id: 'male' },
        { name: 'Female', id: 'female' },
        { name: 'Other', id: 'other' },
    ];
    const relationshipOptions = [
        { name: 'Relationship Status', id: '' },
        { name: 'Single', id: 'single' },
        { name: 'Married', id: 'married' },
    ];

    const handleAddTag = () => {
        if (bio.trim() !== '') {
            setTags([...tags, bio.trim()]);
            setBio('');
        }
    };

    const handleRemoveTag = (index) => {
        const updated = [...tags];
        updated.splice(index, 1);
        setTags(updated);
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TopHeader text="Profile Setup" isBackBlack={true} />
            <View style={styles.container}>
                <View style={styles.imgMain}>
                    <Image source={images.profile} style={styles.profileImg} />
                    <Text style={styles.profText}>Harden Scott</Text>
                </View>

                <View style={styles.inputMain}>
                    <View style={styles.row}>
                        <CustomSelect
                            inputWidth={width * 0.41}
                            inputHeight={height * 0.06}
                            selectElements={countryOption}
                            borderColor={colors.lightGray}
                            borderWidth={1}
                            inputColor={colors.lightGray}
                            borderRadius={20}
                            onChangeText={setCountry}
                            setSelectedElement={setCountry}
                            defaultValue=""
                            rightIcon={images.arrowdown}
                        />
                        <CustomSelect
                            inputWidth={width * 0.41}
                            inputHeight={height * 0.06}
                            selectElements={cityOptions}
                            borderColor={colors.lightGray}
                            borderWidth={1}
                            inputColor={colors.lightGray}
                            borderRadius={20}
                            onChangeText={setCity}
                            setSelectedElement={setCity}
                            defaultValue=""
                            rightIcon={images.arrowdown}
                        />
                    </View>

                    <View style={styles.row}>
                        <CustomSelect
                            inputWidth={width * 0.41}
                            inputHeight={height * 0.06}
                            selectElements={postalOptions}
                            borderColor={colors.lightGray}
                            borderWidth={1}
                            inputColor={colors.lightGray}
                            borderRadius={20}
                            onChangeText={setPostalCode}
                            setSelectedElement={setPostalCode}
                            defaultValue=""
                            rightIcon={images.arrowdown}
                        />
                        <CustomSelect
                            inputWidth={width * 0.41}
                            inputHeight={height * 0.06}
                            selectElements={genderOptions}
                            borderColor={colors.lightGray}
                            borderWidth={1}
                            inputColor={colors.lightGray}
                            borderRadius={20}
                            onChangeText={setGender}
                            setSelectedElement={setGender}
                            defaultValue=""
                            rightIcon={images.arrowdown}
                        />
                    </View>

                    <CustomSelect
                        inputWidth={width * 0.85}
                        inputHeight={height * 0.06}
                        selectElements={relationshipOptions}
                        borderColor={colors.lightGray}
                        borderWidth={1}
                        inputColor={colors.lightGray}
                        borderRadius={20}
                        onChangeText={setStatus}
                        setSelectedElement={setStatus}
                        defaultValue=""
                        rightIcon={images.arrowdown}
                    />

                    {/* ✨ Updated Field Section (matches your image) */}
                    <View style={styles.newHomeBaseWrapper}>
                        <View style={styles.newHomeBaseCard}>
                            <Text style={styles.newHomeBaseLabel}>Enter your New Self Love HomeBase</Text>
                            <TextInput
                                style={styles.newHomeBaseInput}
                                placeholder="Type here..."
                                placeholderTextColor={colors.black}
                                value={bio}
                                onChangeText={setBio}
                            />
                        </View>

                        <TouchableOpacity style={styles.newHomeBasePlus} onPress={handleAddTag}>
                            <Text style={styles.plusText}>＋</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Added tags */}
                    <View style={styles.tagsContainer}>
                        <FlatList
                            data={tags}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={false}
                            renderItem={({ item, index }) => (
                                <View style={styles.tagItem}>
                                    <Text style={styles.tagText}>{item}</Text>
                                    <TouchableOpacity onPress={() => handleRemoveTag(index)}>
                                        <Text style={styles.removeTag}>✕</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
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
        backgroundColor: colors.lightBlue,
        top: height * 0.015,
        flex: 1,
        gap: height * 0.01,
    },
    imgMain: {
        top: height * 0.03,
        alignItems: 'center',
    },
    profileImg: {
        width: width * 0.7,
        height: height * 0.15,
        resizeMode: 'contain',
    },
    profText: {
        fontFamily: fontFamily.UrbanistBold,
        fontSize: fontSizes.md,
        color: colors.black,
        top: height * 0.01,
    },
    inputMain: {
        alignItems: 'center',
        top: height * 0.07,
        gap: height * 0.01,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.85,
    },
    btnMain: {
        top: height * 0.25,
    },

    /** ✨ Updated field styling **/
    newHomeBaseWrapper: {
        width: width * 0.85,
        alignSelf: 'center',
        marginVertical: height * 0.01,
        position: 'relative',
    },
    newHomeBaseCard: {
        backgroundColor: colors.lightGray,
        borderRadius: 20,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.04,
    },
    newHomeBaseLabel: {
        color: colors.marhoon,
        fontFamily: fontFamily.UrbanistBold,
        fontSize: fontSizes.sm,
        marginBottom: height * 0.015,
    },
    newHomeBaseInput: {
        color: colors.black,
        fontFamily: fontFamily.UrbanistMedium,
        fontSize: fontSizes.sm,
        paddingVertical: 4,
    },
    newHomeBasePlus: {
        position: 'absolute',
        right: -width * 0.,
        top: '50%',
        transform: [{ translateY: -height * 0.025 }],
        borderRadius: 25,
        width: width * 0.1,
        height: width * 0.18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusText: {
        color: colors.black,
        fontSize: fontSizes.lg,
        fontWeight: '600',
        right: width * 0.01,
    },

    tagsContainer: {
        width: width * 0.28,
        right: width * 0.27,
    },
    tagItem: {
        backgroundColor: colors.marhoon,
        borderRadius: 20,
        paddingVertical: height * 0.007,
        paddingHorizontal: width * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagText: {
        color: colors.white,
        fontFamily: fontFamily.UrbanistMedium,
        fontSize: fontSizes.sm,
    },
    removeTag: {
        color: colors.white,
        marginLeft: width * 0.03,
        fontSize: fontSizes.sm,

    },
});

export default CreateProfile;


