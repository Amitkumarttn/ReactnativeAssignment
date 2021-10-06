import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Venue = () => {
    return(
        <View>
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.Headingtxt}>Year</Text>
                    <Text style={styles.Subheadingtxt}>2019</Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.Headingtxt}>Country</Text>
                    <Text style={styles.Subheadingtxt}>USA</Text>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.Headingtxt}>Length</Text>
                    <Text style={styles.Subheadingtxt}>112 min</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -50,
        justifyContent: 'center',
        
    },
    txtContainer: {
        marginRight: 10,
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    Headingtxt: {
        color: '#888',
        fontSize: 12
    },
    Subheadingtxt: {
        color: '#000'
    }
    
})

export default Venue;