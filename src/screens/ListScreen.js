import React from 'react';
import {Text, StyleSheet, View, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', key: '1'},
        {name: 'Friend #2', key: '2'},
        {name: 'Friend #3', key: '3'},
        {name: 'Friend #4', key: '4'},
        {name: 'Friend #5', key: '5'},
        {name: 'Friend #6', key: '6'},
        {name: 'Friend #7', key: '7'},
        {name: 'Friend #8', key: '8'},
        {name: 'Friend #9', key: '9'},
    ]
    const friends2 = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'},
        {name: 'Friend #9'},
    ]
    return (
        <View>
            <Text style={styles.titleStyle}>List Screen!</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={friends}
                renderItem={({item}) => {
                    return <Text style={styles.listStyleHorizontal}>{item.name}</Text>;
                }}
            />
            <Text style={styles.titleStyle}>Second list!</Text>
            <FlatList
                keyExtractor={(friend) => friend.name}
                data={friends2}
                renderItem={({item}) => {
                    return <Text style={styles.listStyle}>{item.name}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 50
    },
    listStyle: {
        marginVertical: 30
    },
    listStyleHorizontal: {
        marginHorizontal: 30
    }
});

export default ListScreen;