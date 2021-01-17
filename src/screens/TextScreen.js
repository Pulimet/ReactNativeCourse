import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput} from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text>{password}</Text>
            {password.length < 4 ? <Text>Password must be 4 chars</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 50,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen