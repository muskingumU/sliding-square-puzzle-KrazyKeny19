import React from 'react';
import { View, StyleSheet,Text, Dimensions, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const home = ({navigation}) =>{
    return(
        <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> Home Screen </Text>
            <Button title="Puzzle 1"
            onPress={() => navigation.navigate("Puzzle 1")}/>
            <Button title ="Puzzle 2"
            onPress={() => navigation.navigate("Puzzle 2")}/>
        </View>
    )
}
export default home;