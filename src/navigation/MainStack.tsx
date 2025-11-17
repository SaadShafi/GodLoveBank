import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AmenPrinciples from '../screens/AmenPrinciples';
import BaseballDiamond from '../screens/BaseballDiamond';
import CaringDeeds from '../screens/CaringDeeds';
import ChangePassword from '../screens/ChangePassword';
import ClosingPrinciples from '../screens/ClosingPrinciples';
import ClosingSpirits from '../screens/ClosingSpirits';
import CreateProfile from '../screens/CreateProfile';
import DailyPrayerMacro from '../screens/DailyPrayerMacro';
import DepositsSteps from '../screens/DepositsSteps';
import FAQs from '../screens/FAQs';
import FirstBase from '../screens/FirstBase';
import ForgotPassword from '../screens/ForgotPassword';
import GiftJourney from '../screens/GiftJourney';
import GodLoveBankCurriculum from "../screens/God'sLoveBankCurriculum";
import GoldenRule from '../screens/GoldenRule';
import GoldenRuleCommunication from '../screens/GoldenRuleCommunication';
import HomeBase from '../screens/HomeBase';
import InstrumentalGoals from '../screens/InstrumentalGoals';
import LoveDepositReps from '../screens/LoveDepositReps';
import LoveDeposits from '../screens/LoveDeposits';
import NotificationsScreen from '../screens/Notifications';
import Onboarding from '../screens/Onboarding';
import OtpVerification from '../screens/OtpVerification';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Profile from '../screens/Profile';
import PurposeInstrumental from '../screens/PurposeInstrumental';
import PurposeToolbox from '../screens/PurposeToolbox';
import Pyramid from '../screens/Pyramid';
import PyramidGoals from '../screens/PyramidGoals';
import Questionnaire from '../screens/Questionnaire';
import Register from '../screens/Register';
import Registeration from '../screens/Registeration';
import SecondBase from '../screens/SecondBase';
import SelfConfidence from '../screens/SelfConfidence';
import SelfCourage from '../screens/SelfCourage';
import SelfDiscipline from '../screens/SelfDiscipline';
import SelfExcellence from '../screens/SelfExcellence';
import SelfForgiveness from '../screens/SelfForgiveness';
import SelfHappiness from '../screens/SelfHappiness';
import SelfHonesty from '../screens/SelfHonesty';
import SelfImage from '../screens/SelfImage';
import SelfIntegrity from '../screens/SelfIntegrity';
import SelfLove from '../screens/SelfLove';
import SelfLoveMindfulness from '../screens/SelfLoveMindfulness';
import SelfPower from '../screens/SelfPower';
import SelfProsperity from '../screens/SelfProsperity';
import SelfPurpose from '../screens/SelfPurpose';
import SelfRespect from '../screens/SelfRespect';
import SelfWorth from '../screens/SelfWorth';
import SetNewPassword from '../screens/SetNewPassword';
import SevenLaws from '../screens/SevenLaws';
import SignInEmail from '../screens/SignInEmail';
import SpiritualGrowth from '../screens/SpiritualGrowth';
import SpirtualGrowthStages from '../screens/SpirtualGrowthStages';
import TermsConditions from '../screens/TermsConditions';
import TheAmenPrinciple from '../screens/TheAmenPrinciple';
import Thermostat from '../screens/Thermostat';
import ThirdBase from '../screens/ThirdBase';
import ThreeFoldSpirtual from '../screens/ThreeFoldSpirtual';
import Toolbox from '../screens/Toolbox';
import BottomTabs from './BottomTabs';

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
  SelfLove: undefined;
  SelfProsperity: undefined;
  SelfIntegrity: undefined;
  SelfHappiness: undefined;
  LoveDepositReps: undefined;
  DailyPrayerMacro: undefined;
  ClosingSpirits: undefined;
  ClosingPrinciples: undefined;
  GodLoveBankCurriculum: undefined;
  GoldenRule: undefined;
  GoldenRuleCommunication: undefined;
  SelfLoveMindfulness: undefined;
  SpirtualGrowthStages: undefined;
  Thermostat: undefined;
  Pyramid: undefined;
  PyramidGoals: undefined;
  CaringDeeds: undefined;
  GiftJourney: undefined;
  PurposeInstrumental: undefined;
  InstrumentalGoals: undefined;
  ThreeFoldSpirtual: undefined;
  SevenLaws: undefined;
  BottomTabs: undefined;
  PurposeToolbox: undefined;
  Toolbox: undefined;
  LoveDeposits: undefined;
  DepositsSteps: undefined;
  AmenPrinciples: undefined;
  TheAmenPrinciple: undefined;
  NotificationsScreen: undefined;
  Profile: undefined;
  TermsConditions: undefined;
  PrivacyPolicy: undefined;
  FAQs: undefined;
  ChangePassword: undefined;
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
      <Stack.Screen name="Home" component={BottomTabs} />
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
      <Stack.Screen name="SelfLove" component={SelfLove} />
      <Stack.Screen name="SelfProsperity" component={SelfProsperity} />
      <Stack.Screen name="SelfIntegrity" component={SelfIntegrity} />
      <Stack.Screen name="SelfHappiness" component={SelfHappiness} />
      <Stack.Screen name="LoveDepositReps" component={LoveDepositReps} />
      <Stack.Screen name="DailyPrayerMacro" component={DailyPrayerMacro} />
      <Stack.Screen name="ClosingSpirits" component={ClosingSpirits} />
      <Stack.Screen name="ClosingPrinciples" component={ClosingPrinciples} />
      <Stack.Screen
        name="GodLoveBankCurriculum"
        component={GodLoveBankCurriculum}
      />
      <Stack.Screen name="GoldenRule" component={GoldenRule} />
      <Stack.Screen
        name="GoldenRuleCommunication"
        component={GoldenRuleCommunication}
      />
      <Stack.Screen
        name="SelfLoveMindfulness"
        component={SelfLoveMindfulness}
      />

      <Stack.Screen
        name="SpirtualGrowthStages"
        component={SpirtualGrowthStages}
      />

      <Stack.Screen name="Thermostat" component={Thermostat} />
      <Stack.Screen name="Pyramid" component={Pyramid} />
      <Stack.Screen name="PyramidGoals" component={PyramidGoals} />
      <Stack.Screen name="CaringDeeds" component={CaringDeeds} />
      <Stack.Screen name="GiftJourney" component={GiftJourney} />
      <Stack.Screen
        name="PurposeInstrumental"
        component={PurposeInstrumental}
      />

      <Stack.Screen name="InstrumentalGoals" component={InstrumentalGoals} />
      <Stack.Screen name="ThreeFoldSpirtual" component={ThreeFoldSpirtual} />
      <Stack.Screen name="SevenLaws" component={SevenLaws} />
      <Stack.Screen name="PurposeToolbox" component={PurposeToolbox} />
      <Stack.Screen name="Toolbox" component={Toolbox} />
      <Stack.Screen name="LoveDeposits" component={LoveDeposits} />
      <Stack.Screen name="DepositsSteps" component={DepositsSteps} />
      <Stack.Screen name="AmenPrinciples" component={AmenPrinciples} />
      <Stack.Screen name="TheAmenPrinciple" component={TheAmenPrinciple} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />

      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default MainStack;
