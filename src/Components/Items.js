import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Items = (props) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.box}>
                <Text>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Items

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#DCDCDC',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10
    }
})
