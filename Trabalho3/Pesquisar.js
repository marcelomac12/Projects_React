import React, { Component } from 'react';
import { SafeAreaView, FlatList, Alert, TextInput, SectionList, Button, View, Text, Modal, Picker, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import PesquisaStack from './PesquisaStack';
//import CadastroNotaStack from './CadastroNota';
//import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import { StyleSheet } from 'react-native';
import firebase from './ConnectionFirabase';
import { YellowBox } from 'react-native';


class TelaInicial extends React.Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Setting a timer']);
        this.pesquisa = this.pesquisa.bind(this);

        /*if (firebase.auth().currentUser) {
            firebase.database().ref('Usuarios')
                .child(firebase.auth().currentUser.uid)
                .once('value')
                .then((snapshot) => {
                    let s = this.state;
                    s.nomeSejaBemVindo = snapshot.val().Nome;
                    this.setState(s);
                });
                
        }*/
    }
    state = {
        titulo: '',
        //nomeSejaBemVindo: '',
        dados: [],
        nomePesquisado: '',
        dadosFiltrados: []
    }
    pesquisa() {

        let notas = firebase.database().ref('Notas' + '/' + firebase.auth().currentUser.uid);

        firebase.database().ref(notas).on('value', (snapshot) => {
            let state = this.state;
            state.dados = [];
            let i = 0;
            snapshot.forEach((childItem) => {
                i++;
                state.dados.push({
                    key: childItem.key,
                    codigoLocal: i,
                    titulo: childItem.val().Titulo,
                    conteudo: childItem.val().Conteudo,

                });
            });
            this.setState(state);
        });

        let state = this.state;
        let x = 0;
        for (let i = 0; i < state.dados.length; i++) {
            if (state.dados[i].titulo == state.nomePesquisado || state.dados[i].titulo.startsWith(state.nomePesquisado) == true) {
                x++;
                state.dadosFiltrados.push({
                    key: state.dados[i].key,
                    codigoLocal: x,
                    titulo: state.dados[i].titulo,
                    conteudo: state.dados[i].conteudo
                })
                this.setState(state);
                //console.log('Entrou');

            }
            //console.log('Nao entrou');
        }

        this.props.navigation.navigate('TelaPesquisa', { dadosFiltrados: this.state.dadosFiltrados })
    }


    render() {
        return (

            <View>

                <View >
                   {/*} <Text> Ola, {this.state.nomeSejaBemVindo}</Text>*/}
                </View>
                <View >
                    <Text> Pesquisa de notas</Text>
                </View>
                <View >
                    <Text> Digite o titulo da nota a ser pesquisada:</Text>
                    <TextInput
                        placeholder='Digite aqui.'
                        onChangeText={(titulo) => { this.setState({ titulo }) }}
                    ></TextInput>
                </View>


                <View >
                    <Button title='Pesquisar' onPress={this.pesquisa} />
                </View>

                <View><Text>Cadastrar outra nota</Text></View>

                <View >
                    <Button title='Nova nota' onPress={this.props.navigation.navigate('CadastroNota')} />
                </View>


            </View>

        );
    }
}


class TelaPesquisa extends React.Component {

    static dados = [];
    
    constructor(props) {
        super(props);
        this.alterar = this.alterar.bind(this);
        this.excluir = this.excluir.bind(this);
        }

        state = {
            nomePesquisado: '',
            dados: [],
            dadosFiltrados: this.props.navigation.getParam('dadosFiltrados'),
            codigoLocal: '',
        }
        
        // let s = this.state;
        // s.dadosFiltrados = this.props.navigation.getParam('dadosFiltrados');
        // this.setState(s);
        // var data = this.props.navigation.getParam('dados');
        // let s = this.state;
        // s.dados = data.slice();
        // this.setState(s);

        // this.props.navigation.addListener('willFocus', () => {
        //     this.setState({ ts: Date.now() })
        //   })

    // componentDidUpdate(){
    //     this.setState(this.state);
    // }

   // componentDidMount() {
        
        //console.log(state.dadosFiltrados[0].Titulo);

     //   state.dadosFiltrados.push({
       //     key:'',
         //   codigoLocal:0,
           // titulo:'',
           // conteudo:''
        //})
        //this.setState(state);

        // let s = this.state;

        // for(let i=0;i<s.dados.length;i++){
        //     s.dadosFiltrados.push({
        //         key:s.dados[i].key,
        //         codigoLocal:s.dados[i].codigoLocal,
        //         titulo:s.dados[i].titulo,
        //         conteudo:s.dados[i].conteudo});
        // }
        // this.setState(s);
        // this.forceUpdate() ;

        // let notas=firebase.database().ref('Notas'+'/'+firebase.auth().currentUser.uid);

        // firebase.database().ref(notas).on('value',(snapshot)=>{
        //     let state = this.state;
        //     state.dados=[];
        //     let i=0;
        //     snapshot.forEach( (childItem)=>{
        //         i++;
        //         state.dados.push({
        //             key:childItem.key,
        //             codigoLocal:i,
        //             titulo:childItem.val().Titulo,
        //             conteudo:childItem.val().Conteudo,

        //         });
        //     });
        //     this.setState(state);
        // });




        // this.props.navigation.addListener('willFocus', (playload)=>{
        //     console.log(playload);
        //   });

    //}

    alterar() {
        let s = this.state;
        let key;
        let titulo;
        let conteudo;
        for (let i = 0; i < s.dadosFiltrados.length; i++) {
            if (s.dadosFiltrados[i].codigoLocal == s.codigoLocal) {
                key = s.dadosFiltrados[i].key;
                titulo = s.dadosFiltrados[i].titulo;
                conteudo = s.dadosFiltrados[i].conteudo;
               // console.log('oi');
            }

        }


        this.props.navigation.navigate('TelaAlterar', { key: key, titulo: titulo, conteudo: conteudo })
    }

    excluir() {
        let s = this.state;
        let key;
        let titulo;
        let conteudo;
        for (let i = 0; i < s.dadosFiltrados.length; i++) {
            if (s.dadosFiltrados[i].codigoLocal == s.codigoLocal) {
                key = s.dadosFiltrados[i].key;
                titulo = s.dadosFiltrados[i].titulo;
                conteudo = s.dadosFiltrados[i].conteudo;
               // console.log('oi');
            }

        }


        this.props.navigation.navigate('TelaExcluir', { key: key, titulo: titulo, conteudo: conteudo })
    }

    flatRender(item) {

        return (
            <View style={{ flex: 1}}>
                <Text style={{ fontSize: 20 }}>Nota {item.codigoLocal} :</Text>
                {/* <Text >Codigo: {item.codigoLocal}</Text> */}
                <Text >Titulo: {item.titulo}</Text>
                <Text >Conteudo: {item.conteudo}</Text>
            </View>
        );

    }



    render() {

        return (
            <ScrollView>
                <View >
                    <Text> Digite o codigo da nota a ser alterada ou excluida:</Text>
                    <TextInput
                        placeholder='Digite aqui.'
                        onChangeText={(codigoLocal) => { this.setState({ codigoLocal }) }}
                    ></TextInput>
                </View>

                <View >
                    <View style={{ justifyContent: 'center', alignContent: "center" }}>
                        <Button title='Excluir' onPress={this.excluir} />
                    </View>
                    <View >
                        <Text></Text>
                        <Button title='Alterar' onPress={this.alterar} />
                    </View>
                </View>
            <View>
                <View >
                    <Text style={{ justifyContent: 'center', alignContent: "center" , fontSize:30}}> Notas encontradas:</Text>
                </View>
                <View style={{flex:1}}>

                    <FlatList
                        style={{ width: "100%" }}
                        removeClippedSubviews={false}
                        //extraData={this.state}
                        //ontentContainerStyle={{ paddingBottom: 20}}
                        showsVerticalScrollIndicator={true}
                        data={this.state.dadosFiltrados}
                        renderItem={( {item }) => this.flatRender(item)
                            // <Dados data={item} /> 
                            // <Text>Codigo: {item.codigoLocal} - Titulo: {item.titulo} - Conteudo: {item.conteudo}</Text>
                        }
                        
                    />
                </View>
                

            </View>
            </ScrollView>
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

class TelaAlterar extends React.Component {
    constructor(props) {
        super(props);
                this.alterar = this.alterar.bind(this);
    }
    state = {
        key: this.props.navigation.getParam('key'),
        titulo: this.props.navigation.getParam('titulo'),
        conteudo: this.props.navigation.getParam('conteudo'),
    }

    alterar() {

        let s = this.state;
        let key = s.key;
        let titulo = s.titulo;
        let conteudo = s.conteudo;

        let notas = firebase.database().ref('Notas' + '/' + firebase.auth().currentUser.uid);

        firebase.database().ref(notas).child(key).set({
            Titulo: titulo,
            Conteudo: conteudo

        });
        Alert.alert('Nota alterada com sucesso');

    }

    render() {
        // let servicosItems = this.state.servicos.map((v,k)=>{
        //     return <Picker.Item key={k} value={k} label={v.nome}/>
        //   });
        return (

            <View>
                <View >
                    <Text> Nota escolhida para modificar:</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>Titulo: </Text>

                    <TextInput style={{ justifyContent: "center", alignSelf: "center" }}
                        placeholder='Digite aqui.'
                        value={this.state.titulo}
                        onChangeText={(titulo) => { this.setState({ titulo }) }}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>Conteudo: </Text>

                    <TextInput style={{ justifyContent: "center", alignSelf: "center" }}
                        placeholder='Digite aqui.'
                        value={this.state.conteudo}
                        onChangeText={(conteudo) => { this.setState({ conteudo }) }}
                    />
                </View>


                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Button title='Confirmar' onPress={this.alterar} />
                </View>
            </View>

        );
    }
}

class TelaExcluir extends React.Component {
    constructor(props) {
        super(props);
        
        this.excluir = this.excluir.bind(this);
    }
    state = {
        key: this.props.navigation.getParam('key'),
        titulo: this.props.navigation.getParam('titulo'),
        conteudo: this.props.navigation.getParam('conteudo'),
    }

    excluir() {
        let s = this.state;
        let key = s.key;

        let notas = firebase.database().ref('Notas' + '/' + firebase.auth().currentUser.uid);

        firebase.database().ref(notas).child(key).remove();
        Alert.alert('Nota excluida com sucesso');

    }

    render() {
        // let servicosItems = this.state.servicos.map((v,k)=>{
        //     return <Picker.Item key={k} value={k} label={v.nome}/>
        //   });
        return (

            <View>
                <View >
                    <Text> Nota escolhida para excluir:</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>Titulo: </Text>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>{this.state.titulo} </Text>

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>Conteudo: </Text>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>{this.state.conteudo} </Text>
                </View>

                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Button title='Confirmar' onPress={this.excluir} />
                </View>
            </View>

        );
    }
}

const PesquisaStackNavigator = createStackNavigator(
    {
        TelaInicial: {
            screen: TelaInicial,
        },
        TelaPesquisa: {
            screen: TelaPesquisa,
        },
        TelaAlterar: {
            screen: TelaAlterar
        },
        TelaExcluir: {
            screen: TelaExcluir
        },
    },
    // {
    //     initialRouteName: 'TelaInicial'
    // }
);

//const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(PesquisaStackNavigator);

/*
const HomeTabNavigator = createBottomTabNavigator(
    {
        PesquisaStack: {
            screen: PesquisaStack,
            navigationOptions:{
                title:'Pesquisa'
            }
        },
        CadastroNotaStack: {
            screen: CadastroNotaStack,
            navigationOptions:{
                title:'Cadastro',
                
            }
        }
    },
    {
        defaultNavigationOptions:{
          tabBarOptions:{
            showIcon:false,
            
            labelStyle:{
              fontSize:20,
              color:'green',
            }
          }
        }
      }
);

export default createAppContainer(HomeTabNavigator);*/