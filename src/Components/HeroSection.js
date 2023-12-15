import React from 'react';
import '../App.css';
/* import { Button } from './Button'; */
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video_2160.mp4' playsInline autoPlay loop muted />
        <h1>Welcome to My Portfolio</h1>
          <div className='hero-btns'>
            {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              Get Started
                </Button> */}
          </div>
    </div>
  );
}

export default HeroSection;

