import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Board from './components/Board'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tic  Tac Toe</Text>
      <Board />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
