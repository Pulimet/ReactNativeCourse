import React, { useState } from 'react';
import {Text, StyleSheet, View, Button} from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={styles.textStyle}>This is the Counter Screen!</Text>
            <Button
                title="Increase"
                onPress={() => setCounter(counter + 1)}
            />
            <Button
                title="Decrease"
                onPress={() => setCounter(counter - 1)}
            />
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 20,
        marginHorizontal: 10
    }
});

export default CounterScreen;