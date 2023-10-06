import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { db } from '../../Firebase'
import {doc, deleteDoc, updateDoc, getFirestore, docRef  } from 'firebase/firestore'
import {  useNavigation } from '@react-navigation/native'

function Lista({ data,editarItem}){
   
    const navigation = useNavigation();
   
''
    const Deletar = async (id)=> {
        await deleteDoc(doc(db,'eventos', id))
     }

    
    

       
    return(
        <View style={styles.container1}>
            <TouchableOpacity onPress={(id)=> navigation.navigate('Detalhes')}>
                          
                    <View style={styles.container3}>
                        <Text>Status evento: {data.status}</Text>                     
                    </View> 
                
                
                    <View style={styles.container2}>                    
                        <Text style={styles.texto}>{data.evento}</Text>
                        <Text style={styles.texto}>{data.nome}</Text>
                    <TouchableOpacity
                    onPress={()=> Deletar(data.id)}>
                        <Text>Deletar</Text>
                    </TouchableOpacity>               
                </View>
            </TouchableOpacity>
           
            
        </View>
    )
}


export default Lista;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        

    },
    container2:{
        
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        height: 35
    
    },
    container3:{
        
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
        height: 35
    }
})