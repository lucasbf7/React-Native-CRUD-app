import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as C from './styles'
 
export default function AppForm({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    function handleTitleChange(titulo){ setTitulo(titulo); }
    function handleDescriptionChange(descricao){ setDescricao(descricao); }
    function handleButtonPress(){
        console.log({id: newDate().getTime(),titulo, descricao});
        navigation.navigate("AppList");
    }

    return (
        <C.Container>
        <C.Title>Lista de Coisas Úteis</C.Title>
          <C.InputContainer>
              <C.Input
              onChangeText={handleTitleChange}
              placeholder="Dê um título"
              clearButtonMode='always' />
              <C.Input
              onChangeText={handleDescriptionChange}
              placeholder="Escreva o que quiser"
              clearButtonMode='always' />
              <C.Btn onPress={handleButtonPress}>
                  <C.BtnText>Salvar</C.BtnText>
              </C.Btn>
          </C.InputContainer>
          <StatusBar style="light" />
        </C.Container>
    );
}
