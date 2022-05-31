import React from 'react';
import {Text, View} from "react-native";
import {outputStyles} from "./outputStyles";
import {Button} from "@react-native-material/core";


const OutputData = () => {
    return (
        <View style={outputStyles.outputContainer}>
            <Button title="НОВА ЗМІНА" style={outputStyles.buttonNewShift}/>
            <Text style={outputStyles.textStyles}>Середня загрузка: </Text>
            <Text style={outputStyles.tonnStyles}>131</Text>
        </View>
    );
};

export default OutputData;
