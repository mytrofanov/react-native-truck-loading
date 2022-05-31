import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonNewShift: {
        position:"absolute",
        top:'10%'
    },
    textStyles: {
        position:"absolute",
        top:'20%',

        color:'orange',
        fontSize:24,
    },
    tonnStyles: {
        position:"absolute",
        top:'25%',
        color:'orange',
        fontSize:72
    },
    textInputStyles: {
        margin:16,
        width:'60%'
    },
    buttonNewLoad: {
        position:"absolute",
        top:'65%',

        minWidth: "70%",
    },
});
