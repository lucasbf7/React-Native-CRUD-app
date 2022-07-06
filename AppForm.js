import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
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
        <View style={styles.container}>
        <Text style={styles.title}>Lista de Coisas Úteis</Text>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            onChangeText={handleTitleChange}
            placeholder="Dê um título"
            clearButtonMode='always' />
            <TextInput
            style={styles.inputText}
            onChangeText={handleDescriptionChange}
            placeholder="Escreva o que quiser"
            clearButtonMode='always' />
            <TouchableOpacity style={styles.btn} onPress={handleButtonPress}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="light" />
        </View>
    );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec2300',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 25,
    fontSize: 16,
    alignItems: 'stretch',
  },
  inputText: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 25,
    fontSize: 16,
    alignItems: 'stretch',
  },
  btn: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 25,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});