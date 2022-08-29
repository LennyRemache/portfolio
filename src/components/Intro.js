import "./Intro.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Intro() {
  return (
    <div className="intro">
      <div className="intro--content">
        <h1>Hi, I'm Lenny | Frontend Developer</h1>
        <div className="contact-icons">
          <GitHubIcon />
          <LinkedInIcon />
          <EmailIcon />
        </div>
        <p className="intro--caption">
          Web developer based in New York City 🗽 <br />
          I'm a lifelong learner 🎓 who enjoys exploring and creating 🚀
        </p>
      </div>
    </div>
  );
}

export default Intro;
