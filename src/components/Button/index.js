import React from "react";
import "./styles.css";

function Button({ text, onClick }) {
  return (
    <div className="button-wrapper" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
