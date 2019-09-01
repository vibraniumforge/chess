const pieceHelper = piece => {
  switch (piece) {
    case "king":
      return "&#9812;";
    case "queen":
      return "&#9813;";
    case "rook":
      return "&#9814;";
    case "bishop":
      return "&#9815;";
    case "knight":
      return "&#9816;";
    case "pawn":
      return "&#9817;";
    default:
      return null;
  }
};

export { pieceHelper };
