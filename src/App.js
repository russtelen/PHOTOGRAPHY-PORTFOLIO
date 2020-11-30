import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Nav from "./General/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/">
          <Landing />
        </Route>
      </Router>
    </div>
  );
}

export default App;
