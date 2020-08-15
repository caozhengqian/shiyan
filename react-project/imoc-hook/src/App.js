import React from 'react';
import './App.css';

import Home from "./pages/home";
import Test from "./com/Test";//Test
import Hook from './pages/hook';
import Media from './pages/media/Media';
import Slidess from './pages/slides/Slidess';
import ReactCom from './pages/reactCom'
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
                  <Home/>
              </Route>
              <Route exact path="/test">
                  <Test/>
              </Route>
              <Route exact path="/hook">
                  <Hook/>
              </Route>
              <Route exact path="/media">
                  <Media/>
              </Route>
              <Route exact path="/slides">
                  <Slidess/>
              </Route>
              <Route exact path="/ref">
                  <Slidess/>
              </Route>
              <Route exact path="/reactcom">
                  <ReactCom/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
