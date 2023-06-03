import React, { useState, Fragment } from 'react';
import{ Text, TextInput, View, StyleSheet, Button, TouchableOpacity, SafeAreaView ,ScrollView,Image, StatusBar} from'react-native';
import{ Entypo } from'@expo/vector-icons';
import{ FontAwesome5 } from'@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Axios from 'axios';
import { CalendarPicker } from '../CalendarPicker/CalendarPicker';
import { SelectList } from 'react-native-dropdown-select-list'


export function Carrinho({navigation, route}) {

  const [json_data, setJson_Data] = useState()
  const [horario, setHorario] = useState('')

  const agendar = () => {
    
    //console.log("o json data é isso ai mesmo", json_data)
    //console.log(horario)

    Axios.post("http://172.20.0.1:3001/agendamento", {email:email, dia:json_data.day, mes:json_data.month, ano:json_data.year, horario:horario, valor_corte:'20'})
    
    console.log('foi embora doidao')
  }

  const [selected, setSelected] = React.useState("");

  const { linkImg, email } = route.params;
  
  console.log("parametros recebidos na tela de carrinho", linkImg, email)
  
  const data = [
      {key:'1', value:'08:00', disabled:true},
      {key:'2', value:'08:30'},
      {key:'3', value:'09:00'},
      {key:'4', value:'09:30', disabled:true},
      {key:'5', value:'10:00'},
      {key:'6', value:'10:30'},
      {key:'7', value:'11:00'},
      {key:'8', value:'11:30'},
      {key:'9', value:'12:00'},
      {key:'10', value:'14:00', disabled:true},
      {key:'11', value:'14:30'},
      {key:'12', value:'15:30'},
      {key:'13', value:'16:00'},
  ]
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <View style={styles.fotodocorte}>
          <Image source={{uri:linkImg}}style={styles.image}/>
          </View >
          
            <CalendarPicker setData_json={setJson_Data}/>
          
          <View style={styles.divfim}>
            <View style={styles.divtexto}>

            {/* Abaixo é a lista de seleção de hora*/}
            <SelectList 
        setSelected={(val) => setHorario(val)} 
        data={data} 
        save="value"
        searchPlaceholder='Selecionar Horario'
        placeholder='Selecionar Horario'
        
    />
            </View>
            
             <TouchableOpacity style={styles.botao} onPress={agendar}>
                <Text style={styles.confirmarText}>Confirmar</Text> 
             </TouchableOpacity>
            

          </View>            
        </ScrollView>  
        </SafeAreaView>     
      );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E7E7E7',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingTop: StatusBar.currentHeight
    
},
fotodocorte:{
    //backgroundColor:'#fff',
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
},
textodocorte:{
    fontSize:50,
},
divcalendario:{
    //backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
},
divfim:{
       //backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row', 
    width:'100%'  
},

botao:{
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:46,
    backgroundColor:'#109DFA',
    borderRadius:10,
},
image:{
    width:200,
    height:200,
    borderRadius:10,
    resizeMode:'cover'
  },
  confirmarText:{
    fontWeight:'bold',
    color:'white'
  }
});