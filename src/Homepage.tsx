import React from 'react';

import GrabameetingCard from './GrabameetingCard';
import benMiriello from './assets/benm4.jpeg'; // './assets/doodle2.png'
import SocialLinks from './SocialLinks';

const Homepage = () => {
  return(
    <>
      <div className='home-header-container relative overflow-hidden'>
        <div className='absolute left-0 h-full flex flex-col justify-center'>
          <h1 className='text-4xl sm:text-6xl z-20 break-words home-header-text'>
            I love finding simple solutions that elevate code and design
          </h1>
        </div>

        <div className='home-header-image absolute right-0 overflow-hidden home-header-image-cover z-10'></div>
        <div className='home-header-image absolute right-0 overflow-hidden bg-cover bg-no-repeat' style={{backgroundImage: `url(${benMiriello})`}}></div>
      </div>

      <SocialLinks />

      <GrabameetingCard />

      {/* <div style={{height: '48rem'}} className='mx-4 mb-4'></div> */}
    </>
  )
};

export default Homepage;

//**
{/* <div style={{height: '42rem'}} className='m-4 flex justify-between'> */}
{/* <div className='flex flex-col justify-center'> */}
  // <h1 className='text-6xl z-20 mr-24 sm:ml-12 sm:mr-64 md:ml-24 md:mr-72 break-words'>
    {/* Ben is a web developer who loves bringing ideas to life */}
    {/* Ben is a web developer who focuses on improving the user experience at all stack levels */}
    {/* From&nbsp;CSS to&nbsp;SQL, I&nbsp;bring&nbsp;out the&nbsp;best&nbsp;in the&nbsp;user experience */}
    // From CSS to SQL, I'm always seeking the best possible user experience
    {/* I believe there's always opportunity to imporve the UX, whether I'm working in CSS or SQL */}
    {/* I believe ... */}
                {/* From CSS to SQL, I'm always seeking the best possible user experience */}
            {/* I love finding clear and simple solutions in code and UX design. */}
            {/* I love elevating code and design with simple solutions */}
  // </h1>
// </div>
{/* <div style={{width: '30rem', minHeight: '40rem', maxWidth: '90vw'}} className='z-10 absolute right-0 mx-4 float-right max-w-3xl bg-opacity-30 bg-black'></div> */}
{/* <div style={{width: '30rem', minHeight: '40rem', maxWidth: '90vw', backgroundImage: `url(${benMiriello})`}} className='absolute right-0 mx-4 float-right max-w-3xl overflow-hidden bg-cover bg-no-repeat'></div> */}
// </div>
// */


{/* <div className='home-header-container relative overflow-hidden'>
<div className='absolute left-0 h-full flex flex-col justify-center home-header-text'>
  <h1 className='text-4xl sm:text-6xl z-20 break-words'>
    I love finding simple solutions that elevate code and design
  </h1>
</div>

<div className='home-header-image absolute right-0 max-w-3xl sm:h-96 overflow-hidden bg-opacity-30 bg-black z-10 '></div>
<div className='home-header-image absolute right-0 max-w-3xl sm:h-96 overflow-hidden bg-cover bg-no-repeat' style={{backgroundImage: `url(${benMiriello})`}}></div>
</div> */}
