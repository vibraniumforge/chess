import React from "react";

const Board = ({ piece, coordinate }) => {
  return (
    <React.Fragment>
      <table>
        <tbody id="chess-board">
          <tr>
            <td id="a8" className="white-square "></td>
            <td id="b8" className="black-square "></td>
            <td id="c8" className="white-square"></td>
            <td id="d8" className="black-square"></td>
            <td id="e8" className="white-square"></td>
            <td id="f8" className="black-square"></td>
            <td id="g8" className="white-square"></td>
            <td id="h8" className="black-square"></td>
          </tr>
          <tr>
            <td id="a7" className="black-square"></td>
            <td id="b7" className="white-square"></td>
            <td id="c7" className="black-square"></td>
            <td id="d7" className="white-square"></td>
            <td id="e7" className="black-square"></td>
            <td id="f7" className="white-square"></td>
            <td id="g7" className="black-square"></td>
            <td id="h7" className="white-square"></td>
          </tr>
          <tr>
            <td id="a6" className="white-square"></td>
            <td id="b6" className="black-square"></td>
            <td id="c6" className="white-square"></td>
            <td id="d6" className="black-square"></td>
            <td id="e6" className="white-square"></td>
            <td id="f6" className="black-square"></td>
            <td id="g6" className="white-square"></td>
            <td id="h6" className="black-square"></td>
          </tr>
          <tr>
            <td id="a5" className="black-square"></td>
            <td id="b5" className="white-square"></td>
            <td id="c5" className="black-square"></td>
            <td id="d5" className="white-square"></td>
            <td id="e5" className="black-square"></td>
            <td id="f5" className="white-square"></td>
            <td id="g5" className="black-square"></td>
            <td id="h5" className="white-square"></td>
          </tr>
          <tr>
            <td id="a4" className="white-square"></td>
            <td id="b4" className="black-square"></td>
            <td id="c4" className="white-square"></td>
            <td id="d4" className="black-square"></td>
            <td id="e4" className="white-square"></td>
            <td id="f4" className="black-square"></td>
            <td id="g4" className="white-square"></td>
            <td id="h4" className="black-square"></td>
          </tr>
          <tr>
            <td id="a3" className="black-square"></td>
            <td id="b3" className="white-square"></td>
            <td id="c3" className="black-square"></td>
            <td id="d3" className="white-square"></td>
            <td id="e3" className="black-square"></td>
            <td id="f3" className="white-square"></td>
            <td id="g3" className="black-square"></td>
            <td id="h3" className="white-square"></td>
          </tr>
          <tr>
            <td id="a2" className="white-square"></td>
            <td id="b2" className="black-square"></td>
            <td id="c2" className="white-square"></td>
            <td id="d2" className="black-square"></td>
            <td id="e2" className="white-square"></td>
            <td id="f2" className="black-square"></td>
            <td id="g2" className="white-square"></td>
            <td id="h2" className="black-square"></td>
          </tr>
          <tr>
            <td id="a1" className="black-square"></td>
            <td id="b1" className="white-square"></td>
            <td id="c1" className="black-square"></td>
            <td id="d1" className="white-square"></td>
            <td id="e1" className="black-square"></td>
            <td id="f1" className="white-square"></td>
            <td id="g1" className="black-square"></td>
            <td id="h1" className="white-square"></td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Board;
