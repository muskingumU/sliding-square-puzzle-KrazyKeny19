import React from 'react';
import {View, Image, StyleSheet, Dimensions, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create(
    {
        container : {
            flexDirection : 'row',
            flexWrap : 'wrap'
        }
    }
);

const tiles = () =>{
    const tile0 = require('./eye/tile0.png')
    const tile1 = require('./eye/tile1.png')
    const tile2 = require('./eye/tile2.png')
    const tile3 = require('./eye/tile3.png')
    const tile4 = require('./eye/tile4.png')
    const tile5 = require('./eye/tile5.png')
    const tile6 = require('./eye/tile6.png')
    const tile7 = require('./eye/tile7.png')
    const tile8 = require('./eye/tile8.png')

    const dimension = Dimensions.get('window')

    return(
        <View style = {styles.container}>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile0}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile1}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile2}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile3}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile4}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile5}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile6}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile7}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{width: dimension.width / 3, height : dimension.height / 3, borderColor : 'black', borderWidth : 1}} source={tile8}/>
            </TouchableOpacity>

        </View>
    );
}
export default tiles;