import React from 'react';
import benMiriello from './assets/benmiriello.jpeg';
import Nav from './Nav';
import SocialLinks from './SocialLinks';

const HeroCard = () => (
  <div className='relative home-header-container overflow-hidden'>
    <div style={{backgroundImage: `url(${benMiriello})`, backgroundPosition: 'center', filter: 'blur(4px)'}} className='absolute home-header-container overflow-hidden bg-cover bg-no-repeat w-full'>{/* rgb(79 75 142 / 30%) */}</div>
      <div className='home-header-container absolute'>
        <div style={{backgroundColor: 'rgb(58 55 100 / 54%)'}} className='w-full h-full'>{/* bg-black bg-opacity-50  */}
        <Nav />

        <div style={{height: 'calc(100% - 6rem - 6rem)'}} className='p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center'>
          <div style={{color: '#8fe39a', minWidth: '320px'}} className='hero-text font-oswald text-5xl md:text-7xl lg:text-8xl uppercase'> {/* #84e491 */}
            I love finding simple solutions that elevate code and design
          </div>
        </div>

        <SocialLinks />
      </div>
    </div>
  </div>
);

export default HeroCard;
