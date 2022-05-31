import React from 'react';
import {Text} from "react-native";
import {tableStyles} from "./tableStyles";

const TableOfTrips = ({ekg,date,weight, index}) => {
    return (
            <Text style={tableStyles.tableText}>
                Ходка {index+1} в: {date}, ЕКГ№ {ekg}, Вигрузка: {weight} т.
            </Text>
    );
};

export default TableOfTrips;
