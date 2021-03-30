import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import FScreen from './F';
import FcScreen from './Fc';
import EcScreen from './Ec';

  export default class App extends Component{
     constructor(props) {
          super(props);
         // this.props.navigation.addListener(
          //    'didFocus',
            //  payload => {
             //  this.setState({ is_updated: true });
             // }
         // );

     }

    static show = [];

    arrayDados = [
     {
       resultadoForca: '0',
       massa: '0',
       aceleracao: '0'
     },
     {
       resultadoForcaCentrifuga: '0',
       massa: '0',
       raio: '0',
       velocidade: '0'
     },
     {
       resultadoEnergiaCinetica: '0',
       massa: '0',
       velocidade: '0'
     }];

     state = {
          resultadoForca: '',
          resultadoForcaCentrifuga: '',
          resultadoEnergiaCinetica: ''
     }

  render(){
       
    return(
         //<View style = {styles.container}>
         //  <View style = {styles.text}>

        

         <View style={{flex:1}}>

              <View style={{margin:20}}>
                   <Button 
                        title = 'Calcular F'
                        onPress = {() => this.props.navigation.navigate('F') }
                    />
              </View>

              <View style={{margin:20}}>
                   <Button 
                        title = 'Calcular Fc'
                        onPress = {() => this.props.navigation.navigate('Fc') }
                    />
              </View>

              <View style={{margin:20}}>
                   <Button 
                        title = 'calcular Ec'
                        onPress = {() => this.props.navigation.navigate('Ec') }
                    />
              </View>

         <Text>Dados Inseridos:</Text>
          
         <View>
          <Text>Forca:</Text>
          <Text style={[{paddingLeft:20, alignContent:'center'}]}> Massa = {arrayDados[0].massa} Kg,
           Aceleracao= {arrayDados[0].aceleracao} m/s2 </Text>
          
          <Text>Forca Centrifuga:</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}> Massa = {arrayDados[1].massa} Kg,
           Raio = {arrayDados[1].raio} m,
            Velocidade= {arrayDados[1].velocidade} m/s</Text>

          <Text>Energia Cinetica:</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}> Massa = {arrayDados[2].massa} Kg,
           Velocidade: {arrayDados[2].velocidade} m/s</Text>

        <Text>Resultados:</Text>
        <View style= {{margin:5,borderColor:'black',borderWidth:1}}>
          <Text style={[{alignContent:'center',paddingLeft:20}]}>Forca= {arrayDados[0].resultadoForca} N</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}>Forca Centrifuga= {arrayDados[1].resultadoForcaCentrifuga} N</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}>Energia Cinetica= {th.arrayDados[2].resultadoEnergiaCinetica} J</Text>
        </View>

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