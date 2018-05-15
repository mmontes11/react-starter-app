import React from "react";
import PropTypes from "prop-types";
import { Square } from "./square";

const BoardRow = props => <div className="board-row">{props.squares}</div>;

BoardRow.propTypes = {
  squares: PropTypes.arrayOf(Square),
};

BoardRow.defaultProps = {
  squares: [],
};

export { BoardRow };
