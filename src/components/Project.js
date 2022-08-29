import "./Project.css";

function Project({ appImage, link, name }) {
  return (
    <div className="project">
      <h2>
        <a href={link} target="_blank">
          {name}
        </a>
      </h2>
      <img className="project-gif" src={appImage} />
    </div>
  );
}

export default Project;
