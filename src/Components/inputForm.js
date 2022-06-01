import React, {useEffect, useState} from 'react';
import {Button, TextInput} from "@react-native-material/core";
import {Text, View, ScrollView,  SafeAreaView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {inputStyles} from "./inputStyles";
import {setAverageWeight, setTrip} from "../../redux/truckSlice";
import TableOfTrips from "./tableOfTrips";

const InputForm = () => {
    const trip = useSelector(state => state.truckStore.trip)
    const dispatch = useDispatch();

    const savedTrip = localStorage.getItem('tripInStorage')

    const countAverageWeight = () => {
        let weight = 0
        trip.forEach(item =>
            weight += item.loadWeight
        )
        dispatch(setAverageWeight(Math.floor(weight / trip.length)))
    }
    const [ekg, setEkg] = useState(0)
    const [truckLoad, setTruckLoad] = useState(0)
    const date = new Date();
    const hoursAndMinutes = date.getHours() + ':' + date.getMinutes()
    const addTrip = () => {
        if (ekg && truckLoad !== 0) {
            dispatch(setTrip({excavator: ekg, loadWeight: truckLoad, time: hoursAndMinutes}))
            myEKGTextInput.current.clear();
            myWeightTextInput.current.clear();
            setEkg(0)
            setTruckLoad(0)
        }
        }
    ;
    console.log('hoursAndMinutes: ', hoursAndMinutes);
    console.log('ekg: ', ekg)
    console.log('truckLoad: ', truckLoad)
    console.log('trip.length: ', trip.length)

    useEffect(() => {
        countAverageWeight()
        console.log('trip in useEffect: ', trip)
        localStorage.setItem('tripInStorage', trip)
    }, [trip])
    let myEKGTextInput = React.createRef();
    let myWeightTextInput = React.createRef();
    useEffect(()=>{
        console.log('savedTrip: ', savedTrip)
    },[savedTrip])
    console.log('savedTrip: ', JSON.stringify(savedTrip))


    return (
        <View style={inputStyles.inputContainer}>
            <Text style={inputStyles.inputTitle}>Єкскаватор №</Text>
            <TextInput
                variant="outlined"
                style={inputStyles.textInputStyles}
                keyboardType='numeric'
                onChangeText={newEkg => setEkg(Number(newEkg))}
                ref={myEKGTextInput}
            />
            <Text style={inputStyles.inputTitle}>Вигрузка т.:</Text>
            <TextInput
                variant="outlined"
                style={inputStyles.textInputStyles}
                keyboardType='numeric'
                onChangeText={newLoad => setTruckLoad(Number(newLoad))}
                ref={myWeightTextInput}
            />
            <Button title="НОВА ХОДКА"
                    style={inputStyles.buttonNewLoad}
                    onPress={() => {
                        addTrip()
                    }}
            />
            <View style={{flex: 1}}>
                <SafeAreaView style={{flex: 1,height:250}}>
                    <ScrollView >
                        {trip.length > 0 ? trip.map((item, index) =>
                            <TableOfTrips key={index} index={index} date={item.time} ekg={item.excavator}
                                          weight={item.loadWeight}/>
                        ) : null}
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    );
};

export default InputForm;
