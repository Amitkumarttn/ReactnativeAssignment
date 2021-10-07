import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";

const Home = () => {
    const [Data, SetData] = useState(' no data found :( ');
    const [isLoading, setLoading] = useState(false);
    
    
    btnPress = () => {
        setLoading(true)
        console.log('You press Button')
        fetch('https://reqres.in/api/users', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => SetData(result))
        .catch((error) => console.log(error))
        .finally(() => {
            setLoading(false)
        })
    }
    
    return(
    <View style={styles.container}>
        <ScrollView>
        <Text style={styles.heading}>React Native Session</Text>
            <Text style={styles.subheading}>With Arrow Function</Text>
        <ActivityIndicator size='large' color="#0000ff" animating={isLoading}/>
        <View style={styles.dataContainer}>
            <Text style={styles.data}>{JSON.stringify(Data)}</Text>
        </View>

        <TouchableOpacity style={styles.btnContainer} onPress={btnPress}>
            <Text style={styles.btn}>Fetch Data</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
);
}
    
export default Home

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        padding: 30
    },
    btnContainer: {
        backgroundColor: 'red',
        width: '50%',
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btn: {
        color: '#fff',
        fontSize: 15
    },
    data: {
        fontSize: 20
    },
    dataContainer: {
        padding: 20,
        alignSelf: 'center'
    },
    subheading: {
        fontSize: 14,
        alignSelf: 'center'
    }
})