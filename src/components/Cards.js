import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img5 from '../assets/images/img-5.jpg';
import img6 from '../assets/images/img-6.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Watch more!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src={img1}
              text='Shaking Dance Songs | Music Album | Compilation | Pinkfong Official'
              label='Baby Shark’s Big Show!'
              path='https://www.youtube.com/watch?v=OZW9FarD2JQ'
            />
            <CardItem
              src={img2}
              text='Baby Shark | Happy Birthday to You Song | Pinkfong Official for Kids'
              label='Happy Birthday Song'
              path='https://www.youtube.com/watch?v=32R8C-ytHo8'
            />
            <CardItem
              src={img3}
              text='Happy Birthday Song Compilation | Pinkfong Official for Kids'
              label='Baby Shark!'
              path='https://www.youtube.com/watch?v=rkMb5gzu0Iw'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src={img4}
              text='Happy Birthday, Mommy Shark! | Pinkfong for Kids'
              label='Ballad Version'
              path='https://www.youtube.com/watch?v=MkSVjO88b9g'
            />
            <CardItem
              src={img5}
              text='Baby Shark Babysits the little Baby | Story & Pretend Play | Pinkfong Baby Shark'
              label='Peekaboo!'
              path='https://www.youtube.com/watch?v=I1P6_ICOSdg'
            />
            <CardItem
              src={img6}
              text='Special Family Songs Compilation | Pinkfong Baby Shark for Kids'
              label='To Our Child'
              path='https://www.youtube.com/watch?v=LBCAPjeIpWY'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

