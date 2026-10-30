import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [filme, setFilme] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Qual é o seu filme favorito?"
        value={filme}
        onChangeText={setFilme}
      />
      <Text style={styles.textoResultado}>
        Seu filme favorito é: <Text style={styles.destaque}>{filme}</Text>
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
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  textoResultado: {
    fontSize: 18,
    textAlign: 'center',
  },
  destaque: {
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

