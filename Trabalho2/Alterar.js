import React, {Component} from 'react';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  axios  from 'axios';
import MainScreen from './Main';
import CadastroScreen from './Cadastro';
import AlterarScreen from './Alterar';

export default class App extends Component {
    constructor(props){
        super(props);
        this.alterar=this.alterar.bind(this);
    }
    state={
        codigo:this.props.navigation.getParam('codigo'),
        nome: this.props.navigation.getParam('nome'),
        preco: this.props.navigation.getParam('preco'),
        estoque: this.props.navigation.getParam('estoque'),
        validade: this.props.navigation.getParam('validade'),
    }
    

    alterar(){
        let s = this.state;
        let codigo = s.codigo;
        let nome = s.nome;
        let preco = s.preco;
        let estoque = s.estoque;
        let validade = s.validade;

        fetch('http://ronepage.com.br/api/alteraproduto.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Codigo:codigo,
                Nome: nome,
                Preco: preco,
                Estoque: estoque,
                Validade: validade
            })
        })
        .then((response)=>response.json)
        .then((json)=>{
            Alert.alert('Produto alterado com sucesso');
        })


    }
    
    render() {
        // let servicosItems = this.state.servicos.map((v,k)=>{
        //     return <Picker.Item key={k} value={k} label={v.nome}/>
        //   });
        return (

            <View>
                <View>
                    <Text> Altere os dados abaixo</Text>
                </View>
                
                <View style={{flexDirection:'row'}}>

                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite nome aqui.'
                        onChangeText={(text) => { this.setState({ nome:text }) }}
                        value={this.state.nome}
                    />
                </View>

                <View style={{flexDirection:'row'}}>

                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Preco: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite preco aqui.'
                        onChangeText={(text) => { this.setState({ preco:text }) }}
                        value={this.state.preco}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>

                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Estoque: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite estoque aqui.'
                        onChangeText={(text) => { this.setState({ estoque:text }) }}
                        value={this.state.estoque}

                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>

                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Validade: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite data aqui. AAAA-MM-DD'
                        onChangeText={(text) => { this.setState({ validade:text }) }}
                        value={this.state.validade}

                    />
                </View>
                
                <View style={{flexDirection:'row',padding:20}}>
                    <Button title='Confirmar' onPress={this.alterar}/>
                </View>
            </View>

        );
    }
}