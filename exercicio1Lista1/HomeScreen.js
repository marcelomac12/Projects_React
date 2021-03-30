import React, { Component } from 'react';
import{createStackNavigator, createAppContainer} from'react-navigation';
import ExibirScreen from './ExibirScreen';

import {  View,  StyleSheet,  Alert,  Text, TextInput,  Button} from 'react-native';


export default class HomeScreen extends Component {
  static show=[];

  constructor(props){
    super(props);
    //this.state = {nome:'',preco:''};
    this.bntCadastro=this.bntCadastro.bind(this);
    
  }

  state = {
    nome:'',
    preco:'',
}

  Cadastrar(){
    //let s= this.state;

    HomeScreen.show.push({nome:this.state.nome,preco:this.state.preco});
 
    Alert.alert('Cadastrado com sucesso. ');
  }


  render() {
    return (
      <View style={styles.body}>
        
          <View style={styles.linha}>
            <Text style={styles.titulo}>My application</Text>
          </View>

          <View style={styles.linha}>
            <Text>Nome:</Text>
          </View>
          
          <View style={styles.linha}>
            <TextInput rotulo= 'nome' 
            placeholder='Digite nome aqui.'  
            underlineColorAndroid='black' 
            onChangeText={(Text)=>{this.setState({nome:Text})}} 
            //value={this.state.nome} 
            />
            
          </View>
          
          <View style={styles.linha}>
            <Text>Preço:</Text>
          </View>
          
          <View style={styles.linha}>
            <TextInput rotulo= 'preco'  
            placeholder='Digite o preço do produto aqui.' 
            underlineColorAndroid='black' 
            onChangeText={(Text)=>{this.setState({preco:Text})}}
            //value={this.state.preco} 
            />
            
          
          </View>

          <View style={styles.botaoView}>
            <Button title= 'Cadastrar' onPress={()=>this.Cadastrar()}></Button>
          
            <Button title='Exibir' onPress={()=>
              this.props.navigation.navigate('Exibir',{dados:HomeScreen.show})}>

            </Button>
          </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  },
  linha: {
    
    flexDirection: 'row',
    justifyContent:'center'
  },
  botaoView: {
    margin:10,
    flexDirection: 'row',
    justifyContent:'center'
  },
  titulo: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 40,
    flex: 1,
    textAlign: 'left'

  }

});