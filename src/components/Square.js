import React, { Component } from "react";

class Square extends Component {
  componentDidMount() {
    console.log(this.props.piece);
  }
  render() {
    return (
      <React.Fragment>
        <td className=""></td>
      </React.Fragment>
    );
  }
}
export default Square;
