import React, {useEffect, useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { db } from '../../Firebase'
import {doc, collection, setDoc, query, getDocs, updateDoc } from 'firebase/firestore'




function Detalhes(){   
    const [evento, setEditarEvento] = useState()
    const [nome, setEditarNome] = useState()
    const [dados, setDados] = useState([]);



    useEffect(() => {
        (async () => {
          //query para o firebase
          let q = query(collection(db, "eventos"));
          //get  para o firebase
          let snapshot = await getDocs(q);
          //gerar os dados
          let data = snapshot.docs.map((doc) => doc.data());
          //salvar no state os dados
          setDados(data);
          console.log(data)
          
        })();
      }, []);


      const handleEditTitle = async () => {
      let payload = {
        evento,
        nome
      };
      try {
        //atualizar os dados
        await updateDoc(doc(db, "eventos"), payload);
  
        //buscar os dados atualizados no firebase
        (async () => {
          //query para o firebase
          let qry = query(collection(db, "eventos"));
          //get  para o firebase
          let snapshot = await getDocs(qry);
          //gerar os dados
          let data = snapshot.docs.map((doc) => doc.data());
          //salvar no state os dados
          setDados(data);
        })();
      } catch (error) {
        console.log(error);
      }
    };



    return(
        <View style={{alignItems: 'center'}}>            
            <TextInput
          placeholder={evento}
          value={evento}
          onChangeText={(text)=> setEditarEvento(text)}
          style={{
            width:'90%', 
        height: 50, 
        borderColor: '#000', 
        borderWidth: 1, 
        marginTop:10

          }}/>

          <TextInput
          placeholder='nome'
          value={nome}
          onChangeText={(text)=> setEditarNome(text)}
          style={{
            width:'90%', 
        height: 50, 
        borderColor: '#000', 
        borderWidth: 1, 
        marginTop:10
          }}/>

          <TouchableOpacity
          onPress={handleEditTitle}
          style={{
            width:'90%', 
        height: 50, 
        borderColor: '#000', 
        borderWidth: 1, 
        marginTop:10, 
        backgroundColor: '#ddd', 
        justifyContent: 'center', 
        alignItems: 'center'
          }}>                  
              <Text >Inserir</Text>
          </TouchableOpacity>
        </View>
    )
}


export default Detalhes;

