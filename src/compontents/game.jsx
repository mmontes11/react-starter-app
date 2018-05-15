import React from "react";
import shortid from "shortid";
import { Board } from "./board";

export class Game extends React.Component {
  static _calculateWinner(squares) {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  _getSymbolForCurrentPlayer() {
    return this.state.xIsNext ? "X" : "O";
  }
  _jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  _handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (Game._calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this._getSymbolForCurrentPlayer();
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const current = this.state.history[this.state.stepNumber];
    const winner = Game._calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this._getSymbolForCurrentPlayer()}`;
    }
    const moves = this.state.history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : "Go to game start";
      return (
        <li key={shortid.generate()}>
          <button onClick={() => this._jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board size={3} squares={current.squares} onClick={i => this._handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
