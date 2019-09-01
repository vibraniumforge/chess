import React, { Component } from "react";
// import { convertChessNotationToArray } from "../helpers/convertChessToArray.js";
// import { convertArrayToChessNotation } from "../helpers/convertArrayToChess.js";
import { movesHelper } from "../helpers/movesHelper.js";
import Board from "../components/Board";

class Input extends Component {
  state = {
    coordinates: "a1",
    piece: "bishop",
    result: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const x = movesHelper(this.state.piece, this.state.coordinates);
    // this.reset();
    this.setState(prevState => ({
      result: [...prevState.result, x]
    }));
  };

  reset = () => {
    this.setState({ coordinates: "", piece: "", result: "" });
  };

  render() {
    let result;
    if (this.state.result) {
      result = this.state.result[0].map((move, index) => {
        return <li key={index}>{move}</li>;
      });
    }
    return (
      <React.Fragment>
        <div id="input">
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              name="coordinates"
              value={this.state.coordinates}
              onChange={this.handleOnChange}
              placeholder="Chess coordinates here."
            />
            <select
              name="piece"
              value={this.state.piece}
              onChange={this.handleOnChange}
            >
              <option value="Piece" />
              <option value="king">King</option>
              <option value="queen">Queen</option>
              <option value="rook">Rook</option>
              <option value="bishop">Bishop</option>
              <option value="knight">Knight</option>
              <option value="pawn">Pawn</option>
            </select>
            <input type="submit" value="Submit" />
            <button type="button" onClick={this.reset}>
              Clear
            </button>
          </form>
          <p>
            The {this.state.piece ? this.state.piece : "____"} at{" "}
            {this.state.coordinates ? this.state.coordinates : "__"} can move to{" "}
          </p>
          <ul>{result}</ul>
        </div>
        <div id="board">
          <Board piece={this.state.piece} coordinates={this.state.cordinates} />
        </div>
      </React.Fragment>
    );
  }
}
export default Input;
