import React from 'react';
// import benMiriello from './assets/benm4.jpeg';

const HeroCard = () => (
  <div className='uppercase font-bold text-5xl md:text-7xl home-header-container relative overflow-hidden'>
    <div className='w-full h-full absolute flex flex-col items-center justify-center'>
      <div style={{width: '80vw', height: '80vw', color: '#eb765d'}} className='z-10 home-header-circle bg-yellow-300 rounded-full overflow-hidden'>
        <div style={{width: '95vw', transform: 'translate(-7.5vw)'}} className='home-header-container flex flex-col justify-center items-center'>
          <div className='text-center'>I love finding</div>
          <div className='text-center'>simple solutions</div>
          <div className='text-center'>that elevate</div>
          <div className='text-center'>code and design</div>
        </div>
      </div>
    </div>
    <div className='w-full h-full absolute flex flex-col items-center justify-center'>
      <div style={{width: '80vw', height: '80vw'}} className='home-header-circle text-yellow-300'>
        <div style={{width: '95vw', transform: 'translate(-7.5vw)'}} className='home-header-container flex flex-col justify-center items-center'>
          <div className='text-center'>I love finding</div>
          <div className='text-center'>simple solutions</div>
          <div className='text-center'>that elevate</div>
          <div className='text-center'>code and design</div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroCard;

// <div className='home-header-container relative overflow-hidden'>
  // <div className='absolute left-0 h-full flex flex-col justify-center'>
  //   <h1 className='text-4xl sm:text-6xl ml-4 z-20 break-words home-header-text'>
  //     I love finding simple solutions that elevate code and design
  //   </h1>
  // </div>

  // <div className='home-header-image absolute right-0 overflow-hidden home-header-image-cover z-10'></div>
  // <div className='home-header-image absolute right-0 overflow-hidden bg-cover bg-no-repeat' style={{backgroundImage: `url(${benMiriello})`}}></div>
// </div>
