import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Cadastro from './Cadastrar';


export default class Cadastrar extends Component {
    static arrayVeiculos = [
    ];
    constructor(props) {
        super(props);
        this.cadastrar = this.cadastrar.bind(this);

    }

    state = {
        marca: '',
        modelo: '',
        anofab: '',
        placa: '',
        nomecondutor: '',
        numeroocupante: '',
        horarioparadanablitz: '',
        nomepm: '',
        descricao: '',

        veiculo: {
            codigo:'',
            marca: '',
            modelo: '',
            anofab: '',
            placa: '',
            nomecondutor: '',
            numeroocupante: '',
            horarioparadanablitz: '',
            nomepm: '',
            descricao: ''
        },
    };

    cadastrar() {
        let s = this.state;

        let tamanhoArray =Cadastro.arrayVeiculos.length;
        
        s.veiculo.codigo = tamanhoArray+1;
        s.veiculo.marca = s.marca;
        s.veiculo.modelo = s.modelo;
        s.veiculo.anofab =s.anofab;
        s.veiculo.placa =s.placa;
        s.veiculo.nomecondutor =s.nomecondutor;
        s.veiculo.numeroocupante =s.numeroocupante;
        s.veiculo.horarioparadanablitz =s.horarioparadanablitz;
        s.veiculo.nomepm =s.nomepm;
        s.veiculo.descricao =s.descricao;

        Cadastro.arrayVeiculos.push(this.state.veiculo);
        console.log(s.veiculo.codigo);
        this.setState(s);

        Alert.alert('Cadastrado com sucesso');
        this.props.navigation.goBack();
        
    }

    render() {
        return (
            <ScrollView>

                <View >
                    <Text>Informações Blitz</Text>
                </View>
                <View >
                    <Text>Marca:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite Marca aqui.'
                        underlineColorAndroid='black'
                        value={this.state.marca}
                        onChangeText={(marca) => { this.setState({ marca }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text>Modelo:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite modelo aqui.'
                        underlineColorAndroid='black'
                        value={this.state.modelo}
                        onChangeText={(modelo) => { this.setState({ modelo }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text>Ano de Fabricação:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite Ano de Fabricação aqui.'
                        underlineColorAndroid='black'
                        value={this.state.anofab}
                        onChangeText={(anofab) => { this.setState({ anofab }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text>Placa</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite placa aqui.'
                        underlineColorAndroid='black'
                        value={this.state.placa}
                        onChangeText={(placa) => { this.setState({ placa }) }}
                    ></TextInput>
                </View>

                
                <View >
                    <Text>Nome do Condutor:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite Nome do Condutor aqui.'
                        underlineColorAndroid='black'
                        value={this.state.nomecondutor}
                        onChangeText={(nomecondutor) => { this.setState({ nomecondutor }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text>Numero Ocupante(s):</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite Numero Ocupante(s) aqui.'
                        underlineColorAndroid='black'
                        value={this.state.numeroocupante}
                        onChangeText={(numeroocupante) => { this.setState({ numeroocupante }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text>Horario de parada:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite Horario de parada aqui.'
                        underlineColorAndroid='black'
                        value={this.state.horarioparadanablitz}
                        onChangeText={(horarioparadanablitz) => { this.setState({ horarioparadanablitz }) }}
                    ></TextInput>
                </View>


                <View >
                    <Text>Nome do Polical:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite Nome Polical aqui.'
                        underlineColorAndroid='black'
                        value={this.state.nomepm}
                        onChangeText={(nomepm) => { this.setState({ nomepm }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text>Descrição:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite Descrição aqui.'
                        underlineColorAndroid='black'
                        value={this.state.descricao}
                        onChangeText={(descricao) => { this.setState({ descricao }) }}
                    ></TextInput>
                </View>

                <View style={{paddingTop:20}}>
                    <Button title='Salvar' onPress={() => this.cadastrar()}></Button>
                    
                </View>

            </ScrollView>

        );
    }
}