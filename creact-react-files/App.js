import React from 'react';
import logo from './logo.svg';
import './App.css';

import Test from "./com/Test";//Test
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Test/>
              </Route>
              <Route exact path="/test">
                  <Test/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
