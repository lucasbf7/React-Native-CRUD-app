import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import * as C from './styles';
import AppItem from '../AppItem';
import Database from '../../Database';

 
export default function AppList({ route, navigation }) {
   const [items, setItems] = useState([]);

   useEffect(() => {
    Database.getItems().then(items => setItems(items));
   }, [route]);

  return (
    <C.Container>
      <StatusBar style="light" />
      <C.Title>Lista das Coisas Úteis</C.Title>
      <C.ScrollContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          { items.map(item => {
            return <AppItem key={item.id} id={item.id} titulo={item.titulo} descricao={item.descricao} navigation={navigation} />
          })}
        </ScrollView>
      </C.ScrollContainer>
    </C.Container>
  );
}
