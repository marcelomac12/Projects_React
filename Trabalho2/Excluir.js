import React, {Component} from 'react';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  axios  from 'axios';
import MainScreen from './Main';
import CadastroScreen from './Cadastro';
import AlterarScreen from './Alterar';

export default class App extends Component{
    constructor(props){
        super(props);
        this.excluir=this.excluir.bind(this);
    }

    state={
        codigo:this.props.navigation.getParam('codigo'),
        nome: this.props.navigation.getParam('nome'),
        preco: this.props.navigation.getParam('preco'),
        estoque: this.props.navigation.getParam('estoque'),
        validade: this.props.navigation.getParam('validade'),
    }

    excluir(){
        let s = this.state;
        let codigo = s.codigo;

        fetch('http://ronepage.com.br/api/excluiproduto.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Codigo:codigo,
            })
        })
        .then((response)=>response.json)
        .then((json)=>{
            Alert.alert('Produto excluido com sucesso');
        })


    }
    
    render() {
        // let servicosItems = this.state.servicos.map((v,k)=>{
        //     return <Picker.Item key={k} value={k} label={v.nome}/>
        //   });
        return (

            <View>
                <View >
                    <Text> Excluir produto</Text>
                </View>
                <Text> Produto escolhido</Text>
                
                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state.nome } </Text>
                
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Preco: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state.preco } </Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Estoque: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state. estoque } </Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Validade: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state. validade } </Text>
                </View>
                
                
                <View style={{flexDirection:'row',padding:20}}>
                    <Button title='Confirmar' onPress={this.excluir}/>
                </View>
            </View>

        );
    }
}