import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    static show=[];
  
      render() {
          return (
              <View>
  
                  <View style={{ margin: 20 }}>
                      <Button
                          title='Cadastrar Veiculo'
                          onPress={() => this.props.navigation.navigate('Cadastro')}>
  
                      </Button>
                  </View>
  
                  <View style={{ margin: 20 }}>
                      <Button
                          title='Excluir Veiculo'
                          onPress={() => this.props.navigation.navigate('Excluir')}>
  
                      </Button>
                  </View>
  
                  <View style={{ margin: 20 }}>
                      <Button
                          title='Buscar Informacoes do Veiculo'
                          onPress={() => this.props.navigation.navigate('Buscar')}>
  
                      </Button>
                  </View>
  
                  <View style={{ margin: 20 }}>
                      <Button
                          title='Exibir Informacoes cadastradas'
                          onPress={() => this.props.navigation.navigate('Exibir')}>
  
                      </Button>
                  </View>
  
              </View>
  
          );
      }
  }