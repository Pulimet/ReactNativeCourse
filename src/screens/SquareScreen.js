import React, {useReducer} from 'react';
import {Text, StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 20;

const reducer = (state, action) => {
    // state === {red: 0, green: 0, blue: 0}
    // action === {type: 'red', payload: true}
    let amount = INCREMENT
    if (!action.payload) amount = INCREMENT * -1

    const validateOk = (amount) => {
        if (amount > 255) return 255;
        else if (amount < 0) return 0;
        else return amount;
    }

    switch (action.type) {
        case 'change_red':
            return {...state, red: validateOk(state.red + amount)}
        case 'change_green':
            return {...state, green: validateOk(state.green + amount)}
        case 'change_blue':
            return {...state, blue: validateOk(state.blue + amount)}
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state
    return (
        <View>
            <Text style={styles.textStyle}>This is the Square Screen!</Text>
            <ColorCounter color="Red" changeColor={(isUp) => {
                dispatch({type: 'change_red', payload: isUp})
            }}
            />
            <ColorCounter color="Green" changeColor={(isUp) => {
                dispatch({type: 'change_green', payload: isUp})
            }}
            />
            <ColorCounter color="Blue" changeColor={(isUp) => {
                dispatch({type: 'change_blue', payload: isUp})
            }}
            />
            <View style={{height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default SquareScreen;