import React from "react"
import "./ProjectCard.css"

export default function ProjectCard(props){
    return(
        <a className = "project-card">
            <h4 className = "project-card-title">
                {props.title}
            </h4>
            <p className = "project-card-description">
                {props.description}
            </p>
            <h6 className = "project-card-tags">
                {props.tags}
            </h6>
        </a>
    )
}
