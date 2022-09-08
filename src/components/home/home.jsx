import "./home.css";
import { useState } from "react";
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

        <img src="https://github.com/thiagouora.png" alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2 id="about" className="about">
        <span>Sobre Mim</span> <br />
        <p>
          Olá, me chamo Thiago Uora, sou desenvolvedor front-end e piloto
          comercial de aeronaves, estou migrando de carreira faz algum tempo,
          hoje me dedico a estudar linguagens de programação e afins. Meu
          objetivo é um dia me tornar um desenvolvedor full stack, mas para os
          próximos anos me vejo no front-end ou mobile e formado na graduação de
          análise de sistemas, tenho experiência com JavaScript, HTML5, CSS3,
          React e outros, adoro tecnologia e estou sempre buscando aprender e
          estar por dentro deste mundo que muda constantemente.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
