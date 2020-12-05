import React from 'react';
import benMiriello from './assets/benm4.jpeg';

const HeroCard = () => (
  <div className='home-header-container relative overflow-hidden'>
    <div className='absolute left-0 h-full flex flex-col justify-center'>
      <h1 className='text-4xl sm:text-6xl ml-4 z-20 break-words home-header-text'>
        I love finding simple solutions that elevate code and design
      </h1>
    </div>

    <div className='home-header-image absolute right-0 overflow-hidden home-header-image-cover z-10'></div>
    <div className='home-header-image absolute right-0 overflow-hidden bg-cover bg-no-repeat' style={{backgroundImage: `url(${benMiriello})`}}></div>
  </div>
);

export default HeroCard;
