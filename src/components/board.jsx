import React from "react";
import PropTypes from "prop-types";
import Square from "components/square";

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
    for (let i = 0; i < 3; i += 1) {
      const squares = [];
      for (let j = 0; j < 3; j += 1) {
        squares.push(this._renderSquare(squareIndex));
        squareIndex += 1;
      }
      rows.push(
        <div key={i} className="board-row">
          {squares}
        </div>,
      );
    }
    return <div>{rows}</div>;
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
