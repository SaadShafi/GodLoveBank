import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <Provider store={store}>
      <PersistGate  loading={<ActivityIndicator />} persistor={persistor}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      </PersistGate>
    </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
