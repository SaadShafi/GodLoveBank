import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BaseballDiamond from '../screens/BaseballDiamond';
import CreateProfile from '../screens/CreateProfile';
import FirstBase from '../screens/FirstBase';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import HomeBase from '../screens/HomeBase';
import Onboarding from '../screens/Onboarding';
import OtpVerification from '../screens/OtpVerification';
import Questionnaire from '../screens/Questionnaire';
import Register from '../screens/Register';
import Registeration from '../screens/Registeration';
import SecondBase from '../screens/SecondBase';
import SelfConfidence from '../screens/SelfConfidence';
import SelfCourage from '../screens/SelfCourage';
import SelfDiscipline from '../screens/SelfDiscipline';
import SelfExcellence from '../screens/SelfExcellence';
import SelfForgiveness from '../screens/SelfForgiveness';
import SelfHonesty from '../screens/SelfHonesty';
import SelfImage from '../screens/SelfImage';
import SelfPower from '../screens/SelfPower';
import SelfPurpose from '../screens/SelfPurpose';
import SelfRespect from '../screens/SelfRespect';
import SelfWorth from '../screens/SelfWorth';
import SetNewPassword from '../screens/SetNewPassword';
import SignInEmail from '../screens/SignInEmail';
import SpiritualGrowth from '../screens/SpiritualGrowth';
import ThirdBase from '../screens/ThirdBase';

export type StackParamList = {
  Register: undefined;
  Onboarding: undefined;
  Registeration: undefined;
  SignInEmail: undefined;
  ForgotPassword: undefined;
  OtpVerification: undefined;
  SetNewPassword: undefined;
  Questionnaire: undefined;
  BaseballDiamond: undefined;
  HomeBase: undefined;
  FirstBase: undefined;
  SecondBase: undefined;
  ThirdBase: undefined;
  CreateProfile: undefined;
  Home: undefined;
  SpiritualGrowth: undefined;
  SelfHonesty: undefined;
  SelfCourage: undefined;
  SelfForgiveness: undefined;
  SelfPower: undefined;
  SelfPurpose: undefined;
  SelfExcellence: undefined;
  SelfImage: undefined;
  SelfDiscipline: undefined;
  SelfConfidence: undefined;
  SelfWorth: undefined;
  SelfRespect: undefined;
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
      <Stack.Screen name="BaseballDiamond" component={BaseballDiamond} />
      <Stack.Screen name="HomeBase" component={HomeBase} />
      <Stack.Screen name="FirstBase" component={FirstBase} />
      <Stack.Screen name="SecondBase" component={SecondBase} />
      <Stack.Screen name="ThirdBase" component={ThirdBase} />
      <Stack.Screen name="CreateProfile" component={CreateProfile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SpiritualGrowth" component={SpiritualGrowth} />
      <Stack.Screen name="SelfHonesty" component={SelfHonesty} />
      <Stack.Screen name="SelfCourage" component={SelfCourage} />
      <Stack.Screen name="SelfForgiveness" component={SelfForgiveness} />
      <Stack.Screen name="SelfPower" component={SelfPower} />
      <Stack.Screen name="SelfPurpose" component={SelfPurpose} />
      <Stack.Screen name="SelfExcellence" component={SelfExcellence} />
      <Stack.Screen name="SelfImage" component={SelfImage} />
      <Stack.Screen name="SelfDiscipline" component={SelfDiscipline} />
      <Stack.Screen name="SelfConfidence" component={SelfConfidence} />
      <Stack.Screen name="SelfWorth" component={SelfWorth} />
      <Stack.Screen name="SelfRespect" component={SelfRespect} />
    </Stack.Navigator>
  );
};

export default MainStack;
