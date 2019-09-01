import React, { Component } from "react";
import { convertChessNotationToArray } from "../helpers/convertChessToArray.js";
import { convertArrayToChessNotation } from "../helpers/convertArrayToChess.js";
import { movesHelper } from "../helpers/movesHelper.js";
class Input extends Component {
  state = {
    coordinatesInput: "",
    piece: "",
    result: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const x = movesHelper(this.state.piece, this.state.coordinatesInput);
    // this.reset();
    this.setState(prevState => ({
      result: [...prevState.result, x]
    }));
  };

  reset = () => {
    this.setState({ coordinatesInput: "", piece: "", result: "" });
  };

  render() {
    const piece = this.state.piece;
    const coord = this.state.coordinatesInput;
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
              name="coordinatesInput"
              value={this.state.coordinatesInput}
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
            The {piece ? piece : "____"} at {coord ? coord : "__"} can move to{" "}
          </p>
          <ul>{result}</ul>
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}
export default Input;
