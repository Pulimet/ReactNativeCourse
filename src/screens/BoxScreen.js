import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.expanded}>Box Expanded</Text>
                <Text style={styles.textStyle1}>Box Screen #1</Text>
                <Text style={styles.textStyle2}>Box Screen #2</Text>
                <Text style={styles.textStyle3}>Box Screen #3</Text>
                <Text style={styles.textStyle4}>Box Screen #4</Text>
                <Text style={styles.textStyle5}>Box Screen #5</Text>

            </View>
            <View style={styles.viewStyle2}>
                <View style={styles.box1}/>
                <View style={styles.box2}/>
                <View style={styles.box3}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,

        //alignItems: 'stretch', // Default, match_parent
        //alignItems: 'flex-start', // Wrap at start
        alignItems: 'center', // Wrap and center
        //alignItems: 'flex-end', // Wrap at end

        flexDirection: 'column', // Default
        //flexDirection: 'row', // Align item in a row

        justifyContent: 'flex-start', //Default
        //justifyContent: 'center', //
        //justifyContent: 'space-between', //
        //justifyContent: 'space-around', //
        //justifyContent: 'flex-end', //
    },
    expanded: {
        borderWidth: 3,
        borderColor: 'green',
        position: 'absolute',
        // top: 10,
        // bottom: 10,
        // left: 10,
        // right: 10
        ...StyleSheet.absoluteFillObject // top,bottom,left,right = 0
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        alignSelf: 'flex-end' // 'center', flex-start
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 3
    },
    textStyle4: {
        borderWidth: 3,
        borderColor: 'red',
        //position: 'absolute' // relative by default
    },
    textStyle5: {
        borderWidth: 3,
        borderColor: 'red',
        top: 10,
        left: 20
    },
    viewStyle2: {
        borderWidth: 3,
        borderColor: 'black',
        top: 50,
        height: 200,

        alignItems: 'stretch', // Default, match_parent
        //alignItems: 'flex-start', // Wrap at start
        //alignItems: 'center', // Wrap and center
        //alignItems: 'flex-end', // Wrap at end

        //flexDirection: 'column', // Default
        flexDirection: 'row', // Align item in a row

        //justifyContent: 'flex-start', //Default
        //justifyContent: 'center', //
        justifyContent: 'space-between', //
        //justifyContent: 'space-around', //
        //justifyContent: 'flex-end', //
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        //marginTop: 50,
        //top:50
        alignSelf: 'flex-end' // 'center', flex-start
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;