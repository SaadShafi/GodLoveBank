import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../components/Topheader';
import { colors } from '../utilities/colors';
import CustomTextInput from '../components/CustomTextInput';
import { height, width } from '../utilities';
import CustomButton from '../components/CustomButton';
import { fontFamily } from '../assets/Fonts';
import { fontSizes } from '../utilities/fontsizes';


const HomeBase = () => {

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TopHeader text="Home Base" isBack={true} />
            <Text style={styles.text}>Since Your Old Self-Love</Text>
            <Text style={styles.text}>Story Was REJECTION!</Text>
            <View style={ }>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.lg2,
        fontFamily: fontFamily.GilroyBold,
        alignSelf: 'center',
        color: colors.black,
    }
});

export default HomeBase;
