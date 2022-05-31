import React from 'react';
import {View, Text} from "react-native";
// import {Text} from "@react-native-material/core";
import {tableStyles} from "./tableStyles";

const TableOfTrips = ({ekg,date,weight}) => {
    return (
        <View>
            <Text style={tableStyles.tableText}>
                Ходка в: {date}, ЕКГ№ {ekg}, Вигрузка: {weight} т.
            </Text>
        </View>
    );
};

export default TableOfTrips;
