import React  from 'react';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {styles} from "./src/styles/appStyles";
import {Provider} from 'react-redux';
import {store} from './src/Store/store'
import InputForm from "./src/Components/inputForm";
import OutputData from "./src/Components/outputData";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);
export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

                <View style={styles.container}>
                <OutputData/>
                <InputForm   />
                <StatusBar style="auto"/>
            </View>

            </PersistGate>
        </Provider>
    );
}


