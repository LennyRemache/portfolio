import "./Project.css";
import { GitHub, Home } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";

function Project({ appImage, link, name, git }) {
  return (
    <div className="project">
      <h4>
        <a href={link ? link : git} target="_blank">
          {name}
        </a>
      </h4>
      <img className="project-gif" src={appImage} />
      <div className="project-buttons">
        {link && (
          <a href={link} target="_blank">
            <HomeIcon fontSize="small" />
            VIEW
          </a>
        )}
        <a href={git} target="_blank">
          <GitHub fontSize="small" />
          GITHUB
        </a>
      </div>
    </div>
  );
}

export default Project;
