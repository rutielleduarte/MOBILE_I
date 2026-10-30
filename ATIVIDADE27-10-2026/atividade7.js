import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="O que está acontecendo?"
        multiline={true}
        value={texto}
        onChangeText={setTexto}
      />
      <Text style={styles.contador}>
        Caracteres digitados: <Text style={styles.numero}>{texto.length}/280</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#95a5a6',
    borderRadius: 10,
    padding: 15,
    height: 100,
    textAlignVertical: 'top',
    fontSize: 16,
    marginBottom: 10,
  },
  contador: {
    fontSize: 16,
    textAlign: 'right',
    color: '#555',
  },
  numero: {
    fontWeight: 'bold',
    color: '#2980b9',
  },
});