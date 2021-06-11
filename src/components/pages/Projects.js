import React from "react"
import "./Projects.css"
import ProjectCard from "./ProjectCard"

export default function Projects(){

    const cardsInfo = 
    [
        {
            title: "things1",
            description: "lfj dlskldj fkjash fdkjhfklja hldk hfaij hdklj hdklj hfk",
            tags: "kl;jkl;"
        },
        {
            title: "things2",
            description: "lfj dlskldj hdklj hdklj hfk",
            tags: "kl;a d as da s  djkl;"
        },
        {
            title: "things3",
            description: "lfj dlskldj fkjash dsa ds aedasd a dasdasd as s  da s hldk hfaij hdklj hdklj hfk",
            tags: "kl;jasd kl;"
        }
    ]

    const cards = cardsInfo.map((card) => <ProjectCard title = {card.title} description = {card.description} tags = {card.tags} /> )

    console.log(cards)
 

    return(
        <div id="Projects">
            <h1>Projects</h1>
            {cards}    
        </div>
    )
}
