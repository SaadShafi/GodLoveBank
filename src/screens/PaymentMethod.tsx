import { Ionicons } from '@react-native-vector-icons/ionicons';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { fontFamily } from '../assets/Fonts';
import images from '../assets/Images';
import CustomButton from '../components/CustomButton';
import TopHeader from '../components/Topheader';
import { height, width } from '../utilities';
import { colors } from '../utilities/colors';
import { fontSizes } from '../utilities/fontsizes';

const PaymentMethod = () => {
  const [selected, setSelected] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [rememberCard, setRememberCard] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TopHeader text="Manage Payment Method" isBack={true} />

      <TouchableOpacity
        style={styles.containerMain}
        activeOpacity={0.8}
        onPress={() => setSelected(!selected)}
      >
        <Image source={images.mastercard} style={styles.img} />
        <View
          style={{
            gap: height * 0.015,
            left: width * 0.2,
            top: height * 0.001,
          }}
        >
          <Text style={styles.card}>Debit/Credit Card</Text>
          <Text style={styles.card}>**** **** **** 4567</Text>
        </View>

        <View style={styles.radioContainer}>
          <View style={styles.outerCircle}>
            {selected && <View style={styles.innerCircle} />}
          </View>
        </View>

        <View style={styles.btnMain}>
          <CustomButton
            text="Add Payment Method"
            textColor={colors.white}
            btnHeight={height * 0.065}
            btnWidth={width * 0.85}
            backgroundColor={colors.darkmarhoon}
            borderRadius={20}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </TouchableOpacity>

      {/* Add Card Details Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}
            >
              <Image source={images.closeIcon} />
              {/* <Ionicons name="close" size={26} color={colors.black} /> */}
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Add Card Details</Text>
            <Text style={styles.modalSubtitle}>
              Please enter the card details
            </Text>

            {/* Remember This Card */}
            <TouchableOpacity
              style={styles.rememberRow}
              onPress={() => setRememberCard(!rememberCard)}
            >
              <View
                style={[
                  styles.checkbox,
                  {
                    backgroundColor: rememberCard
                      ? colors.darkmarhoon
                      : colors.white,
                  },
                ]}
              >
                {rememberCard && (
                  <Ionicons name="checkmark" size={14} color={colors.white} />
                )}
              </View>
              <Text style={styles.rememberText}>Remember This Card</Text>
            </TouchableOpacity>

            {/* Input Fields */}
            <TextInput
              style={styles.input}
              placeholder="Name on Card"
              placeholderTextColor={colors.darkGray}
              fontSize={fontSizes.sm}
            />
            <TextInput
              style={styles.input}
              placeholder="Card Number"
              placeholderTextColor={colors.darkGray}
              keyboardType="numeric"
              fontSize={fontSizes.sm}
            />

            <View style={styles.row}>
              <TextInput
                style={[styles.input, { width: '45%' }]}
                placeholder="Expiry"
                placeholderTextColor={colors.darkGray}
                fontSize={fontSizes.sm}
              />
              <TextInput
                style={[styles.input, { width: '45%' }]}
                placeholder="CVV"
                placeholderTextColor={colors.darkGray}
                keyboardType="numeric"
                fontSize={fontSizes.sm}
              />
            </View>

            <View style={{ top: height * 0.01 }}>
              <CustomButton
                text="Add Card"
                textColor={colors.white}
                btnHeight={height * 0.065}
                btnWidth={width * 0.85}
                backgroundColor={colors.darkmarhoon}
                borderRadius={20}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: colors.lightGray,
    height: height * 0.11,
    width: width * 0.9,
    alignSelf: 'center',
    top: height * 0.01,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  img: {
    top: height * 0.04,
    left: width * 0.07,
  },
  card: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.md,
    color: colors.black,
  },
  radioContainer: {
    position: 'absolute',
    right: width * 0.07,
    top: height * 0.045,
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 13,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: colors.black,
  },
  btnMain: {
    top: height * 0.65,
    alignSelf: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    backgroundColor: colors.sheetcolor,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.07,
  },
  closeIcon: {
    position: 'absolute',
    right: width * 0.02,
    top: height * 0.02,
  },
  modalTitle: {
    fontFamily: fontFamily.GilroySemiBold,
    fontSize: fontSizes.lg,
    color: colors.black,
    bottom: height * 0.02,
  },
  modalSubtitle: {
    fontFamily: fontFamily.GilroyRegular,
    fontSize: fontSizes.sm,
    color: colors.darkGray,
    bottom: height * 0.01,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: height * 0.015,
  },
  checkbox: {
    height: 22,
    width: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.darkmarhoon,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  rememberText: {
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.sm,
    color: colors.black,
  },
  input: {
    height: height * 0.065,
    width: '100%',
    backgroundColor: colors.white,
    borderColor: colors.bordercolor,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 15,
    fontFamily: fontFamily.GilroyMedium,
    fontSize: fontSizes.md,
    color: colors.black,
    marginBottom: height * 0.015,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PaymentMethod;
