import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SquareStatus, SquareData } from '../types/type'

interface SquareProps {
  square: SquareData,
  handleSelection: (id: string) => void;
}

const Square = (props: SquareProps) => {
  const {square, handleSelection} = props;
  return (
    <TouchableOpacity style={styles.square} onPress={() => handleSelection(square.id)}>
      {square.status === SquareStatus.Empty && (
        <Text style={styles.squareText}></Text>
      )}
      {square.status === SquareStatus.Player_One && (
        <Text style={styles.squareText}>X</Text>
      )}
      {square.status === SquareStatus.Player_Two && (
        <Text style={styles.squareText}>0</Text>
      )}
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