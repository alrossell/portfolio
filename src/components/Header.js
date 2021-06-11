import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./Header.css"

export default function Header(props) {
    return(
        <div id="nav-bar">
          <nav>
            <ul>
              <li>
                <Link to="/" className="header-trans header-left-bar" onClick={() => props.setStarColor([1,1,1])}>Home</Link>
              </li>
              <li>
                <p className="header-bar-wrapper">
                  |
                </p>
              </li>
              <li>
                <Link to="/about" className="header-trans header-left-bar" onClick={() => props.setStarColor([1,5,1])}>About</Link>
              </li>
              <li>
                <p className="header-bar-wrapper">
                  |
                </p>
              </li>
              <li>
                <Link to="/projects" className="header-trans"  onClick={() => props.setStarColor([1,1,5])}>Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
    )    
}
