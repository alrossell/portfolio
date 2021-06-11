import {React, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Canvas from './components/Canvas';

import "./App.css"

export default function App(props) {

  const [starColor, setStarColor] = useState([1,1,1])

  return (
    <Router>
      <div className = "main-display-1">
        <Canvas id = "canvas-display" stars = {props.stars} starColor = {starColor} />
        <div id = "main-display-2">
          <Header setStarColor = {setStarColor}/>
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </Router>
  );
}
