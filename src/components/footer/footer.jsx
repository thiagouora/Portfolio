import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Obrigado!{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/thiago-uora/">
          <FaLinkedinIn className="social" />
        </a>
        <a href="https://github.com/thiagouora">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
