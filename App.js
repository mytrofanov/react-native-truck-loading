import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from "./styles/appStyles";
import { Button, TextInput} from "@react-native-material/core";

export default function App() {
  return (
    <View style={styles.container}>

        <Button title="НОВА ЗМІНА" style={styles.buttonNewShift}/>
        <Text style={styles.textStyles}>Середня загрузка: </Text>
        <Text style={styles.tonnStyles}>131</Text>

        <TextInput
            variant="outlined" label="ЭКГ №:"
            style={styles.textInputStyles}
            keyboardType='numeric'
        />
        <TextInput
            variant="outlined" label="Вигрузка т.:"
            style={styles.textInputStyles}
            keyboardType='numeric'
        />
        <Button title="НОВА ХОДКА" style={styles.buttonNewLoad}/>
      <StatusBar style="auto" />
    </View>
  );
}


