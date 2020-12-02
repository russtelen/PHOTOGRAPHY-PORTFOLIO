import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/General/Nav";
import Landing from "./components/Landing/Landing";

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
