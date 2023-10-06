import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import { useNavigation } from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
                        
            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('List')}>
                <Text style={styles.name}>Gerar PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('Modal')}>
                <Text style={styles.name}>Fontes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('Inputs')}>
                <Text style={styles.name}>Inputs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('Flex')}>
                <Text style={styles.name}>Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('MyComponents')}>
                <Text style={styles.name}>React Native Paper</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('Mascara')}>
                <Text style={styles.name}>Mascara</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('NovaMascara')}>
                <Text style={styles.name}>Novas mascaras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('Crud')}>
                <Text style={styles.name}>Crud</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}onPress={()=> navigation.navigate('Busca')}>
                <Text style={styles.name}>Busca</Text>
            </TouchableOpacity>


          

       

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        lex: 1, 
        alignItems: 'center', 
        marginTop: 15
    },
    button:{
        backgroundColor: '#04b3c8',
        width: '75%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderColor: 'black',
        borderWidth: 0.5
    },
    name:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
})

