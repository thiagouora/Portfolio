import "./contact.css";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contatos</h1>
      <div className="contact-links">
        <a
          href="https://wa.link/jou861"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+55 73 98240-4929</span>
          </h2>
        </a>
        <a
          href="https://www.instagram.com/_uora/"
          className="contact instagram"
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>_uora</span>
          </h2>
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
