import React from "react";
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Your Own Personal Library
      </a>
      <li className="nav-link"><a href="/Books">Your Books</a></li>
      <li className="nav-link"><a href="/Search">Search Books</a></li>
    </nav>
  );
}

export default Nav;
