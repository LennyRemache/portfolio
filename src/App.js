import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Background } from "./components/Background";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import MovieInfo from "./img/MovieInfo.gif";
import DevChat from "./img/DevChat.gif";
import LinkTracker from "./img/LinkTracker.gif";

function App() {
  return (
    <div className="app" id="top">
      <Background />
      <Navigation />
      <Intro />
      <About />

      <div id="projects">
        <h3>Projects</h3>
        <div className="projects">
          <Project
            appImage={DevChat}
            link="https://messaging-app-5f014.web.app/"
            name="DevChat"
            git="https://github.com/LennyRemache/messaging-app.git"
          />
          <Project
            appImage={MovieInfo}
            link="https://lenny-movie-search.netlify.app/"
            name="Movie.Info"
            git="https://github.com/LennyRemache/movie-info-search.git"
          />
          <Project
            appImage={LinkTracker}
            name="Link Tracker Chrome Extension"
            git="https://github.com/LennyRemache/chrome-extension.git"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
