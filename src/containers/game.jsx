import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import shortid from "shortid";
import Board from "../components/board";
import { stepForward, jumpToStep } from "../actions/step";
import { nextPlayer } from "../actions/next";
import { setHistory } from "../actions/history";
import { getCurrentStepData } from "../helpers/ticTacToe";

class Game extends React.Component {
  _getSymbolForCurrentPlayer() {
    return this.props.xIsNext ? "X" : "O";
  }
  _jumpTo(step) {
    this.props.jumpToStep(step);
    this.props.nextPlayer();
  }
  _handleClick(squareIndex) {
    if (this.props.winner || this.props.currentStepSquares[squareIndex]) {
      return;
    }
    this.props.setHistory(squareIndex, this._getSymbolForCurrentPlayer(), this.props.step);
    this.props.stepForward();
    this.props.nextPlayer();
  }
  render() {
    const { history, currentStepSquares, winner } = this.props;
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this._getSymbolForCurrentPlayer()}`;
    }
    const moves = history.map((stepHistory, move) => {
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
          <Board squares={currentStepSquares} onClick={squareIndex => this._handleClick(squareIndex)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  step: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  currentStepSquares: PropTypes.arrayOf(PropTypes.string).isRequired,
  winner: PropTypes.string,
  stepForward: PropTypes.func.isRequired,
  jumpToStep: PropTypes.func.isRequired,
  nextPlayer: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
};

Game.defaultProps = {
  winner: null,
};

const mapStateToProps = ({ step, xIsNext, history }) => {
  const { currentStepSquares, winner } = getCurrentStepData(history, step);
  return {
    step,
    xIsNext,
    history,
    currentStepSquares,
    winner,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { stepForward, jumpToStep, nextPlayer, setHistory },
  )(Game),
);
