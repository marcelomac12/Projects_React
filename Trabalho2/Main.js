import React, {Component} from 'react';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  axios  from 'axios';
import MainScreen from './Main';
import CadastroScreen from './Cadastro';
import AlterarScreen from './Alterar';

export default class App extends Component{
    constructor(props) {
         super(props);

    }

    state = {
      nome:'',
      dados: [],
      dadosFiltrados:[]
    }

   static show = [];

   pesquisar(){
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
            //console.log('oi');
        }

    }
    

    this.props.navigation.navigate('Alterar',{codigo:codigo,nome:nome,preco:preco,estoque:estoque,validade:validade})
    }

    excluir(){
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
              //console.log('oi');
          }

      }
      

      this.props.navigation.navigate('Excluir',{codigo:codigo,nome:nome,preco:preco,estoque:estoque,validade:validade})
    }

   loadData = async () => {
    fetch('http://ronepage.com.br/api/listaproduto.php')
        .then((response)=>response.json())
        .then((json)=>{
            let state = this.state;
            state.dados=json.dados;
            let x=0;
            for (let i = 0; i < state.dados.length; i++) {
                if (state.dados[i].Nome == state.nome || state.dados[i].Nome.startsWith(state.nome)==true) {
                    state.dadosFiltrados[x] = state.dados[i];
                    //console.log('Entrou');
                    x++;
                }
                //console.log('Nao entrou');
            }
            
            this.setState(state);

        });
}


renderItem = ({item}) =>
<View>
  {/*<TouchableOpacity style={{flex:1, alignSelf:"center"}} */}
 {/* onPress={()=>this.props.navigation.navigate('Info', {nota: item})}>*/}
    <View style={{alignItems:"center", flex:1}}>
          <Text style={{fontSize:20}}>Dados do Produto {item.Nome} :</Text>
          <Text>Codigo: {item.Codigo}</Text> 
          <Text>Nome: {item.Nome}</Text> 
          <Text>Preco: {item.Preco}</Text> 
          <Text>Estoque: {item.Estoque}</Text> 
          <Text>Validade: {item.Validade}</Text> 
          <View >
            <Button title='Alterar' onPress={()=> this.pesquisar()}/>
          </View>
           <View >
            <Button title='Excluir' onPress={()=> this.excluir()}/>
          </View>
    </View>
  {/*</TouchableOpacity>*/}

  <View style={{flex:1, alignSelf:"center", alignItems:"center"}}>
    <TouchableOpacity
    onPress={()=>this.downloadPDF(item.id)}>
    </TouchableOpacity>

  </View>
</View>

 render(){
      
   return(
     
        //<View style = {styles.container}>
        //  <View style = {styles.text}>
        <View style={{flex:1}}>
            <View>
            <Text> Main </Text>
            </View>

             <View style={{margin:20}}>
                  <Button 
                       title = 'Cadastrar novo produto'
                       onPress = {() => this.props.navigation.navigate('Cadastro') }
                   />
             </View>
             <Text></Text>
             
             <Text></Text>

             <TextInput
                 label = 'Nome'
                 style={{height: 40}}
                 placeholder="Insira aqui o nome do produto"
                 onChangeText={(text) => this.setState({nome:text})}
                 value = {this.state.nome}
             />

              <View >
                 <Button title='Pesquisar' onPress={()=> this.loadData()}/>
                </View>

            <View style= {[{justifyContent: 'flex-start'}, flexDirection = 'row']}>
               <View style={{flex:1}}>
               
                  <FlatList
                    data={this.state.dadosFiltrados}
                    keyExtractor={item => item.codigo}
                    renderItem={this.renderItem}
                  />
                
              </View> 

        </View>

        </View>
  );
}
}