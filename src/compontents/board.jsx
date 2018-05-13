import React from "react";
import { BoardRow } from "./boardRow";
import { Square } from "./square";

export class Board extends React.Component {
  renderSquare(squareIndex) {
    return (
      <Square
        key={squareIndex}
        value={this.props.squares[squareIndex]}
        onClick={() => this.props.onClick(squareIndex)}
      />
    );
  }
  render() {
    const rows = [];
    let squareIndex = 0;
    for (let i = 0; i < this.props.size; i += 1) {
      const squares = [];
      for (let j = 0; j < this.props.size; j += 1) {
        squares.push(this.renderSquare(squareIndex));
        squareIndex += 1;
      }
      rows.push(<BoardRow key={i} squares={squares} />);
    }
    return <div>{rows}</div>;
  }
}
