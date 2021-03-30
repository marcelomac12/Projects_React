import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import MostrarScreen from './Mostrar';
import HomeScreen from './Home';

export default class Mostrar extends Component {
  constructor(props){
      super(props);
      this.state = {
//         flatData: HomeScreen.show,
          flatData: this.props.navigation.getParam('dados'),
      };
  
    }
  render() {
      return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text>Conteudo cadastrado:</Text>
              <Text></Text>
              <FlatList 
              data={this.state.flatData} 
              renderItem={({item})=>
              <Text>Nome: {item.nome} - Preco: {item.preco} </Text>
              }
              keyExtractor={(item) => item.nome}
              />
              
          </View>
      );
  }
}