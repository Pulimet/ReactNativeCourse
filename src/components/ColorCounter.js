import React from 'react';
import {Text, StyleSheet, View, Button} from "react-native";

const ColorCounter = ({color, changeColor}) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button
                title={`More ${color}`}
                onPress={() => changeColor(true)}
            />
            <Button
                title={`Less ${color}`}
                onPress={() => changeColor(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default ColorCounter;