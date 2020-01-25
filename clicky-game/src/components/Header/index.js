import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
    <h1 className="display-4 title">{props.title}</h1>
                <p className="lead description">{props.description}</p>
            </div>
        </div>
    )
}

export default Header;

