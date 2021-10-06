import React from "react";
import { Text, View, StyleSheet } from "react-native";

//Importing Categories
import Categories from "./Categories";

const ProductDetails = () => {
    return(
        <View style={styles.container}>
            <View style={styles.img} />
            
            <View style={styles.content}>
                <Text style={styles.heading}>How to Train YourDragon The Hidden World</Text>
                <Text style={styles.subheading}>Part III</Text>
            </View>

            <View>
                <Categories />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    img: {
        backgroundColor: '#888',
        width: '70%',
        height: 400,
        borderRadius: 10
    },
    content:{
        width: '70%',
        alignItems: 'center'
    },
    heading: {
        fontSize: 15,
        marginVertical: 15,
        textAlign: 'center'
    },
    subheading: {
        color: '#888'
    }
})

export default ProductDetails;