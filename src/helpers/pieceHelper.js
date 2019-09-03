const pieceHelper = piece => {
  switch (piece) {
    case "whiteking":
      return "&#9812;";
    case "blackking":
      return "&#9818;";
    case "queen":
      return "&#9813;";
    case "rook":
      return "&#9814;";
    case "bishop":
      return "&#9815;";
    case "knight":
      return "&#9816;";
    case "whitepawn":
      return "&#9817;";
    case "blackpawn":
      return "&#9823;";
    default:
      return null;
  }
};

export { pieceHelper };
