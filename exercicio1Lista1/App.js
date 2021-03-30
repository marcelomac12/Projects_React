
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from'./HomeScreen';
import ExibirScreen from'./ExibirScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Exibir: {
      screen: ExibirScreen
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