import React, {useState, useEffect } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
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
  const [currentPlayer, setCurrentPlayer] = useState<SquareStatus>(SquareStatus.Player_One)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    if (!board.length && isPlaying) {
      const newBoard = squareIds.map(id => {
        return { id: id.toString(), status: SquareStatus.Empty }
      })
      setBoard(newBoard)
    }
  }, [isPlaying])

  useEffect(() => {
    const nextPlayer = currentPlayer === SquareStatus.Player_One ? SquareStatus.Player_Two : SquareStatus.Player_One
    setCurrentPlayer(nextPlayer)
  }, [board])


  const handleSelection = (id: string) => {
    const updatedBoard = [...board];
    for (let square of updatedBoard) {
      if (square.id === id) {
        square.status = currentPlayer
      }
    }
    setBoard(updatedBoard)
  }

  if (!board.length && !isPlaying) {
    return (
      <View>
        <TouchableOpacity onPress={() => setIsPlaying(true)}>
          <Text>START</Text>
        </TouchableOpacity>
      </View>
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
