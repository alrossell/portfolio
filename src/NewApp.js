import { wait } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import { useWindowDimensions } from "./dimensionsGetter.js";
import './NewApp.css';

const myBlue = "#3018C3"
const myRed = "#FD0000"
const myYellow = "#E1F400"
const myBlack = "#000"
const myGrey = "#808080"
const headerHeight = 80

function NewApp() {
   const { height, width } = useWindowDimensions()
   const [style, setStyle] = useState("style-home")

    return (
        <React.StrictMode>
            <NavBar width = {width} style = {style} setStyle = {setStyle}/>
            <Body height = {height} width = {width}/>
        </React.StrictMode>
    )
}

function NavBar(props) {
    let content;

    if(props.width > 500){
        content = (
                <div id = "regular-group">
                    <NavContent setStyle = {props.setStyle} style = {props.style}/>
                </div>
            )   
    }else {
        content = (
                <div id = "drop-down-group">
                    <ul>
                        <li id = "drop-down-indicator"><a href = "#">Dropdown</a></li>
                        <NavContent setStyle = {props.setStyle} style = {props.style}/>
                    </ul>
                </div> 
            )
    }

    return (
        <div id = "nav-bar" >
            <a href = "#" onClick = {() => activateHome(props.style, props.setStyle)}>Andrew Rossell</a>
            {content}
        </div>
    )
}

function activateHome(style, setStyle) {
    if(style != "style-home") {
        if(style === "style-projects") {
            let colorElement = document.getElementsByClassName("multi-color-animation")
            for(let i = 0; i < colorElement.length; i++){
                colorElement[i].beginElement()
            }   
        }else {
            let otherElement = document.getElementsByClassName("up-animation")
            for(  let i = 0; i < otherElement.length; i++){
                otherElement[i].beginElement()
            }

            let nextElement = document.getElementsByClassName("top-bar-exit")
            for(let i = 0; i < nextElement.length; i++){
                nextElement[i].beginElement()
            }
        }
        setStyle("style-home") 
    }
}

function NavContent(props) {
    return(
        <ul>
            <li><a href = "#" onClick = {() => activateProjects(props.style, props.setStyle)}>Projects</a></li>
            <li><a href = "https://github.com/alrossell" target="_blank">Github</a></li>
            <li><a href = "https://www.linkedin.com/in/andrew-rossell-18094a193" target="_blank">Linkedin</a></li>
            <li><a href = "#" onClick = {() => activateAboutMe(props.style, props.setStyle)}>About me</a></li>
            <li><a href = "#">Surprise</a></li>
        </ul>
    )
}

function activateProjects(style, setStyle) {
    if(style != "style-projects") {

        if(style === "style-about-me") {
        let otherElement = document.getElementsByClassName("up-animation")
        for(let i = 0; i < otherElement.length; i++){
            otherElement[i].beginElement()
        }

        let nextElement = document.getElementsByClassName("top-bar-exit")
        for(let i = 0; i < nextElement.length; i++){
            nextElement[i].beginElement()
        }
    }

        let otherElement = document.getElementsByClassName("mono-color-animation")
        for(let i = 0; i < otherElement.length; i++){
            otherElement[i].beginElement()
        }

        setStyle("style-projects") 
    }    
}

function activateAboutMe(style, setStyle) {
    let findMe = document.getElementsByClassName("about-me-div");
    document.getElementById("about-me-div").classList.add("mystyle");
    if(style != "style-about-me") {
        if(style === "style-projects") {
            let colorElement = document.getElementsByClassName("multi-color-animation")
            for(let i = 0; i < colorElement.length; i++){
                colorElement[i].beginElement()
            }   
        }

        let dirElement = document.getElementsByClassName("down-animation")
        for(let i = 0; i < dirElement.length; i++){
            dirElement[i].beginElement()
        }

        let barElement = document.getElementsByClassName("top-bar-enter")
        for(let i = 0; i < barElement.length; i++){
            barElement[i].beginElement()
        }

        setStyle("style-about-me") 
    }    
}

function Body(props) {
    let height = props.height - headerHeight 
    let width = props.width   
    

    return (
        <div class = "main" >
            <svg id = "main-body">

                <polygon points={`${width},0 ${width},0 ${width / 1.5 - 5},0 ${width},${height}`} fill = {myYellow}>


                    {/*The downward animation*/}
                    <animate id = "yellow-down-1" begin="black-down.begin + 0s" attributeName="points" fill="freeze" dur="300ms" to={`${width / 1.5},0 ${width / 1.5},0 ${width / 4 - 5},0 ${width},${height}`}/>
                    <animate id = "yellow-down-2" begin="yellow-down-1.end + 0ms" attributeName="points" fill="freeze" dur="300ms" to={`${width / 4},0 0,0 0,0 ${width},${height}`}/>
                    <animate id = "yellow-down-3" begin="yellow-down-2.end + 0ms" attributeName="points" fill="freeze" dur="300ms" to={`0,0 0,0 0,${height/2} ${width},${height}`}/>
                    <animate begin="yellow-down-3.end + 0ms" attributeName="points" fill="freeze" dur="300ms" to={`0,${height} 0,${height} 0,${height} ${width},${height}`}/>

                    {/*The upward animation*/}
                    <animate id = "yellow-up-1" begin="black-up.begin + 0s" attributeName="points" fill="freeze" dur="300ms" to={`0,0 0,0 0,${height/2} ${width},${height}`}/>
                    <animate id = "yellow-up-2" begin="yellow-up-1.end + 0ms" attributeName="points" fill="freeze" dur="300ms" to={`${width / 4},0 0,0 0,0 ${width},${height}`}/>
                    <animate id = "yellow-up-3" begin="yellow-up-2.end + 0ms" attributeName="points" fill="freeze" dur="300ms" to={`${width / 1.5},0 ${width / 1.5},0 ${width / 4 - 5},0 ${width},${height}`}/>
                    <animate begin="yellow-up-3.end + 0ms" attributeName="points" fill="freeze" dur="300ms" to={`${width},0 ${width},0 ${width / 1.5 - 5},0 ${width},${height}`}/>

                    {/*Mono Color*/}
                    <animate class="mono-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myGrey}/>

                    {/*Multi Color*/}
                    <animate class="multi-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myYellow}/>
                </polygon>

                <polygon points={`${width / 1.5},0 ${width / 1.5},0 ${width / 4 - 5},0 ${width},${height}`} fill = {myRed}> 
                    {/*The downward animation*/}
                    <animate id = "red-down-1" begin="black-down.begin + 0s" attributeName="points" fill="freeze" dur="400ms" to={`${width / 4},0 0,0 0,0 ${width},${height}`}/>
                    <animate id = "red-down-2" begin="red-down-1.end + 0ms" attributeName="points" fill="freeze" dur="400ms" to={`0,0 0,0 0,${height/2} ${width},${height}`}/>
                    <animate begin="red-down-2.end + 0ms" attributeName="points" fill="freeze" dur="400ms" to={`0,${height} 0,${height} 0,${height} ${width},${height}`}/>

                    {/*The upward animation*/}
                    <animate id = "red-up-1" begin="black-up.begin + 0s" attributeName="points" fill="freeze" dur="400ms" to={`0,0 0,0 0,${height/2} ${width},${height}`}/>
                    <animate id = "red-up-2" begin="red-up-1.end + 0ms" attributeName="points" fill="freeze" dur="400ms" to={`${width / 4},0 0,0 0,0 ${width},${height}`}/>
                    <animate begin="red-up-2.end + 0ms" attributeName="points" fill="freeze" dur="400ms" to={`${width / 1.5},0 ${width / 1.5},0 ${width / 4 - 5},0 ${width},${height}`}/>

                    {/*Mono Color*/}
                    <animate class="mono-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myGrey}/>

                    {/*Multi Color*/}
                    <animate class="multi-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myRed}/>
                </polygon>

                <polygon points={`0,${height / 4} 0,0 ${width / 4},0 ${width},${height}`} fill = {myBlue}>
                    {/*The downward animation*/}
                    <animate id = "blue-down-1" begin="black-down.begin + 0s" attributeName="points" fill="freeze" dur="400ms" to={`0,${height / 1.5} 0,0 0,0 ${width},${height}`}/>
                    <animate begin="blue-down-1.end + 0s" attributeName="points" fill="freeze" dur="800ms" to={`0,${height} 0,${height} 0,${height} ${width},${height}`}/>

                    {/*The upward animation*/}
                    <animate id = "blue-up-1" begin="black-up.begin + 0s" attributeName="points" fill="freeze" dur="800ms" to={`0,${height / 1.5} 0,0 0,0 ${width},${height}`}/>
                    <animate begin="blue-up-1.end + 0s" attributeName="points" fill="freeze" dur="400ms" to={`0,${height / 4} 0,0 ${width / 4},0 ${width},${height}`}/>

                    {/*Mono Color*/}
                    <animate class="mono-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myGrey}/>

                    {/*Multi Color*/}
                    <animate class="multi-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myBlue}/>
                </polygon>

                <polygon points = {`0,${height / 4 - 1} 0,${height} ${width},${height}`} fill = {myBlack} id = "black-poly">
                    {/*The downward animation*/}
                    <animate class="down-animation" id = "black-down" begin="indefinite" attributeName="points" fill="freeze" dur="1200ms" to={`0,${height} 0,${height} ${width},${height+1}`}/>

                    {/*The upward animation*/}
                    <animate class="up-animation" id = "black-up" begin="indefinite" attributeName="points" fill="freeze" dur="1200ms" to={`0,${height / 4 - 1} 0,${height} ${width},${height}`}/>

                    {/*Mono Color*/}
                    <animate class="mono-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myGrey}/>

                    {/*Multi Color*/}
                    <animate class="multi-color-animation" begin="indefinite" attributeName="fill" fill="freeze" dur="1200ms" to={myBlack}/>
                </polygon>

                <text x={width*(1/10)-30} y={height*(3/4)-30} class="home-text">Weclome,</text>
                <text x={width*(1/10)+30} y={height*(3/4)+30} class="home-text">To My Website</text>

                <polygon  points = {`${width},0 ${width},10 ${width},10 ${width},0`} fill = {myBlack} id = "top-bar-poly">
                    <animate class="top-bar-enter" begin="indefinite" attributeName="points" fill="freeze" dur="1200ms" to={`${width * .1},0 ${width * .1},10 ${width * .9},10 ${width * .9},0`}/>
                    <animate class="top-bar-exit" begin="indefinite" attributeName="points" fill="freeze" dur="1200ms" to={`${width},0 ${width},10 ${width},10 ${width},0`}/>
                </polygon>
                <text x={width/8} y={height/8}>
                    <text text-anchor="start" x="60" y="40">A</text>
                    <text text-anchor="middle" x="60" y="75">A</text>
                    <text text-anchor="end" x="60" y="110">A</text>

                </text>
            </svg>
            <div id="about-me-div">
                <h1 id="about-me-text">Hello I'm Andrew Rossell. I'm a senior at LMU. I'm majoring in Computer Science and minoring in applied math. This is my website.</h1>
            </div>
        </div>
  );
}

export default NewApp;