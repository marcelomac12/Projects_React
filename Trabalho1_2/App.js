import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import HomeScreen from './Home';
import CadastroScreen from './Cadastrar';
import ExibirScreen from './Exibir';
import BuscarScreen from './Buscar';
import ExcluirScreen from './Excluir';

const AppNavigator = createStackNavigator(
  {
      Home: {
          screen: HomeScreen
      },

      Cadastro: {
          screen: CadastroScreen
      },
      Exibir: {
          screen: ExibirScreen
      },
      Buscar: {
          screen: BuscarScreen
      },
      Excluir: {
           screen: ExcluirScreen
       }
  },
  {
      initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  render(){
    return <AppContainer />;
  }
};
