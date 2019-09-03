import React, { Component } from "react";
import { pieceHelper } from "../helpers/pieceHelper.js";

class Board extends Component {
  uncolorTheSquares = () => {
    let coloredSqaures = document.getElementsByClassName("selected");
    let coloredSqauresArray = Array.from(coloredSqaures);
    coloredSqauresArray.forEach(square => {
      square.classList.remove("selected");
    });
  };

  removePiecesFromBoard = () => {
    const kingCoordinates = document.getElementById(this.props.kingCoordinates);
    if (kingCoordinates) {
      kingCoordinates.innerHTML = "";
    }
    const piece1Coordinates = document.getElementById(
      this.props.piece1Coordinates
    );
    if (piece1Coordinates) {
      piece1Coordinates.innerHTML = "";
    }
    const piece2Coordinates = document.getElementById(
      this.props.piece2Coordinates
    );
    if (piece2Coordinates) {
      piece2Coordinates.innerHTML = "";
    }
  };

  colorTheSqaures = () => {
    this.props.piece1Result.forEach(square => {
      document.getElementById(square).classList.add("selected");
    });
    this.props.piece2Result.forEach(square => {
      document.getElementById(square).classList.add("selected");
    });
  };

  addPiecesToBoard = () => {
    const kingCoordinates = document.getElementById(this.props.kingCoordinates);
    if (kingCoordinates) {
      kingCoordinates.innerHTML = pieceHelper("king");
    }
    const piece1Coordinates = document.getElementById(
      this.props.piece1Coordinates
    );
    if (piece1Coordinates) {
      piece1Coordinates.innerHTML = pieceHelper(this.props.piece1Name);
    }
    const piece2Coordinates = document.getElementById(
      this.props.piece2Coordinates
    );
    if (piece2Coordinates) {
      piece2Coordinates.innerHTML = pieceHelper(this.props.piece2Name);
    }
  };

  //   piece1Coordinates={this.state.piece1Coordinates}
  //   piece1Name={this.state.piece1Name}
  //   piece2Coordinates={this.state.piece2Coordinates}
  //   piece2Name={this.state.piece2Name}
  //   kingCoordinates={this.state.kingCoordinates}
  //   result={this.state.result}

  render() {
    if (this.props.piece1Result && this.props.piece2Result) {
      this.uncolorTheSquares();
      this.removePiecesFromBoard();
      this.colorTheSqaures();
      this.addPiecesToBoard();
    }
    return (
      <React.Fragment>
        <table>
          <tbody id="chess-board">
            <tr className="border">
              <td className="border"></td>
              <td className="border">a</td>
              <td className="border">b</td>
              <td className="border">c</td>
              <td className="border">d</td>
              <td className="border">e</td>
              <td className="border">f</td>
              <td className="border">g</td>
              <td className="border">h</td>
              <td></td>
            </tr>
            <tr>
              <td className="border">8</td>
              <td id="a8" className="white-square"></td>
              <td id="b8" className="black-square "></td>
              <td id="c8" className="white-square"></td>
              <td id="d8" className="black-square"></td>
              <td id="e8" className="white-square"></td>
              <td id="f8" className="black-square"></td>
              <td id="g8" className="white-square"></td>
              <td id="h8" className="black-square"></td>
              <td className="border">8</td>
            </tr>
            <tr>
              <td className="border">7</td>
              <td id="a7" className="black-square"></td>
              <td id="b7" className="white-square"></td>
              <td id="c7" className="black-square"></td>
              <td id="d7" className="white-square"></td>
              <td id="e7" className="black-square"></td>
              <td id="f7" className="white-square"></td>
              <td id="g7" className="black-square"></td>
              <td id="h7" className="white-square"></td>
              <td className="border">7</td>
            </tr>
            <tr>
              <td className="border">6</td>
              <td id="a6" className="white-square"></td>
              <td id="b6" className="black-square"></td>
              <td id="c6" className="white-square"></td>
              <td id="d6" className="black-square"></td>
              <td id="e6" className="white-square"></td>
              <td id="f6" className="black-square"></td>
              <td id="g6" className="white-square"></td>
              <td id="h6" className="black-square"></td>
              <td className="border">6</td>
            </tr>
            <tr>
              <td className="border">5</td>
              <td id="a5" className="black-square"></td>
              <td id="b5" className="white-square"></td>
              <td id="c5" className="black-square"></td>
              <td id="d5" className="white-square"></td>
              <td id="e5" className="black-square"></td>
              <td id="f5" className="white-square"></td>
              <td id="g5" className="black-square"></td>
              <td id="h5" className="white-square"></td>
              <td className="border">5</td>
            </tr>
            <tr>
              <td className="border">4</td>
              <td id="a4" className="white-square"></td>
              <td id="b4" className="black-square"></td>
              <td id="c4" className="white-square"></td>
              <td id="d4" className="black-square"></td>
              <td id="e4" className="white-square"></td>
              <td id="f4" className="black-square"></td>
              <td id="g4" className="white-square"></td>
              <td id="h4" className="black-square"></td>
              <td className="border">4</td>
            </tr>
            <tr>
              <td className="border">3</td>
              <td id="a3" className="black-square"></td>
              <td id="b3" className="white-square"></td>
              <td id="c3" className="black-square"></td>
              <td id="d3" className="white-square"></td>
              <td id="e3" className="black-square"></td>
              <td id="f3" className="white-square"></td>
              <td id="g3" className="black-square"></td>
              <td id="h3" className="white-square"></td>
              <td className="border">3</td>
            </tr>
            <tr>
              <td className="border">2</td>
              <td id="a2" className="white-square"></td>
              <td id="b2" className="black-square"></td>
              <td id="c2" className="white-square"></td>
              <td id="d2" className="black-square"></td>
              <td id="e2" className="white-square"></td>
              <td id="f2" className="black-square"></td>
              <td id="g2" className="white-square"></td>
              <td id="h2" className="black-square"></td>
              <td className="border">2</td>
            </tr>
            <tr>
              <td className="border">1</td>
              <td id="a1" className="black-square"></td>
              <td id="b1" className="white-square"></td>
              <td id="c1" className="black-square"></td>
              <td id="d1" className="white-square"></td>
              <td id="e1" className="black-square"></td>
              <td id="f1" className="white-square"></td>
              <td id="g1" className="black-square"></td>
              <td id="h1" className="white-square"></td>
              <td className="border">1</td>
            </tr>
            <tr>
              <td className="border"></td>
              <td className="border">a</td>
              <td className="border">b</td>
              <td className="border">c</td>
              <td className="border">d</td>
              <td className="border">e</td>
              <td className="border">f</td>
              <td className="border">g</td>
              <td className="border">h</td>
              <td className="border"></td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Board;
