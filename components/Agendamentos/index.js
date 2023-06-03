import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView,SafeAreaView, FlatList, Image,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { Cortes }  from '../Cortes/Cortes';
import Axios from 'axios';
import { Feather } from '@expo/vector-icons';

export function Agendamentos({navigation, route}) {

const [lista, setLista] = useState([])

useEffect(()=>{
    Axios.get("http://172.20.0.1:3001/agendamentos").then((response)=>{
        setLista(response.data)
        //console.log(lista)
        
    }
    )
}, [lista])

const deletarItem = (key) =>{
    console.log("chamando a função de deletar", key)
    Axios.delete(`http://172.20.0.1:3001/agendamentos/${key}`,)
    
}

  return (
    
    <View style={styles.container}>
        <Text style={styles.h1}>Historico de agendamentos</Text>
    <FlatList
    style={styles.flat}
    data={lista}
    numColumns={1}
    renderItem={({item})=>(
        <View style={styles.linha}>
            <Text style={styles.textLinha}>{item.dia}/{item.mes}/{item.ano} as {item.horario} - R${item.valor_corte}</Text> <TouchableOpacity style={styles.apagar} onPress={() => deletarItem(item.id)}><Feather name="trash-2" size={24} color="#ff4747" /></TouchableOpacity>
        </View>
        
    )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    padding: 8,
    marginTop:40
  },
  linha:{
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    padding:10
    },
    textLinha:{
        fontWeight:'bold',
        marginRight:20
    },
    apagar:{
        backgroundColor:'#d9d9d9',
        padding:10,
        borderRadius:10
    },
    h1:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:20,
        marginLeft:9    
    }
  
});