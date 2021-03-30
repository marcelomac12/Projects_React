import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import PesquisaStack from './PesquisaStack';
import CadastroStack from './CadastroStack';

const HomeTabNavigator = createBottomTabNavigator(
    {
        PesquisaStack: {
            screen: PesquisaStack,
            navigationOptions:{
                title:'Pesquisa'
            }
        },
        CadastroStack: {
            screen: CadastroStack,
            navigationOptions:{
                title:'Cadastro',
                
            }
        }
    },
    {
        defaultNavigationOptions:{
          tabBarOptions:{
            showIcon:false,
            
            labelStyle:{
              fontSize:30,
              color:'blue',
            }
          }
        }
      }
    // {
    //     initialRouteName: 'TelaInicial'
    // }
);

export default createAppContainer(HomeTabNavigator);