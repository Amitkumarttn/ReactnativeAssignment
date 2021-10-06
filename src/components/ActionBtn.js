import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const ActionBtn = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.BtnContainer}>
                <Text style={styles.Btn}>BUY TICKET</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 20
    },
    BtnContainer: {
        backgroundColor: 'blue',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Btn: {
        color: '#fff',
        
    }
})

export default ActionBtn;