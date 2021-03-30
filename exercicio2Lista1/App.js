import React, { Component } from 'react';
import {FlatList, Button, View, Text,Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createStackNavigator } from 'react-navigation';
import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';



class Tela1 extends React.Component {

    render() {
        return (
            <View>

                <View style={{ margin: 20 }}>
                    <Button
                        title='Cadastrar Veiculo'
                        onPress={() => this.props.navigation.navigate('Cadastro')}>

                    </Button>
                </View>

                <View style={{ margin: 20 }}>
                    <Button
                        title='Excluir Veiculo'
                        onPress={() => this.props.navigation.navigate('Excluir')}>

                    </Button>
                </View>

                <View style={{ margin: 20 }}>
                    <Button
                        title='Buscar Informacoes do Veiculo'
                        onPress={() => this.props.navigation.navigate('Buscar')}>

                    </Button>
                </View>

                <View style={{ margin: 20 }}>
                    <Button
                        title='Exibir Informacoes cadastradas'
                        onPress={() => this.props.navigation.navigate('Exibir')}>

                    </Button>
                </View>

            </View>

        );
    }
}

const estiloTela1 = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 2
    },
    linha: {
        flex: 1,
        flexDirection: 'row'
    },
    subTitulo: {

    },
    texto: {
        paddingTop: 20,
        justifyContent: 'center'
    },
    titulo: {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 40,
        flex: 1,
        textAlign: 'left'

    }


});

class Cadastro extends Component {
    static arrayVeiculos = [
    ];
    constructor(props) {
        super(props);


        this.state = {
            marca: 'Marca ',
            modelo: 'Modelo x',
            anofab: '2009',
            placa: '007',
            nomecondutor: 'James Bond',
            numeroocupante: '2',
            horarioparadanablitz: '20:00',
            nomepm: 'Sargento Pincel',
            descricao: 'Porte de arma do exercito, bazuca',

            veiculo: {
                codigo:'',
                marca: '',
                modelo: '',
                anofab: '',
                placa: '',
                nomecondutor: '',
                numeroocupante: '',
                horarioparadanablitz: '',
                nomepm: '',
                descricao: ''
            },
        };


        this.bntCadastro = this.bntCadastro.bind(this);

    }


    bntCadastro() {
        let s = this.state;

        let tamanhoArray =Cadastro.arrayVeiculos.length;
        
        s.veiculo.codigo = tamanhoArray+1;
        s.veiculo.marca = s.marca;
        s.veiculo.modelo = s.modelo;
        s.veiculo.anofab =s.anofab;
        s.veiculo.placa =s.placa;
        s.veiculo.nomecondutor =s.nomecondutor;
        s.veiculo.numeroocupante =s.numeroocupante;
        s.veiculo.horarioparadanablitz =s.horarioparadanablitz;
        s.veiculo.nomepm =s.nomepm;
        s.veiculo.descricao =s.descricao;

        Cadastro.arrayVeiculos.push(this.state.veiculo);
        console.log(s.veiculo.codigo);
        this.setState(s);

        Alert.alert('Cadastrado com sucesso');
        this.props.navigation.goBack();
        
    }

    render() {
        return (
            <ScrollView>

                <View >
                    <Text style={estiloCadastro.titulo}>Informações Blitz</Text>
                </View>
                <View >
                    <Text style={estiloCadastro.subTitulo} >Role a tela para baixo, e preencha os campos:</Text>
                </View>

                <View >
                    <Text style={estiloCadastro.texto} >Marca:</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite Marca aqui.'
                        underlineColorAndroid='black'
                        value={this.state.marca}
                        onChangeText={(marca) => { this.setState({ marca }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text style={estiloCadastro.texto} >Modelo:</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite modelo aqui.'
                        underlineColorAndroid='black'
                        value={this.state.modelo}
                        onChangeText={(modelo) => { this.setState({ modelo }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text style={estiloCadastro.texto} >Ano de Fabricação:</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite Ano de Fabricação aqui.'
                        underlineColorAndroid='black'
                        value={this.state.anofab}
                        onChangeText={(anofab) => { this.setState({ anofab }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text style={estiloCadastro.texto} >Placa</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite placa aqui.'
                        underlineColorAndroid='black'
                        value={this.state.placa}
                        onChangeText={(placa) => { this.setState({ placa }) }}
                    ></TextInput>
                </View>

                
                <View >
                    <Text style={estiloCadastro.texto} >Nome do Condutor:</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite Nome do Condutor aqui.'
                        underlineColorAndroid='black'
                        value={this.state.nomecondutor}
                        onChangeText={(nomecondutor) => { this.setState({ nomecondutor }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text style={estiloCadastro.texto} >Numero Ocupante(s):</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite Numero Ocupante(s) aqui.'
                        underlineColorAndroid='black'
                        value={this.state.numeroocupante}
                        onChangeText={(numeroocupante) => { this.setState({ numeroocupante }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text style={estiloCadastro.texto} >Horario de parada:</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite Horario de parada aqui.'
                        underlineColorAndroid='black'
                        value={this.state.numeroocupante}
                        onChangeText={(horarioparadanablitz) => { this.setState({ horarioparadanablitz }) }}
                    ></TextInput>
                </View>


                <View >
                    <Text style={estiloCadastro.texto} >Nome do Polical:</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite Nome Polical aqui.'
                        underlineColorAndroid='black'
                        value={this.state.nomepm}
                        onChangeText={(nomepm) => { this.setState({ nomepm }) }}
                    ></TextInput>
                </View>

                <View >
                    <Text style={estiloCadastro.texto} >Descrição:</Text>
                </View>
                <View >
                    <TextInput
                        style={estiloCadastro.caixaEntrada}
                        placeholder='Digite Descrição aqui.'
                        underlineColorAndroid='black'
                        value={this.state.descricao}
                        onChangeText={(descricao) => { this.setState({ descricao }) }}
                    ></TextInput>
                </View>

                <View style={{paddingTop:20}}>
                    <Button title='Salvar' onPress={() => this.bntCadastro()}></Button>
                    
                </View>

            </ScrollView>

        );
    }
}

const estiloCadastro = StyleSheet.create({
    body: {
        paddingTop: 10,
        flex: 2
    },
    caixaEntrada:{
        //height:40,
        //width:'50%',
        //borderWidth:1,
        borderColor:'black',
        justifyContent:"center",
        //alignSelf:"center"
      },
    linha: {
        flex: 1,
        flexDirection: 'row'
    },
    texto: {
        //backgroundColor: 'blue',
        color: 'blue',
        paddingTop: 30,
        justifyContent: 'center',
        //alignSelf:'center',
        fontSize: 20,
        textAlign:'center'

    },
    subTitulo: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
    titulo: {
        //backgroundColor: 'blue',
        color: 'black',
        fontSize: 30,
        padding: 20,
        //flex: 1,
        textAlign: 'center',
        justifyContent:'center'

    }


});


class Exibir extends Component {

    constructor(props){
        super(props);
        this.state = {          
          flatData: []
        };

      }

      componentDidMount(){
      var data = Cadastro.arrayVeiculos.slice();
      let s = this.state;
      s.flatData = data.slice();
      this.setState(s);
    }
    
      flatRender(item){
        
        return(
        <View style={{flex:1,}}>
      <Text style={{fontSize:20,backgroundColor:'green'}}>Dados do relatório {item.codigo} :</Text>
          <Text style={MeuEstiloExibir.estiloFlatItem}>Marca: {item.marca}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Modelo: {item.modelo}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Ano Fabricação: {item.anofab}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Placa: {item.placa}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Nome Condutor: {item.nomecondutor}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Numero Ocupante: {item.numeroocupante}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Horario parada: {item.horarioparadanablitz}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Nome PM: {item.nomepm}</Text> 
          <Text style={MeuEstiloExibir.estiloFlatItem}>Descrição: {item.descricao}</Text> 
        </View>
        
        );
        
      }
      render() {
        return (
          <View style={MeuEstiloExibir.corpo}>
              <Text style={{fontSize:30,justifyContent:'center',alignSelf:'center',paddingTop:10}} >Dados Armazenados:</Text>
              <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center',backgroundColor:'red'}} >Dados Armazenados, role abaixo para visualizar:</Text>
               <FlatList 
               data={this.state.flatData} 
               renderItem={({item})=>this.flatRender(item)}
               keyExtractor={(item,index) => item.marca}
               />
          </View>
        );
      }
    // render() {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center' }}>
    //             <Text>Conteudox:</Text>

    //             <View>
    //                 <Text>{Cadastro.arrayVeiculos[0].marca}</Text>
    //                 <Text>{Cadastro.arrayVeiculos[0].modelo}</Text>
    //             </View>

    //             <View>
    //                 <Text>{Cadastro.arrayVeiculos[1].marca}</Text>
    //                 <Text>{Cadastro.arrayVeiculos[1].modelo}</Text>
    //             </View>
    //         </View>
    //     );
    // }
}
const MeuEstiloExibir = StyleSheet.create({
    corpo:{
      flex:1,
      paddingTop:10,
      },
      estiloFlatItem:{
        fontSize:18,
        //height:40,
        //padding:10
      }
    
  })


class Buscar extends Component {

    static arrayVeiculosCopia = [...Cadastro.arrayVeiculos];
    constructor(props) {
        super(props);

        this.state = {
            placa: '',
            posicaoVetor:'',
            marca: '',
            modelo: '',
            placaDoVetor: '',
            anofab: '',
            nomecondutor: '',
            numeroocupante: '',
            horarioparadanablitz: '',
            nomepm: '',
            descricao: '',
            modalVisivel: false
        };

        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
        this.bntPesquisa = this.bntPesquisa.bind(this);

    }

    abrirModal() {
        let s = this.state;
        s.modalVisivel = true;
        this.setState(s);
    }

    fecharModal() {
        let s = this.state;
        s.modalVisivel = false;
        this.setState(s);
    }
    
    bntPesquisa() {
        let s = this.state;
        var posicao = Cadastro.arrayVeiculos.map(function(e){
            return e.placa;
        }).indexOf(s.placa);

        s.posicaoVetor=posicao;
        if(posicao>-1){
            s.marca = Cadastro.arrayVeiculos[posicao].marca;
            s.modelo = Cadastro.arrayVeiculos[posicao].modelo;
            s.placaDoVetor = Cadastro.arrayVeiculos[posicao].placaDoVetor;
            s.anofab =Cadastro.arrayVeiculos[posicao].anofab;
            s.nomecondutor =Cadastro.arrayVeiculos[posicao].nomecondutor;
            s.numeroocupante =Cadastro.arrayVeiculos[posicao].numeroocupante;
            s.horarioparadanablitz =Cadastro.arrayVeiculos[posicao].horarioparadanablitz;
            s.nomepm =Cadastro.arrayVeiculos[posicao].nomepm;
            s.descricao =Cadastro.arrayVeiculos[posicao].descricao;
        }
        

        this.setState(s);
        // s.veiculo.marca = s.marca;
        // s.veiculo.modelo = s.modelo;
        this.abrirModal();
        // this.setState(s);

        // Cadastro.arrayVeiculos.push(this.state.veiculo);
        // let testeMarca = Cadastro.arrayVeiculos[0].marca;
        // let testeModelo = Cadastro.arrayVeiculos[0].modelo;
        console.log(posicao);
        // console.log(testeModelo);

    }

    render() {
        return (
            <View style={{ flex: 0.25, justifyContent: 'center' }}>
                
                <Modal animationType="slide" visible={this.state.modalVisivel}>
                    <View style={MeuEstilo.modal}>
                        
                        <View style={{paddingBottom:40}}>
                        <Text style={{fontSize:20,justifyContent:'center',alignSelf:'center',paddingBottom:30}} >Dados Encontrados:</Text>
                            <Text>Marca: {this.state.marca}</Text>
                            <Text>Modelo: {this.state.modelo}</Text>
                            <Text>Placa: {this.state.placa}</Text>
                            <Text>Ano Fabricação: {this.state.anofab}</Text>
                            <Text>Nome Condutor: {this.state.nomecondutor}</Text>
                            <Text>Numero Ocupantes: {this.state.numeroocupante}</Text>
                            <Text>Horario de parada: {this.state.horarioparadanablitz}</Text>
                            <Text>Nome Polical: {this.state.nomepm}</Text>
                            <Text>Descrição: {this.state.descricao}</Text>
                            
                        </View>
                        <Button title='Fechar' onPress={this.fecharModal} />
                    </View>
                </Modal>
                
                <Text style={{
                    color: 'black',
                    fontSize: 30,
                    paddingTop: 40,
                    //flex: 1,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>Busca de Informacoes:</Text>

                <View style={{paddingTop: 30,}}>
                    <Text style={{
                        backgroundColor: 'red',
                        color: 'white',
                        fontSize: 20,
                        
                        textAlign: 'center'
                    }} >Digite a placa do veiculo abaixo:</Text>
                </View>
                <View >
                    <TextInput
                        placeholder='Digite a placa aqui.'
                        underlineColorAndroid='black'
                        value={this.props.placa}
                        onChangeText={(placa) => { this.setState({ placa }) }}
                    ></TextInput>
                </View>

                <View>
                    <Button title='Pesquisa' onPress={() => this.bntPesquisa()}></Button>
                    
                </View>
                
            </View>
        );
    }
}
const MeuEstilo = StyleSheet.create({
    corpo:{
      flex:1,
      paddingTop:20,
      justifyContent:'center',
      alignItems:'center'
      },
      modal:{ 
        flex:1,
        backgroundColor:'transparent',
        paddingTop:40,
        alignItems:'center'
        
      },
      textoModal:{
        fontSize:20,
          
      }
  
  })


  class Excluir extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posicaoVetor:'',
            modalVisivel: false,
            flatData: []
        };

        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
        this.bntPesquisa = this.bntPesquisa.bind(this);

    }

    componentDidMount(){
        var data = Cadastro.arrayVeiculos.slice();
        let s = this.state;
        s.flatData = data.slice();
        this.setState(s);
      }
      
        flatRender(item){
          
          return(
          <View style={{flex:1,}}>
        <Text style={{fontSize:20,backgroundColor:'green'}}>Dados do relatório {item.codigo} :</Text>
            <Text style={MeuEstiloExibir.estiloFlatItem}>Marca: {item.marca}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Modelo: {item.modelo}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Ano Fabricação: {item.anofab}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Placa: {item.placa}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Nome Condutor: {item.nomecondutor}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Numero Ocupante: {item.numeroocupante}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Horario parada: {item.horarioparadanablitz}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Nome PM: {item.nomepm}</Text> 
            <Text style={MeuEstiloExibir.estiloFlatItem}>Descrição: {item.descricao}</Text> 
          </View>
          
          );
          
        }

    abrirModal() {
        let s = this.state;
        s.modalVisivel = true;
        this.setState(s);
    }

    fecharModal() {
        let s = this.state;
        s.modalVisivel = false;
        this.setState(s);
    }
    
    bntPesquisa() {
        let s = this.state;
        // var posicao = Cadastro.arrayVeiculos.map(function(e){
        //     return e.placa;
        // }).indexOf(s.placa);
        let posicaoDeletar = parseInt(s.posicaoVetor)-1;
        Cadastro.arrayVeiculos.splice(posicaoDeletar, 1);
        // s.posicaoVetor=posicao;
        // if(posicao>-1){
        //     s.marca = Cadastro.arrayVeiculos[posicao].marca;
        //     s.modelo = Cadastro.arrayVeiculos[posicao].modelo;
        //     s.placaDoVetor = Cadastro.arrayVeiculos[posicao].placaDoVetor;
        // }
        

        this.setState(s);
        Alert.alert('Item Excluido');
        this.props.navigation.goBack();
        // s.veiculo.marca = s.marca;
        // s.veiculo.modelo = s.modelo;
       // this.abrirModal();
        // this.setState(s);

        // Cadastro.arrayVeiculos.push(this.state.veiculo);
        // let testeMarca = Cadastro.arrayVeiculos[0].marca;
        // let testeModelo = Cadastro.arrayVeiculos[0].modelo;
        //console.log(posicao);
        // console.log(testeModelo);

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, justifyContent: 'center', alignSelf: 'center' }}> Deletar Relatório </Text>
                <View style={MeuEstiloExibir.corpo}>
                    <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center' }} >Dados Armazenados, role abaixo para visualizar:</Text>
                    <FlatList
                        data={this.state.flatData}
                        renderItem={({ item }) => this.flatRender(item)}
                        keyExtractor={(item, index) => item.marca}
                    />
                </View>
                
                <Text style={{fontSize:15,backgroundColor:'red'}}>Digite o numero do relatório abaixo para exclui-lo:</Text>

                
                
                
                <View style={estiloExcluir.linha}>
                    <Text style={estiloExcluir.texto} >Numero do relatório:</Text>
                </View>
                <View style={estiloExcluir.linha}>
                    <TextInput
                        placeholder='Digite o numero aqui.'
                        underlineColorAndroid='black'
                        value={this.props.placa}
                        onChangeText={(posicaoVetor) => { this.setState({ posicaoVetor }) }}
                    ></TextInput>
                </View>

                <Modal animationType="slide" visible={this.state.modalVisivel}>
                    <View style={MeuEstilo.modal}>
                        <Text>Conteudo:</Text>

                        <View>
                            <Text>Marca: {this.state.marca}</Text>
                            <Text>Modelo: {this.state.modelo}</Text>
                            <Text>Placa: {this.state.placa}</Text>
                            
                        </View>
                        <Button title='Fechar modal' onPress={this.fecharModal} />
                    </View>
                </Modal>

                <View style={estiloExcluir.linha}>
                    <Button title='Deletar item' onPress={() => this.bntPesquisa()}></Button>
                </View>
                
            </View>
        );
    }
}

const estiloExcluir = StyleSheet.create({
    corpo:{
      flex:1,
      paddingTop:20,
      justifyContent:'center',
      alignItems:'center'
      },
      modal:{ 
        flex:1,
        backgroundColor:'#00FF00',
        paddingTop:40,
        alignItems:'center'
        
      }
  
  })


class OtherScreen extends React.Component {
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


// const RootStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
//   Excluir
// });

// export default createAppContainer(RootStack);

const AppNavigator = createStackNavigator(
    {
        Tela1: {
            screen: Tela1
        },

        Cadastro: {
            screen: Cadastro
        },
        Exibir: {
            screen: Exibir
        },
        Buscar: {
            screen: Buscar
        },
        Excluir: {
             screen: Excluir
         }
    },
    {
        initialRouteName: 'Tela1',
        defaultNavigationOptions:{
            title:'Lista 1 - Exercicio 2 ',
            headerStyle: {
              backgroundColor: '#00bfff',
              height: 60
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color:'white',
              fontWeight: 'bold',
              fontSize: 30
            }
          }
    }
);
//const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(AppNavigator);