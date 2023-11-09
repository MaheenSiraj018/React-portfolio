import React from "react";
import profileImage from"../images/Maheen Siraj.jpg";
import "../documents/Maheen's Resume.pdf";

const Home = () =>{
  
    return(
        <section className="home" id="Home">
        <div className="homecontent">
            <h3>Hello, It's Me</h3>
            <h1>Maheen Siraj</h1>
            <h3>And I'm a <span className="text">Web Developer</span></h3>
            <p>🚀 Welcome to my digital playground! Aspiring to be a full-stack software engineer, I'm currently immersing myself in the captivating world of front-end web development. Join me on this exciting journey as I craft delightful user interfaces and bring web experiences to life!</p>
            <div className="homesci">
                <a id="fb" href="" target="_blank"><i className='bx bxl-facebook'></i></a>
                <a id="instagram" href="" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
                <a id='whatsapp' href="" target="_blank"><i className='bx bxl-whatsapp'></i></a>
                <a id="linkedin" href="https://www.linkedin.com/in/maheen-siraj-b6a31824b/" target="_blank"><i className='bx bxl-linkedin'></i></a>
            </div>
            <a href="#about" className="btn-box">More About Me</a>
            <span><a href={require("../documents/Maheen's Resume.pdf")} download="Maheen's Resume.pdf" className="btn-box">Download Resume</a></span>
        </div>
        <div>
            <img className="profileimg" src={profileImage} height="500px" width="480px"/>
        </div>
    </section>
    );
}

export default Home;