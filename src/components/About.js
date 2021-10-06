import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const About = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>About Movie</Text>
            <Text style={styles.content}>
                When Hiccup discovers Toothless isn't the only  Night Fury, 
                he must seek "The Hidden World", a secret Dragon Utopia before
                a hired tyrant named Grimmel finds it first.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    heading: {
        fontSize: 20,
        color: '#000',
        marginBottom:  20
    },
    content: {
        color: '#888',
        fontSize: 12,
        lineHeight: 18
    }
})
export default About;