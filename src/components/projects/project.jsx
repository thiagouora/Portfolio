import React from "react";
import "./project.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <h2 id="project" className="proje-text">
        {" "}
        Meus Projetos
      </h2>
      <div className="container proj-container">
        <div className="project-container">
          
          <div className="projects">
            <div className="content organo"></div>
            <h1 className="project-title">Organo</h1>
            <p className="project-text">
              Crie e organize seu time.
            </p>
            <a
              href="https://organo-three.vercel.app"
              className="project-link"
            >
              <FaExternalLinkAlt className="ext-link" />
            </a>
          </div>

          <div className="projects">
            <div className="content paint"></div>
            <h1 className="project-title">Pixel Paint</h1>
            <p className="project-text">
              Use a criatividade com os Pixels.
            </p>
            <a
              href="https://pixelpaint.vercel.app"
              className="project-link"
            >
              <FaExternalLinkAlt className="ext-link" />
            </a>
          </div>

          <div className="projects">
            <div className="content pokedex"></div>
            <h1 className="project-title">Pokedex</h1>
            <p className="project-text">
              Pokedex com mais de 500 pokemons!
            </p>
            <a
              href="https://pokedex-tu.vercel.app"
              className="project-link"
            >
              <FaExternalLinkAlt className="ext-link" />
            </a>
          </div>

          <div className="projects">
            <div className="content mochila"></div>
            <h1 className="project-title">Mochila-Viajem</h1>
            <p className="project-text">
              Crie uma lista de itens para viajem.
            </p>
            <a
              href="https://mochiladeviagem.vercel.app"
              className="project-link"
            >
              <FaExternalLinkAlt className="ext-link" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;
