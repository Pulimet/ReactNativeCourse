import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is the Image Screen!</Text>
            <ImageDetail title="Forest" imageSrc={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Beach" imageSrc={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Mountain" imageSrc={require('../../assets/mountain.jpg')}/>
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

export default ImageScreen;