import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity,Text,Modal} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';

export function CalendarPicker({setData_json}){
    
    return(
        
                
                <Calendar 
                
                style={{borderRdius:10,elevation:4, marginVertical:10, width:285, borderRadius:10}}
                onDayPress={date => {
                    setData_json(date)
                }
                
            }
                 />
             
        
    );
};

