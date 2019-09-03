import React, { Component } from "react";
import { movesHelper } from "../helpers/movesHelper.js";
import Board from "../components/Board";
// import FullBoard from "../components/FullBoard";

class Input extends Component {
  state = {
    piece1Name: "rook",
    piece1Coordinates: "b5",
    piece1Result: [],
    piece2Name: "knight",
    piece2Coordinates: "a6",
    piece2Result: [],
    kingCoordinates: "a8",
    kingResults: [],
    checkMate: ""
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
    console.log("checkmate fires");
    console.log("this.state=", this.state);
    const kingCoordinates = this.state.kingCoordinates.slice();
    const kingResults = this.state.kingResults.slice();
    const piece1Results = [...this.state.piece1Result];
    const piece2Results = [...this.state.piece2Result];
    const allAttacks = piece1Results.concat(piece2Results);
    console.log("kingCoordinates=", kingCoordinates);
    console.log("kingResults=", kingResults);
    console.log("allAttacks=", allAttacks);
    let kingCoordinates2 = kingCoordinates.slice();
    let kingIsCheck = false;
    let kingIsCheckmated = false;
    if (kingCoordinates2) {
      //   const intersection = kingResults.filter(element =>
      //     allAttacks.includes(element)
      //   );
      console.log("kingCoordinates2=", kingCoordinates2);
      for (let i = 0; i < allAttacks.length; i++) {
        if (kingCoordinates2 === allAttacks[i]) {
          kingIsCheck = true;
        }
      }

      let filter = kingResults.filter(kr => {
        return allAttacks.includes(kr);
      });
      if (filter.length === kingResults.length) {
        kingIsCheckmated = true;
      }

      console.log("kingIsCheched=", kingIsCheck);
      console.log("filter=", filter);
      console.log("kingIsCheckmated=", kingIsCheckmated);
      this.setState({ checkMate: "hi" });
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
    this.setState({ coordinates: `${horiz}${vert}`, piece: randomPiece });
  };

  reset = () => {
    this.setState({ coordinates: "", piece: "", result: [] });
  };

  render() {
    // let result;
    // if (this.state.result !== []) {
    //   result = this.state.result.map((move, index) => {
    //     return <li key={index}>{move}</li>;
    //   });
    // }
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
            <p>{this.state.checkMate}</p>
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
