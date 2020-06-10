import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Vh from "./components/Vh"
import FlexHeight from "./components/FlexHeight"
import LessStyle from "./components/LessStyle"
import Layout from "./layout/Layout"

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Layout/>
              </Route>
              <Route exact path="/vh">
                  <Vh/>
              </Route>
              <Route exact path="/flexHeight">
                  <FlexHeight/>
              </Route>
              <Route exact path="/lessStyle">
                  <LessStyle/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;