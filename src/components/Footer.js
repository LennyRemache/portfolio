import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-copyright">
        <h2>Lenny Remache</h2>
        <p>
          © 2022, Built and designed by <br />
          Lenny Remache
        </p>
      </div>
      <div className="links">
        <a href="#about">Background</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="contacts">
        <p>Get in touch</p>
        <div className="footer-icons">
          <a
            href="https://github.com/LennyRemache"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/lennyremache/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a href="#contact">
            <Email fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
