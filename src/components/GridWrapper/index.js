import React from "react";
import "./style.css";

function GridWrapper(props) {
  return <div className="gridWrapper">{props.children}</div>;
}

export default GridWrapper;
