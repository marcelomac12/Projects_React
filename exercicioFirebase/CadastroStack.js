import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal,Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
//import firebase from 'firebase';
import firebase from './FirebaseConnection'

class Cadastro extends React.Component {
    constructor(props){
        super(props);
        this.state={
            uid:'',
            nome:'',
            login:'',
            senha:'',
        }
        this.cadastrar=this.cadastrar.bind(this);

         firebase.auth().signOut();
         firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                //user.uid
                firebase.database().ref('Usuarios').child(user.uid).set({
                    Nome:this.state.nome,
                })
               // alert('Fez login com sucesso!');
            }
        });

    }

    cadastrar(){
        firebase.auth().createUserWithEmailAndPassword(
            this.state.login,
            this.state.senha
        ).catch((error)=>{
            alert(error.code);
        });

        alert('Usuario cadastrado, faça seu login');


    }
    
    render() {
        return (

            <View style={estiloTelaInicial.body}>
                
                <View >
                    <Text style= {estiloTelaInicial.titulo}> Cadastro de usuarios</Text>
                </View>
                <View >
                    <Text style= {estiloTelaInicial.texto}> Digite os dados abaixo:</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite nome aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(nome) => { this.setState({ nome }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Login: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite login aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(login) => { this.setState({ login }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Senha: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite senha aqui.'
                        underlineColorAndroid='black'
                        secureTextEntry={true}
                        onChangeText={(senha) => { this.setState({ senha }) }}
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
        justifyContent:'center'

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
                title:'Cadastro'
            }
        },
    },
    // {
    //     initialRouteName: 'TelaInicial'
    // }
);

export default createAppContainer(PesquisaStackNavigator);