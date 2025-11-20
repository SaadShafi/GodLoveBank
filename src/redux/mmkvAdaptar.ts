// import { MMKV } from 'react-native-mmkv';
// import { Storage } from 'redux-persist';

// export const storage = new MMKV();

// export const mmkvPersistStorage: Storage = {
//   setItem: (key, value) => {
//     storage.set(key, value);
//     return Promise.resolve(true);
//   },
//   getItem: key => {
//     const value = storage.getString(key);
//     return Promise.resolve(value);
//   },
//   removeItem: key => {
//     storage.delete(key);
//     return Promise.resolve();
//   },
// };













// src/redux/mmkvAdapter.ts
import { Storage } from 'redux-persist';

let mmkvStorage: Storage;

// Check if we're in remote debugging mode AND if AsyncStorage is available
const isRemoteDebugging = __DEV__ && typeof global.nativeCallSyncHook === 'undefined';

if (isRemoteDebugging) {
  console.warn('Remote debugging detected: Using in-memory fallback storage');
  
  // Simple in-memory storage as fallback (for development only)
  const inMemoryStorage: { [key: string]: string } = {};
  
  mmkvStorage = {
    setItem: (key: string, value: string): Promise<boolean> => {
      inMemoryStorage[key] = value;
      console.log(`[Dev Storage] Set: ${key}`);
      return Promise.resolve(true);
    },
    getItem: (key: string): Promise<string | null> => {
      const value = inMemoryStorage[key] || null;
      console.log(`[Dev Storage] Get: ${key} = ${value}`);
      return Promise.resolve(value);
    },
    removeItem: (key: string): Promise<void> => {
      delete inMemoryStorage[key];
      console.log(`[Dev Storage] Remove: ${key}`);
      return Promise.resolve();
    },
  };
} else {
  // Use MMKV for production and proper on-device debugging
  const { MMKV } = require('react-native-mmkv');
  const storage = new MMKV();

  mmkvStorage = {
    setItem: (key: string, value: string): Promise<boolean> => {
      storage.set(key, value);
      return Promise.resolve(true);
    },
    getItem: (key: string): Promise<string | null> => {
      const value = storage.getString(key);
      return Promise.resolve(value === undefined ? null : value);
    },
    removeItem: (key: string): Promise<void> => {
      storage.delete(key);
      return Promise.resolve();
    },
  };
}

export const mmkvPersistStorage = mmkvStorage;