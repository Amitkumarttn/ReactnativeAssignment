import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const Screenshots = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Screenshots</Text>
            <View style={styles.outerImage}>
                <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                style={styles.imgContainer}>
                    <View style={styles.image}/>
                    <View style={styles.image}/>
                    <View style={styles.image}/>
                    <View style={styles.image}/>
                </ScrollView>
            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    heading: {
        fontSize: 20
    },
    outerImage: {
        backgroundColor: '#fff',
        marginLeft: -18,
        marginRight: -18
    },
    imgContainer: {
        margin: 20,
        marginTop: 15
    },
    image: {
        width: 164,
        height: 110,
        backgroundColor: '#888',
        marginRight: 10,
        borderRadius: 10
    }
})
export default Screenshots;