import React from "react";
import "./style.css";

function ImageButton(props) {
    return (
        <div className="img-container">
        <img onClick={() => props.shuffle(props.pokemon)} className="image img-thumbnail" id={props.id} alt={props.name} src={props.image} />
      </div>
    )
}

export default ImageButton;

