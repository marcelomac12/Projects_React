import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';

//import FScreen from './F';
//import FcScreen from './Fc';
//import EcScreen from './Ec';

class App extends React.Component{
     constructor(props) {
          super(props);
          this.props.navigation.addListener(
              'didFocus',
              payload => {
               this.setState({ is_updated: true });
              }
          );

     }

    static show = [];

    static arrayDados = [
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
          <Text style={[{paddingLeft:20, alignContent:'center'}]}> Massa = {App.arrayDados[0].massa} Kg,
           Aceleracao= {App.arrayDados[0].aceleracao} m/s2 </Text>
          
          <Text>Forca Centrifuga:</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}> Massa = {App.arrayDados[1].massa} Kg,
           Raio = {App.arrayDados[1].raio} m,
            Velocidade= {App.arrayDados[1].velocidade} m/s</Text>

          <Text>Energia Cinetica:</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}> Massa = {App.arrayDados[2].massa} Kg,
           Velocidade: {App.arrayDados[2].velocidade} m/s</Text>

        <Text>Resultados:</Text>
        <View>
          <Text style={[{alignContent:'center',paddingLeft:20}]}>Forca= {App.arrayDados[0].resultadoForca} N</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}>Forca Centrifuga= {App.arrayDados[1].resultadoForcaCentrifuga} N</Text>
          <Text style={[{alignContent:'center',paddingLeft:20}]}>Energia Cinetica= {App.arrayDados[2].resultadoEnergiaCinetica} J</Text>
        </View>

         </View>
         </View>
   );
}
}

 class F extends Component{
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

      
          App.arrayDados[0]['resultadoForca'] = forca.toFixed(4);;
          App.arrayDados[0]['massa'] = s.m;
          App.arrayDados[0]['aceleracao'] = s.a;
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
                                this.props.navigation.navigate('App')}
                   /> }

                    </View>
                    
         </View>
   );
}
}

class Fc extends Component{
     constructor(props) {
          super(props);
          this.cadastra  = this.cadastra.bind(this);
     }
        
     state = {
          m:'',
          v:'',
          r:''
     }

     itens = [];

    static show = [];

     cadastra = () => {
          //Alert.alert('rone');
         // this.itens.push(this.state)
         // this.setState({m:'', v:'', r:''})
         let s = this.state;

          let massa = parseFloat(s.m);
          let velocidadeQuadrado = parseFloat(s.v) * parseFloat(s.v);
          let raio = parseFloat(s.r);

          let forcaCentrifuga = (massa * velocidadeQuadrado / raio);
          //console.log(forcaCentrifuga);

          App.arrayDados[1]['resultadoForcaCentrifuga'] = forcaCentrifuga.toFixed(4);
          App.arrayDados[1]['raio'] = s.r;
          App.arrayDados[1]['velocidade'] = s.v;
          App.arrayDados[1]['massa'] = s.m;


          this.setState(s);

          Alert.alert('Cadastrado com sucesso');
          //this.props.navigation.goBack();
     }

     exibe = () => {
          if(this.itens[0] == null) return 'Nenhum cálculo efetuado'
          //else return this.itens[0].nome, this.itens[0].preco
          else return 'Resultado: Fc = ', this.state.m*((this.state.v*this.state.v)/this.state.r)
     }

  render(){
       
    return(
      
         //<View style = {styles.container}>
         //  <View style = {styles.text}>
         <View style={{flex:1}}>
             <View>
             <Text> Força centrífuga </Text>
             </View>

         <TextInput
                 label = 'massa'
                 style={{height: 40}}
                 placeholder="Insira aqui a massa"
                 onChangeText={(text) => this.setState({m:text})}
                 value = {this.state.m}
             />

         <TextInput
                 label = 'velocidade'
                 style={{height: 40}}
                 placeholder="Insira aqui a velocidade"
                 onChangeText={(text) => this.setState({v:text})}
                 value = {this.state.v}
             />

             <TextInput
                 label = 'raio'
                 style={{height: 40}}
                 placeholder="Insira aqui o raio"
                 onChangeText={(text) => this.setState({r:text})}
                 value = {this.state.r}
             />

              <View style={{margin:20}}>
                   <Button 
                        title = 'Força centrifuga em N'
                        onPress = {() => this.cadastra() }
                    />
              </View>
              
                   <View style={{margin:20, flex:1}}>
                        <Text> {this.state.m*((this.state.v*this.state.v)/this.state.r)} </Text>
                  {
                    <Button 
                        title = 'Voltar'
                        onPress = {() => 
                                this.props.navigation.navigate('App')}
                   /> }

                    </View>
                    
         </View>
   );
}
}

class Ec extends Component{
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
      
          App.arrayDados[2]['resultadoEnergiaCinetica'] = energiaCinetica.toFixed(4);;
          App.arrayDados[2]['massa'] = s.m;
          App.arrayDados[2]['velocidade'] = s.v;
      
      
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
                                this.props.navigation.navigate('App')}
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

const AppNavigator = createStackNavigator(
     {
       App: {
         screen: App
       },
   
       F: {
         screen: F
       },
       Fc: {
         screen: Fc
       },
       Ec: {
         screen: Ec
       },
       // Excluir: {
       //      screen: Excluir
       //  }
     },
     {
       initialRouteName: 'App',
       defaultNavigationOptions: {
        // title: 'Lista 1 - Exercicio 3 ',
         headerStyle: {
           //backgroundColor: '#191970',
           height: 40
         },
         //headerTintColor: 'white',
         headerTitleStyle: {
          // color: 'white',
         //  fontWeight: 'bold',
           fontSize: 30
         }
       }
     }
   );
   //const AppContainer = createAppContainer(AppNavigator);
   export default createAppContainer(AppNavigator);