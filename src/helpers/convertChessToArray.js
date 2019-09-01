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

export { convertChessNotationToArray };
