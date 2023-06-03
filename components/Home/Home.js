import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView,SafeAreaView, FlatList, Image,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { Cortes }  from '../Cortes/Cortes';


export function Home({navigation, route}) {
  const [cortess, setCortes] = React.useState([
    {NomeCorte:'Degrade', linkImg:'https://i.pinimg.com/564x/b8/e7/70/b8e7707275d8f8473f06adfbb3b0f781.jpg', descCorte:'O corte degradê é uma técnica de corte de cabelo que cria camadas graduais em diferentes comprimentos, resultando em um visual moderno e texturizado.', key:1, valor:20.0},
    {NomeCorte:'Navalhado', linkImg:'https://i.pinimg.com/564x/e8/fa/00/e8fa0062e97c6c07b137baa374c85b76.jpg', descCorte:'Corte navalhado é uma técnica de corte de cabelo em que os fios são cortados com uma navalha, resultando em um visual mais leve e texturizado.', key:2, valor:12.50},
    {NomeCorte:'Apenas Tesoura', linkImg:'https://i.pinimg.com/564x/fd/7e/ef/fd7eefe8afc98de315fba22ed28dfa7d.jpg', descCorte:'Corte apenas com tesoura é uma técnica de corte de cabelo em que os fios são cortados apenas com tesoura, resultando em um visual mais uniforme e com menos textura.', key:3, valor:20.0},
    {NomeCorte:'Corte Militar', linkImg:'https://i.pinimg.com/564x/cc/44/43/cc44431ed43684df931841919056764a.jpg', descCorte:'Corte militar é um estilo de corte de cabelo masculino curto e prático, geralmente com laterais raspadas e volume no topo, inspirado no visual militar.', key:4, valor:19.0},
    {NomeCorte:'Fluffy Hair', linkImg:'https://i.pinimg.com/564x/ca/8b/e1/ca8be146ee7215a0165eb3ad7d7db9ed.jpg', descCorte:'O corte Fluffy Hair é um estilo de corte de cabelo em camadas, que tem como objetivo criar um visual volumoso e descontraído, com fios levemente desfiados e textura natural.', key:5,valor:22.0},
    {NomeCorte:'Fluffy Hair', linkImg:'https://i.pinimg.com/564x/ca/8b/e1/ca8be146ee7215a0165eb3ad7d7db9ed.jpg', descCorte:'O corte Fluffy Hair é um estilo de corte de cabelo em camadas, que tem como objetivo criar um visual volumoso e descontraído, com fios levemente desfiados e textura natural.', key:6, valor:22.0},
    {NomeCorte:'Fluffy Hair', linkImg:'https://i.pinimg.com/564x/ca/8b/e1/ca8be146ee7215a0165eb3ad7d7db9ed.jpg', descCorte:'O corte Fluffy Hair é um estilo de corte de cabelo em camadas, que tem como objetivo criar um visual volumoso e descontraído, com fios levemente desfiados e textura natural.', key:7, valor:22.0},
    ])
    const { email } = route.params;
    console.log(email)
    const [valorSomado, setValorSomado] = React.useState(0)


  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E7E7E7' }}>
    
      <View style={styles.container}>
      <View style={styles.valores}>
        <Text style={styles.nomecorte}>Soma dos cortes:</Text>
        <TouchableOpacity style={styles.reto} onPress={()=>navigation.navigate('Agendamentos')}>
        <Text style={styles.nomecorte}>R$ {valorSomado}</Text><AntDesign name="shoppingcart" size={24} color="#109DFA" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.todosCortes}>
        <FlatList
            data={cortess}
            numColumns={1}
            renderItem={({ item }) => (
            <Cortes props={item} navigation={navigation} email={email}/>
            )}
            />
      </View>
        

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',   
    backgroundColor: '#E7E7E7',
    padding: 8,
    marginTop:40
  },
  linha:{
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  marginTop:20,
  marginHorizontal:20,

  },
  image:{
    width:70,
    height:70,
    borderRadius:10,
  },
  areaFoto:{
    width:'20%',
    backgroundColor:'',
    justifyContent: 'center',
  alignItems:'center',
  },
  areaTexto:{
    width:'75%',
    backgroundColor:'',
  },
  row:{
    height:1,
    backgroundColor:'#d9d9d9',
    marginBottom:5,
    marginTop:5
  },
  nomecorte:{
    fontWeight: 'bold'
  },
  desccorte:{
    textAlign: 'justify'
  },
  todosCortes:{
    marginBottom:50
  },
  valores:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginHorizontal:'8%'
  },
  reto:{
    flexDirection:'row',
  }
});