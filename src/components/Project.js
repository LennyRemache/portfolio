import "./Project.css";
import { GitHub, Home } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";

function Project({ appImage, link, name, git }) {
  return (
    <div className="project">
      <h2>
        <a href={link} target="_blank">
          {name}
        </a>
      </h2>
      <img className="project-gif" src={appImage} />
      <div className="project-buttons">
        <a href={link}>
          <HomeIcon fontSize="small" />
          VIEW
        </a>
        <a href={git}>
          <GitHub fontSize="small" />
          GITHUB
        </a>
      </div>
    </div>
  );
}

export default Project;
