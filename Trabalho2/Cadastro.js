import React, {Component} from 'react';
import  axios  from 'axios';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import MainScreen from './Main';


  export default class App extends Component{
     constructor(props) {
          super(props);
          this.cadastra=this.cadastra.bind(this);
     }
     
    
     state = {
        nome:'',
        preco:'',
        estoque:'',
        validade:'',
   }

   produtos = [];

   static show = [];
   
   cadastra = async() => {
        
        this.produtos.push(this.state)
        this.setState({nome:'', preco:'', estoque:'', validade:''})
        Alert.alert(this.produtos);
        
        /*loadData = async () => {
            const api = axios.create();
            const response = await api.post(
                'ronepage.com.br/api/cadastraproduto.php', 
                {'nome':this.state.nome,'estoque':this.state.estoque ,
                'preco':this.state.preco, 'validade':this.state.validade});  
            }   */
            fetch('http://ronepage.com.br/api/cadastraproduto.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Nome: this.produtos.nome,
                Preco: this.produtos.preco,
                Estoque: this.produtos.estoque,
                Validade: this.produtos.estoque
            })
            })
            .then((response)=>response.json)
            .then((json)=>{
                Alert.alert('Produto Cadastrado com sucesso');
            }) 
   }

     

render(){
     
  return(
    
       //<View style = {styles.container}>
       //  <View style = {styles.text}>
       <View style={{flex:1}}>
           <View>
           <Text> Tela Cadastro </Text>
           </View>

       <TextInput
               label = 'Nome'
               style={{height: 40}}
               placeholder="Insira aqui o nome"
               onChangeText={(text) => this.setState({nome:text})}
               value = {this.state.nome}
           />

       <TextInput
               label = 'Preço'
               style={{height: 40}}
               placeholder="Insira aqui o preço"
               onChangeText={(text) => this.setState({preco:text})}
               value = {this.state.preco}
           />

        <TextInput
               label = 'Estoque'
               style={{height: 40}}
               placeholder="Insira aqui a quantidade no estoque"
               onChangeText={(text) => this.setState({estoque:text})}
               value = {this.state.estoque}
           />

        <TextInput
               label = 'Validade'
               style={{height: 40}}
               placeholder="Validade (AAAA-MM-DD)"
               onChangeText={(text) => this.setState({validade:text})}
               value = {this.state.validade}
           />

            <View style={{margin:20}}>
                 <Button 
                      title = 'Cadastrar'
                      onPress = {() =>this.cadastra()}
                  />
            </View>
            
                  
       </View>
 );
}

}