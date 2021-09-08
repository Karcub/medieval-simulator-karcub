import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "../elements/Home";
import Intro from "../elements/Intro";
import Container from "../elements/Container";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/intro">
              <Intro/>
            </Route>
            <Route path="/card/:id">
              <Container/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;