import React, { Component } from 'react';
import { SafeAreaView, FlatList, SectionList, Button, View, Text, Modal, Picker } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import firebase from './FirebaseConnection';



class TelaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            nomeSejaBemVindo: '',
            dados: [],
            nomePesquisado: '',
            dadosFiltrados: []
        }
        this.btnPesquisa = this.btnPesquisa.bind(this);

        if (firebase.auth().currentUser) {
            firebase.database().ref('Usuarios')
                .child(firebase.auth().currentUser.uid)
                .once('value')
                .then((snapshot) => {
                    let s = this.state;
                    s.nomeSejaBemVindo = snapshot.val().Nome;
                    this.setState(s);
                });
        }
    }
    btnPesquisa() {

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

            <View style={estiloTelaInicial.body}>

                <View >
                    <Text style={estiloTelaInicial.textoBoasVindas}> Ola, {this.state.nomeSejaBemVindo}</Text>
                </View>
                <View >
                    <Text style={estiloTelaInicial.titulo}> Pesquisa de notas</Text>
                </View>
                <View >
                    <Text style={estiloTelaInicial.texto}> Digite o titulo da nota abaixo:</Text>
                    <TextInput
                        placeholder='Digite titulo aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(titulo) => { this.setState({ titulo }) }}
                    ></TextInput>
                </View>


                <View >
                    <Button title='Pesquisar' onPress={this.btnPesquisa} />
                </View>


            </View>

        );
    }
}

const estiloTelaInicial = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textoBoasVindas: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 20,
        padding: 20,
        //flex: 1,
        //textAlign: 'left',
        //justifyContent:'flex-start'

    },
    linha: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'center'

    },
    titulo: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

    },
    texto: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 20,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

    },




});


class TelaPesquisa extends React.Component {
    static dados = [];
    constructor(props) {
        super(props);
        this.state = {
            nomePesquisado: '',
            dados: [],
            dadosFiltrados: this.props.navigation.getParam('dadosFiltrados'),
            codigoLocal: '',

        }
        this.btnAlterar = this.btnAlterar.bind(this);
        this.btnExcluir = this.btnExcluir.bind(this);
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

    }

    // componentDidUpdate(){
    //     this.setState(this.state);
    // }

    componentDidMount() {
        
        //console.log(state.dadosFiltrados[0].Titulo);

        state.dadosFiltrados.push({
            key:'1111',
            codigoLocal:6,
            titulo:'state.dados[i].titulo',
            conteudo:'state.dados[i].conteudo'
        })
        this.setState(state);

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

    }

    btnAlterar() {
        let s = this.state;
        let key;
        let titulo;
        let conteudo;
        for (let i = 0; i < s.dadosFiltrados.length; i++) {
            if (s.dadosFiltrados[i].codigoLocal == s.codigoLocal) {
                key = s.dadosFiltrados[i].key;
                titulo = s.dadosFiltrados[i].titulo;
                conteudo = s.dadosFiltrados[i].conteudo;
                console.log('oi');
            }

        }


        this.props.navigation.navigate('TelaAlterar', { key: key, titulo: titulo, conteudo: conteudo })
    }

    btnExcluir() {
        let s = this.state;
        let key;
        let titulo;
        let conteudo;
        for (let i = 0; i < s.dadosFiltrados.length; i++) {
            if (s.dadosFiltrados[i].codigoLocal == s.codigoLocal) {
                key = s.dadosFiltrados[i].key;
                titulo = s.dadosFiltrados[i].titulo;
                conteudo = s.dadosFiltrados[i].conteudo;
                console.log('oi');
            }

        }


        this.props.navigation.navigate('TelaExcluir', { key: key, titulo: titulo, conteudo: conteudo })
    }

    flatRender(item) {

        return (
            <View style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
                <Text style={{ fontSize: 20, backgroundColor: '#b0e0e6' }}>Nota {item.codigoLocal} :</Text>
                {/* <Text >Codigo: {item.codigoLocal}</Text> */}
                <Text >Titulo: {item.titulo}</Text>
                <Text >Conteudo: {item.conteudo}</Text>
            </View>
        );

    }



    render() {

        return (

            <View style={estiloTelaPesquisa.body}>
                <View >
                    <Text style={estiloTelaInicial.titulo}> Notas encontradas:</Text>
                </View>
                <View style={estiloTelaPesquisa.linha}>

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
                <View >
                    <Text style={estiloTelaPesquisa.texto}> Digite o codigo da nota abaixo, e escolha uma opcao:</Text>
                    <TextInput
                        placeholder='Digite o codigo aqui.'
                        underlineColorAndroid='black'
                        onChangeText={(codigoLocal) => { this.setState({ codigoLocal }) }}
                    ></TextInput>
                </View>

                <View >
                    <View style={{ justifyContent: 'center', alignContent: "center" }}>
                        <Button title='Excluir' onPress={this.btnExcluir} />
                    </View>
                    <View >
                        <Button title='Alterar' onPress={this.btnAlterar} />
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
        //paddingTop: 10,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    linha: {
        flex: 1,
        //  flexDirection:'row',
        //  backgroundColor:'white',
        //  justifyContent:'center'

    },

    titulo: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        //padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

    },
    texto: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 20,
        //padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

    },




});

class TelaAlterar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.navigation.getParam('key'),
            titulo: this.props.navigation.getParam('titulo'),
            conteudo: this.props.navigation.getParam('conteudo'),
        }
        this.btnAlterar = this.btnAlterar.bind(this);



    }


    btnAlterar() {

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

            <View style={estiloTelaAlterar.body}>
                <View >
                    <Text style={estiloTelaAlterar.titulo}> Nota escolhida para modificar:</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>Titulo: </Text>
                    <TextInput style={{ justifyContent: "center", alignSelf: "center" }}
                        placeholder='Digite titulo aqui.'
                        underlineColorAndroid='black'
                        value={this.state.titulo}
                        onChangeText={(titulo) => { this.setState({ titulo }) }}
                    ></TextInput>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ justifyContent: 'center', alignSelf: "center" }}>Conteudo: </Text>
                    <TextInput style={{ justifyContent: "center", alignSelf: "center" }}
                        placeholder='Digite conteudo aqui.'
                        underlineColorAndroid='black'
                        value={this.state.conteudo}
                        onChangeText={(conteudo) => { this.setState({ conteudo }) }}
                    ></TextInput>
                </View>


                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Button title='Confirmar' onPress={this.btnAlterar} />
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
    linha: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center'

    },
    titulo: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

    },
    texto: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 20,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

    },




});


class TelaExcluir extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.navigation.getParam('key'),
            titulo: this.props.navigation.getParam('titulo'),
            conteudo: this.props.navigation.getParam('conteudo'),
        }
        this.btnExcluir = this.btnExcluir.bind(this);
    }


    btnExcluir() {
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

            <View style={estiloTelaExcluir.body}>
                <View >
                    <Text style={estiloTelaExcluir.titulo}> Nota escolhida para excluir:</Text>
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
                    <Button title='Confirmar' onPress={this.btnExcluir} />
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
    linha: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center'

    },
    titulo: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

    },
    texto: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 20,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent: 'center'

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
            navigationOptions: {
                title: 'Tela Inicial'
            }
        },
        TelaPesquisa: {
            screen: TelaPesquisa,
            navigationOptions: {
                title: 'Tela Pesquisa'
            }
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