import React from "react";

let position = "up"


function PlayGround() {
    let poly = (
        <polygon points="0,0 50,0 50,50" id = "thing" class = "up">
            <animate class="down-animation" dur="5s" begin="indefinite" attributeName="points"fill="freeze" dur="500ms" to="50,0 50,0 50,50;"/>
            <animate class="up-animation" dur="5s" begin="indefinite" attributeName="points"fill="freeze" dur="500ms" to="0,0 50,0 50,50;"/>
        </polygon>
    )
    return (
        <React.StrictMode>
            <svg width="100" height="100" id = "body">
              {poly}
              {poly}
              {poly}
            </svg>
  
            <button onClick = {() => anima()}>Press Me </button>
        </React.StrictMode>
    )
}

function anima(){
    if(position === "up"){
        let otherElement = document.getElementsByClassName("down-animation")
        for(let i = 0; i < otherElement.length; i++){
            otherElement[i].beginElement()
        position = "down"
    }
}
    
    
    
    // if(otherElement.classList.contains("up")) {
    //     let element = document.getElementById("down");
    //     console.log(element);
    //     element.beginElement();
    //     otherElement.classList.remove("up");
    //     otherElement.classList.add("down");
    // }else {
    //     let element = document.getElementById("up");
    //     console.log(element);
    //     element.beginElement();
    //     otherElement.classList.remove("down");
    //     otherElement.classList.add("up");
    // }
    
}


export default PlayGround