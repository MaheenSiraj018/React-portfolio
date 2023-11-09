

import React from "react";

const Projcards =(props)=>{
    return (
        <div className="project-card gradient-bg">
                <div className="project-content">
                    <h3>{props.title}</h3>
                    <p> {props.desc}</p>
                    <a href={props.link} target="_blank" className="btn" >View Project</a>
                </div>
            </div>
    );
}
export default Projcards;