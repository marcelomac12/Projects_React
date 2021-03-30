
import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { Alert, Platform, TextInput } from 'react-native';
import Cadastro from './Cadastrar';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Excluir extends Component {

    constructor(props) {
        super(props);


        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
        this.pesquisar = this.pesquisar.bind(this);

    }


    state = {
        posicaoVetor:'',
        modalVisivel: false,
        flatData: []
    };

    componentDidMount(){
        var data = Cadastro.arrayVeiculos.slice();
        let s = this.state;
        s.flatData = data.slice();
        this.setState(s);
      }
      
        flatRender(item){
          
          return(
          <View style={{flex:1,}}>
        <Text style={{fontSize:22}}>Dados do relatório {item.codigo} :</Text>
            <Text>Marca: {item.marca}</Text> 
            <Text>Modelo: {item.modelo}</Text> 
            <Text>Ano Fabricação: {item.anofab}</Text> 
            <Text>Placa: {item.placa}</Text> 
            <Text>Nome Condutor: {item.nomecondutor}</Text> 
            <Text>Numero Ocupante: {item.numeroocupante}</Text> 
            <Text>Horario parada: {item.horarioparadanablitz}</Text> 
            <Text>Nome PM: {item.nomepm}</Text> 
            <Text>Descrição: {item.descricao}</Text> 
          </View>
          
          );
          
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
        // var posicao = Cadastro.arrayVeiculos.map(function(e){
        //     return e.placa;
        // }).indexOf(s.placa);
        let posicaoDeletar = parseInt(s.posicaoVetor)-1;
        Cadastro.arrayVeiculos.splice(posicaoDeletar, 1);
        // s.posicaoVetor=posicao;
        // if(posicao>-1){
        //     s.marca = Cadastro.arrayVeiculos[posicao].marca;
        //     s.modelo = Cadastro.arrayVeiculos[posicao].modelo;
        //     s.placaDoVetor = Cadastro.arrayVeiculos[posicao].placaDoVetor;
        // }
        

        this.setState(s);
        Alert.alert('Item Excluido');
        this.props.navigation.goBack();
        // s.veiculo.marca = s.marca;
        // s.veiculo.modelo = s.modelo;
       // this.abrirModal();
        // this.setState(s);

        // Cadastro.arrayVeiculos.push(this.state.veiculo);
        // let testeMarca = Cadastro.arrayVeiculos[0].marca;
        // let testeModelo = Cadastro.arrayVeiculos[0].modelo;
        //console.log(posicao);
        // console.log(testeModelo);

    }

    render() {
        return (
            <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, justifyContent: 'center', alignSelf: 'center' }}
                > Deletar Relatório </Text>
                <View>
                    <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center' }}
                     >Dados Armazenados, role abaixo para visualizar:</Text>
                    <FlatList
                        data={this.state.flatData}
                        renderItem={({ item }) => this.flatRender(item)}
                        keyExtractor={(item) => item.marca}
                    />
                </View>
                
                <Text></Text>
                <Text style={{fontSize:22}}>Digite abaixo o numero do relatório para exclui-lo:</Text>

                           
                <View>
                    <Text>Numero do relatório:</Text>
                </View>
                <View>
                    <TextInput
                        placeholder='Digite o numero aqui.'
                        underlineColorAndroid='black'
                        value={this.props.placa}
                        onChangeText={(posicaoVetor) => { this.setState({ posicaoVetor }) }}
                    ></TextInput>
                </View>

                <Modal animationType="slide" visible={this.state.modalVisivel}>
                    <View>
                        <Text>Conteudo:</Text>

                        <View>
                            <Text>Marca: {this.state.marca}</Text>
                            <Text>Modelo: {this.state.modelo}</Text>
                            <Text>Placa: {this.state.placa}</Text>
                            
                        </View>
                        <Button title='Fechar modal' onPress={this.fecharModal} />
                    </View>
                </Modal>

                <View>
                    <Button title='Deletar item' onPress={() => this.pesquisar()}></Button>
                </View>
                
            </View>
            </ScrollView>
        );
    }
}