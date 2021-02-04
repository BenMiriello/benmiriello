import React from 'react';
import benMiriello from './assets/paris-bg.png';
import Nav from './Nav';

// document.addEventListener('DOMContentLoaded', () => {
//   setTimeout(() => {
//     document.getElementById('hero-bg-image')?.classList.add('blur-4');
//   }, 0);
// })

const HeroCard = () => {
  return (
    <div style={{height: '80vh'}} className='overflow-hidden'>
      <div id='hero-bg-image' style={{height: '80vh', backgroundImage: `url(${benMiriello})`, backgroundPosition: 'center', zIndex: -2}} className='fixed blur-0 overflow-hidden bg-cover bg-no-repeat w-full'>{/* rgb(79 75 142 / 30%) */}</div>
        <div style={{height: '80vh'}} className=' absolute'>
          <div style={{backgroundColor: 'rgb(58 55 100 / 54%)'}} className='w-full h-full'>{/* bg-black bg-opacity-50  */}
          <Nav />

          <div style={{height: 'calc(100% - 6rem)'}} className='p-4 md:p-8 lg:p-12 flex flex-col justify-center'>{/*  flex flex-col items-center justify-center */}
            <div id='hero-text' style={{ color: '#8fe39a', minWidth: '250px'}} className='w-3/5 hero-text font-oswald text-5xl md:text-7xl lg:text-8xl uppercase'> {/* #84e491 */}
              I love finding simple solutions that elevate code and design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
