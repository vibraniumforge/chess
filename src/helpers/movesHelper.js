const movesHelper = (piece, coordinates) => {
  switch (piece) {
    case "king":
      return kingMoves(coordinates);
    case "queen":
      return queenMoves(coordinates);
    case "rook":
      return rookMoves(coordinates);
    case "bishop":
      return bishopMoves(coordinates);
    case "knight":
      return knightMoves(coordinates);
    case "pawn":
      return pawnMoves(coordinates);
    default:
      return null;
  }
};

const convertChessNotationToArray = str => {
  let arrayNotationArray = [];
  // prettier-ignore
  const convertHorizontalObject = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
  // prettier-ignore
  const convertVerticalObject = { "1": 7, "2": 6, "3": 5, "4": 4, "5": 3, "6":2, "7":1, "8":0 };
  const horizontalCoordinate = convertHorizontalObject[str.split("")[0]];
  const verticalCoordinate = convertVerticalObject[str.split("")[1]];
  arrayNotationArray.push(verticalCoordinate, horizontalCoordinate);
  return arrayNotationArray;
};

const convertArrayToChessNotation = array => {
  //   prettier-ignore
  const convertHorizontalObject = { 7: "a", 6: "b", 5: 'c', 4: "d", 3: "e", 2: "f", 1: "g", 0: "h" };
  //   prettier-ignore
  const convertVerticalObject = {0: "1", 1: "2", 2: "3", 3: "4", 4: "5", 5: "6", 6: "7", 7: "8"}
  const horizontalCoordinate = convertHorizontalObject[array[0]];
  const verticalCoordinate = convertVerticalObject[array[1]];
  const result = `${horizontalCoordinate}${verticalCoordinate}`;
  return result;
};

function kingMoves(str) {
  const kingPosition = convertChessNotationToArray(str);
  let moves = [];
  for (let i = kingPosition[0] - 1; i <= kingPosition[0] + 1; i++) {
    for (let j = kingPosition[1] - 1; j <= kingPosition[1] + 1; j++) {
      moves.push([i, j]);
    }
  }
  let x = moves.filter(move => {
    return (
      move[0] >= 0 &&
      move[0] <= 7 &&
      move[1] >= 0 &&
      move[1] <= 7 &&
      !move.every(function(value, index) {
        return value === kingPosition[index];
      })
    );
  });
  console.log(x);
  let possibleKingMoves = [];
  x.map(move => possibleKingMoves.push(convertArrayToChessNotation(move)));
  console.log(possibleKingMoves);
  return possibleKingMoves;
}

function queenMoves(str) {
  let possibleQueenMoves = [];
  const possibleRookMoves = rookMoves(str);
  const possibleBishopMoves = bishopMoves(str);
  const x = possibleRookMoves.concat(possibleBishopMoves);
  possibleQueenMoves.push(x);
  console.log(possibleQueenMoves);
  return possibleQueenMoves;
}

function rookMoves(str) {
  const rookPosition = convertChessNotationToArray(str);
  let moves = [];
  for (let i = 0; i < 8; i++) {
    moves.push([i, rookPosition[1]]);
  }
  for (let j = 0; j < 8; j++) {
    moves.push([rookPosition[0], j]);
  }
  let possibleRookMoves = [];
  moves.map(move => possibleRookMoves.push(convertArrayToChessNotation(move)));
  return possibleRookMoves.filter(move => {
    return move !== str;
  });
}

function bishopMoves(str) {
  const bishopPosition = convertChessNotationToArray(str);
  let moves = [];
  const vertical = bishopPosition[0];
  const horizontal = bishopPosition[1];
  let i;
  let j;
  // vert- horiz+ up and right
  for (
    i = vertical, j = horizontal;
    i <= 7 && i >= 0 && (j < 8 && j >= 0);
    i--, j++
  ) {
    moves.push([i, j]);
  }

  // vert+ horiz+ down and right
  for (
    i = vertical, j = horizontal;
    i <= 7 && i >= 0 && (j < 8 && j >= 0);
    i++, j++
  ) {
    moves.push([i, j]);
  }
  // vert- hoirz- up and left
  for (
    i = vertical, j = horizontal;
    i <= 7 && i >= 0 && (j <= 7 && j >= 0);
    i--, j--
  ) {
    moves.push([i, j]);
  }
  // vert+ horiz- down and left
  for (
    i = vertical, j = horizontal;
    i <= 7 && i >= 0 && j <= 7 && j >= 0;
    i++, j--
  ) {
    moves.push([i, j]);
  }
  let x = [];
  moves.map(move => x.push(convertArrayToChessNotation(move)));
  let possibleBishopMoves = x.filter(pbm => {
    return pbm !== str;
  });
  //   console.log(possibleBishopMoves);
  return possibleBishopMoves;
}

function knightMoves(str) {
  const knightPosition = convertChessNotationToArray(str);
  let moves = [];
  const horizCoord = knightPosition[0];
  const vertCoord = knightPosition[1];
  moves.push([horizCoord + 1, vertCoord + 2]);
  moves.push([horizCoord + 1, vertCoord + 1]);
  moves.push([horizCoord + 2, vertCoord - 1]);
  moves.push([horizCoord + 1, vertCoord - 2]);
  moves.push([horizCoord - 1, vertCoord - 2]);
  moves.push([horizCoord - 2, vertCoord - 1]);
  moves.push([horizCoord - 2, vertCoord + 1]);
  moves.push([horizCoord - 1, vertCoord + 2]);
  console.log(moves);
  let possibleKnightmoves = [];
  moves.map(pkm => {
    if (pkm[0] > 0 && pkm[0] < 7 && pkm[1] > 0 && pkm[1] < 7) {
      return possibleKnightmoves.push(pkm);
    }
  });
  console.log(possibleKnightmoves);
  return possibleKnightmoves.map(move => convertArrayToChessNotation(move));
}

function pawnMoves(str) {
  const pawnPosition = convertChessNotationToArray(str);
  let possiblePawnMoves = [];
  possiblePawnMoves.push([pawnPosition[0], pawnPosition[1] + 1]);
  return possiblePawnMoves;
}

export { movesHelper };
