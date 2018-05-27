import React from "react";
import logo from "../assets/logo.svg";

const Header = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="logo" />
    <h1 className="header-title">React starter app</h1>
  </header>
);

export default Header;
