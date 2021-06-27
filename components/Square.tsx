import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {SquareData } from './Board'

interface SquareProps {
  square: SquareData,
  handleSelection: (id: string) => void;
}

const Square = (props: SquareProps) => {
  const {square, handleSelection} = props;
  return (
    <TouchableOpacity style={styles.square} onPress={() => handleSelection(square.id)}>
      <Text style={styles.squareText}>{square.id}</Text>
    </TouchableOpacity>
  )
}

export default Square

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    backgroundColor: '#888',
    borderWidth: 5,
  },
  squareText: {
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})