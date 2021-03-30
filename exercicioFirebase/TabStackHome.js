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
import CadastroNotaStack from './CadastroNotaStack';

const HomeTabNavigator = createBottomTabNavigator(
    {
        PesquisaStack: {
            screen: PesquisaStack,
            navigationOptions:{
                title:'Pesquisa'
            }
        },
        // CadastroStack: {
        //     screen: CadastroStack,
        //     navigationOptions:{
        //         title:'Cadastro Usuario',
                
        //     }
        // },
        CadastroNotaStack: {
            screen: CadastroNotaStack,
            navigationOptions:{
                title:'Nova Nota',
                
            }
        }

        // TelaCadastro: {
        //     screen: TelaCadastro
        // },
        // TelaAlterar: {
        //     screen: TelaAlterar
        // },
        // TelaExcluir: {
        //     screen: TelaExcluir
        // },
    },
    {
        defaultNavigationOptions:{
          tabBarOptions:{
            showIcon:false,
            labelStyle:{
              fontSize:15
            }
          }
        }
      }
    // {
    //     initialRouteName: 'TelaInicial'
    // }
);

export default createAppContainer(HomeTabNavigator);