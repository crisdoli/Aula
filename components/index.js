import React from 'react'
import { StyleSheet } from 'react-native'
import { maskTelefone, maskValor, maskCPF, maskData, maskHora} from '../utils/mask'
import { TextInput, Button, Modal, Portal, PaperProvider, List, Divider } from 'react-native-paper';

const Input = ({ mask, inputMaskChange, ...rest }) => {
  function handleChange(text) {
    if (mask === 'telefone') {
      const value = maskTelefone(text)
      inputMaskChange(value)
    }
    if (mask === 'valor') {
      const value = maskValor(text)
      inputMaskChange(value)
    }
    if (mask === 'data') {
      const value = maskData(text)
      inputMaskChange(value)
    }

    if (mask === 'cpf') {
      const value = maskCPF(text)
      inputMaskChange(value)
    }

    if (mask === 'hora') {
      const value = maskHora(text)
      inputMaskChange(value)
    }

  }

  return (
    //<TextInput
      //style={styles.input}
      //onChangeText={(text) => handleChange(text)}
      //placeholder={
        //mask === 'telefone' ? 'Telefone' 
        //:  
       // mask === 'data' ? 'Data'
        //: 
        //mask === 'valor' ? 'Valor'
        //: 
        //mask === 'hora' ? 'Hora': ''  }
      //placeholderTextColor="rgba(255, 255, 255, 0.9)"
      //{...rest}
    ///>

    <TextInput
    
    label={
      mask === 'telefone' ? 'Telefone' 
      :  
      mask === 'data' ? 'Data Aniversario'
      : 
      mask === 'valor' ? 'Valor'
      : 
      mask === 'cpf' ? 'CPF': ''  }                       
    onChangeText={text => handleChange(text)}
    activeUnderlineColor="#4169E1"
    keyboardType="numeric"
    placeholder={
      mask === 'telefone' ? 'Telefone' 
      :  
      mask === 'data' ? 'Data'
      : 
      mask === 'valor' ? 'Valor'
      : 
      mask === 'hora' ? 'Hora': ''  }
    {...rest}
    />  

    
    
    
   



  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    color: '#FFFFFF',
  },
})