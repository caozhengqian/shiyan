import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Index from "./components/Vh/index"
import Layout from "./layout/Layout"

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Layout/>
              </Route>
              <Route exact path="/vh">
                  <Index/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
