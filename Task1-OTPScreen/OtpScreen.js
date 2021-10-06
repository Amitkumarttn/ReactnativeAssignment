import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const OtpScreen = () => {
    return(
        <View style={styles.container}>
            {/* Header Section*/}
            <View style={styles.header}>
                <Text style={styles.heading}>Log into Saavn</Text> 
            </View>

            {/* Main section */}
            <View style={styles.main}>
                <Text style={styles.subheading}>Enter your code</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <TextInput textAlign='center'  maxLength={1} keyboardType='number-pad' autoFocus={true}/>
                    </View>
                    <View style={styles.input}>
                        <TextInput textAlign='center' maxLength={1} keyboardType='number-pad' />
                    </View>
                    <View style={styles.input}>
                        <TextInput textAlign='center' maxLength={1} keyboardType='number-pad' />
                    </View>
                    <View style={styles.input}>
                        <TextInput textAlign='center' maxLength={1} keyboardType='number-pad' />
                    </View>
                </View>

                {/* Button*/}
                <TouchableOpacity style={styles.btnContainer} onPress={()=> {console.log('Button Press')}}>
                    <Text style={styles.Button}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'green',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: '#fff',
        fontSize: 15,
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    },
    subheading: {
        fontSize: 20,
        color: '#888'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    input: {
        marginHorizontal: 8,
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 2,
        width: 30,
        textAlign: 'center'
    },
    btnContainer: {
        borderWidth: 1,
        borderColor: 'green',
        width: 200,
        height: 40,
        justifyContent: 'center',
    },
    Button: {
        textAlign: 'center',
        color: 'green'
    }
})
export default OtpScreen;