import React from 'react';
import '../../App.css';
import './Aboutme.css';

export default function AboutMe(){
    return (
       <>
        <h1 className='about-me'>About Me</h1>
            <div className='about-me-container'>
                <h4 className='hello'>Hello! My name is</h4>
                <h2 className='name'>Markel Bradford</h2>
                <h3 className='titles'>Site Operations Manager | Student | Full-Stack Developer</h3>
            </div>
            <div className='about-me-container'>
            <div class='me'>
                <p>I am an innovative and detail oriented professional located in Huntsville, Alabama 
                working to transition from management to the world of full stack development. I am a person that is inspired
                by a challenge which both management and development seem to have in common. 
                Currently, I have experience with HTML5, CSS, JavaScript, Node.js, and ReactJS and look to continue
                to expand my knowledge through research and application.  
                </p>
                <br />
                <p>I am currently a full-time student at American Military Univeristy pursuing my Bachelor's of Science in Information 
                Technology with a concentration in Multitier Architecture and expecting graduation in 2025. I am working to continue 
                to develop my knowledge and skills in full-stack development through continued education. My journey in education has taken
                many turns, but I am glad to be returing to school to better myself and build towards a new future. 
                </p>
                <br />
                <p>For employment, I currently work full-time for 3rd party quality company Stratosphere Quality as a
                Site Operations Manager. I also recently started working with Society of Scholars as a Software Engineer intern December 2023. 
                I have been active in leadership roles since I was 17 years old and I am eager to start a new chapter 
                in my life. For the last year and a half, I have dedicated myself to the study and application
                of coding and development to achieve my goals.I am currently open to and seeking internships and
                entry level web development job opportunities.
                </p>
            </div>
            </div>
            <div className='about-me-container'>
                <h3 className='titles'>Skills</h3>
            </div>
            <div className='skill-container'>
            <img className="skill" src="./react-portfolio/images/HTMLCSSJS.png" alt="HTML CSS and JS Logo" />
                <img className="skill-1" src="./react-portfolio/images/VScode.png" alt="VSCode logo" />
                <img className='skill-1' src='./react-portfolio//logo512.png' alt='react logo' />
            </div>
        </> 
    );
}