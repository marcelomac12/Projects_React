import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal,Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';
import SelectableFlatlist, { STATE } from 'react-native-selectable-flatlist';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';



class TelaInicial extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nome:'' ,
        }
    //     this.props.navigation.addListener(
    //         'didFocus',
    //         payload => {
    //           this.setState({is_updated:true});
    //         }
    //   );
    }
    
    render() {
        return (

            <View style={estiloTelaInicial.body}>
                
                <View >
                    <Text style= {estiloTelaInicial.titulo}> Pesquisa de produtos</Text>
                </View>
                <View >
                    <Text style= {estiloTelaInicial.texto}> Digite o nome abaixo:</Text>
                    <TextInput 
                        placeholder='Digite nome aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(nome) => { this.setState({ nome }) }}
                    ></TextInput>
                </View>

                <View >
                    <Button title='Pesquisar' onPress={()=>this.props.navigation.navigate('TelaPesquisa',{nome:this.state.nome})}/>
                </View>
                

            </View>

        );
    }
}

const estiloTelaInicial = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    linha:{
        flex:1,
         flexDirection:'row',
         backgroundColor:'green',
         justifyContent:'center'

      },
    titulo: {
       //backgroundColor: 'blue',
       fontWeight:'bold',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent:'center'

    },
    texto: {
        //backgroundColor: 'blue',
         color: 'black',
         fontSize: 20,
         padding: 20,
         //flex: 1,
         textAlign: 'center',
         justifyContent:'center'
 
     },
    
    


});


class TelaPesquisa extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nomePesquisado:this.props.navigation.getParam('nome') ,
            dados:[],
            dadosFiltrados:[],
            codigo:''
        }
        this.btnAlterar=this.btnAlterar.bind(this);
        this.btnExcluir=this.btnExcluir.bind(this);

        fetch('http://ronepage.com.br/api/listaproduto.php')
        .then((r)=>r.json())
        .then((json)=>{
            let state = this.state;
            state.dados=json.dados;
            let x=0;
            for (let i = 0; i < state.dados.length; i++) {
                if (state.dados[i].Nome == state.nomePesquisado || state.dados[i].Nome.startsWith(state.nomePesquisado)==true) {
                    state.dadosFiltrados[x] = state.dados[i];
                    //console.log('Entrou');
                    x++;
                }
                //console.log('Nao entrou');
            }
            
            this.setState(state);

        });

    }

    btnAlterar(){
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
                console.log('oi');
            }

        }
        

        this.props.navigation.navigate('TelaAlterar',{codigo:codigo,nome:nome,preco:preco,estoque:estoque,validade:validade})
    }

    btnExcluir(){
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
        

        this.props.navigation.navigate('TelaExcluir',{codigo:codigo,nome:nome,preco:preco,estoque:estoque,validade:validade})
    }

    itemsSelected = (selectedItem) => {
        console.log(selectedItem);
      }
     
      rowItem = (item) => (
        <View
          style={{
            //flex: 1,
            //borderBottomWidth: 0.5,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingVertical: 20,
            borderBottomColor: '##dfdfdf'
          }}
        >
          <Text style={{fontSize:20,backgroundColor:'#b0e0e6'}}>Dados do Produto {item.Nome} :</Text>
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Codigo: {item.Codigo}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Nome: {item.Nome}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Preco: {item.Preco}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Estoque: {item.Estoque}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Validade: {item.Validade}</Text> 
        </View>
      )

    
    flatRender(item){
        
        return(
        <View style={{flex:1,backgroundColor:'#dcdcdc'}}>
      <Text style={{fontSize:20,backgroundColor:'#b0e0e6'}}>Dados do Produto {item.Nome} :</Text>
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Codigo: {item.Codigo}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Nome: {item.Nome}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Preco: {item.Preco}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Estoque: {item.Estoque}</Text> 
          <Text style={estiloTelaPesquisa.estiloFlatItem}>Validade: {item.Validade}</Text> 
        </View>
        
        );
        
      }
    
    
    render() {
        
        return (

            <View style={estiloTelaPesquisa.body}>
                <View >
                <Text style= {estiloTelaInicial.titulo}> Produtos encontrados</Text>
                
                </View>
                <View>
                <Text style={{ fontSize: 15, textAlign: 'justify',backgroundColor:'red'}} >Role a tela abaixo para visualizar:</Text>
                </View>
                <View style={estiloTelaPesquisa.linha}>
                    <FlatList
                        data={this.state.dadosFiltrados}
                        renderItem={({ item }) => this.flatRender(item)}
                        keyExtractor={(item, index) => item.Codigo}
                    />

                    {/* <SelectableFlatlist
                        data={this.state.dadosFiltrados}
                        state={STATE.EDIT}
                        multiSelect={false}
                        itemsSelected={(selectedItem) => { this.itemsSelected(selectedItem); }}
                        initialSelectedIndex={[0]}
                        cellItemComponent={(item, otherProps) => this.rowItem(item)}
                    /> */}
                    {/* <FlatList
                    style={{width:"100%"}}
                    data={this.state.dadosFiltrados}
                    renderItem={({item})=> 
                        // <Dados data={item} /> 
                        <Text>Codigo: {item.Codigo} - Nome: {item.Nome}</Text>
                    }
                    keyExtractor={(item,index) => item.Codigo}
                    /> */}
                </View >
                 { <View >
                    <Text style= {estiloTelaPesquisa.texto}> Digite o codigo do produto abaixo, e escolha uma opcao:</Text>
                    <TextInput 
                        placeholder='Digite o codigo aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(codigo) => { this.setState({ codigo }) }}
                    ></TextInput>
                </View> }

                <View style={{flexDirection:'row',padding:20}}>
                    <View style={{padding:20}}>
                    <Button style={{padding:20}}title='Excluir' onPress={this.btnExcluir}/>
                    </View>
                    <View style={{padding:20}} >
                    <Button title='Alterar' onPress={this.btnAlterar}/>
                    </View>
                </View>

            </View>

        );
    }
}

// class Dados extends React.Component{
//     render(){
//         return(
//             <View>
//                 <Text>Codigo: {this.props.data.Codigo} - Nome: {this.props.data.Nome}</Text>
                
//             </View>
//         );
//     }
// }

const estiloTelaPesquisa = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    linha:{
        flex:1,
         flexDirection:'row',
         backgroundColor:'white',
         justifyContent:'center',
         borderWidth:1,
         borderColor:'black'

      },
    titulo: {
       //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent:'center'

    },
    texto: {
        //backgroundColor: 'blue',
         color: 'black',
         fontSize: 20,
         padding: 20,
         //flex: 1,
         textAlign: 'center',
         justifyContent:'center'
 
     },
    
     estiloFlatItem:{
        fontSize:18,
        //height:40,
        //padding:10
      }


});

class TelaAlterar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            codigo:this.props.navigation.getParam('codigo'),
            nome: this.props.navigation.getParam('nome'),
            preco: this.props.navigation.getParam('preco'),
            estoque: this.props.navigation.getParam('estoque'),
            validade: this.props.navigation.getParam('validade'),
        }
        this.btnAlterar=this.btnAlterar.bind(this);
    }


    btnAlterar(){
        let s = this.state;
        let codigo = s.codigo;
        let nome = s.nome;
        let preco = s.preco;
        let estoque = s.estoque;
        let validade = s.validade;

        fetch('http://ronepage.com.br/api/alteraproduto.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Codigo:codigo,
                Nome: nome,
                Preco: preco,
                Estoque: estoque,
                Validade: validade
            })
        })
        .then((r)=>r.json)
        .then((json)=>{
            Alert.alert('Produto alterado com sucesso');
        })


    }
    
    render() {
        // let servicosItems = this.state.servicos.map((v,k)=>{
        //     return <Picker.Item key={k} value={k} label={v.nome}/>
        //   });
        return (

            <View style={estiloTelaAlterar.body}>
                <View >
                    <Text style= {estiloTelaAlterar.titulo}> Altere os dados abaixo</Text>
                </View>
                
                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite nome aqui.'
                        
                        underlineColorAndroid='black'
                        value={this.state.nome}
                        onChangeText={(nome) => { this.setState({ nome }) }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Preco: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite preco aqui.'
                        underlineColorAndroid='black'
                        value={this.state.preco}
                        onChangeText={(preco) => { this.setState({ preco }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Estoque: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite estoque aqui.'
                        underlineColorAndroid='black'
                        value={this.state.estoque}
                        onChangeText={(estoque) => { this.setState({ estoque }) }}
                    ></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Validade: </Text>
                <TextInput style={{justifyContent:"center", alignSelf:"center"}} 
                        placeholder='Digite data aqui. AAAA-MM-DD'
                        underlineColorAndroid='black'
                        value={this.state.validade}
                        onChangeText={(validade) => { this.setState({ validade }) }}
                    />
                </View>
                
                <View style={{flexDirection:'row',padding:20}}>
                    <Button title='Confirmar' onPress={this.btnAlterar}/>
                </View>
            </View>

        );
    }
}

const estiloTelaAlterar = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    linha:{
        flex:1,
         flexDirection:'row',
         backgroundColor:'white',
         justifyContent:'center'

      },
    titulo: {
       //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 10,
        //flex: 1,
        textAlign: 'center',
        justifyContent:'center',
        fontWeight:'bold'

    },
    texto: {
        //backgroundColor: 'blue',
         color: 'black',
         fontSize: 20,
         padding: 20,
         //flex: 1,
         textAlign: 'center',
         justifyContent:'center'
 
     },
    
    


});


class TelaExcluir extends React.Component {
    constructor(props){
        super(props);
        this.state={
            codigo:this.props.navigation.getParam('codigo'),
            nome: this.props.navigation.getParam('nome'),
            preco: this.props.navigation.getParam('preco'),
            estoque: this.props.navigation.getParam('estoque'),
            validade: this.props.navigation.getParam('validade'),
        }
        this.btnExcluir=this.btnExcluir.bind(this);
    }


    btnExcluir(){
        let s = this.state;
        let codigo = s.codigo;

        fetch('http://ronepage.com.br/api/excluiproduto.php',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Codigo:codigo,
            })
        })
        .then((r)=>r.json)
        .then((json)=>{
            Alert.alert('Produto excluido com sucesso');
        })


    }
    
    render() {
        // let servicosItems = this.state.servicos.map((v,k)=>{
        //     return <Picker.Item key={k} value={k} label={v.nome}/>
        //   });
        return (

            <View style={estiloTelaExcluir.body}>
                <View >
                    <Text style= {estiloTelaExcluir.titulo}> Exclusão de produto</Text>
                </View>
                <Text style= {estiloTelaExcluir.subTitulo}> Produto escolhido</Text>
                
                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Nome: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state. nome } </Text>
                
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Preco: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state.preco } </Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Estoque: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state. estoque } </Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>Validade: </Text>
                    <Text style={{justifyContent:'center', alignSelf:"center"}}>{ this.state. validade } </Text>
                </View>
                
                
                <View style={{flexDirection:'row',padding:20}}>
                    <Button title='Confirmar' onPress={this.btnExcluir}/>
                </View>
            </View>

        );
    }
}

const estiloTelaExcluir = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    linha:{
        flex:1,
         flexDirection:'row',
         backgroundColor:'white',
         justifyContent:'center'

      },
    titulo: {
       //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent:'center',
        fontWeight:'bold'

    },
    subTitulo: {
        //backgroundColor: 'blue',
         color: 'black',
         fontSize: 20,
         padding: 20,
         //flex: 1,
         textAlign: 'center',
         justifyContent:'center',
         fontWeight:'bold'
 
     },
    texto: {
        //backgroundColor: 'blue',
         color: 'black',
         fontSize: 20,
         padding: 20,
         //flex: 1,
         textAlign: 'center',
         justifyContent:'center'
 
     },
    
    


});




class TelaCadastro extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>
                    itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
                </Text>
                <Text>
                    otherParam:{' '}
                    {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
                </Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })
                    }
                />
            </View>
        );
    }
}

const PesquisaStackNavigator = createStackNavigator(
    {
        TelaInicial: {
            screen: TelaInicial,
            navigationOptions:{
                title:'Acesso a API - Tela Inicial'
            }
        },
        TelaPesquisa: {
            screen: TelaPesquisa,
            navigationOptions:{
                title:'Acesso a API - Pesquisa'
            }
        },
        TelaAlterar: {
            screen: TelaAlterar,
            navigationOptions:{
                title:'Acesso a API - Alterar'
            }
        },
        TelaExcluir: {
            screen: TelaExcluir,
            navigationOptions:{
                title:'Acesso a API - Excluir'
            }
        },
    },
    {
        initialRouteName: 'TelaInicial',
        defaultNavigationOptions:{
            //title:'Lista 1 - Exercicio 2 ',
            headerStyle: {
              backgroundColor: '#1e90ff',
              height: 60
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color:'white',
              fontWeight: 'bold',
              fontSize: 20
            }
          }
    }
    // {
    //     initialRouteName: 'TelaInicial'
    // }
);
//const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(PesquisaStackNavigator);