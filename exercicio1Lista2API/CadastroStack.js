import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal,Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

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

    }

    cadastrar(){
        let s = this.state;
        let nome = s.Nome;
        let preco = s.Preco;
        let estoque = s.Estoque;
        let validade = s.Validade;

        fetch('http://ronepage.com.br/api/cadastraproduto.php',{
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
        .then((r)=>r.json)
        .then((json)=>{
            Alert.alert('Produto Cadastrado com sucesso');
        })


    }
    
    render() {
        return (

            <View style={estiloTelaInicial.body}>
                
                <View >
                    <Text style= {estiloTelaInicial.titulo}> Cadastro de produtos</Text>
                </View>
                <View >
                    <Text style= {estiloTelaInicial.texto}> Digite os dados abaixo:</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite nome aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(Nome) => { this.setState({ Nome }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Preco: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite preco aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(Preco) => { this.setState({ Preco }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Estoque: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite estoque aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(Estoque) => { this.setState({ Estoque }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Validade: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite data aqui. AAAA-MM-DD'
                        underlineColorAndroid='black'
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

const estiloTelaInicial = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    linha:{
        flex:1,
         flexDirection:'row',
         backgroundColor:'green',
         justifyContent:'center'

      },
    titulo: {
       //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent:'center',
        fontWeight:'bold'

    },
    texto: {
        //backgroundColor: 'blue',
         color: 'black',
         fontSize: 20,
         padding: 20,
         //flex: 1,
         textAlign: 'center',
         justifyContent:'center'
 
     },
    
    


});

const PesquisaStackNavigator = createStackNavigator(
    {
        Cadastro: {
            screen: Cadastro,
            navigationOptions:{
                title:'Acesso a API - Cadastro'
            }
        },
    },
    {
        initialRouteName: 'Cadastro',
        defaultNavigationOptions:{
            //title:'Lista 1 - Exercicio 2 ',
            headerStyle: {
              backgroundColor: '#1e90ff',
              height: 60
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color:'white',
              fontWeight: 'bold',
              fontSize: 20
            }
          }
    }
    // {
    //     initialRouteName: 'TelaInicial'
    // }
);

export default createAppContainer(PesquisaStackNavigator);