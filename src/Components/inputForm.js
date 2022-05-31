import React, {useEffect, useState} from 'react';
import {Button, TextInput} from "@react-native-material/core";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {inputStyles} from "./inputStyles";
import {setTrip} from "../../redux/truckSlice";

const InputForm = () => {
    const dispatch = useDispatch();
    const trip = useSelector(state => state.truckStore.trip)
    const date = new Date();
    const hoursAndMinutes = date.getHours() + ':' + date.getMinutes();
    const [ekg, setEkg] = useState(0)
    const [truckLoad, setTruckLoad] = useState(0)
    const addTrip = () => {
        dispatch(setTrip({excavator: ekg, loadWeight: truckLoad, time: hoursAndMinutes}))
    }

    console.log('hoursAndMinutes: ', hoursAndMinutes);
    console.log('ekg: ', ekg)
    console.log('truckLoad: ', truckLoad)
    console.log('trip: ', trip)

    useEffect(() => {
        console.log('trip in useEffect: ', trip)
    }, [trip])

    return (
        <View style={inputStyles.inputContainer}>
            <Text style={inputStyles.inputTitle}>Єкскаватор №</Text>
            <TextInput
                variant="outlined"
                style={inputStyles.textInputStyles}
                keyboardType='numeric'
                onChangeText={newEkg => setEkg(Number(newEkg))}

            />
            <Text style={inputStyles.inputTitle}>Вигрузка т.:</Text>
            <TextInput
                variant="outlined"
                style={inputStyles.textInputStyles}
                keyboardType='numeric'
                onChangeText={newLoad => setTruckLoad(Number(newLoad))}

            />
            <Button title="НОВА ХОДКА"
                    style={inputStyles.buttonNewLoad}
                    onPress={() => {
                        addTrip()
                    }}
            />
        </View>
    );
};

export default InputForm;
