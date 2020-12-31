import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Nav from "./components/General/Nav";
import About from "./components/About/About";
import FilmDiaries from "./components/FilmDiaries/FilmDiaries";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/filmdiaries">
          <FilmDiaries />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
