import React from 'react';
import {SafeAreaView, View, Image, StyleSheet, Dimensions, Touchable, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create(
    {
        container : {
            flex:1
        },
        rowStyle: {
            flexDirection:'row',
            justifyContent: 'center'
        }
    }
);

const Puzzle2 = ({navigation}) =>{
    const tile0 = require('./number/file7.png')
    const tile1 = require('./number/file0.png')
    const tile2 = require('./number/file1.png')
    const tile3 = require('./number/file2.png')
    const tile4 = require('./number/file3.png')
    const tile5 = require('./number/file4.png')
    const tile6 = require('./number/file5.png')
    const tile7 = require('./number/file6.png')
    const tile8 = require('./number/file8.png')

    const dimension = Dimensions.get('window')
    var Imagewidth = 0;
    var Imageheight = 0;


    if(dimension.height>dimension.width){
        Imageheight = (dimension.width/4);
        Imagewidth = (dimension.width/4);
    }else{
        Imagewidth = (dimension.height/4);
        Imageheight = (dimension.height/4);
    }


    const tileArray = [tile0, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8]

    const [TileState, setTileState] = React.useState(tileArray)

    function rando() {

        const images = TileState.slice(0)

        for (var i = images.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp =images[i];
            images[i] = images[j];
            images[j] = temp;
        }

        setTileState(images)
    }
    function swap(clickedImage){
        const images = TileState.slice(0);
        var index1 = images.indexOf(tile0);
        var index2 = images.indexOf(clickedImage);
        var temp = images[index1];
        images[index1]=images[index2];
        images[index2]=temp;
        
        setTileState(images)


    }
    function reset(){
        setTileState(tileArray);
    }

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.rowStyle}>
                <TouchableOpacity onPress={()=>swap(TileState[0])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[0]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swap(TileState[1])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[1]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swap(TileState[2])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[2]}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowStyle}>
                <TouchableOpacity onPress={()=>swap(TileState[3])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[3]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swap(TileState[4])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[4]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swap(TileState[5])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[5]}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowStyle}>
                <TouchableOpacity onPress={()=>swap(TileState[6])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[6]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swap(TileState[7])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[7]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>swap(TileState[8])}>
                <Image style={{width: Imagewidth, height : Imageheight, borderColor : 'black', borderWidth : 1}} source={TileState[8]}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.rowStyle}>
                <Button onPress = {rando} title="Randomize"/>
                <Button onPress = {reset} title="Reset"/>
                <Button title="Puzzle 1" onPress={() => navigation.navigate('Puzzle 1')}/>
            </View>
        </SafeAreaView>
    );

   

}

export default Puzzle2;