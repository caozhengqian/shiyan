import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Vh from "./components/Vh"

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Vh/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
