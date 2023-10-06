import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet} from 'react-native';
import Input from '../../components'


function NovaMascara(){
    
    const [telefone, setTelefone] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
     
    
    
    return(
    <View style={styles.container}>
      <Input
        value={telefone}
        mask='telefone'
        inputMaskChange={(text) => setTelefone(text)}
      />

      <Input
        value={valor}
        mask='valor'
        inputMaskChange={(text) => setValor(text)}
      />

      <Input
        value={data}
        mask='data'
        inputMaskChange={(text) => setData(text)}
      />

      <Input
        value={hora}
        mask='hora'
        inputMaskChange={(text) => setHora(text)}
      />






    </View>
    )
}

export default NovaMascara;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0584B0',     
      paddingHorizontal: 20,
    },
  })

