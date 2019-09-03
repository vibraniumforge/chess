const movesHelper = (piece, coordinates) => {
  switch (piece) {
    case "whiteking":
      return kingMoves(coordinates);
    case "blackking":
      return kingMoves(coordinates);
    case "queen":
      return queenMoves(coordinates);
    case "rook":
      return rookMoves(coordinates);
    case "bishop":
      return bishopMoves(coordinates);
    case "knight":
      return knightMoves(coordinates);
    case "whitepawn":
      return whitePawnMoves(coordinates);
    case "blackpawn":
      return blackPawnMoves(coordinates);
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
  // horizontal and vertical are switched above.
  return arrayNotationArray;
};

const convertArrayToChessNotation = array => {
  // [0,0] => "a8", [7,0] => "a1", [0,7] => "h8", [7,7] => "h1"
  // [7,0] is vertical 7 horiz 0. It goes to horizontal "a" vertical "1"
  const arrayVerticalCoordinate = array[0];
  const arrayHorizontalCoordinate = array[1];
  // horizontal and vertical are switched here.
  //   prettier-ignore
  const convertVerticalObject = {0: "8", 1: "7", 2: "6", 3: "5", 4: "4", 5: "3", 6: "2", 7: "1"}
  //   prettier-ignore
  const convertHorizontalObject = { 0: "a", 1: "b", 2: 'c', 3: "d", 4: "e", 5: "f", 6: "g", 7: "h" };
  const horizontalCoordinate =
    convertHorizontalObject[arrayHorizontalCoordinate];
  const verticalCoordinate = convertVerticalObject[arrayVerticalCoordinate];
  const result = `${horizontalCoordinate}${verticalCoordinate}`;
  return result;
};

function kingMoves(str) {
  const kingPosition = convertChessNotationToArray(str);
  let moves = [];
  moves.push([kingPosition[0] - 1, kingPosition[1] - 1]);
  moves.push([kingPosition[0] - 1, kingPosition[1]]);
  moves.push([kingPosition[0] - 1, kingPosition[1] + 1]);
  moves.push([kingPosition[0], kingPosition[1] - 1]);
  moves.push([kingPosition[0], kingPosition[1] + 1]);
  moves.push([kingPosition[0] + 1, kingPosition[1] - 1]);
  moves.push([kingPosition[0] + 1, kingPosition[1]]);
  moves.push([kingPosition[0] + 1, kingPosition[1] + 1]);
  let x = moves.filter(move => {
    return move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7;
  });
  let possibleKingMoves = [];
  x.map(move => possibleKingMoves.push(convertArrayToChessNotation(move)));
  return possibleKingMoves;
}

function queenMoves(str) {
  let possibleQueenMoves = [];
  const possibleRookMoves = rookMoves(str);
  const possibleBishopMoves = bishopMoves(str);
  possibleQueenMoves = possibleRookMoves.concat(possibleBishopMoves);
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
  return possibleBishopMoves;
}

function knightMoves(str) {
  const knightPosition = convertChessNotationToArray(str);
  let moves = [];
  const vertCoord = knightPosition[0];
  const horizCoord = knightPosition[1];
  moves.push([vertCoord - 2, horizCoord + 1]);
  moves.push([vertCoord - 1, horizCoord + 2]);
  moves.push([vertCoord + 1, horizCoord + 2]);
  moves.push([vertCoord + 2, horizCoord + 1]);
  moves.push([vertCoord + 2, horizCoord - 1]);
  moves.push([vertCoord + 1, horizCoord - 2]);
  moves.push([vertCoord - 1, horizCoord - 2]);
  moves.push([vertCoord - 2, horizCoord - 1]);
  let possibleKnightmoves = [];
  moves.map(pkm => {
    return pkm[0] >= 0 && pkm[0] <= 7 && pkm[1] >= 0 && pkm[1] <= 7
      ? possibleKnightmoves.push(pkm)
      : null;
  });
  return possibleKnightmoves.map(move => convertArrayToChessNotation(move));
}

function whitePawnMoves(str) {
  const pawnPosition = convertChessNotationToArray(str);
  let possiblePawnMoves = [];
  possiblePawnMoves.push([pawnPosition[0] - 1, pawnPosition[1]]);
  return possiblePawnMoves.map(move => convertArrayToChessNotation(move));
}

function blackPawnMoves(str) {
  const pawnPosition = convertChessNotationToArray(str);
  let possiblePawnMoves = [];
  possiblePawnMoves.push([pawnPosition[0] + 1, pawnPosition[1]]);
  return possiblePawnMoves.map(move => convertArrayToChessNotation(move));
}

export { movesHelper };
