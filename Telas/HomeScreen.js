import React, {Component} from 'react';
import {View, Button} from 'react-native';
export default class HomeScreen extends Component{

     static show = [];
     render(){
          return(
               <View>
                    <View style={{margin:20}}>
                         <Button 
                              title = 'Cadastrar'
                              onPress = {() =>
                                     this.props.navigation.navigate('Cadastro')}
                          />
                    </View>                    <View style={{margin:20}}>
                         <Button 
                              title = 'Mostrar'
                              onPress = {() => 
                                      this.props.navigation.navigate('Mostrar')}
                         />
                    </View>
               </View>
         );
     }
}