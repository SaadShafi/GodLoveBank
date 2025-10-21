import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopHeader from '../components/Topheader';
import { colors } from '../utilities/colors';
import CustomTextInput from '../components/CustomTextInput';
import { height, width } from '../utilities';
import CustomButton from '../components/CustomButton';
import { fontFamily } from '../assets/Fonts';
import { fontSizes } from '../utilities/fontsizes';


const SetNewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TopHeader text="Set New Password" isBack={true} />
            <View style={styles.container}>
                <View style={styles.textMain}>
                    {/* <Text style={styles.text}>Please Enter your New Password</Text> */}
                </View>
                <View style={styles.inputMain}>
                    <CustomTextInput
                        placeholder="Password"
                        placeholderTextColor={colors.black}
                        inputHeight={height * 0.06}
                        inputWidth={width * 0.85}
                        borderRadius={14}
                        isPassword={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <CustomTextInput
                        placeholder="Confirm Password"
                        placeholderTextColor={colors.black}
                        inputHeight={height * 0.06}
                        inputWidth={width * 0.85}
                        borderRadius={14}
                        isPassword={true}
                        value={confirmPassword}
                        onChangeText={setconfirmPassword}
                    />
                </View>
                <View style={styles.infoMain}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: height * 0.01,
                            right: width * 0.03,
                        }}
                    >
                        <Text style={styles.infoText}>.</Text>
                        <Text style={styles.infoTextSec}>
                            At least 12 characters long but 14 or more is better.
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: height * 0.01,
                            right: width * 0.03,
                        }}
                    >
                        <Text style={[styles.infoText, { bottom: height * 0.017 }]}>.</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.infoTextSec}>
                                A combination of uppercase letters, lowercase letters,
                            </Text>
                            <Text style={styles.infoTextSec}>numbers, and symbols.</Text>
                        </View>
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
        top: height * 0.05,
    },
    textMain: {
        alignItems: 'center',
        top: height * 0.025,
    },
    text: {
        fontFamily: fontFamily.RubikLight,
        fontSize: fontSizes.sm,
        color: colors.black,
    },
    inputMain: {
        alignItems: 'center',
        gap: height * 0.02,
    },
    infoMain: {
        top: height * 0.02,
        gap: height * 0.02,
        left: width * 0.02,
    },
    infoText: {
        fontFamily: fontFamily.RubikBold,
        fontSize: fontSizes.md,
        color: colors.black,
        bottom: height * 0.004,
    },
    infoTextSec: {
        fontFamily: fontFamily.UrbanistRegular,
        fontSize: fontSizes.sm,
        color: colors.black,
    },
    btnMain: {
        top: height * 0.07,
    },
});

export default SetNewPassword;
