import React from 'react';
import { View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1630921121767-81e86d066a5d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' }} 
        style={{ width: 150, height: 150, borderRadius: 75 }} 
      />
      <Text style={{ fontSize: 30, marginTop: 15, fontWeight: '600', backgroundColor: 'lightgreen' }}>Rutielle Cardoso</Text>
      <Text style={{ fontSize: 20, color:'green'}}>Desenvolvimento de Sistema</Text>
    </View>
  );
}
