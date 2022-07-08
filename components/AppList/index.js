import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as C from './styles';
import AppItem from '../AppItem';
import Database from '../../Database';

 
export default function AppList({ route, navigation }) {
  /*function getList() {
    this.setState({ loading: true }, () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(result =>
        this.setState({
          loading: false,
          alldata: result
        })
      )
      .catch(console.log)
    })
  } */

   const [items, setItems] = useState([]);

   useEffect(() => {
    Database.getItems().then(items => setItems(items));
   }, [route]);

  return (
    <C.Container>
      <StatusBar style="light" />
      <C.Title>Lista das Coisas Úteis</C.Title>
      <C.ScrollContainer showsVerticalScrollIndicator={false}>
        { items.map(item => {
          return <AppItem key={item.id} id={item.id} item={item.titulo + ' ' + item.descricao} navigation={navigation} />
        })}
      </C.ScrollContainer>
    </C.Container>
  );
}
