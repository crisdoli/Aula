import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Input from '../../components'

export default function Mascara() {
  const [data, setData] = useState('')
  const [cpf, setCPF] = useState('')

  return (
    <View >
      <Input
        value={data}
        mask='data'
        inputMaskChange={(text) => setData(text)}
        
      />

      <Input
        value={cpf}
        mask='cpf'
        inputMaskChange={(text) => setCPF(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0584B0',
    
    width: '90%',
  
    paddingHorizontal: 20,
  },
})