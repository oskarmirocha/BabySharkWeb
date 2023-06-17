import React from 'react';
import '../App.css';
import './SharkSection.css';
import { Button } from './Button';
import videoBg from '../assets/videos/babyshark.mp4'



function SharkSection() {
  return (
    <div className='shark-container'>
      <video src={videoBg} autoPlay loop muted />
      <h1>Baby Shark Dance</h1>
      <p>Whatch most viewed video!</p>
      <div className='shark-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default SharkSection;
