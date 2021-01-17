import React from 'react';
import {Text, StyleSheet, View, Image} from "react-native";

const ImageDetail = ({imageSrc, title}) => {
    return (
        <View>
            <Image source={imageSrc} />
            <Text style={styles.textStyle}>{title}!!!</Text>
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

export default ImageDetail;