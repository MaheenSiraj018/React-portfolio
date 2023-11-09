
import React from "react";
import Projcards from "./Projcards";

const Projects =()=>{
    return (
        <section className="project" id="project">
        <h2 className="section-heading">Projects</h2>
        <div className="project-cards">
            <Projcards title="FelineFinds" desc="Curated collection of exclusive cat-themed products and accessories for passionate feline enthusiasts" link="#"/>
            <Projcards title="TasksEase" desc="Streamlined to-do list app for easy task management—add, delete, and edit with a tap." link="https://github.com/MaheenSiraj018/myapp"/>
            <Projcards title="QuickNotes" desc="Capture ideas in a flash with this quick notes app. Stay organized, anytime, anywhere." link="https://github.com/MaheenSiraj018/Quick-Notes"/>
            <Projcards title="QuickWeather" desc="A rapid app for quick access to current conditions and forecasts, delivering vital weather data." link="https://github.com/MaheenSiraj018/Weather-application"/>
            <Projcards title="SecureSignIn" desc="Efficient login/signup, robust authentication for secure and smooth user onboarding." link="https://github.com/MaheenSiraj018/loginform"/>
            <Projcards title="TravelEase" desc="Simplified system for easy and quick flight booking and management, ensuring smooth travel arrangements." link="https://github.com/MaheenSiraj018/Airline-Reservation-System"/>
        </div>
        </section>

    );
}
export default Projects;