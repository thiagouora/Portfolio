import "./home.css";
import { useState } from "react";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  const [active, setActive] = useState("hover-show");
  function swapActive() {
    if (active === "hover-show") setActive("hover-show active");
    if (active === "hover-show active") setActive("hover-show");
  }

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className={active} onClick={swapActive}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2 id="about">
        <span>Sobre Mim</span> <br />
        <p>
          Conclui os cursos de PPA,PCA/IFR, MLTE, INVA e PLN no Aeroclube de
          Uberlândia, Aeroclube de Itápolis e EJ Escola de Aviação Civil. Além
          de ter realizado os cursos para piloto, também estou cursando Analise
          de Sistemas para Internet na faculdade Unisul, onde estou me dedicando
          a estudar linguagens de programação e afins.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
