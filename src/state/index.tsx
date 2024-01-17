import {createStore} from 'redux';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage'
import {appReducer} from './reducer.ts';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['app'],
};
const persistedReducer = persistReducer(persistConfig, appReducer);


export const store = createStore(persistedReducer);
export const persistor = persistStore(store);