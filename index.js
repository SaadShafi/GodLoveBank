/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Register from './src/screens/Register.tsx';
import Onboarding from './src/screens/Onboarding.tsx';
import SignInEmail from './src/screens/SignInEmail.tsx';
import Registeration from './src/screens/Registeration.tsx';
import OtpVerification from './src/screens/OtpVerification.tsx';

AppRegistry.registerComponent(appName, () => OtpVerification);
