import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>>> Hi there! Yoohooo! Alena</Text>
            <Button
                title="Go To Components Demo"
                onPress={() => navigation.navigate("Components")}
            />
            <Button
                title="Go To List Demo"
                onPress={() => navigation.navigate("List")}
            />
            <Button
                title="Go To Image Demo"
                onPress={() => navigation.navigate("Image")}
            />
            <Button
                title="Go To Counter Demo"
                onPress={() => navigation.navigate("Counter")}
            />
            <Button
                title="Go To Color Demo"
                onPress={() => navigation.navigate("Color")}
            />
            <Button
                title="Go To Square Demo"
                onPress={() => navigation.navigate("Square")}
            />
            <Button
                title="Go To Text Demo"
                onPress={() => navigation.navigate("Text")}
            />
            <Button
                title="Go To Box Demo"
                onPress={() => navigation.navigate("Box")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("List")}>
                <Text>Go To List Demo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;

