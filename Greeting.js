import React from 'react';
import {text, view} from 'react-native';

const Greeting = (props)=>{
    return(
        <view>
            <text> Hello {props.name}!</text>
        </view>
    );
}
export default Greeting;