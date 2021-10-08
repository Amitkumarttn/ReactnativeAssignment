import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Profile = props => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <View style={styles.btn}>
                <Button title='Go to Home' 
                onPress={() => props.navigation.navigate('Home')}/>
                
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    btn: {
        width: 200,
        marginTop: 20,
        marginBottom: 40
    }
})
