import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { TiSocialGithub } from "react-icons/ti";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contatos</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/thiago-uora/"
          className="contact linkedin"
        >
          <RiLinkedinFill className="icon" />
          <h2>Linkedin</h2>
        </a>

        <a href="https://github.com/thiagouora" className="contact github">
          <TiSocialGithub className="icon" />
          <h2>Github</h2>
        </a>

        <a
          href="https://criarmeulink.com.br/u/1662040006"
          className="contact email"
        >
          <AiOutlineMail className="icon" />
          <h2>
            Email <span>thiagouora@outlook.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
