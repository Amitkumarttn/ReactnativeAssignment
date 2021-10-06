import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Counter = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Counter App :)</Text>
            <Text style={styles.counter}>{props.counterValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    counter: {
        fontSize: 80,
        fontWeight: 'bold'
    },
    heading: {
        fontSize: 30
    }
})
export default Counter;