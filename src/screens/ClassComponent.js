import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'

export default class Functional extends Component {

    constructor(){
        super()
        this.state = {
            data: 'No Data here :(',
            loading: false
        }
    }

    btnPress = () => {
        this.state.loading = true
        fetch('https://reqres.in/api/users', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            this.setState({
                data: JSON.stringify(result),
                loading: this.state.loading = false
            })
        })
        .catch((error) => console.log(error))
        
    }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.heading}>React Native Session</Text>
                <Text style={styles.subheading}>With Class Function</Text>
                <ActivityIndicator size='large' color='#000' animating={this.state.loading} />
                <View style={styles.dataContainer}>
                    <Text style={styles.data}>{this.state.data}</Text>
                </View>

            <TouchableOpacity style={styles.btnContainer} onPress={this.btnPress}>
                <Text style={styles.btn}>Fetch Data</Text>
            </TouchableOpacity>
            </ScrollView>
    </View>
    )
  }
}

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