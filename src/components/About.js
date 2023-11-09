import React from "react";
import profileImage from"../images/Maheen Siraj.jpg";

const About =()=>{
    return(
        <section class="about" id="about">
        <div class="aboutimg">
            <img class="aboutimage" src={profileImage} alt="Profile=Image" height="390px" width="330px"/>
        </div>
        <div class="abouttext">
            <h2>About <span>Me!</span></h2>
            <h4>Front-End Web Developer</h4>
            <p> I'm currently a student pursuing a degree in Software Engineering at NED University of Engineering and Technology. My passion lies in crafting captivating user interfaces and diving into the dynamic world of web development, with a keen focus on the front-end. I'm deeply fascinated by the mechanics of software and aspire to become a skilled full-stack software engineer. Constantly staying up-to-date with the latest frameworks and trends, I'm dedicated to honing my skills and adapting to the fast-paced tech landscape. Outside of coding, I enjoy reading tech articles, engaging in outdoor activities, and getting lost in depth of paintings. I'm eager to continually learn and grow on this exciting journey in the tech realm!
            </p>
        </div>
    </section>
    );

}
export default About;