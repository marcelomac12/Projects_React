import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Alert, View, Button, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import MostrarScreen from './Mostrar';
import HomeScreen from './Home';


  export default class App extends Component{
     constructor(props) {
          super(props);
          //this.Cadastra=this.Cadastra.bind(this);
     }
        
     state = {
          nome:'',
          preco:'',
     }

    // itens = [];

    static show = [];

     cadastra = () => {
          //Alert.alert('rone');
        //  this.itens.push(this.state)
        //  this.setState({nome:'', preco:''})
          HomeScreen.show.push({nome:this.state.nome,preco:this.state.preco});
 
          Alert.alert('Cadastrado com sucesso. ');
     }

     //exibe = () => {
      //    if(this.itens[0] == null) return 'Nenhum item cadastrado'
          //else return this.itens[0].nome, this.itens[0].preco
   //       else return 'Itens cadastrados'
   //  }

  render(){
       
    return(
      
         //<View style = {styles.container}>
         //  <View style = {styles.text}>
         <View style={{flex:1}}>
             <View>
             <Text> My application </Text>
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

              <View style={{margin:20}}>
                   <Button 
                        title = 'Cadastrar'
                        onPress = {() => this.cadastra() }
                    />
              </View>
              
              <Button title='Mostrar' onPress={()=>
              this.props.navigation.navigate('Mostrar',{dados:HomeScreen.show})}>

            </Button>
                   <FlatList
                    //itens={[{key: 'a'}, {key: 'b'}]}
                   // itens = {[{key: this.state.nome}, {key: this.state.preco}]}
                  //  data={this.itens}
                 //   renderItem = {({item}) => <Text> {item.nome}: R${item.preco} </Text>}
                 //   keyExtractor={item => item.toString()}
                    //renderItem={this.renderItem}
                    //renderItem={({item}) => <Text>{item.key}</Text>}
                    />
                  {/* 
                    <Button 
                        title = 'Mostrar'
                        onPress = {() => 
                                this.props.navigation.navigate('Mostrar')}
                   />*/ }

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