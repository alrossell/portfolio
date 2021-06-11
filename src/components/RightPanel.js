import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import "./RightPanel.css"

export default function RightPanel() {
    return (
        <div id = "right-panel">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    )
}

