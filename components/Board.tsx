import React, {useState, useEffect } from 'react'
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Square from './Square'

const squareIds = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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
  const [winner, setWinner] = useState<SquareStatus | null>(null)

  useEffect(() => {
    if (!board.length && isPlaying) {
      const newBoard = squareIds.map(id => {
        return { id: id.toString(), status: SquareStatus.Empty }
      })
      setBoard(newBoard)
    }
  }, [isPlaying])

  useEffect(() => {
    if (board.length && checkForWin()) {
      setWinner(currentPlayer);
    } else {
      const nextPlayer =
        currentPlayer === SquareStatus.Player_One
          ? SquareStatus.Player_Two
          : SquareStatus.Player_One;
      setCurrentPlayer(nextPlayer);
    }
  }, [board]);

  const checkForWin = (): boolean => {
    let isWinner = false;
    if (board.length) {
      possibleWins.forEach((win) => {
        if (
          board[win[0]].status === currentPlayer &&
          board[win[1]].status === currentPlayer &&
          board[win[2]].status === currentPlayer
        ) {
          isWinner = true;
        }
      });
    }
    return isWinner;
  };

  const handleSelection = (id: string) => {
    const updatedBoard = [...board];
    for (let square of updatedBoard) {
      if (square.id === id) {
        square.status = currentPlayer
      }
    }
    setBoard(updatedBoard)
  }

  if (winner) {
    return (
      <View>
        <Text style={styles.gameText}>{winner === SquareStatus.Player_One ? "Player One Wins!" : "Player Two Wins!"}</Text>
      </View>
    )
  }

  if (!board.length && !isPlaying) {
    return (
      <View>
        <TouchableOpacity onPress={() => setIsPlaying(true)}>
          <Text style={styles.gameText}>START</Text>
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

const styles = StyleSheet.create({
  gameText: {
    fontSize: 20,
    textAlignVertical: 'center',
    lineHeight: 300
  },
})