import React from "react";

const Skillcard =(props)=>{
    return(
        <div className={props.class}>
            <img src={props.imgsrc} alt="" height="200px"/>
            <p>{props.title}</p>
        </div>
    );

}
export default Skillcard;