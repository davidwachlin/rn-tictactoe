import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Board from './components/Board'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>TicTacToe</Text>
      <Board />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40
  }
});
