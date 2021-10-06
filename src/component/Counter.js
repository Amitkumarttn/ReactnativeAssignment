import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Counter extends React.Component {

    constructor(){
        super();
        console.log('Child Constructor Called...');
    }

    static getDerivedStateFromProps(props, state) { //
        console.log('Child Get DerivedStateFromProps Called...', props, state);
        return true
    }

    
    componentDidMount(){
        console.log('Child ComponentDidMount Called...');
    }
    componentWillUnmount(){
        console.log('Child componentWillUnmount called')
    }
    
    //************************************************************************************** 
                                    // Updating Life Cycle
    //************************************************************************************** 
    
    shouldComponentUpdate(prev, next){
        console.log('Child Should Component Update Called..', prev, next);
        return true;
    }

    getSnapshotBeforeUpdate(props, state){
        console.log('Child getSnapshotBeforUpdate Called...', props, state);
        return true;
    }

    //************************************************************************************** 
                                    // Unmounting Life Cycle
    //************************************************************************************** 

    componentWillUnmount(props, state){
        console.log('Child ComponentWillUnmount Called...', props, state);
    }
    componentDidUpdate(Props, State) {
        console.log('Child ComponentDidUpdate Called...', Props, State);
      }
    render(){
        console.log('Child Render Called...');
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Counter App :)</Text>
                <Text style={styles.counter}>{this.props.counterValue}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    heading: {
        fontSize: 25
    },
    counter: {
        fontSize: 80,
        fontWeight: 'bold'
    }
})
