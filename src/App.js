import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Nav from "./components/General/Nav";
import About from "./components/About/About";

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
      </Router>
    </div>
  );
}

export default App;
