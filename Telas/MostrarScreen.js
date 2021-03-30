import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './HomeScreen';
export default class MostrarScreen extends Component{
     render(){
             return(
               <View style={{flex:1, justifyContent: 'center'}}>
                                       <Text>{HomeScreen.show}</Text>
               </View>
          );
     }
    }
