import React, {useState}from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList} from "react-native"


export default function Inputs(){
      const [input, setInput] = useState() 
      const [lista, setLista] = useState([]) 
    
      const handleInputChange = (text)  => {
        setInput(text)
      }
      
      const handleAddData = () => {
        setLista([...lista, input])
        setInput('')
      }

      const handleDeleteData = (item) => {
        setLista(lista.filter ( (d) => d !== item))
      }
      
    
    return(
        <View style={styles.container}>
            <TextInput
            onChangeText={(text)=> setInput(text)}
            style={{
                width:'90%', 
                height: 50, 
                borderColor: '#000', 
                borderWidth: 1, 
                marginTop:10}}
            />

            <TouchableOpacity
            onPress={handleAddData}
            style={{
                width:'90%', 
                height: 50, 
                borderColor: '#000', 
                borderWidth: 1, 
                marginTop:10, 
                backgroundColor: '#ddd', 
                justifyContent: 'center', 
                alignItems: 'center'}}>
                    
                <Text >Inserir</Text>
            </TouchableOpacity>



       

            <FlatList
            data={lista}
            renderItem={ ({item})=> (
                <Text key={item}>{item}</Text>
            )}
             onPress={(item)=> handleDeleteData(item) }
             
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
      
    },
    
})