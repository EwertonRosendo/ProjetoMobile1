import React, { useState, Fragment } from 'react';
import{ Text, TextInput, View, StyleSheet, Button, TouchableOpacity, SafeAreaView ,ScrollView } from'react-native';
import{ Entypo } from'@expo/vector-icons';
import{ FontAwesome5 } from'@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Axios from 'axios'


export function Cadastro({navigation}) {

  const[email, setEmail] =useState('');
  const[senha, setSenha] =useState('');
  const[mode, setMode] = useState(true)

  const cadastrar = () => {
    console.log(email, senha)
    Axios.post("http://172.20.0.1:3001/cadastrar", {email:email, senha:senha})
    navigation.navigate("Login")
  }

  function mudarMode(){
    
    setMode(!mode)
    
    if(mode){
      cor = 'black'
    }else{
      cor = 'red'
    }
  }

    return(
      <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#E7E7E7' }}>
      
        <View style={styles.mode}>
        
          <TouchableOpacity style={styles.icon} onPress={mudarMode}>
          {
            mode ?
            <Feather name="sun" size={24} color="white" /> //claro
            
            :
            <FontAwesome5 name="cloud-moon" size={24} color="white" /> //escuro

          }
          
          </TouchableOpacity>
            
          
          <View style={styles.container}>
          
            <Text style={styles.logo}>Barbearia</Text>

            <View style={styles.backgroundInput}>
              <Entypo name="mail"size={24}color="black"/>
              <TextInput style={styles.input}placeholder="Email:"onChangeText={setEmail}/>
            </View>

            <View style={styles.backgroundInput}>
              <FontAwesome5 name="key"size={24}color="black"/>
              <TextInput style={styles.input}placeholder="Senha:"onChangeText={setSenha}/>
            </View>

            <TouchableOpacity style={styles.forgot} onPress={()=> navigation.navigate("Login")}>
              <Text style={styles.textForgot}>Já possui uma conta?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cadastro} onPress={cadastrar}>
              <Text style={styles.cadastroText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
            
        </View>
        </SafeAreaView>
      </Fragment>
      );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:'#fff',
    alignItems:'center',
    marginTop:'20%'
},
input:{
  marginLeft:5,
   padding:10,
   width:'90%',
},
backgroundInput:{
  alignItems:'center',
  flexDirection:'row',
  borderWidth:1,
  borderColor:"#777",
  padding:8,
  margin:10,
  width:'80%',
  borderRadius:5
},
logo:{
  fontSize:40,
  fontStyle:'italic',
  margin:40,
  fontWeight: 'bold'
},
cadastro:{
  backgroundColor:'#109DFA',
  width:'80%',
  height:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  marginTop:20,
},
cadastroText:{
  fontSize:30,
  color:'white',
  fontWeight: 'bold'
},
forgot:{
  width:'80%',
  alignItems:'flex-end',
  marginRight:20, 
},
textForgot:{
  fontWeight: 'bold',
  color:'#109DFA'
},
mode:{
  flex:1,
  marginTop:40,
  backgroundColor:'#E7E7E7',
  
},
icon:{
  margin:20,
  width:40,
  height:40,
  backgroundColor:'black',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10, 
},
haveAccount:{
  justifyContent:'flex-end',
  alignItems:'center',
  backgroundColor:'black'
},
textHaveAccount:{
  color:'white',
  fontWeight: 'bold',
  paddingTop:5,
  
}
});