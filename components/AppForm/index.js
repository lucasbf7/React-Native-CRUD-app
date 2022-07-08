import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as C from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function AppForm({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    function handleTitleChange(titulo){ setTitulo(titulo); }
    function handleDescriptionChange(descricao){ setDescricao(descricao); }
    async function handleButtonPress(){
        const listItem = {id: new Date().getTime(), titulo, descricao: parseInt(descricao)};
        let savedItems = []
        const response = await AsyncStorage.getItem('items');

        if(response) savedItems = JSON.parse(response);
        savedItems.push(listItem);

        await AsyncStorage.setItem('items', JSON.stringify(savedItems));
        navigation.navigate("AppList", listItem);
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
