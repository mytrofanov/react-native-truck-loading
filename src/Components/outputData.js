import React from 'react';
import {Text, View} from "react-native";
import {outputStyles} from "./outputStyles";
import {Button} from "@react-native-material/core";
import {useDispatch, useSelector} from "react-redux";
import {setAverageWeight, setZeroTrip} from "../../redux/truckSlice";


const OutputData = () => {
    const averageWeight = useSelector(state => state.truckStore.averageWeight)
    const dispatch = useDispatch();
    const deleteAll = ()=>{
        dispatch(setZeroTrip([]))
        dispatch(setAverageWeight(0))
    }
    return (
        <View style={outputStyles.outputContainer}>
            <Button title="ВИДАЛИТИ ВСЕ"
                    style={outputStyles.buttonNewShift}
                    color={'red'}
                    onPress={() => {
                        deleteAll()
                    }}
            />
            <Text style={outputStyles.textStyles}>Середня загрузка: </Text>
            <Text style={outputStyles.tonnStyles}>{averageWeight > 0 ? averageWeight : 0}</Text>
        </View>
    );
};

export default OutputData;
