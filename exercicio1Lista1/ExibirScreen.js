import React, { Component } from 'react';
import { FlatList,View, Text, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';

export default class MostrarScreen extends Component {
    constructor(props){
        super(props);
       
      }

      static show=[];

      state = {
          flatData: this.props.navigation.getParam('dados')
       }
      renderItem(item){

        return(
          <Text>Nome: {item.nome} - Preco: {item.preco} </Text>
        );
    
      }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Conteudo cadastrado:</Text>
                <FlatList 
                data={this.state.flatData} 
                renderItem={this.renderItem}
                keyExtractor={(item) => item.nome}
                />
                
            </View>
        );
    }
}