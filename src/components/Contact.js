
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import ContactImg from "../images/contacts.png"

const Contact = () => {
    const form = useRef();
    const showtoast =()=>{
        var x = document.getElementById("toast");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t4tb3rj', 'template_wut078c', form.current, 'klpDsVYb6TeuwPGHs')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent");
                document.getElementById("form_name").value = "";
                document.getElementById("form_email").value = "";
                document.getElementById("form_subject").value = "";
                document.getElementById("form_message").value = "";
                showtoast();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section className="contact" id="contact">
            <h1 className="contactheader">Contact <span>Me!</span></h1>
            <div className="contactitems">
                <img src={ContactImg} alt="Contact-Image" width="500px" height="500px" />
                <div className="contactform">
                    <form ref={form} onSubmit={sendEmail} className="submitform" >
                        <input id="form_name" name="user_name" type="text" placeholder="Enter your Name" required />
                        <input id="form_email" name="user_email" type="email" placeholder="Enter your Email" required />
                        <input id="form_subject" name="subject" type="text" placeholder="Enter your subject" />
                        <textarea id="form_message" name="message" cols="40" rows="10" placeholder="Enter your message here"></textarea>
                        <button type="submit" value="Send" className="submit-btn" >Submit</button>
                        <div id="toast" className="">
                        <i id="checkicon" className='bx bxs-check-circle'>Email Sent!</i>
                    </div>
                    </form>
                    
                </div>


            </div>
        </section>
    );
}
export default Contact;