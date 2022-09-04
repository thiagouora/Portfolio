import React from 'react';
import "./about.css";
import Projects from "../projects/project";

function About() {
    return (
        <div id="about" className="container about-container">
            <h2> Meus Projetos</h2>
            <Projects />
        </div>
    )   
}

export default About