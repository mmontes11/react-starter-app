import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="logo" />
    <h1 className="header-title">React starter app</h1>
    <div className="header-links">
      <NavLink to="/game" className="header-link" activeClassName="header-link-active">
        Game
      </NavLink>
      <NavLink to="/about" className="header-link" activeClassName="header-link-active">
        About
      </NavLink>
    </div>
  </header>
);

export default Header;
