
import React from "react";
import { View, Button } from 'react-native';

//Importing
import Counter from "../component/Counter";

export default class Home extends React.Component {

    //************************************************************************************** 
                                    // Mounting Life Cycle
    //************************************************************************************** 
    constructor(){
        super();
        this.state ={
            value: 0
        }
        console.log('*********LifeCycle*************');
        console.log('Parent Constructor Called...');
    }

    static getDerivedStateFromProps = (props,state) => { //
        console.log('Parent Get DerivedStateFromProps Called...');
        return true
    }

    
    componentDidMount(){
        console.log('Parent ComponentDidMount Called...');
    }
    
    componentWillUnmount(){
        console.log('Parent componentWillUnmount called')
    }
    
    //************************************************************************************** 
                                    // Updating Life Cycle
    //************************************************************************************** 
    
    shouldComponentUpdate(prev, next){
        console.log('ParentShould Component Update Called..', prev, next);
        return true;
    }

    getSnapshotBeforeUpdate(props, state){
        console.log('Parent getSnapshotBeforUpdate Called...', props, state);
        return true;
    }

    //************************************************************************************** 
                                    // Unmounting Life Cycle
    //************************************************************************************** 

    componentWillUnmount(props, state){
        console.log('Parent ComponentWillUnmount Called...', props, state);
    }
    componentDidUpdate(Props, State) {
        console.log('Parent ComponentDidUpdate Called...', Props, State);
      }
    //Counter Logic
    incrementValue = () => {
        this.setState({
            value: this.state.value + 1,
        });
        console.log(this.state.value + 1)
        
    };
    render(){
        console.log('Parent Render Called...');
        return(
            <View>
                <Counter counterValue={this.state.value}/>
                <Button
                onPress={this.incrementValue}
                title='Click'/>
            </View>
        );
    }
}
