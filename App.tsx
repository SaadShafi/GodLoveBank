import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { colors } from './src/utilities/colors';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <Provider store={store}>
      <PersistGate  loading={<ActivityIndicator />} persistor={persistor}>
      <NavigationContainer>
        <MainStack />
        <Toast
            config={{
              custom_otp: ({ text1, text2 }) => (
                <View style={styles.toastContainer}>
                  {/* <Text style={styles.text1}>
                    Hi <Text style={styles.bold}>Alex!</Text> Here is your
                    One-Time Password <Text style={styles.bold}>52610</Text>
                  </Text>
                  <Text style={styles.text2}>
                    <Text style={styles.bold}>Valid for 10 mins.</Text>
                  </Text> */}
                </View>
              ),
            }}
          />
      </NavigationContainer>
      </PersistGate>
    </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toastContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.marhoon,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginTop: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  text1: {
    fontSize: 15,
    color: colors.black,
  },
  text2: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default App;
