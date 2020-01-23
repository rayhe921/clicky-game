import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-light bg-primary">
  <a className="navbar-brand" href="/">{props.children}</a>
  <span class="navbar-text">
    {props.navText}
  </span>
  <span class="navbar-text">
    Score: {props.score} / Top Score: {props.topScore}  
  </span>
</nav>
    )
}

export default Navbar;

