import React, {useState} from "react";
import { View, Text, TouchableOpacity} from "react-native"
import {printToFileAsync} from 'expo-print';
import {shareAsync} from 'expo-sharing';


function List(){
    const data = {
      nome: 'carlos'
    }
    

const html = `
<html>
  <body>

                                      <h2>CONTRATO DE PRESTAÇÃO DE SERVIÇOS MUSICAIS</h2>

      <style> 
      p{text-align: justify}
      p{text-indent: 50}
      </style>
      
      <head>
    
      <p>Pelo presente instrumento particular de contrato de prestação de serviços musicais as
      partes abaixo assinadas, de um lado BANDA SUBLIME , estabelecida na Rua Jayme Lopes da Silva n 250
      J d Colorau , cidade Sorocaba, Estado de São Paulo, neste ato representado por Márcio Santos de Proença ,
      brasileiro, maior, casado, portador da cédula de identidade nº 44.231.022-5 SSP/SP e do CPF/MF nº 344.904.67
      8-00 , residente e domiciliado na rua Abudd Bachir Abdalla, nº295 Vila Fiore , cidade Sorocaba, Estado de
      São Paulo , aqui denominados simplesmente CONTRATADOS , e de outro lado: ${data.nome} , Brasileiro(a), solteiro(a),
      Residente rua: Rua Ministro, 14 - Sorocaba /Sp denominados simplesmente CONTRATANTE , tem apenas
      contratado e contratado, o que aceitam mutuamente e outorgam.</p>
      
      </head>

      <br>
      
      <p>1. O CONTRATADO se obriga a apresentar-se para a realização da cerimônia de casamento supra a realizar-se
      no dia: 05/03/2023 teste</p>
      <br>
      
      <p>2. O referido serviço terá início às 11:00 horas, prolongando-se até as 12:00 horas. O descumprimento do horá
      rio acarretará na dispensa dos músicos devido a tolerância de atraso de até 1 hora do horário do evento 
      mencionado acima ser esgotada.</p>
      <br>
           
      3. Serviço Contratado:
      Banda Cerimonial: violino
      <br>
      
      <p>4. As músicas a serem tocadas durante a celebração serão escolhidas pelos noivos com a concordância da
      Banda Sublime e deve ser indicada até 30 dias antes da cerimônia.</p>
      <br>
      
      <p>5. Receberá o CONTRATADO pela realização do Serviço Musical em questão a importância de R$ 1.
      <br>
 
    
      CONTRATADOS: CONTRATANTE:
      <p>6. O CONTRATANTE obriga-se a receber o referido pagamento em moeda corrente do país ou depósito bancário,
      em dinheiro até um dia antes da data da cerimônia.</p>
      <br>
    
      <p>7. Fica estipulada a multa de 50% (cinquenta por cento) do valor do presente contrato para qualquer das partes
      que der origem ao não cumprimento do mesmo.</p>
      <br>
     
      <p>8. Fica eleito o Foro da Comarca de Sorocaba, Estado de São Paulo, para dirimir dúvidas ou questão oriunda do
      presente contrato, renunciando a qualquer outro por mais privilegiado que seja.
      E assim permanecendo como partes justas e contratados,
      assinam o presente contrato de acordo com a lei em vigor, em 2 (duas) vias de igual teor e forma.</p>
      <br>
     
  </body>
</html>

`;



let gerarPDF = async () => {
  const file =  await printToFileAsync({
    html: html,
    base64: false,
    
  })

  

  await shareAsync(file.uri)
}
    
    
    
    return(
        <View>
            <Text>Pagina List</Text>
            <View style={{flex: 1, alignItems:'center'}}>
                <TouchableOpacity 
                style={{height: 40, 
                width: '75%', 
                backgroundColor: 'grey', 
                justifyContent: 'center', 
                alignItems: 'center'}}onPress={()=> gerarPDF()}>
                    <Text style={{color: '#ddd'}}>Gerar PDF</Text>
                </TouchableOpacity>
            </View>
          

        </View>
    )
}

export default List;