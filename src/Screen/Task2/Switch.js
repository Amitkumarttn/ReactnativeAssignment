// Use a switch to show hide the Slider and below slider show the slider value
import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import Slider from '@ptomasroos/react-native-multi-slider';

const SwitchTask = () => {
    const [isOn, setOn] = useState(false);
    const [sliderValue, SetsliderValue] = useState(0)
    const [isHidden, SetHidden] = useState(true);

    const toggleSwitch = (val) => {
        setOn(previousState => !previousState)
        if(val === true){
            SetHidden(false)
        } else {
            SetHidden(true)
        }
    
    };

    return (
        <View style={styles.container}>
        
        {
            isHidden ? <View style={styles.slider}>
            <Slider 
                min={0} 
                max={100} 
                isVisible={false}
                onValuesChange={val => SetsliderValue(val)}
            />
            <Text>Slider Value: {sliderValue}</Text>
        </View> : null
        }

        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isOn}
      />
        </View>
    )
} 

export default SwitchTask

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slider: {
        
    },
    hidden: {
        display: 'none'
    }
});
