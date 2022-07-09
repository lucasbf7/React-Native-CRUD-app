import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as C from './styles';
import Database from '../../Database';
 
export default function AppForm({ route, navigation }) {
    const id = route.params ? route.params.id : undefined;
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if(!route.params) return;
        setTitulo(route.params.titulo);
        setDescricao(route.params.descricao);
    }, [route])

    function handleTitleChange(titulo){ setTitulo(titulo); }
    function handleDescriptionChange(descricao){ setDescricao(descricao); }
    async function handleButtonPress(){
        const listItem = {titulo, descricao};
        Database.saveItem(listItem, id)
            .then(response => navigation.navigate("AppList", listItem))
    }

    return (
        <C.Container>
        <C.Title>Adicione Coisas Úteis</C.Title>
          <C.InputContainer>
              <C.Input
              onChangeText={handleTitleChange}
              placeholder="Dê um título"
              clearButtonMode='always'
              value={titulo} />
              <C.Input
              onChangeText={handleDescriptionChange}
              placeholder="Escreva o que quiser"
              clearButtonMode='always' 
              value={descricao} />
              <C.Btn onPress={handleButtonPress}>
                  <C.BtnText>Salvar</C.BtnText>
              </C.Btn>
          </C.InputContainer>
          <StatusBar style="light" />
        </C.Container>
    );
}
