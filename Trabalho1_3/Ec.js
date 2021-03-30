import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import MainScreen from './Main';


  export default class App extends Component{
     constructor(props) {
          super(props);

     }
        
     state = {
          m:'',
          v:'',
     }

     itens = [];

    static show = [];

     cadastra = () => {
          //Alert.alert('rone');
          //this.itens.push(this.state)
          //this.setState({m:'', v:''})
          let s = this.state;

          let massa = parseFloat(s.m);
          let velocidadeQuadrado = parseFloat(s.v) * parseFloat(s.v);
      
      
          let energiaCinetica = (massa * velocidadeQuadrado * 0.5);
          //console.log(energiaCinetica);
      
          MainScreen.arrayDados[2]['resultadoEnergiaCinetica'] = energiaCinetica.toFixed(4);;
          MainScreen.arrayDados[2]['massa'] = s.m;
          MainScreen.arrayDados[2]['velocidade'] = s.v;
      
      
          this.setState(s);
      
          Alert.alert('Cadastrado com sucesso');
          //this.props.navigation.goBack();
     }

     exibe = () => {
          if(this.itens[0] == null) return 'Nenhum cálculo efetuado'
          //else return this.itens[0].nome, this.itens[0].preco
          else return 'Resultado: F = ', (this.state.v*this.state.v*this.state.m)/2
     }

  render(){
       
    return(
      
         //<View style = {styles.container}>
         //  <View style = {styles.text}>
         <View style={{flex:1}}>
             <View>
             <Text> Energia cinética </Text>
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
                 placeholder="Insira aqui a velocidade"
                 onChangeText={(text) => this.setState({v:text})}
                 value = {this.state.v}
             />

              <View style={{margin:20}}>
                   <Button 
                        title = 'Calcular Energia cinética em J'
                        onPress = {() => this.cadastra() }
                    />
              </View>
              
                   <View style={{margin:20, flex:1}}>
                        <Text> {(this.state.v*this.state.v*this.state.m)/2} </Text>
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