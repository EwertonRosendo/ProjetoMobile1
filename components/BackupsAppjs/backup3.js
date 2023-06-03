import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cadastro }   from './components/cadastro/cadastro';
import  { Login }  from './components/login/login';
import { Home }   from './components/Home/Home'
import { Carrinho } from './components/Carrinho/Carrinho'


const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cadastro'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
