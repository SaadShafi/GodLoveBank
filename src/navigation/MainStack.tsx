import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from '../screens/ForgotPassword';
import Onboarding from '../screens/Onboarding';
import OtpVerification from '../screens/OtpVerification';
import Questionnaire from '../screens/Questionnaire';
import Register from '../screens/Register';
import Registeration from '../screens/Registeration';
import SetNewPassword from '../screens/SetNewPassword';
import SignInEmail from '../screens/SignInEmail';

export type StackParamList = {
  Register: undefined;
  Onboarding: undefined;
  Registeration: undefined;
  SignInEmail: undefined;
  ForgotPassword: undefined;
  OtpVerification: undefined;
  SetNewPassword: undefined;
  Questionnaire: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Registeration" component={Registeration} />
      <Stack.Screen name="SignInEmail" component={SignInEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
      <Stack.Screen name="Questionnaire" component={Questionnaire} />
    </Stack.Navigator>
  );
};

export default MainStack;
