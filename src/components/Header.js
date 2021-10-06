import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Product Details</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    heading: {
        color: '#888',
    }
})

export default Header;