import React from 'react';
import {Text, View} from "react-native";
import {outputStyles} from "./outputStyles";
import {Button} from "@react-native-material/core";
import {useSelector} from "react-redux";


const OutputData = () => {
    const averageWeight = useSelector(state => state.truckStore.averageWeight)

    return (
        <View style={outputStyles.outputContainer}>
            <Button title="ВИДАЛИТИ ВСЕ" style={outputStyles.buttonNewShift} color={'red'}/>
            <Text style={outputStyles.textStyles}>Середня загрузка: </Text>
            <Text style={outputStyles.tonnStyles}>{averageWeight > 0 ? averageWeight : 0}</Text>
        </View>
    );
};

export default OutputData;
