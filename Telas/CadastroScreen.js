import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import HomeScreen from './HomeScreen';
export default class CadastroScreen extends Component{
     mensagem = {
          palavra:''
     }
     _getButton = () =>{
          HomeScreen.show.push(this.mensagem.palavra+'\n')}

     render(){
        return(
               <View style={{ flex: 1, justifyContent: 'center', 
                                                              alignItems: 'center' }}>
               <Text>Cadastro</Text>
               <TextInput
                    style={{height: 40}}
                    placeholder="Insira aqui o que deseja cadastrar"
                    onChangeText={(text) => 
                                                  this.mensagem.palavra = text}
                />
                <View style={{margin:20}}>
                <Button 
                     title="Salvar"
                     onPress={() => this._getButton()}
                 />              
                 </View>
                 </View>
   );
}
}