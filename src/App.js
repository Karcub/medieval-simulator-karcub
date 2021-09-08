import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <div />
            </Route>
            <Route exact path="/intro">
              <div/>
            </Route>
            <Route path="/card/:id">
              <div/>
            </Route>
            <Route path="/ending/:endingStat/:endingThreshold">
              <div/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;