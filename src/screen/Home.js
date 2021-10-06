import React, {useState} from 'react';
import { View, Button } from 'react-native';

import Counter from '../component/Counter';

const Home = () => {

    const [value, setValue] = useState(0);

    const incrementValue = () => {
        console.log('Button Press');
        return(
            setValue(value + 1)
        )
    }

    return(
        <View>
            <Counter counterValue={value}/>
            <Button 
            title='Click me'
            onPress={incrementValue}
            />
        </View>
    )
}

export default Home;
