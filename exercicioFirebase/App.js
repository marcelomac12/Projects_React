import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import TabStackHome from './TabStackHome';
import CadastroStack from './CadastroStack';
import firebase from './FirebaseConnection';
import { YellowBox } from 'react-native';

class Login extends React.Component {
    constructor(props){
        YellowBox.ignoreWarnings(['Setting a timer']);
        super(props);
        this.state={
            login:'contato.ufsj@gmail.com' ,
            senha:'123456',
            userUid:'',
            nome:''
        }
        this.btnLogin=this.btnLogin.bind(this);
        
        firebase.auth().signOut();
 

    }

    btnLogin(){
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){

                //snapshot pode ter outro nome, como reposta por exemplo
               this.props.navigation.navigate('TabStackHome');
                //alert(this.state.nome);
               //alert('Logado!');


            }
        });

        firebase.auth().signInWithEmailAndPassword(
            this.state.login,
            this.state.senha
            ).catch((error)=>{
                if(error.code == 'auth/wrong-password'){
                    alert('Senha errada.')
                }
            });
            //alert(firebase.auth().currentUser.uid);
            
    }

    // btnSair(){
    //     firebase.auth().signOut();
    //     alert('Deslogado!');
    // }
    
    render() {
        return (

            <View style={estiloTelaInicial.body}>
                
                <View >
                    <Text style= {estiloTelaInicial.titulo}> Digite usuario e senha: </Text>
                </View>
                
                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Login: </Text>
                <TextInput style={estiloTelaInicial.caixaEntrada}
                        placeholder='Digite nome aqui.'
                        //underlineColorAndroid='black'
                        value={this.state.login}
                        onChangeText={(login) => { this.setState({ login }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row',marginTop:15}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Senha: </Text>
                <TextInput style={estiloTelaInicial.caixaEntrada} 
                        placeholder='Digite senha aqui.'
                        //underlineColorAndroid='black'
                        secureTextEntry={true}
                        value={this.state.senha}
                        onChangeText={(senha) => { this.setState({ senha }) }}
                    ></TextInput>
                </View>

                
                <View style={{marginTop:20,flexDirection:'row'}}>
                    <View style={{margin:20}}>
                        <Button style={{marginTop:10}} title='Login' onPress={this.btnLogin}/>
                    </View>
                    {/* <View style={{margin:20}}>
                        <Button style={{marginTop:10}} title='Sair' onPress={()=>this.props.navigation.navigate('TabStackHome')}/>
                    </View> */}
                    <View style={{margin:20}}>
                        <Button style={{marginTop:10}} title='Cadastro' onPress={()=>this.props.navigation.navigate('CadastroStack')}/>
                    </View>
                    
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
      caixaEntrada:{
        height:40,
        width:'50%',
        borderWidth:1,
        borderColor:'black',
        justifyContent:"center",
         alignSelf:"center"
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

const HomeStackNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions:{
                title:'Tela de login',
                header:null
            }
        },
        CadastroStack:{
            screen: CadastroStack,
            navigationOptions:{
                //title:'Tela principal App',
                header:null
            }
        },
        TabStackHome: {
            screen: TabStackHome,
            navigationOptions:{
                //title:'Tela principal App',
                header:null
            }
            // navigationOptions:{
            //     title:'TabStackHome',
                
            // }
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

    // {
    //     initialRouteName: 'TelaInicial'
    // }
);

export default createAppContainer(HomeStackNavigator);