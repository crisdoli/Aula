import React, {useEffect, useState} from "react";
import { View, Text, TextInput, st} from 'react-native'
import { useFonts} from 'expo-font'
import * as SplashScreen  from 'expo-splash-screen'



//instalar : expo fonts, splashcreen, 

function Modal(){
    
    const [phone, setPhone] = useState('')   
    
    
    const [fontsLoaded]= useFonts({
        'PopinsBold': require ('../../assets/fonts/Poppins-Bold.ttf'),
        'PopinsIta': require ('../../assets/fonts/Poppins-Italic.ttf'),
        'Josefin': require ('../../assets/fonts/JosefinSans-VariableFont_wght.ttf')
    })
        
    useEffect( ()=> {
        async function prepare(){
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, [])
    
    if(!fontsLoaded){
        return undefined;
    } 
    
    
    
    return(
        <View style={{alignItems: 'center', marginTop: 15}}>
            <Text style={{fontSize: 20, fontFamily: 'PopinsBold'}}>Meu aplicativo</Text>
            <Text style={{fontSize: 20}}>Meu aplicativo</Text>
            <Text style={{fontSize: 20, fontFamily: 'PopinsIta'}}>Fonte 2</Text>
            <Text style={{fontSize: 20, fontFamily: 'Josefin'}}>Fonte 3</Text>
            <TextInput
            placeholder="fone"
            style={{width: '90%', height: 45, borderColor: '#000', borderWidth: 1}}
            value={phone}        
            onChangeText={(texto) => setPhone(texto)}
            />

        

        </View>
    )
}

export default Modal;


