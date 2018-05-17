import React from "react";
import PropTypes from "prop-types";

const Square = props => (
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Square };
