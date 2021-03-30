import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './Main';
import FScreen from './F';
import FcScreen from './Fc';
import EcScreen from './Ec';

const AppNavigator = createStackNavigator(
     {
         Main: {
               screen: MainScreen
          },
         F: {
              screen: FScreen
         },
         Fc: {
          screen: FcScreen
         },
         Ec: {
          screen: EcScreen
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