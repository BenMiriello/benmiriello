import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import grabAMeetingCollage from './assets/grabameetingcollage.png';
import grabAMeetingGWhite from './assets/grabameeting-g-white.png';

const GrabameetingCard = () => {
  let match = useRouteMatch();

  return (
    <div style={{height: '48rem', backgroundImage: `url(${grabAMeetingCollage})`, backgroundPosition: 'center'}} className='mb-4 overflow-hidden bg-cover bg-no-repeat'>
      <div style={{backgroundColor: 'rgb(16 17 27 / 0.87)'}} className='w-full h-full p-8 sm:p-12'>
        <div className='h-20 sm:h-16 mb-12 sm:mb-24 sm:flex sm:items-center'>
          <div className='flex items-center'>
            <img className='h-12' src={grabAMeetingGWhite} alt='g icon for grab a meeting' />
            <p className='font-lato text-3xl ml-6'>Grab&nbsp;a&nbsp;Meeting</p>
          </div>
        </div>
        <p style={{letterSpacing: '0.25em'}} className='text-gray-400 font-oswald text-xl mb-12'>DEVELOPER</p>
        <p style={{color: '#feb3aa'}} className='font-oswald mb-6 text-5xl sm:text-7xl'>FROM&nbsp;CONCEPT TO&nbsp;MVP</p> {/* #e48e84 */}
        <p className='text-xl tracking-wide max-w-xl'>As the primary developer in the early stages of Grab a Meeting, I built the website and designed its core functionalities.</p>
        <Link to={`${match.url}grabameeting`} className='cursor-pointer border-2 border-white mt-12 sm:mt-24 px-10 sm:px-20 py-10 inline-flex justify-center items-center font-oswald text-2xl tracking-wide'>
          OUR&nbsp;WORK&nbsp;AT GRAB&nbsp;A&nbsp;MEETING
        </Link>
      </div>
    </div>
  )
};

export default GrabameetingCard;
