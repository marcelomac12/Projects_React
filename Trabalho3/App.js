import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './Main';
import CadastroNotaScreen from './CadastroNota';
//import AlterarScreen from './Alterar';
import HomeScreen from './Home';
import PesquisarScreen from './Pesquisar'

const AppNavigator = createStackNavigator(
     {
         Main: {
               screen: MainScreen
          },
        //Alterar: {
        //screen: AlterarScreen
       // },
       Home: {
          screen: HomeScreen
          },
        Pesquisar: {
            screen: PesquisarScreen,
        },
        CadastroNota: {
            screen: CadastroNotaScreen,      
    },
          initialRouteName: 'Main'
     }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
       return <AppContainer/>;
  }
};