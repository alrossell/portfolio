import { getElementError } from "@testing-library/react";
import React, { useRef, useEffect, useState } from "react";
import './LeftPanel.css';
import portrait from '../media/selfie.jpg'

import { MdMailOutline } from 'react-icons/md';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';



export default function LeftPanel(props) {
    
    return (
        <div id = "left-panel">
            
            <div id = "left-panel-wrapper">
                <img id = "portrait" src={portrait}/>
                <h3>Hello,</h3>
                <h2>My Name is:</h2>
                <h1>Andrew Rossell</h1>
                <p>
                    I'm a senior at Loyola Marymount University, majoring in Computer science and minoring in applied math. 
                </p>
                <MdMailOutline className="icon" onClick={() => window.open("mailto:alrossell@gmail.com", "_blank")}/>
                <FaLinkedinIn className="icon" onClick={() => window.open("https://www.linkedin.com/in/andrew-rossell-18094a193", "_blank")}/>
                <FaGithub className="icon" onClick={() => window.open("https://github.com/alrossell", "_blank")}/> 
            </div>
        </div>
    )
}
