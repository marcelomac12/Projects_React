import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View, Button} from 'react-native';
import MostrarScreen from './Mostrar';
import HomeScreen from './Home';

const AppNavigator = createStackNavigator(
     {
         Home: {
               screen: HomeScreen
          },
        /*Cadastro: {
              screen: CadastroScreen
         },*/
         Mostrar: {
              screen: MostrarScreen
         }
     },
     {
          initialRouteName: 'Home'
     }
);

const AppContainer = createAppContainer(AppNavigator);

/*

const MostrarActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  MostrarScreen: {
    screen: Mostrar,
    navigationOptions: navOptions
  }
});*/



export default class App extends Component{
  render(){
       return <AppContainer/>;
  }
};