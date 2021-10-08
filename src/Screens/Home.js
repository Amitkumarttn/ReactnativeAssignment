import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native'


const Home = props => {
    
    const [value, setValue] = useState('')

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View style={styles.btn}>

            <TextInput
            multiline
            placeholder="What's on your mind?"
            style={{ height: 200, padding: 10, backgroundColor: 'white' }}
            value={value}
            onChangeText={setValue}
          />

                
                <Button title='Set to Profile Header' 
                onPress={() => 
                    props.navigation.navigate('Profile', { user: value })}/>
            </View>
        </View>
        
    )
}

export default Home

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
