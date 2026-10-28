import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>AVISO IMPORTANTE{"\n\n"}</Text>
       <Text style={styles.cardText}>Segunda-Feira não haverá aula! </Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFB825',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#CF2625',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra para Android
  },
  cardText: {
    color: '#fffbfd',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});