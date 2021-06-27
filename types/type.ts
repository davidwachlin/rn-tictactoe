enum SquareStatus {
  Empty,
  Player_One,
  Player_Two
}

interface SquareData {
  id: string
  status: SquareStatus
}

export { SquareStatus, SquareData}