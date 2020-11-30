import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import grabAMeetingCollage from './assets/grabameetingcollage.png';
import grabAMeetingGWhite from './assets/grabameeting-g-white.png';
import benMiriello from './assets/benm4.jpeg'; // './assets/doodle2.png'
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import medium from './assets/medium.png';

const Homepage = () => {
  let match = useRouteMatch();

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

      <div className='p-4 my-8 flex justify-center'>
        <a href='https://www.linkedin.com/in/benmiriello/' target='blank'>
          <img src={linkedin} alt='linkedin icon' className='h-12 w-12 mx-4 sm:mx-6'/>
        </a>
        <a href='https://github.com/benmiriello/' target='blank'>
          <img src={github} alt='github icon' className='h-12 w-12 mx-4 sm:mx-6'/>
        </a>
        <a href='https://medium.com/@benmiriello_36460' target='blank'>
          <img src={medium} alt='medium icon' className='h-12 w-12 mx-4 sm:mx-6'/>
        </a>
      </div>

      <div style={{height: '48rem', backgroundImage: `url(${grabAMeetingCollage})`, backgroundPosition: 'center'}} className='mx-4 mb-4 overflow-hidden bg-cover bg-no-repeat'>
        <div className='w-full h-full bg-opacity-75 bg-black p-8 sm:p-12'>
          <div className='h-20 sm:h-16 mb-12 sm:mb-24 sm:flex sm:items-center'>
            <div className='flex items-center'>
              <img className='h-12' src={grabAMeetingGWhite} alt='g icon for grab a meeting' />
              <p className='font=lato text-3xl ml-6'>Grab&nbsp;a&nbsp;Meeting</p>
            </div>
            {/* <div className='sm:ml-6 sm:text-base md:text-lg text-gray-400 flex '>a&nbsp;place&nbsp;for&nbsp;people&nbsp;in&nbsp;recovery&nbsp;to&nbsp;connect</div> */}
          </div>
          <p style={{letterSpacing: '0.25em'}} className='text-gray-400 font-oswald text-xl mb-12'>DEVELOPER</p>
          {/* <div className='mb-4 text-4xl sm:text-6xl font-bold'>FROM&nbsp;CONCEPT</div>
          <div className='mb-8 text-4xl sm:text-6xl ml-4 sm:ml-8 font-bold'>TO&nbsp;LAUNCH</div> */}
          <p className='font-oswald mb-6 text-5xl sm:text-7xl'>FROM&nbsp;CONCEPT TO&nbsp;MVP</p>
          <p className='text-xl tracking-wide max-w-xl'>As the primary developer in the early stages of Grab a Meeting, I built the website and designed its core functionalities.</p>
          <Link to={`${match.url}grabameeting`} className='cursor-pointer border-2 border-white mt-12 sm:mt-24 px-10 sm:px-20 py-10 inline-flex justify-center items-center font-oswald text-2xl tracking-wide'>
            OUR&nbsp;WORK&nbsp;AT GRAB&nbsp;A&nbsp;MEETING
          </Link>
        </div>
      </div>

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
