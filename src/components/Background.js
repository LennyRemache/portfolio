import backgroundVideo from "../video/background.mp4";
import "./Background.css";

export function Background() {
  return (
    <div className="background">
      <video autoPlay loop muted playsInLine>
        <source src={backgroundVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}
