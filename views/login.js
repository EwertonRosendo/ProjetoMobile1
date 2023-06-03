import React, { useState, Fragment } from 'react';
import{ Text, TextInput, View, StyleSheet, Button, TouchableOpacity, SafeAreaView ,ScrollView } from'react-native';
import{ Entypo } from'@expo/vector-icons';
import{ FontAwesome5 } from'@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export default function App() {
  
  const[click, setClick] =useState(true)
  const[textBotao, setTextBotao] = useState('Cadastro')
  const[mode, setMode] = useState(true)

  const [background, setBackground ] = useState('#e8e8e8')
  const [backgroundIcon, setBackgroundIcon ] = useState('#474747')
  const [container_color, setContainerColor ] = useState('#e8e8e8')
  const [logo, setLogo ] = useState('green')
  const [backgroundInput, setBackgroundInput ] = useState('#e8e8e8')
  const [iconsInput, setIconsInput ] = useState('#e8e8e8')
  const [label, setLabel ] = useState('#e8e8e8')
  const [backgroundBotao, setBackgroundBotao ] = useState('#e8e8e8')
  const [textoBotao, setTextoBotao ] = useState('#e8e8e8')

  const [alerta, setAlerta] = useState('Você está usando um Email invalido!')
  const[email, setEmail] =useState('');
  const[senha, setSenha] =useState('');

  function mudarMode(){
    
    setMode(!mode)
    
    if(mode){
      cor = 'black'
    }else{
      cor = 'red'
    }
  }

/*
  function mudarMode(){
    setMode(!mode)
    if(mode){
      setBackground('#e8e8e8')
      setBackgroundIcon('#e8e8e8')
      setContainerColor('#e8e8e8')
      setBackgroundInput('#e8e8e8')
      setIconsInput('#e8e8e8')
      setLabel('#e8e8e8')
      setBackgroundBotao('#e8e8e8')
      setTextoBotao('#e8e8e8')
    }
    else{
      setBackground('#474747')
      setBackgroundIcon('#474747')
      setContainerColor('#474747')
      setBackgroundInput('#474747')
      setIconsInput('#474747')
      setLabel('#474747')
      setBackgroundBotao('#474747')
      setTextoBotao('#474747')

    }
  }*/
  function validEmail(){
    let pos = email.indexOf('@')
    if(pos==-1){
      setAlerta('Você está usando um Email invalido!')
      return false
    } else{
      setAlerta('')
      return true
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
              <TextInput style={styles.input}placeholder="Email:"value={email} onChangeText={setEmail}/>
            </View>

            <View style={styles.backgroundInput}>
              <FontAwesome5 name="key"size={24}color="black"/>
              <TextInput style={styles.input}placeholder="Senha:"value={senha} onChangeText={setSenha}/>
            </View>
            <View style={styles.forgot}>
              <Text style={styles.textEmail}>{alerta}</Text>
            </View>
            
            <TouchableOpacity style={styles.forgot}>
              <Text style={styles.textForgot}>Não possui uma conta?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cadastro} onPress={validEmail}>
              <Text style={styles.cadastroText}>Sign In</Text>
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
  fontWeight: 'bold',
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
textEmail:{
  fontWeight: 'bold',
  color:'#BB5959'
},

});