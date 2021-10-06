import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const Categories = () => {
    return(
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.txtContainer}>
                    <Text style={styles.txt}>Adventure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.txtContainer}>
                    <Text style={styles.txt}>Family</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.txtContainer}>
                    <Text style={styles.txt}>Fantasy</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        paddingHorizontal: 20
    },
    txtContainer: {
        backgroundColor: 'blue',
        marginRight: 10,
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 15,
    },
    txt: {
        color: '#fff',
        fontSize: 12
    },
    line: {
        borderBottomColor: '#888',
        borderBottomWidth: 1,
        marginVertical: 80,
        width: '200%',
        marginLeft: -80,
    }
})

export default Categories;