import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { db } from '../../Firebase'
import {doc, collection, setDoc, query, onSnapshot, QuerySnapshot, deleteDoc, orderBy } from 'firebase/firestore'
import Lista from "../../components/Lista";


export default function Crud(){
    const [ evento, setEvento ] = useState() 
    const [ nome, setNome ] = useState() 
    const [ dados, setDados ] = useState([])
    const [ status, setStatus] = useState('Em andamento')
    
    //Create
    const Adicionar = async ()=> {
        let docRef = doc(collection(db, 'eventos'))

        let payload = {
            id: docRef.id,
            evento: evento,
            nome: nome,
            status: status

        };
        await setDoc(docRef, payload)
        setEvento()
        setNome()
        
    }

    //Read     
    useEffect(()=> {
         const q = query(collection(db, 'eventos'), orderBy('evento', 'asc'))
         const unsub = onSnapshot(q,(querySnapshot) => {
            let listaArray = [];
            querySnapshot.forEach( (doc)=> {
                 listaArray.push({...doc.data(), id: doc.id
                
                })   
            })
            setDados(listaArray)
         })
         return () => unsub();
        
    }, [])


    function editar(id){
        alert('teste')
        console.log(id)
        
    }
    
    
  return(
      <View style={styles.container}>
          <TextInput
          value={evento}
          onChangeText={(text)=> setEvento(text)}
          style={styles.input}/>

          <TextInput
          value={nome}
          onChangeText={(text)=> setNome(text)}
          style={styles.input}/>

          <TouchableOpacity
          onPress={Adicionar}
          style={styles.botao}>                  
              <Text >Inserir</Text>
          </TouchableOpacity>

          <FlatList
          data={dados}
          renderItem= { ({item})=> (<Lista data={item} editarItem={editar}/>)}
          
          />   

      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"      
    },

    input:{
        width:'90%', 
        height: 50, 
        borderColor: '#000', 
        borderWidth: 1, 
        marginTop:10
    },
    botao:{
        width:'90%', 
        height: 50, 
        borderColor: '#000', 
        borderWidth: 1, 
        marginTop:10, 
        backgroundColor: '#ddd', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
    
})

