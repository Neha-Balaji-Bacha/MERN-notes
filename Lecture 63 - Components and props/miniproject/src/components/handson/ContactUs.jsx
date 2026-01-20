import "../../css/handson/contactUs.css";
import Form from "./Form";
import { useState } from "react";

function ContactUs() {
    const [submitted,setSubmitted] = useState(false);
    return ( 
    <>
     <nav className="container">
        <div className="icon">
            <img src="/images/image copy 5.png" alt="contact"/>
        </div>
        <ul>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
     </nav>

     <div className="main">
        <h1>Contact Us</h1>
        <p>Have an idea or a project in mind? Let’s connect and build something amazing together.Let’s build something amazing together..!!🚀</p>
     </div>

     <div className="personalInfo">
        {submitted ? (<h2 style={{color: "green"}}>Successfully done ..!!</h2>) : 
        <Form onSuccess={setSubmitted}/>
        }
     <div className="image">
        <img src="/images/image copy 4.png" alt="photo"/>
     </div>
     </div>
    </> );
}

export default ContactUs;