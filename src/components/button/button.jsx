import React from "react";
import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#project" className="btn pri">
        Leia mais
      </a>
      <a href="#contact" className="btn sec">
        Contato
      </a>
    </div>
  );
}

export default Buttons;
