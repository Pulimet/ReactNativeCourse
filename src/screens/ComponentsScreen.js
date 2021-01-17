import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
        const greeting = '1 =>>>>> Hi there! First';
        const greeting2 = <Text>2 =>>>>> Hi there! Second</Text>;
        return (

            <View>
                <Text style={styles.textStyle}>This is the Components Screen!</Text>
                <Text>{greeting} (kuku)</Text>
                <Text>{greeting2} (kuku)</Text>
            </View>
        );
    };

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
});

export default ComponentsScreen;