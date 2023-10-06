import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, FlatList} from "react-native"


function Flex(){
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const [dados, setDdos] = useState()
    
    const addItem = () => {
        if (inputValue.trim() !== '') {
          setItems([...items, inputValue]);
          setInputValue('');
        }
      };

      
      
    
    return(
        <View style={styles.container_principal}>
            <Text>Pagina Lista de Itens</Text>
         

               <View >
                  <TextInput
                    placeholder="Digite um item..."
                      value={inputValue}
                        onChangeText={text => setInputValue(text)}
                        style={{height: 45, marginTop: 15, marginBottom: 15, borderWidth: 1, borderColor: '#000' }}
                          />
                            <Button title="Adicionar" onPress={addItem}
                            
                            />
                        <FlatList
                      data={items}
                    renderItem={({ item }) => <Text>{item}</Text>}
                  keyExtractor={(item, index) => index.toString()}
                    />
                </View>
         
        </View>
    )
}

export default Flex;

const styles = StyleSheet.create({
    container_principal: {
        paddingHorizontal: 50
    }
})