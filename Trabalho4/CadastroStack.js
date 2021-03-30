import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal,Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';
import db from './ConnectionFirabase';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';




class Cadastro extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Nome:'' ,
            Preco:'',
            Estoque:'',
            Validade:''
        }
        this.cadastrar=this.cadastrar.bind(this);
        this.ref = db.collection('teste');

    }

    cadastrar(){
        let s = this.state;
        let nome = s.Nome;
        let preco = s.Preco;
        let estoque = s.Estoque;
        let validade = s.Validade;

        this.ref.add({
            Nome: nome,
                Preco: preco,
                Estoque: estoque,
                Validade: validade
        });
        
        Alert.alert('Produto Cadastrado com sucesso');
        /*fetch('http://ronepage.com.br/api/cadastraproduto.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Nome: nome,
                Preco: preco,
                Estoque: estoque,
                Validade: validade
            })
        })
        .then((response)=>response.json)
        .then((json)=>{
            Alert.alert('Produto Cadastrado com sucesso');
        })*/


    }
    
    render() {
        return (

            <View>

                <View >
                    <Text> Digite os dados do produto:</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite aqui.'
                        onChangeText={(Nome) => { this.setState({ Nome }) }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Preco: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite aqui.'
                        onChangeText={(Preco) => { this.setState({ Preco }) }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Estoque: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite aqui.'
                        onChangeText={(Estoque) => { this.setState({ Estoque }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Validade: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite aqui (AAAA-MM-DD)'
                        onChangeText={(Validade) => { this.setState({ Validade }) }}
                    ></TextInput>
                </View>
                

                <View >
                    <Button title='Cadastrar' onPress={this.cadastrar}/>
                </View>
                

            </View>

        );
    }
}

const PesquisaStackNavigator = createStackNavigator(
    {
        Cadastro: {
            screen: Cadastro,
            navigationOptions:{
                title:'Cadastro'
            }
        },
    },
    {
        initialRouteName: 'Cadastro',
        defaultNavigationOptions:{
            headerStyle: {
              //backgroundColor: '#1e90ff',
              height: 40
            },
      //      headerTintColor: 'white',
            headerTitleStyle: {
      //          color:'white',
              fontWeight: 'bold',
              fontSize: 20
            }
          }
    }
);

export default createAppContainer(PesquisaStackNavigator);