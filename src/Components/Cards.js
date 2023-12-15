import React from 'react'
import Carditems from './Carditems'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>Learn more about me and my projects!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <Carditems src='./react-portfolio//images/DSC06958.JPG' text="Hi, my name is Markel Bradford, and I am an aspiring full-stack developer!" label='About Me' path='/about-me' />
                <Carditems src='./react-portfolio//images/SurveyForm.png' text='Please take a look at the projects that I have completed.' label='My Projects' path='/projects' />
                <Carditems className='contact-me' src='./react-portfolio//images/contact.jpg' text='Connect with me on LinkedIn or via email!' label='Contact Me' path='/contact' />
                </ul>
            </div>
          </div>    
    </div>
  )
}

export default Cards;
