import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal,Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import firebase from './FirebaseConnection';


class Cadastro extends React.Component {
    constructor(props){
        super(props);
        this.state={
            titulo:'' ,
            conteudo:'',
            
        }
        this.btnCadastrarNota=this.btnCadastrarNota.bind(this);

    }
    componentDidMount() {
        this.props.navigation.addListener('willFocus', (playload)=>{
          console.log(playload);
        });
      }

    btnCadastrarNota(){

        
        if(this.state.titulo.length>0){
            let notas=firebase.database().ref('Notas'+'/'+firebase.auth().currentUser.uid);
            let chaveNota = notas.push().key;

            notas.child(chaveNota).set({
                Titulo:this.state.titulo,
                Conteudo:this.state.conteudo
                
            });
            alert('Nota Inseria!');
            // let s = this.state;
            // s.titulo='';
            // s.conteudo='';
            // this.setState(s);
        
        }
        

    }
    
    render() {
        return (

            <View style={estiloTelaInicial.body}>
                
                <View >
                    <Text style= {estiloTelaInicial.titulo}> Cadastro de notas</Text>
                </View>
                <View >
                    <Text style= {estiloTelaInicial.texto}> Digite os dados abaixo:</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Titulo: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite titulo aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(titulo) => { this.setState({ titulo }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'column'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Conteudo: </Text>
                <TextInput style={{borderColor:'black',borderWidth:1, width:'50%', height:'50%', justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite conteudo aqui.'
                        //underlineColorAndroid='black'
                        multiline={true}
                        maxLength={60}
                       
                        onChangeText={(conteudo) => { this.setState({ conteudo }) }}
                    ></TextInput>
                </View>

                <View >
                    <Button title='Cadastrar' onPress={this.btnCadastrarNota}/>
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