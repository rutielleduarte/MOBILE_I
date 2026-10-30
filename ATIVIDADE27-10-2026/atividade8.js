import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [recado, setRecado] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Image
          source={{ uri: 'https://i.pinimg.com/236x/c1/b4/e1/c1b4e117642eaf1f5f3ae74f68a493f6.jpg' }}
          style={styles.foto}
        />

        <Text style={styles.nome}>Rutielle Cardoso</Text>
        <Text style={styles.cargo}>Estudante de ADS</Text>

        <View style={styles.divisor} />

        <TextInput
          style={styles.input}
          placeholder="Deixe um recado para o Carlos..."
          placeholderTextColor="#ffb6c1"
          value={recado}
          onChangeText={setRecado}
          multiline={true}
        />

        <View style={styles.containerRecado}>
          <Text style={styles.tituloRecado}>Recado do Visitante:</Text>
          <Text style={styles.textoRecado}>
            {recado ? recado : 'Nenhum recado digitado ainda...'}
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ff69b4',
    marginBottom: 15,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff1493',
    textAlign: 'center',
  },
  cargo: {
    fontSize: 14,
    color: '#db7093',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffe4e1',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ffb6c1',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    backgroundColor: '#fffaf0',
    height: 80,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  containerRecado: {
    width: '100%',
    backgroundColor: '#fff0f5',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ff69b4',
  },
  tituloRecado: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#db7093',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  textoRecado: {
    fontSize: 14,
    color: '#ff1493',
    fontStyle: 'italic',
  },
});
