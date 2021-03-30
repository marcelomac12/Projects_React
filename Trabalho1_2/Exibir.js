import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import Cadastro from './Cadastrar';
export default class Exibir extends Component {

    constructor(props){
        super(props);

      }

      state = {          
        flatData: []
      };

      componentDidMount(){
      var data = Cadastro.arrayVeiculos.slice();
      let s = this.state;
      s.flatData = data.slice();
      this.setState(s);
    }
    
      flatRender(item){
        
        return(
        <View style={{flex:1,}}>
      <Text style={{fontSize:22}}>Dados do relatório {item.codigo} :</Text>
          <Text>Marca: {item.marca}</Text> 
          <Text>Modelo: {item.modelo}</Text> 
          <Text>Ano Fabricação: {item.anofab}</Text> 
          <Text>Placa: {item.placa}</Text> 
          <Text>Nome Condutor: {item.nomecondutor}</Text> 
          <Text>Numero Ocupante: {item.numeroocupante}</Text> 
          <Text>Horario parada: {item.horarioparadanablitz}</Text> 
          <Text>Nome PM: {item.nomepm}</Text> 
          <Text>Descrição: {item.descricao}</Text> 
        </View>
        
        );
        
      }
      render() {
        return (
          <View>
              <Text style={{fontSize:30,justifyContent:'center',alignSelf:'center',paddingTop:10}}
               >Dados Armazenados:</Text>
              <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center'}}
               >Dados Armazenados, role abaixo para visualizar:</Text>
               <FlatList 
               data={this.state.flatData} 
               renderItem={({item})=>this.flatRender(item)}
               keyExtractor={(item) => item.marca}
               />
          </View>
        );
      }
}