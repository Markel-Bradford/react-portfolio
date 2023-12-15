import React from 'react';
import '../../App.css';
import './Contact.css';

export default function Contact(){
    return (
       <> 
        <h1 className='contact'>Contact Me</h1>
        <div class='contact-container'>
            <h2 className='contact-methods'>Please feel free to connect with me via LinkedIn or e-mail!</h2>
            </div>
            <div className='contact-img'>
            <div className='contact-wrapper'>
        <a href="mailto:markel.bradford94@gmail.com">
            <img className="icon" src="./images/contact2.jpg" alt="Email me"/>                
            </a>
         <a href="https://www.linkedin.com/in/markel-bradford-1773a9236">
            <img className="icon" src="./images/contact1.jpg" alt="My LinkedIn Profile"/>
            </a>
            </div>
        </div>
        </>
    );
}