import React, { Component } from "react";
import { movesHelper } from "../helpers/movesHelper.js";
import Board from "../components/Board";
import { checkHelper } from "../helpers/checkHelper.js";
import { checkMateHelper } from "../helpers/checkMateHelper.js";
// import FullBoard from "../components/FullBoard";

class Input extends Component {
  state = {
    piece1Name: "",
    piece1Coordinates: "",
    piece1Result: [],
    piece2Name: "",
    piece2Coordinates: "",
    piece2Result: [],
    kingCoordinates: "",
    kingResults: [],
    kingIsChecked: null,
    kingIsCheckMated: null
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (
      this.state.piece1Coordinates &&
      this.state.piece1Name &&
      this.state.piece2Coordinates &&
      this.state.piece2Name &&
      this.state.kingCoordinates
    ) {
      this.setState(
        {
          piece1Result: movesHelper(
            this.state.piece1Name,
            this.state.piece1Coordinates
          ),
          piece2Result: movesHelper(
            this.state.piece2Name,
            this.state.piece2Coordinates
          ),
          kingResults: movesHelper("blackking", this.state.kingCoordinates)
        },
        () => this.checkmate()
      );
    }
  };

  checkmate = () => {
    const kingCoordinates = this.state.kingCoordinates.slice();
    const kingResults = this.state.kingResults.slice();
    const piece1Results = [...this.state.piece1Result];
    const piece2Results = [...this.state.piece2Result];
    const allAttacks = piece1Results.concat(piece2Results);
    let kingCoordinates2 = kingCoordinates.slice();

    if (kingCoordinates2) {
      this.setState({
        kingIsChecked: checkHelper(kingCoordinates2, allAttacks),
        kingIsCheckMated: checkMateHelper(kingResults, allAttacks)
      });
    }
  };

  random = () => {
    const horiz = String.fromCharCode(
      Math.floor(Math.random() * 8) + 65
    ).toLowerCase();
    const vert = (Math.floor(Math.random() * 8) + 1).toString();
    const pieces = [
      "king",
      "queen",
      "rook",
      "bishop",
      "knight",
      "whitepawn",
      "blackpawn"
    ];
    const randomPiece = pieces[Math.floor(Math.random() * 7)];
    console.log(horiz);
    console.log(vert);
    console.log(randomPiece);
    this.setState({
      piece1Name: randomPiece,
      piece1Coordinates: `${horiz}${vert}`
    });
  };

  reset = () => {
    this.setState({
      piece1Coordinates: "",
      piece1Result: [],
      piece2Name: "",
      piece2Coordinates: "",
      piece2Result: [],
      kingCoordinates: "",
      kingResults: [],
      kingIsChecked: null,
      kingIsCheckMated: null
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="container">
          <div id="input">
            <form onSubmit={this.handleOnSubmit}>
              <input
                className="chess-input"
                type="text"
                name="kingCoordinates"
                value={this.state.kingCoordinates}
                onChange={this.handleOnChange}
                placeholder="King location here."
              />

              <input
                className="chess-input"
                type="text"
                name="piece1Coordinates"
                value={this.state.piece1Coordinates}
                onChange={this.handleOnChange}
                placeholder="Piece 1 coordinates here."
              />
              <select
                name="piece1Name"
                value={this.state.piece1Name}
                onChange={this.handleOnChange}
              >
                <option value="Piece 1" />
                <option value="king">King</option>
                <option value="queen">Queen</option>
                <option value="rook">Rook</option>
                <option value="bishop">Bishop</option>
                <option value="knight">Knight</option>
                <option value="whitepawn">White Pawn</option>
                <option value="blackpawn">Black Pawn</option>
              </select>
              <input
                className="chess-input"
                type="text"
                name="piece2Coordinates"
                value={this.state.piece2Coordinates}
                onChange={this.handleOnChange}
                placeholder="Piece 2 coordinates here."
              />
              <select
                name="piece2Name"
                value={this.state.piece2Name}
                onChange={this.handleOnChange}
              >
                <option value="Piece 2" />
                <option value="king">King</option>
                <option value="queen">Queen</option>
                <option value="rook">Rook</option>
                <option value="bishop">Bishop</option>
                <option value="knight">Knight</option>
                <option value="whitepawn">White Pawn</option>
                <option value="blackpawn">Black Pawn</option>
              </select>
              <input type="submit" value="Submit" />
              <button type="button" onClick={this.reset}>
                Clear
              </button>
              <button type="button" onClick={this.random}>
                Random
              </button>
            </form>
            <p>
              The {this.state.piece1Name ? this.state.piece1Name : "____"} at{" "}
              {this.state.piece1Coordinates
                ? this.state.piece1Coordinates
                : "__"}{" "}
              can move to:{" "}
              {this.state.piece1Result
                ? this.state.piece1Result.join(", ")
                : null}
            </p>
            <p>
              The {this.state.piece2Name ? this.state.piece2Name : "____"} at{" "}
              {this.state.piece2Coordinates
                ? this.state.piece2Coordinates
                : "__"}{" "}
              can move to:
              {this.state.piece2Result
                ? this.state.piece2Result.join(", ")
                : null}
            </p>
            <p>
              King is checked:{" "}
              {this.state.kingIsChecked
                ? this.state.kingIsChecked.toString()
                : "false"}
            </p>
            <p>
              Checkmate?{" "}
              {this.state.kingIsCheckMated
                ? this.state.kingIsCheckMated.toString()
                : "false"}
            </p>
          </div>

          <div id="board">
            <Board
              piece1Coordinates={this.state.piece1Coordinates}
              piece1Name={this.state.piece1Name}
              piece2Coordinates={this.state.piece2Coordinates}
              piece2Name={this.state.piece2Name}
              kingCoordinates={this.state.kingCoordinates}
              piece1Result={this.state.piece1Result}
              piece2Result={this.state.piece2Result}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Input;
