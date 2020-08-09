import React, {  lazy } from 'react';
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
import ChildChoice from "./components/ChildChoice";
import WeiLei from "./components/WeiLei";
import YouXian from "./components/YouXian";//css优先选择
import Position from "./components/Position";//position定位
import DivMore from "./components/DivMore";//div超出
import JuZhong from "./components/JuZhong";//居中
import Float from "./components/Float";//float浮动研究
import Display from "./components/Display";//display研究
import Flex from "./components/Flex";//Flex
import Test from "./components/Test";//Test
import Bfc from "./components/Bfc";//Test
// import Break from "./components/Break";//Test
const Break = lazy(() => import(/* webpackChunkName: "TM" */ "./components/Break"));
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
              <Route exact path="/childChoice">
                  <ChildChoice/>
              </Route>
              <Route exact path="/weiLei">
                  <WeiLei/>
              </Route>
              <Route exact path="/youXian">
                  <YouXian/>
              </Route>
              <Route exact path="/position">
                  <Position/>
              </Route>
              <Route exact path="/divMore">
                  <DivMore/>
              </Route>
              <Route exact path="/juZhong">
                  <JuZhong/>
              </Route>
              <Route exact path="/float">
                  <Float/>
              </Route>
              <Route exact path="/display">
                  <Display/>
              </Route>
              <Route exact path="/flex">
                  <Flex/>
              </Route>
              <Route exact path="/test">
                  <Test/>
              </Route>
              <Route exact path="/bfc">
                  <Bfc/>
              </Route>
              <Route exact path="/break">
                  <Break/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
