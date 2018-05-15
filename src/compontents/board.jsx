import React from "react";
import PropTypes from "prop-types";
import { BoardRow } from "./boardRow";
import { Square } from "./square";

class Board extends React.Component {
  _renderSquare(squareIndex) {
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
        squares.push(this._renderSquare(squareIndex));
        squareIndex += 1;
      }
      rows.push(<BoardRow key={i} squares={squares} />);
    }
    return <div>{rows}</div>;
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(Square),
  onClick: PropTypes.func,
  size: PropTypes.number,
};

Board.defaultProps = {
  squares: [],
  onClick: () => undefined,
  size: 0,
};

export { Board };
