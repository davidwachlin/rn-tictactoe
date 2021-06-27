import React, {useState, useEffect } from 'react'
import { FlatList, View, Text } from 'react-native'
import Square from './Square'

const squareIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export enum SquareStatus {
  Empty,
  Player_One,
  Player_Two
}

export interface SquareData {
  id: string
  status: SquareStatus
}

const Board = () => {
  const [board, setBoard] = useState<SquareData[]>([])

  useEffect(() => {
    if (!board.length) {
      const newBoard = squareIds.map(id => {
        return { id: id.toString(), status: SquareStatus.Empty }
      })
      setBoard(newBoard)
    }
  }, [])


  const handleSelection = (id: string) => {
    console.log(id)
  }

  if (!board.length) {
    return (
      <View><Text>No board</Text></View>
    )
  }

  return (
    <View>
      <FlatList
        data={board}
        numColumns={3}
        renderItem={({ item }: any) => {
          return <Square square={item} handleSelection={handleSelection} />;
        }}
      />
    </View>
  )
}

export default Board
