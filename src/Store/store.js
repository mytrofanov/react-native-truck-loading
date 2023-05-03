import {combineReducers, configureStore} from '@reduxjs/toolkit';
import truckReducer from '../../redux/truckSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
import hardSet from "redux-persist/es/stateReconciler/hardSet";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';


const reducers = combineReducers({
    truckReducer: truckReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // storage,
    stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

