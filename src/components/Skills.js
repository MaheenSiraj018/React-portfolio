import React from "react";
import "./Skillcard";
import Skillcard from "./Skillcard";
import htmlimg from "../images/html.png";
import cssimg from "../images/css.png";
import jsimg from "../images/javascriptt.png";
import reactimg from "../images/react.png";
import pythonimg from "../images/python.png";
import bootstrapimg from "../images/bootstrap.png";
import Cimg from "../images/C++.png";
import phpimg from "../images/php.png";

const Skills= ()=>{
    return (
        <section className="skills" id="skills">
        <h1 className="subtitle">My <span>Skills</span></h1>
        <Skillcard class="cont1" title="HTML 5" imgsrc={htmlimg}/>
        <Skillcard class="cont2" title="CSS" imgsrc={cssimg}/>
        <Skillcard class="cont3" title="JavaScript" imgsrc={jsimg}/>
        <Skillcard class="cont4" title="React" imgsrc={reactimg}/>
        <Skillcard class="cont5" title="Python" imgsrc={pythonimg}/>
        <Skillcard class="cont6" title="Bootstrap" imgsrc={bootstrapimg}/>
        <Skillcard class="cont7" title="C++" imgsrc={Cimg}/>
        <Skillcard class="cont8" title="PHP" imgsrc={phpimg}/>
        </section>
    )
    ;
}
export default Skills;