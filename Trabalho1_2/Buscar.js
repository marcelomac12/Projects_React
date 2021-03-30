
import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { Alert, Platform, TextInput } from 'react-native';
import Cadastro from './Cadastrar';
import { StyleSheet } from 'react-native';

export default class Buscar extends Component {

    static arrayVeiculosCopia = [...Cadastro.arrayVeiculos];
    constructor(props) {
        super(props);

        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
        this.pesquisar = this.pesquisar.bind(this);

    }

    state = {
        placa: '',
        posicaoVetor:'',
        marca: '',
        modelo: '',
        placaDoVetor: '',
        anofab: '',
        nomecondutor: '',
        numeroocupante: '',
        horarioparadanablitz: '',
        nomepm: '',
        descricao: '',
        modalVisivel: false
    }

    abrirModal() {
        let s = this.state;
        s.modalVisivel = true;
        this.setState(s);
    }

    fecharModal() {
        let s = this.state;
        s.modalVisivel = false;
        this.setState(s);
    }
    
    pesquisar() {
        let s = this.state;
        var posicao = Cadastro.arrayVeiculos.map(function(e){
            return e.placa;
        }).indexOf(s.placa);

        s.posicaoVetor=posicao;
        if(posicao>-1){
            s.marca = Cadastro.arrayVeiculos[posicao].marca;
            s.modelo = Cadastro.arrayVeiculos[posicao].modelo;
            s.placaDoVetor = Cadastro.arrayVeiculos[posicao].placaDoVetor;
            s.anofab =Cadastro.arrayVeiculos[posicao].anofab;
            s.nomecondutor =Cadastro.arrayVeiculos[posicao].nomecondutor;
            s.numeroocupante =Cadastro.arrayVeiculos[posicao].numeroocupante;
            s.horarioparadanablitz =Cadastro.arrayVeiculos[posicao].horarioparadanablitz;
            s.nomepm =Cadastro.arrayVeiculos[posicao].nomepm;
            s.descricao =Cadastro.arrayVeiculos[posicao].descricao;
        }
        

        this.setState(s);
        // s.veiculo.marca = s.marca;
        // s.veiculo.modelo = s.modelo;
        this.abrirModal();
        // this.setState(s);

        // Cadastro.arrayVeiculos.push(this.state.veiculo);
        // let testeMarca = Cadastro.arrayVeiculos[0].marca;
        // let testeModelo = Cadastro.arrayVeiculos[0].modelo;
        console.log(posicao);
        // console.log(testeModelo);

    }

    render() {
        return (
            <View style={{ flex: 0.25, justifyContent: 'center' }}>
                
                <Modal animationType="slide" visible={this.state.modalVisivel}>
                    <View>
                        
                        <View style={{paddingBottom:40}}>
                        <Text style={{fontSize:20,justifyContent:'center',alignSelf:'center',paddingBottom:30}} >Dados Encontrados:</Text>
                            <Text>Marca: {this.state.marca}</Text>
                            <Text>Modelo: {this.state.modelo}</Text>
                            <Text>Placa: {this.state.placa}</Text>
                            <Text>Ano Fabricação: {this.state.anofab}</Text>
                            <Text>Nome Condutor: {this.state.nomecondutor}</Text>
                            <Text>Numero Ocupantes: {this.state.numeroocupante}</Text>
                            <Text>Horario de parada: {this.state.horarioparadanablitz}</Text>
                            <Text>Nome Polical: {this.state.nomepm}</Text>
                            <Text>Descrição: {this.state.descricao}</Text>
                            
                        </View>
                        <Button title='Voltar' onPress={this.fecharModal} />
                    </View>
                </Modal>
                
                <Text style={{
                    color: 'black',
                    fontSize: 30,
                    paddingTop: 40,
                    //flex: 1,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>Busca de Informacoes:</Text>

                <View style={{paddingTop: 30,}}>
                    <Text style={{
                        fontSize: 20,
                        
                        textAlign: 'center'
                    }} >Digite a placa do veiculo abaixo:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite a placa aqui.'
                        underlineColorAndroid='black'
                        value={this.props.placa}
                        onChangeText={(placa) => { this.setState({ placa }) }}
                    ></TextInput>
                </View>

                <View>
                    <Button title='Pesquisa' onPress={() => this.pesquisar()}></Button>
                    
                </View>
                
            </View>
        );
    }
}