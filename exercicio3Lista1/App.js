import React, { Component } from 'react';
import { FlatList, Button, View, Text, Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import { Alert, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';



class Tela1 extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {
      resultadoForca: '',
      resultadoForcaCentrifuga: '',
      resultadoEnergiaCinetica: ''
    }
    this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.setState({ is_updated: true });
      }
    );


  }

  // componentDidMount(){
  //     var data = Tela1.arrayDados.slice();
  //     let s = this.state;
  //     s.resultadoForca = Tela1.arrayDados[0].resultadoForca;
  //     s.resultadoForcaCentrifuga = Tela1.arrayDados[1].resultadoForcaCentrifuga;
  //     s.resultadoEnergiaCinetica = Tela1.arrayDados[2].resultadoEnergiaCinetica;
  //     this.setState(s);
  //   }

  render() {
    return (
      <View style={estiloTela1.body}>

        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ADD8E6', }}>

          <Text style={estiloTela1.titulo}>Calculos Fisicos </Text>
          <Text style={estiloTela1.subTitulo}>Dados Inseridos:</Text>
          
          <View style= {{margin:5,borderColor:'black',borderWidth:1}}>
            <Text style={estiloTela1.textoValores}>Calculo da Forca:</Text>
            <Text style={[estiloTela1.textoValores,{alignContent:'center',paddingLeft:20,color:'red'}]}> Massa = {Tela1.arrayDados[0].massa} Kg, Aceleracao= {Tela1.arrayDados[0].aceleracao} m/s2 </Text>
            
            <Text style={estiloTela1.textoValores}>Calculo da Forca Centrifuga:</Text>
            <Text style={[estiloTela1.textoValores,{alignContent:'center',paddingLeft:20,color:'red'}]}> Massa = {Tela1.arrayDados[1].massa} Kg, Raio = {Tela1.arrayDados[1].raio} m, Velocidade= {Tela1.arrayDados[1].velocidade} m/s</Text>

            <Text style={estiloTela1.textoValores}>Calculo da Energia Cinetica:</Text>
            <Text style={[estiloTela1.textoValores,{alignContent:'center',paddingLeft:20,color:'red'}]}> Massa = {Tela1.arrayDados[2].massa} Kg, Velocidade: {Tela1.arrayDados[2].velocidade} m/s</Text>

          </View>

          <Text style={estiloTela1.subTitulo}>Resultados:</Text>
          <View style= {{margin:5,borderColor:'black',borderWidth:1}}>
            <Text style={[estiloTela1.textoValores,{alignContent:'center',paddingLeft:20,color:'red'}]}>Forca= {Tela1.arrayDados[0].resultadoForca} N</Text>
            <Text style={[estiloTela1.textoValores,{alignContent:'center',paddingLeft:20,color:'red'}]}>Forca Centrifuga= {Tela1.arrayDados[1].resultadoForcaCentrifuga} N</Text>
            <Text style={[estiloTela1.textoValores,{alignContent:'center',paddingLeft:20,color:'red'}]}>Energia Cinetica= {Tela1.arrayDados[2].resultadoEnergiaCinetica} J</Text>
          </View>


        </View>

        <Text style={estiloTela1.textoInformacao}>Clique nos botões para inserir dados:</Text>
        <View style={{ margin: 20 }}>
          <Button
            title='Calculo de Forca'
            onPress={() => this.props.navigation.navigate('Forca')}>

          </Button>
        </View>

        <View style={{ margin: 20 }}>
          <Button
            title='Calculo de Forca Centrifuga'
            onPress={() => this.props.navigation.navigate('ForcaCentrifuga')}>

          </Button>
        </View>

        <View style={{ margin: 20 }}>
          <Button
            title='Calculo de Energia Cinetica'
            onPress={() => this.props.navigation.navigate('EnergiaCinetica')}>

          </Button>
        </View>
        {/* 
                <View style={{ margin: 20 }}>
                    <Button
                        title='Exibir Informacoes cadastradas'
                        onPress={() => this.props.navigation.navigate('Exibir')}>

                    </Button>
                </View> */}

      </View>

    );
  }
}

const estiloTela1 = StyleSheet.create({
  body: {
    //paddingTop: 10,
    flex: 1
  },
  titulo: {
    //backgroundColor: '#ADD8E6',
    color: 'black',
    
    //flex: 0.5,
    //textAlign: 'left',
    //backgroundColor: 'blue',
    fontSize: 30,
    //padding: 20,
    fontWeight: 'bold',
    //flex: 1,
    textAlign: 'center',
    justifyContent: 'center'

  },
  subTitulo: {
    //backgroundColor: '#ADD8E6',
    color: '#000080',
    
    //flex: 0.5,
    textAlign: 'left',
    //backgroundColor: 'blue',
    fontSize: 20,
    //padding: 20,
    fontWeight: 'bold',
    //flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    //paddingBottom:5
  },
  textoValores: {
    paddingLeft: 10,
    //justifyContent: 'center'
    fontSize:18,
    //fontStyle
  },
  textoInformacao: {
    paddingLeft: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    //flex: 1,
    //textAlign: 'left'

  },
  // linha: {
  //   flex: 1,
  //   flexDirection: 'column'
  // },
  
  // resultadoDetalhes: {
  //   backgroundColor: '#ADD8E6',
  //   color: 'black',
  //   fontSize: 20,
  //   flex: 1,
  //   textAlign: 'left'
  // }


});

class Forca extends Component {
  constructor(props) {
    super(props);


    this.state = {
      massa: '',
      aceleracao: '',
      forca: '',
      // resultado:{
      //     forca:'',
      //     forcac:'',
      //     energiaC:''
      // }
    };

    this.bntCadastro = this.bntCadastro.bind(this);

  }

  bntCadastro() {
    let s = this.state;

    let forca = parseFloat(s.massa) * parseFloat(s.aceleracao);


    Tela1.arrayDados[0]['resultadoForca'] = forca.toFixed(4);;
    Tela1.arrayDados[0]['massa'] = s.massa;
    Tela1.arrayDados[0]['aceleracao'] = s.aceleracao;
    // let testeMarca = Cadastro.arrayVeiculos[0].marca;
    // let testeModelo = Cadastro.arrayVeiculos[0].modelo;


    this.setState(s);

    Alert.alert('Cadastrado com sucesso');
    this.props.navigation.goBack();


  }

  render() {
    return (
      <View style={estiloCadastro.body}>

        <View >
          <Text style={estiloCadastro.titulo}>Calculo de Forca</Text>
        </View>
        <View >

          <Text style={estiloCadastro.texto2} >Preencha os campos abaixo:</Text>
        </View>

        <View >
          <Text style={estiloCadastro.texto} >Massa:</Text>
        </View>
        <View >
          <TextInput
            placeholder='Digite massa em kg aqui.'
            underlineColorAndroid='black'
            value={this.props.marca}
            onChangeText={(massa) => { this.setState({ massa }) }}
          ></TextInput>
        </View>

        <View >
          <Text style={estiloCadastro.texto} >Aceleracao:</Text>
        </View>
        <View >
          <TextInput
            placeholder='Digite aceleracao em m/s2 aqui.'
            underlineColorAndroid='black'
            value={this.props.modelo}
            onChangeText={(aceleracao) => { this.setState({ aceleracao }) }}
          ></TextInput>
        </View>


        <View >
          <Button title='Salvar' onPress={() => this.bntCadastro()}></Button>

        </View>

      </View>

    );
  }
}

const estiloCadastro = StyleSheet.create({
  body: {
    paddingTop: 10,
    flex: 1
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
  texto2: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    justifyContent:'center'
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


class ForcaCentrifuga extends Component {
  constructor(props) {
    super(props);


    this.state = {
      massa: '',
      raio: '',
      velocidade: '',
      forcaCentrifuga: '',
      // resultado:{
      //     forca:'',
      //     forcac:'',
      //     energiaC:''
      // }
    };

    this.bntCadastro = this.bntCadastro.bind(this);

  }

  bntCadastro() {
    let s = this.state;

    let massa = parseFloat(s.massa);
    let velocidadeQuadrado = parseFloat(s.velocidade) * parseFloat(s.velocidade);
    let raio = parseFloat(s.raio);

    let forcaCentrifuga = (massa * velocidadeQuadrado / raio);
    //console.log(forcaCentrifuga);

    Tela1.arrayDados[1]['resultadoForcaCentrifuga'] = forcaCentrifuga.toFixed(4);
    Tela1.arrayDados[1]['raio'] = s.raio;
    Tela1.arrayDados[1]['velocidade'] = s.velocidade;
    Tela1.arrayDados[1]['massa'] = s.massa;


    this.setState(s);

    Alert.alert('Cadastrado com sucesso');
    this.props.navigation.goBack();


  }

  render() {
    return (
      <View style={estiloTelaForcaCentrifuga.body}>

        <View style={estiloTelaForcaCentrifuga.linha}>
          <Text style={estiloTelaForcaCentrifuga.titulo}>Calculo de Forca Centrifuga</Text>
        </View>
        <View style={estiloTelaForcaCentrifuga.linha}>
          <Text style={estiloTelaForcaCentrifuga.texto2} >Preencha os campos:</Text>
        </View>

        <View style={estiloTelaForcaCentrifuga.linha}>
          <Text style={estiloTelaForcaCentrifuga.texto} >Massa:</Text>
        </View>
        <View style={estiloTelaForcaCentrifuga.linha}>
          <TextInput
            placeholder='Digite massa aqui.'
            underlineColorAndroid='black'
            value={this.props.marca}
            onChangeText={(massa) => { this.setState({ massa }) }}
          ></TextInput>
        </View>

        <View style={estiloTelaForcaCentrifuga.linha}>
          <Text style={estiloTelaForcaCentrifuga.texto} >velocidade:</Text>
        </View>
        <View style={estiloTelaForcaCentrifuga.linha}>
          <TextInput
            placeholder='Digite velocidade aqui.'
            underlineColorAndroid='black'
            value={this.props.modelo}
            onChangeText={(velocidade) => { this.setState({ velocidade }) }}
          ></TextInput>
        </View>

        <View style={estiloTelaForcaCentrifuga.linha}>
          <Text style={estiloTelaForcaCentrifuga.texto} >Raio:</Text>
        </View>
        <View style={estiloTelaForcaCentrifuga.linha}>
          <TextInput
            placeholder='Digite reaio aqui.'
            underlineColorAndroid='black'
            value={this.props.modelo}
            onChangeText={(raio) => { this.setState({ raio }) }}
          ></TextInput>
        </View>

        <View style={estiloTelaForcaCentrifuga.linha}>
          <Button title='Salvar' onPress={() => this.bntCadastro()}></Button>

        </View>

      </View>

    );
  }
}

const estiloTelaForcaCentrifuga = StyleSheet.create({
  body: {
    paddingTop: 10,
    flex: 1
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
  texto2: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    justifyContent:'center'
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


class EnergiaCinetica extends Component {
  constructor(props) {
    super(props);


    this.state = {
      massa: '',
      velocidade: '',
      energiaCinetica: '',
    };

    this.bntCadastro = this.bntCadastro.bind(this);

  }

  bntCadastro() {
    let s = this.state;

    let massa = parseFloat(s.massa);
    let velocidadeQuadrado = parseFloat(s.velocidade) * parseFloat(s.velocidade);


    let energiaCinetica = (massa * velocidadeQuadrado * 0.5);
    console.log(energiaCinetica);

    Tela1.arrayDados[2]['resultadoEnergiaCinetica'] = energiaCinetica.toFixed(4);;
    Tela1.arrayDados[2]['massa'] = s.massa;
    Tela1.arrayDados[2]['velocidade'] = s.velocidade;


    this.setState(s);

    Alert.alert('Cadastrado com sucesso');
    this.props.navigation.goBack();


  }

  render() {
    return (
      <View style={estiloTelaEnergiaCinetica.body}>

        <View style={estiloTelaEnergiaCinetica.linha}>
          <Text style={estiloTelaEnergiaCinetica.titulo}>Calculo de Energia Cinetica</Text>
        </View>
        <View style={estiloTelaEnergiaCinetica.linha}>
          <Text style={estiloTelaEnergiaCinetica.texto2} >Preencha os campos:</Text>
        </View>

        <View style={estiloTelaEnergiaCinetica.linha}>
          <Text style={estiloTelaEnergiaCinetica.texto} >Massa:</Text>
        </View>
        <View style={estiloTelaEnergiaCinetica.linha}>
          <TextInput
            placeholder='Digite massa aqui.'
            underlineColorAndroid='black'
            value={this.props.marca}
            onChangeText={(massa) => { this.setState({ massa }) }}
          ></TextInput>
        </View>

        <View style={estiloTelaEnergiaCinetica.linha}>
          <Text style={estiloTelaEnergiaCinetica.texto} >velocidade:</Text>
        </View>
        <View style={estiloTelaEnergiaCinetica.linha}>
          <TextInput
            placeholder='Digite velocidade aqui.'
            underlineColorAndroid='black'
            value={this.props.modelo}
            onChangeText={(velocidade) => { this.setState({ velocidade }) }}
          ></TextInput>
        </View>

        <View style={estiloTelaEnergiaCinetica.linha}>
          <Button title='Salvar' onPress={() => this.bntCadastro()}></Button>

        </View>

      </View>

    );
  }
}

const estiloTelaEnergiaCinetica = StyleSheet.create({
  body: {
    paddingTop: 10,
    flex: 1
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
  texto2: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    justifyContent:'center'
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


class Excluir extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posicaoVetor: '',
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
    // var posicao = Cadastro.arrayVeiculos.map(function(e){
    //     return e.placa;
    // }).indexOf(s.placa);

    removed = Cadastro.arrayVeiculos.splice(s.posicaoVetor, 1);
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

        <Text>Deleta dados:</Text>
        <Text>Digite a posicao no vetor que deseja Excluir:</Text>

        <View style={estiloExcluir.linha}>
          <Text style={estiloExcluir.texto} >Posicao vetor:</Text>
        </View>
        <View style={estiloExcluir.linha}>
          <TextInput
            placeholder='Digite a posicao aqui.'
            underlineColorAndroid='black'
            value={this.props.placa}
            onChangeText={(posicaoVetor) => { this.setState({ posicaoVetor }) }}
          ></TextInput>
        </View>

        <View style={estiloExcluir.linha}>
          <Button title='Deletar item' onPress={() => this.bntPesquisa()}></Button>
        </View>

      </View>
    );
  }
}

const estiloExcluir = StyleSheet.create({
  corpo: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    flex: 1,
    backgroundColor: '#00FF00',
    paddingTop: 40,
    alignItems: 'center'

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

    Forca: {
      screen: Forca
    },
    ForcaCentrifuga: {
      screen: ForcaCentrifuga
    },
    EnergiaCinetica: {
      screen: EnergiaCinetica
    },
    // Excluir: {
    //      screen: Excluir
    //  }
  },
  {
    initialRouteName: 'Tela1',
    defaultNavigationOptions: {
      title: 'Lista 1 - Exercicio 3 ',
      headerStyle: {
        backgroundColor: '#191970',
        height: 60
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
      }
    }
  }
);
//const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(AppNavigator);