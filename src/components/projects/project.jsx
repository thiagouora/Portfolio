import React from "react";
import "./project.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

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
            <div className="content js"></div>
            <h1 className="project-title">Organo</h1>
            <p className="project-text">Aplicativo para criar e organizar seu time.</p>
            <a href="https://github.com/thiagouora/organo" className="project-link"><FaExternalLinkAlt className="ext-link"/></a>
          </div>

          <div className="projects">
            <div className="content react"></div>
            <h1 className="project-title">React</h1>
            <p className="project-text">Aplicativo para criar e organizar seu time.</p>
            <a href="https://github.com/thiagouora/organo" className="project-link"><FaExternalLinkAlt className="ext-link"/></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
