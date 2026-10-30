
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://http2.mlstatic.com/D_NQ_NP_780090-MLB104919259050_012026-O.webp'
          }}
          style={styles.imagem}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>
          Casinha de Gatinho
        </Text>

        <Text style={styles.preco}>
          R$ 129,90
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },

  banner: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    width: 280,
    paddingBottom: 15,
  },

  imagem: {
    width: '100%',
    height: 180,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 15,
  },

  preco: {
    fontSize: 18,
    color: '#2ecc71',
    fontWeight: 'bold',
    marginTop: 5,
    paddingHorizontal: 15,
  },
});
