import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from "react-native";


const ConvertProgram = (hex) => {
    const [Entervalue, SetValue] = useState('');
    const [NewColor, SetColor] = useState([255,255,255]);

    

    btnPress = (props) => {

       const pattern = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

       if(Entervalue.length == " "){
           alert('Please Enter Hexa Code');
       } 
       else if(pattern.test(Entervalue) === false) {
           alert('Invalid Hexa Code')
       } 
       else{
        var hexToRgb = Entervalue =>
        Entervalue
        .replace((r, g, b) => r + g + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))
            console.log(hexToRgb(Entervalue));
            SetColor(hexToRgb(Entervalue));
        }
    }
    return(
        <SafeAreaView>
        <View style={styles.container}>
        <View style={{width: 500, height: 100, backgroundColor: `rgb(${NewColor[0]}, ${NewColor[1]}, ${NewColor[2]})`}}></View>
        
        <Text style={styles.heading}>Hexa Code to RGB Color Convertor</Text>
            <View style={styles.InputContainer}> 
                <TextInput 
                value={Entervalue}
                onChangeText={(text) => SetValue(text)}
                placeholder='Enter Hexa Code'/>
            </View>

            <Text style={styles.CodeIndicator}>RGB Color: {NewColor[0]}, {NewColor[1]}, {NewColor[2]}</Text>

            <TouchableOpacity style={styles.btnContainer} onPress={btnPress} >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    heading: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        margin: 20
    },
    InputContainer: {
        borderWidth: 2,
        borderColor: '#000',
        width: '50%',
        marginHorizontal: 20,
        marginVertical: 30,
        paddingLeft: 15
    },
    CodeIndicator: {
        color: 'red',
        textAlign: 'center',
        fontSize: 18
    },
    btnContainer: {
        backgroundColor: 'lightblue',
        width: 180,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        borderRadius: 20
    }
})

export default ConvertProgram












