import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import CadastroScreen from './CadastroScreen';
import MostrarScreen from './MostrarScreen';
const AppNavigator = createStackNavigator(
     {
          Home: {
               screen: HomeScreen
          },
         Cadastro: {
              screen: CadastroScreen
         },
         Mostrar: {
              screen: MostrarScreen
         }
     },
     {
          initialRouteName: 'Home'
     }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  render(){
       return <AppContainer/>;
  }
};
