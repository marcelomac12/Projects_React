import { createBottomTabNavigator  } from 'react-navigation-tabs';

import { createAppContainer } from 'react-navigation';
import PesquisaStack from './Pesquisar';
import CadastroNotaStack from './CadastroNota';

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

export default createAppContainer(HomeTabNavigator);