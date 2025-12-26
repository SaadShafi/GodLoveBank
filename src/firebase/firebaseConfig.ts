import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBYxursIyOTqen-vRARZqwR2eIhs1YBxfs',
  authDomain: 'gods-love-bank.firebaseapp.com',
  projectId: 'gods-love-bank',
  storageBucket: 'gods-love-bank.firebasestorage.app',
  messagingSenderId: '1034653006135',
  appId: '1:1034653006135:android:9cd53c271e717d235982b2',
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp();

export default app;
