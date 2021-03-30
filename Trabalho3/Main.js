import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View, Text, StyleSheet, Dimensions,TextInput, Alert,TouchableOpacity, ScrollView, FlatList, Button} from 'react-native';
//import firebase from 'firebase';
//import { Alert, Platform, TextInput } from 'react-native';
//import Homescreen from './Home';
//import CadastroStack from './CadastroStack';
import firebase from './ConnectionFirabase';
//import { YellowBox } from 'react-native';
import { YellowBox } from 'react-native';


export default class App extends Component {

    constructor(props) {
        super(props);
        firebase.auth().signOut();
        YellowBox.ignoreWarnings(['Setting a timer']);
   }
    static show = [];
/*
UNSAFE_componentWillMount(){
  // Your web app's Firebase configuration
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  isAutenticated = false;
}*/

state = {
  email: '',
  password:'',
  //isAutenticated = false
}

login = () => {
  
   firebase.auth().onAuthStateChanged((user)=>{
    if(user){
       this.props.navigation.navigate('Home');
        //alert(this.state.nome);
       alert('Logado!');
    }
  });
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
      ).catch((error)=>{
          if(error.code == 'auth/wrong-password'){
              alert('Senha errada.')
          }
      });
    
      //alert(firebase.auth().currentUser.uid);
  /*const {email, password} = this.state;


 // const user = await firebase
  try {
    await firebase
       .auth()
       .signInWithEmailAndPassword(email, password)
       .then(res => {
           console.log(res.user.email);
    });
} catch (error) {
    console.log(error.toString(error));
  }

  this.props.navigation.navigate('Home')
};*/
}

signUp = () => {
  firebase.auth().createUserWithEmailAndPassword(
    this.state.email,
    this.state.password
).catch((error)=>{
    alert(error.code);
});

alert('Usuario cadastrado, faça seu login');
  /*const {email, password} = this.state;

  try {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => { 
               console.log(user);
              // this.props.navigation.navigate('Main');
         });
} catch (error) {
    console.log(error.toString(error));
  }*/
};

  render(){
    return (
    <View>
      <View style={{ justifyContent: "center", alignSelf: "center", padding: 20}}>
        <Text>Login</Text> 
      </View>

        <TextInput
                 label = 'usuario'
                 style={{height: 40}}
                 placeholder="Insira aqui o email do usuario"
                 onChangeText={(text) => this.setState({email:text})}
                 value = {this.state.email}
          />

          <TextInput
                 label = 'senha'
                 style={{height: 40}}
                 placeholder="Insira aqui a senha"
                 secureTextEntry={true}
                 onChangeText={(text) => this.setState({password:text})}
                 value = {this.state.password}
             />
            <Text></Text>
            <TouchableOpacity onPress = { () => this.login() }>
                  <Text>Entrar</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress = { () => this.signUp() }>
                  <Text>Cadastrar novo Usuário</Text>
            </TouchableOpacity>

            {/*this.state.isAutenticated ? <Text>Logado com sucesso!</Text>: null*/}
            

    </View>
    );
    }
  }