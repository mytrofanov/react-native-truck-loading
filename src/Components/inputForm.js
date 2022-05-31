import React from 'react';
import {Button, TextInput} from "@react-native-material/core";
import {View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {inputStyles} from "./inputStyles";

const InputForm = () => {
    const dispatch = useDispatch();
    const trip = useSelector(state => state.truckStore.trip)
    console.log(trip)
    return (
        <View style={inputStyles.inputContainer}>
            <TextInput
                variant="outlined" label="ЭКГ №:"
                style={inputStyles.textInputStyles}
                keyboardType='numeric'
            />
            <TextInput
                variant="outlined" label="Вигрузка т.:"
                style={inputStyles.textInputStyles}
                keyboardType='numeric'
            />
            <Button title="НОВА ХОДКА" style={inputStyles.buttonNewLoad}/>
        </View>
    );
};

export default InputForm;
