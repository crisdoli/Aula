import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import DashedLine from 'react-native-dashed-line';


function Busca(){
    return(
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <Text style={{paddingHorizontal: '10%', marginTop: 10, fontWeight: 'bold'}}>Periodo</Text>
              <View style={{ alignItems: 'center'}}>
                <View style={{flexDirection: 'row', paddingHorizontal: '5%', marginTop: 10}}>
                    <View style={{width: '60%'}}>
                        <Text>De</Text>                    
                    </View>

                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <Text >01/01/2023</Text>                    
                    </View>
                </View>

                <View style={{flexDirection: 'row', paddingHorizontal: '5%', marginTop: 15}}>
                    <View style={{width: '60%', }}>
                        <Text>Ate</Text>                    
                    </View>

                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <Text>01/01/2023</Text>                    
                    </View>
                </View>
                <TouchableOpacity style={{height: 35, width: '80%', backgroundColor: '#ddd', justifyContent: 'center', alignItems:'center', borderRadius: 5, marginTop: 15}}>
                    <Text>Buscar</Text>
                </TouchableOpacity>      

                
                </View>
                <DashedLine dashLength={8} dashThickness={1} dashColor='#ddd' style={{marginHorizontal: 25, marginTop: 15}} />
        </View>
    )
}

export default Busca;