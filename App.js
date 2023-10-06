import { StatusBar } from 'expo-status-bar';
import { createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Home from './pages/Home'
import List from './pages/List'
import Modal from './pages/Modal'
import Inputs from './pages/Inputs';
import Flex from './pages/Flex'
import MyComponents from './ComponentsRnPaper'
import Mascara from './pages/Mascara'
import NovaMascara from './pages/NovaMascara';
import Crud from './pages/Crud';
import Detalhes from './pages/Detalhes'
import Busca from './pages/Busca';




const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>  
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Modal' component={Modal}/>
        <Stack.Screen name='Inputs' component={Inputs}/>
        <Stack.Screen name='Flex' component={Flex}/>
        <Stack.Screen name='MyComponents' component={MyComponents}/>
        <Stack.Screen name='Mascara' component={Mascara}/>
        <Stack.Screen name='NovaMascara' component={NovaMascara}/>
        <Stack.Screen name='Crud' component={Crud}/>
        <Stack.Screen name='Detalhes' component={Detalhes}/>
        <Stack.Screen name='Busca' component={Busca}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}


