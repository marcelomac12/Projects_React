import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal,Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';



class TelaInicial extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nome:'' ,
        }
    }
    
    render() {
        return (

            <View>
    
                <View >
                    <Text> Digite o nome do produto para pesquisar:</Text>
                    <TextInput 
                        placeholder='Digite nome aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(nome) => { this.setState({ nome }) }}
                    ></TextInput>
                </View>

                <View >
                    <Button title='Pesquisar' onPress={()=>this.props.navigation.navigate('TelaPesquisa',{nome:this.state.nome})}/>
                </View>
                

            </View>

        );
    }
}

class TelaPesquisa extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nomePesquisado:this.props.navigation.getParam('nome') ,
            dados:[],
            dadosFiltrados:[],
            codigo:''
        }
        this.btnAlterar=this.btnAlterar.bind(this);
        this.btnExcluir=this.btnExcluir.bind(this);

        fetch('http://ronepage.com.br/api/listaproduto.php')
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state;
            state.dados=json.dados;
            let x=0;
            for (let i = 0; i < state.dados.length; i++) {
                if (state.dados[i].Nome == state.nomePesquisado || state.dados[i].Nome.startsWith(state.nomePesquisado)==true) {
                    state.dadosFiltrados[x] = state.dados[i];
                    x++;
                }
            }
            
            this.setState(state);

        });

    }

    btnAlterar(){
        let s = this.state;
        let codigo;
        let nome;
        let preco;
        let estoque;
        let validade;
        for(let i =0; i<s.dadosFiltrados.length;i++){
            if(s.dadosFiltrados[i].Codigo==s.codigo){
                codigo=s.dadosFiltrados[i].Codigo;
                nome=s.dadosFiltrados[i].Nome;
                preco=s.dadosFiltrados[i].Preco;
                estoque=s.dadosFiltrados[i].Estoque;
                validade=s.dadosFiltrados[i].Validade;
            }

        }
        

        this.props.navigation.navigate('TelaAlterar',{codigo:codigo,nome:nome,preco:preco,estoque:estoque,validade:validade})
    }

    btnExcluir(){
        let s = this.state;
        let codigo;
        let nome;
        let preco;
        let estoque;
        let validade;
        for(let i =0; i<s.dadosFiltrados.length;i++){
            if(s.dadosFiltrados[i].Codigo==s.codigo){
                codigo=s.dadosFiltrados[i].Codigo;
                nome=s.dadosFiltrados[i].Nome;
                preco=s.dadosFiltrados[i].Preco;
                estoque=s.dadosFiltrados[i].Estoque;
                validade=s.dadosFiltrados[i].Validade;
            }

        }
        

        this.props.navigation.navigate('TelaExcluir',{codigo:codigo,nome:nome,preco:preco,estoque:estoque,validade:validade})
    }
  
    flatRender(item){
        
        return(
        <View style={{flex:1}}>
      <Text style={{fontSize:20}}>{item.Nome} </Text>
          <Text>Codigo: {item.Codigo}</Text> 
          <Text>Nome: {item.Nome}</Text> 
          <Text>Preco: {item.Preco}</Text> 
          <Text>Estoque: {item.Estoque}</Text> 
          <Text>Validade: {item.Validade}</Text> 
        </View>
        
        );
        
      }
    
    
    render() {
        
        return (

            <View>
                <View >
                <Text> Produtos encontrados com o nome informado:</Text>
                
                </View>
            {/*} <View>
                <Text style={{ fontSize: 15, textAlign: 'justify'}} >Role a tela abaixo para visualizar:</Text>
                </View>*/}
                <View>
                    <FlatList
                        data={this.state.dadosFiltrados}
                        renderItem={({ item }) => this.flatRender(item)}
                        keyExtractor={(item) => item.Codigo}
                    />
                </View >
                 { <View >
                     <Text style={{padding:20}}></Text>
                    <Text> Digite o codigo do produto desejado para alterar ou excluir:</Text>
                    <TextInput 
                        placeholder='Digite o codigo aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(codigo) => { this.setState({ codigo }) }}
                    ></TextInput>
                </View> }

                <View style={{flexDirection:'row',padding:20}}>
                    <View style={{padding:20}}>
                    <Button style={{padding:20}}title='Excluir' onPress={this.btnExcluir}/>
                    </View>
                    <View style={{padding:20}} >
                    <Button title='Alterar' onPress={this.btnAlterar}/>
                    </View>
                </View>

            </View>

        );
    }
}

class TelaAlterar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            codigo:this.props.navigation.getParam('codigo'),
            nome: this.props.navigation.getParam('nome'),
            preco: this.props.navigation.getParam('preco'),
            estoque: this.props.navigation.getParam('estoque'),
            validade: this.props.navigation.getParam('validade'),
        }
        this.btnAlterar=this.btnAlterar.bind(this);
    }


    btnAlterar(){
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
        .then((r)=>r.json)
        .then((json)=>{
            Alert.alert('Produto alterado com sucesso');
        })


    }
    
    render() {
        return (

            <View>
                <View >
                    <Text> Altere os dados</Text>
                </View>
                
                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>
                    
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite nome aqui.'
                        value={this.state.nome}
                        onChangeText={(nome) => { this.setState({ nome }) }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Preco: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite preco aqui.'
                        value={this.state.preco}
                        onChangeText={(preco) => { this.setState({ preco }) }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Estoque: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite estoque aqui.'
                        value={this.state.estoque}
                        onChangeText={(estoque) => { this.setState({ estoque }) }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Validade: </Text>

                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite data aqui. AAAA-MM-DD'
                        value={this.state.validade}
                        onChangeText={(validade) => { this.setState({ validade }) }}
                    />
                </View>
                
                <View style={{flexDirection:'row',padding:20}}>
                    <Button title='Confirmar' onPress={this.btnAlterar}/>
                </View>
            </View>

        );
    }
}

class TelaExcluir extends React.Component {
    constructor(props){
        super(props);
        this.state={
            codigo:this.props.navigation.getParam('codigo'),
            nome: this.props.navigation.getParam('nome'),
            preco: this.props.navigation.getParam('preco'),
            estoque: this.props.navigation.getParam('estoque'),
            validade: this.props.navigation.getParam('validade'),
        }
        this.btnExcluir=this.btnExcluir.bind(this);
    }


    btnExcluir(){
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
        .then((r)=>r.json)
        .then((json)=>{
            Alert.alert('Produto excluido com sucesso');
        })


    }
    
    render() {
        return (

            <View>
                <View >
                    <Text> Excluir produto</Text>
                </View>

                <Text> Produto escolhido</Text>
                
                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state. nome } </Text>
                
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
                    <Button title='Confirmar' onPress={this.btnExcluir}/>
                </View>
            </View>

        );
    }
}


const PesquisaStackNavigator = createStackNavigator(
    {
        TelaInicial: {
            screen: TelaInicial,
            navigationOptions:{
                title:'Tela Inicial'
            }
        },
        TelaPesquisa: {
            screen: TelaPesquisa,
            navigationOptions:{
                title:'Pesquisar'
            }
        },
        TelaAlterar: {
            screen: TelaAlterar,
            navigationOptions:{
                title:'Alterar'
            }
        },
        TelaExcluir: {
            screen: TelaExcluir,
            navigationOptions:{
                title:'Excluir'
            }
        },
    },
    {
        initialRouteName: 'TelaInicial',
        defaultNavigationOptions:{
            headerStyle: {
            //  backgroundColor: '#1e90ff',
              height: 40
            },
          //  headerTintColor: 'white',
            headerTitleStyle: {
           //     color:'white',
              fontWeight: 'bold',
              fontSize: 20
            }
          }
    }
);
//const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(PesquisaStackNavigator);