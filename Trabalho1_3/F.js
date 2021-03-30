import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import MainScreen from './Main';


  export default class App extends Component{
     constructor(props) {
          super(props);
          this.cadastra = this.cadastra.bind(this);
     }
        
     state = {
          m:'',
          a:'',
     }

     itens = [];

    static show = [];

     cadastra = () => {
          //var data = MainScreen.arrayDados.slice();
          //let s = this.state;
          //s.dados = data.slice();

          let s = this.state;
          //MainScreen.arrayDados[0]['resultadoForca']

          let forca = parseFloat(s.m) * parseFloat(s.a);

      
          MainScreen.arrayDados[0]['resultadoForca'] = forca.toFixed(4);;
          MainScreen.arrayDados[0]['massa'] = s.m;
          MainScreen.arrayDados[0]['aceleracao'] = s.a;
          // let testeMarca = Cadastro.arrayVeiculos[0].marca;
          // let testeModelo = Cadastro.arrayVeiculos[0].modelo;
      
      
          this.setState(s);
      
          Alert.alert('Cadastrado com sucesso');
        //  this.props.navigation.goBack();
     }

     exibe = () => {
          if(this.itens[0] == null) return 'Nenhum cálculo efetuado'
          //else return this.itens[0].nome, this.itens[0].preco
          if(this.itens[0] > 0) return this.state.a * this.state.m
     }

  render(){
       
    return(
      
         //<View style = {styles.container}>
         //  <View style = {styles.text}>
         <View style={{flex:1}}>
             <View>
             <Text> Força </Text>
             </View>

         <TextInput
                 label = 'massa'
                 style={{height: 40}}
                 placeholder="Insira aqui a massa"
                 onChangeText={(text) => this.setState({m:text})}
                 value = {this.state.m}
             />

         <TextInput
                 label = 'aceleração'
                 style={{height: 40}}
                 placeholder="Insira aqui o aceleração"
                onChangeText={(text) => this.setState({a:text})}
                 value = {this.state.a}
             />

              <View style={{margin:20}}>
                   <Button 
                 //       title = 'Calcular'
                 title = 'Resultado em N'
                        onPress = {() => this.cadastra() }
                    />
              </View>
              
                   <View style={{margin:20, flex:1}}>
                        <Text> {this.state.a * this.state.m} </Text>
                  {
                    <Button 
                        title = 'Voltar'
                        onPress = {() => 
                                this.props.navigation.navigate('Main')}
                   /> }

                    </View>
                    
         </View>
   );
}
}
/*
const styles= StyleSheet.create({
container:{
   flex: 1,
   backgroundColor: "#edf0ed",  
   flexDirection:"column"
         
},
text:{
 padding:15,
 marginLeft:15,
 marginTop:10,  
 borderRadius:10,
 //width: ((Dimensions.get('window').width))-20,
 height: 40,
 justifyContent:'center',
 alignItems:'center',
 backgroundColor: "#EC3D74", 
// flexDirection:'row'              
},
borda:{
     color: '#EC3D74',
     padding:10,
     fontWeight: 'bold',
     fontSize: 20,
},

button:
{  
}
});*/