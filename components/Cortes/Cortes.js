import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView,SafeAreaView, FlatList, Image,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

export function Cortes({props, navigation, email}){
return(
<View>
        
    <View style={styles.row}><Text></Text></View>
    
    <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate("Carrinho", {linkImg:props.linkImg, email: email})} >
    <View style={styles.linha}>

      <View style={styles.areaTexto}>
    
        <View>
          <Text style={styles.nomecorte}>  {props.NomeCorte} </Text>
          
        </View>
        <Text style={styles.desccorte}> {props.descCorte} </Text>  
    
      </View>
    
      <View style={styles.areaFoto}>
    
        <Image source={{uri: props.linkImg}} style={styles.image} />
        
    
      </View>
      
    </View>
    </TouchableOpacity>
    
    
    </View>  
    )
    
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
    }
  });