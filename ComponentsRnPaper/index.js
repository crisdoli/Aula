import React, {useState} from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { TextInput, Button, Modal, Portal, PaperProvider, List, Divider } from 'react-native-paper';
import { maskData} from '../utils/mask'





function MyComponents(  ){
    
    function handleChange(text, mask) {
        if (mask === 'data') {
          const value = maskData(text)
          inputMaskChange(value)
        }
    
    
      }
    
    
    
    
    
    
    
    const [email, setEmail] = React.useState("");
    const [data, setData] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [phone, setPhone] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [cpfCnpj, setCpfCnpj] = React.useState('');


    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    
    
    return(
        <KeyboardAvoidingView 
        behavior="height"
        style={{backgroundColor: '#fff'}}>
            <Text style={{textAlign: 'center', 
            fontSize: 20, 
            marginTop: 15, 
            fontWeight: 'bold', 
            marginBottom: 15,
            }}>Novo Evento</Text>
            
                <ScrollView >
                    <View style={{backgroundColor:"#ddd", marginLeft:  25, marginRight: 25, padding: 10, borderRadius: 5 }}>
                    <Text style={{fontWeight: '500'}}>Dados Contratante</Text>
                    </View>
                    
                
                    <View> 
                            <View style={styles.container}>                      
                             <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Nome Contrante"          
                            activeUnderlineColor="#4169E1"/>                        
                        
                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Endereço"
                            activeUnderlineColor="#4169E1"/>

                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="E-mail"                        
                            activeUnderlineColor="#4169E1"/>   

            
                            <View style={{flexDirection: 'row'}}>
                            <TextInput
                            style={{width:'40%', backgroundColor: '#fff', marginTop: 10, fontSize: 14, marginRight: '10%'}}
                            label="RG"                        
                            activeUnderlineColor="#4169E1"
                            keyboardType="numeric"/>                          
                            

                            <TextInput
                            style={{width:'40%', backgroundColor: '#fff', marginTop: 21, fontSize: 14, height: 65}}
                            label='CPF'                        
                            activeUnderlineColor="#4169E1"/>                      


                            </View>
                            <View style={{flexDirection: 'row'}}>
                            <TextInput
                            style={{width:'40%', backgroundColor: '#fff', marginTop: 10, fontSize: 14, marginRight: '10%'}}
                            label="Telefone"                        
                            onChangeText={text => {}}
                            activeUnderlineColor="#4169E1"
                            keyboardType="numeric"
                            />

                            <TextInput
                            style={{width:'40%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Data aniversário"                        
                            onChangeText={text => setEndereco(text)}
                            activeUnderlineColor="#4169E1"
                            keyboardType="numeric"
                            />  
                                                     
                            </View> 

                            </View> 

                             <View style={{backgroundColor:"#ddd", marginLeft:  25, marginRight: 25, padding: 10, borderRadius: 5, marginTop: 15 }}>
                                <Text style={{fontWeight: '500'}}>Dados Evento</Text>
                            </View> 

                            <View style={styles.container}>

                             
                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14,}}
                            label="Nome Criança"          
                            activeUnderlineColor="#4169E1"
                            
                            /> 

                              <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Data Evento/ensaio"          
                            activeUnderlineColor="#4169E1"
                            keyboardType="numeric"
                            onChangeText={ (text)=> handleChange(text)}
                            
                            />                        
                        
                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Local evento/Ensaio"
                            activeUnderlineColor="#4169E1"/>

                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Horário evento/Ensaio"
                            activeUnderlineColor="#4169E1"
                            keyboardType="numeric"
                            />

                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Valor evento/Ensaio"
                            activeUnderlineColor="#4169E1"/>

                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Forma pagamento"
                            activeUnderlineColor="#4169E1"/>

                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14}}
                            label="Data pagamento"
                            activeUnderlineColor="#4169E1"
                            keyboardType="numeric"
                            />

                            <TextInput
                            style={{width:'90%', backgroundColor: '#fff', marginTop: 10, fontSize: 14, height: 60}}
                            label="Observação"
                            activeUnderlineColor="#4169E1"/>                                     
                           
                            <Button 
                            style={{width:'90%', marginTop: 15, borderRadius: 5, backgroundColor: '#4682B4', marginBottom: 50}}
                            mode="contained" 
                            onPress={() => alert('Pressed')}>
                            + Adicionar
                            </Button>
            
                            </View>       
                    </View>
                </ScrollView>

        </KeyboardAvoidingView>

        
    )
}

export default MyComponents;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginBottom: 15
    }
})