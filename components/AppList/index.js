import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as C from './styles'
import AppItem from '../AppItem';

 
export default function AppList() {
  state = {
    data: []
  }
  
  function componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({ data: response.data })
    }).catch(() => {
      console.log('Error retrieving data')
    })
  }
  const [textos, setTextos] = useState([
    {id: 1, titulo: "verdanna", descricao: "Lucas" }
  ]);

  return (
    <C.Container>
      <StatusBar style="light" />
      <C.Title>Coisas Úteis</C.Title>
      <C.ScrollContainer showsVerticalScrollIndicator={false}>
        { textos.map(item => {
          return <AppItem key={item.id} id={item.id} item={item.titulo + ' ' + item.descricao} />
        })}
      </C.ScrollContainer>
    </C.Container>
  );
}
