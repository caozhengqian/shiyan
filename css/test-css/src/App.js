import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Vh from "./components/Vh"
import FlexHeight from "./components/FlexHeight"
import LessStyle from "./components/LessStyle"
import BoxSizing from "./components/BoxSizing"
import Extends from "./components/Extends"
import Layout from "./layout/Layout"
import Choice from "./components/Choice";
import WeiLei from "./components/WeiLei";

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
              <Route exact path="/boxSizing">
                  <BoxSizing/>
              </Route>
              <Route exact path="/extends">
                  <Extends/>
              </Route>
              <Route exact path="/choice">
                  <Choice/>
              </Route>
              <Route exact path="/weiLei">
                  <WeiLei/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
