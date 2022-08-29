import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Background } from "./components/Background";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import MovieInfo from "./img/MovieInfo.gif";
import DevChat from "./img/DevChat.gif";

function App() {
  return (
    <div className="app">
      <Background />
      <Navigation />
      <Intro />
      <About />
      <div id="projects">
        <Project
          appImage={DevChat}
          link="https://messaging-app-5f014.web.app/"
          name="DevChat"
        />
        <Project
          appImage={MovieInfo}
          link="https://lenny-movie-search.netlify.app/"
          name="Movie.Info"
        />
        <Project appImage={MovieInfo} />
        <Project appImage={MovieInfo} />
      </div>
    </div>
  );
}

export default App;
