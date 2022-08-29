import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Background } from "./components/Background";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="app">
      <Background />
      <Navigation />
      <Intro />
      <About />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default App;
