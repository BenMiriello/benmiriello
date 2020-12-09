import React from 'react';
import Nav from './Nav';

import grabAMeetingCollage from './assets/grabameetingcollage.png';
import grabAMeetingGWhite from './assets/grabameeting-g-white.png';

const GrabameetingPage = () => {
  return (
    <>
      <div style={{height: '32rem', backgroundImage: `url(${grabAMeetingCollage})`, backgroundPosition: 'center'}} className='mb-4 overflow-hidden bg-cover bg-no-repeat'>
        <div style={{backgroundColor: 'rgb(16 17 27 / 0.87)'}} className='w-full h-full'>
          <Nav />
          <div className='sm:mt-12 p-8 sm:p-12'>
            <p style={{letterSpacing: '0.25em'}} className='text-gray-400 font-oswald text-xl mb-12'>DEVELOPER</p>
            <div className='mb-12 flex items-center'>
              <img className='h-12' src={grabAMeetingGWhite} alt='g icon for grab a meeting' />
              <p className='font-lato text-3xl ml-6'>Grab&nbsp;a&nbsp;Meeting</p>
            </div>
            <div className='font-light text-xl max-w-3xl'>
              <p className='my-3'>Grab a Meeting is a community-focused site.</p>
              <p className='my-3'>Our goal was to provide a place for people in recovery to connect at a time when in-person meetings were less practical.</p>
              {/* <p className='my-3'>This created unique design challenges.</p> */}
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-8 sm:p-12'>
        <h3 className='mt-8 text-2xl'>Challenge: Reservations</h3>
      </div>
    </>
  )
};

export default GrabameetingPage;
