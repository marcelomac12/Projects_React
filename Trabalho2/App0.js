import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './Main';
import CadastroScreen from './Cadastro';
import AlterarScreen from './Alterar';
import ExcluirScreen from './Excluir';

const AppNavigator = createStackNavigator(
     {
         Main: {
               screen: MainScreen
          },
         Cadastro: {
              screen: CadastroScreen
         },
        Alterar: {
                screen: AlterarScreen
         },
         Excluir: {
          screen: ExcluirScreen
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