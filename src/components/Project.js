import "./Project.css";
import { GitHub, Home } from "@mui/icons-material";

function Project({ appImage, link, name, git, tools }) {
  return (
    <div className="project">
      <h4>
        <a href={link ? link : git} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h4>
      <img className="project-gif" src={appImage} alt={name} />
      <section className="project-tools">
        {tools.html && <p className="html">HTML</p>}
        {tools.css && <p className="css">CSS</p>}
        {tools.javascript && <p className="js">JAVASCRIPT</p>}
        {tools.react && <p className="react">REACT</p>}
        {tools.redux && <p className="redux">REDUX</p>}
        {tools.firebase && <p className="firebase">FIREBASE</p>}
        {tools.bootstrap && <p className="bootstrap">BOOTSTRAP</p>}
        {tools.materialUI && <p className="materialUI">MATERIAL UI</p>}
        {tools.netlify && <p className="netlify">NETLIFY</p>}
      </section>
      <div className="project-buttons">
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <Home fontSize="small" />
            VIEW
          </a>
        )}
        <a href={git} target="_blank" rel="noreferrer">
          <GitHub fontSize="small" />
          GITHUB
        </a>
      </div>
    </div>
  );
}

export default Project;
