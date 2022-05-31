import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {styles} from "./src/styles/appStyles";
import {Provider} from 'react-redux';
import store from './src/Store/store'
import InputForm from "./src/Components/inputForm";
import OutputData from "./src/Components/outputData";

export default function App() {


    return (
        <Provider store={store}>

            <View style={styles.container}>
                <OutputData/>
                <InputForm/>
                <StatusBar style="auto"/>
            </View>


        </Provider>
    );
}


