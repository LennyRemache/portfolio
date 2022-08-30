import "./About.css";
import portrait from "../img/lenny.png";

function About() {
  return (
    <div className="about" id="about">
      <h2>Background</h2>
      <div className="about-content">
        <img className="about-img" src={portrait} alt="Lenny Remache" />
        <p className="background-info">
          I recently graduated from{" "}
          <span className="uni-bold">
            New York University Tandon School of Engineering
          </span>{" "}
          after completing my Bachelor of Science in Computer Science and minor
          in Mathematics. As a frontend web developer, I enjoy bridging the gap
          between engineering and design - combining my technical knowledge with
          keen eye for design to create a beautiful product. My goal is to
          always develop innovative solutions to meet customers’ needs and
          positively impact their lives.
          <br />
          <br />
          <span className="uni-bold">
            When I'm not in front of a computer screen
          </span>
          . I'm probably travelling, or playing soccer.
        </p>
      </div>
    </div>
  );
}

export default About;
