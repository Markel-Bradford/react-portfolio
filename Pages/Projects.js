import React from 'react';
import '../../App.css';
import './Projects.css';

export default function Projects(){
    return (
        <>
        <h1 className='projects'>Projects</h1>
            <div className='project-container'>
            <h2 className='project-view'>Feel free to browse and review the projects I've completed</h2>
                <div className='project-files'>
                    <div>
                    <h3 className='project-name'>Survey Form: HTML5, CSS</h3>
                        <div className='thumbnail-wrapper'>
                        <a href="./react-portfolio/SurveyForm/build-a-survey-form.html">
                        <img className="thumbnail" src="./react-portfolio/images/SurveyForm.png" alt="survery form"/>
                        </a> 
                        </div>
                        <p className='information'>My task for this project was to build a functional survey 
                        form using HTML and a CSS style sheet. This was a FreeCodeCamp project and I decided to 
                        go with a survey that targeted FreeCodeCamp users to collect feedback on their desired 
                        rolls as a developer, their skills, and their experience. Entries can be entered into 
                        all fields on the form and it can be submitted once completed.</p>
                        <h3 className='project-name'>Tribute Page: HTML5, CSS</h3>                        
                        <div className='thumbnail-wrapper'>
                        <a href="./react-portfolio/TributePage/SakuraiTributePage.html">
                        <img className="thumbnail" src="./react-portfolio/images/tribute.png" alt="Masahiro Sakurai Tribute Page"/>
                        </a>
                        </div>
                        <p className='information'>The objective for this project was to build a trinute page 
                        dedicated to someone important to you using HTML and a CSS style sheet. The focus was 
                        building an informative website with a timeline of impactful events that happened in 
                        the persons life and career. I chose Masahiro Sakurai because he developed my all time 
                        favorite game, <i>Super Smash Bros. Melee</i>, for the Nintendo Gamecube.</p>
                        <h3 className='project-name'>Portfolio: HTML5, CSS</h3>                        
                        <div className='thumbnail-wrapper'>
                        <a href="./react-portfolio/PortfolioProject/index.html">
                        <img className="thumbnail" src="./react-portfolio/images/portfolio.png" alt="My first portfolio"/>
                        </a>
                        </div>
                        <p className='information'>This was my original portfilio project made using HTML and CSS.
                        This personal project was my first attempt at developing a function website to introduce
                        myself to the development market. It has a functional navigation bar, links the open into new tabs,
                        and responsive design for mobile viewing.</p>
                        </div>
                </div>
            </div>
        </>
    );
}