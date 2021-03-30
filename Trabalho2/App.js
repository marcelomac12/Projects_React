import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import PesquisaStack from './PesquisaStack';
import CadastroStack from './CadastroStack';

const HomeTabNavigator = createBottomTabNavigator(
    {
        PesquisaStack: {
            screen: PesquisaStack,
            navigationOptions:{
                title:'Pesquisa'
            }
        },
        CadastroStack: {
            screen: CadastroStack,
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