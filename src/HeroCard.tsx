import React from 'react';
import { Link } from 'react-router-dom';
import benMiriello from './assets/benmiriello.jpeg';

const HeroCard = () => (
  <>
    <div className='relative home-header-container overflow-hidden'>
      <div style={{backgroundImage: `url(${benMiriello})`, backgroundPosition: 'center', filter: 'blur(4px)'}} className='absolute home-header-container overflow-hidden bg-cover bg-no-repeat w-full'>{/* rgb(79 75 142 / 30%) */}</div>
      <div className='home-header-container absolute'>
        <div style={{backgroundColor: 'rgb(58 55 100 / 54%)'}} className='p-4 md:p-8 lg:p-12 w-full h-full flex flex-col items-center justify-center'>{/* bg-black bg-opacity-50  */}
          <div style={{color: '#8fe39a', minWidth: '320px'}} className='hero-text font-oswald text-5xl md:text-7xl lg:text-8xl uppercase'> {/* #84e491 */}
            I love finding simple solutions that elevate code and design
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HeroCard;
