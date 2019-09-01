function rook_Moves(str) {
  rookPosition = convertChessNotationToArray(str);
  possibleRookMoves = [];
  for (let i = 0; i < 7; i++) {
    possibleRookMoves.push([i, rookPosition[1]]);
  }
  for (let j = 0; j < 7; j++) {
    possibleRookMoves.push([rookPosition[0], j]);
  }
  const index = possibleRookMoves.indexOf(rookPosition);
  possibleRookMoves.splice(index, 1);
}
