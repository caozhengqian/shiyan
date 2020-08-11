import React from 'react';
import './App.css';

import Test from "./com/Test";//Test
import Hook from './pages/hook';
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
                  <Hook/>
              </Route>
              <Route exact path="/test">
                  <Test/>
              </Route>
              <Route exact path="/hook">
                  <Hook/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
