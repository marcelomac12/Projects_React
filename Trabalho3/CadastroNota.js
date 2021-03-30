import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal,Picker, StyleSheet, Alert, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator  } from 'react-navigation-tabs';

//import { Alert,StyleSheet, Platform, TextInput } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
//import { StyleSheet } from 'react-native';
import firebase from './ConnectionFirabase';


export default class App extends Component {
    constructor(props){
        super(props);
        this.cadastrarNota=this.cadastrarNota.bind(this);

    }

    state={
        titulo:'' ,
        conteudo:''        
    }

   /* componentDidMount() {
        this.props.navigation.addListener('willFocus', (playload)=>{
          console.log(playload);
        });
      }
      */

    cadastrarNota(){
        let notas=firebase.database().ref('Notas'+'/'+firebase.auth().currentUser.uid);
         let chaveNota = notas.push().key;
            notas.child(chaveNota).set({
            Titulo:this.state.titulo,
            Conteudo:this.state.conteudo
            }).then(() => {
            console.log('Inseriu');
            alert('Nota Inserida com sucesso!');
            }).catch(() => {
            console.log('Erro');
            });
           // let notas=firebase.database().ref('Notas'+'/'+firebase.auth().currentUser.uid);
           // let chaveNota = notas.push().key;

           // notas.child(chaveNota).set({
            
            // let s = this.state;
            // s.titulo='';
            // s.conteudo='';
            // this.setState(s);
        

    }
    
    render() {
        return (

            <View>
                
                <View >
                    <Text style={{ justifyContent: "center", alignSelf: "center", padding: 20}}> Cadastro de notas</Text>
                    <Text></Text>
                </View>
                <View >
                    <Text> Digite os dados da Nota:</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Titulo: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite aqui.'
                        value={this.state.titulo}
                        onChangeText={(text) => { this.setState({ titulo:text }) }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text>Conteudo: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite aqui.'
                        //underlineColorAndroid='black'
                        multiline={true}
                        maxLength={60}
                        value={this.state.conteudo}
                        onChangeText={(text) => { this.setState({ conteudo:text }) }}
                    />
                </View>

                <View >
                    <Button title='Cadastrar' onPress={this.cadastrarNota}/>
                </View>
                

            </View>

        );
    }
}