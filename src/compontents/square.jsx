import React from "react";
import PropTypes from "prop-types";

const Square = props => (
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Square.defaultProps = {
  value: "",
  onClick: () => undefined,
};

export { Square };
