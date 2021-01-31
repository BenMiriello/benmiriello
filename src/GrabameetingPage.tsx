import React, { useEffect } from 'react';
import Nav from './Nav';

import grabAMeetingCollage from './assets/grabameetingcollage.png';
import grabAMeetingGWhite from './assets/grabameeting-white.png';

const GrabameetingPage = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <div style={{height: '34rem', backgroundImage: `url(${grabAMeetingCollage})`, backgroundPosition: 'center'}} className='overflow-hidden bg-cover bg-no-repeat'>
        <div style={{backgroundColor: 'rgb(16 17 27 / 0.87)'}} className='w-full h-full'>
          <Nav />

          <div className='sm:mt-8 p-8 sm:p-12'>
            <div className='mb-12 flex items-center'>
              <img className='h-12' src={grabAMeetingGWhite} alt='g icon for grab a meeting' />
              {/* <p className='font-lato text-3xl ml-6'>Grab&nbsp;a&nbsp;Meeting</p> */}
            </div>

            <p style={{letterSpacing: '0.25rem'}} className='text-gray-400 font-oswald text-lg mt-12'>ROLE: DEVELOPER</p>

            <div className='mt-10 font-light text-lg max-w-xl'>
              <p className='my-3'>Grab a Meeting is a community-focused site.</p>
              <p className='my-3'>Our goal was to provide a place for people in recovery to connect at a time when in-person meetings were less practical.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='p-8 sm:p-12 w-full min-h-full bg-white text-black font-light flex flex-col items-center'>
        <div className='max-w-xl'>
          <h3 className='mt-4 text-5xl font-oswald font-bold'>Reservations</h3>
          <div style={{borderColor: '#feb3aa'}} className='w-48 ml-3 h-4 border-b-2'></div>
          <div className='mt-12'>
            <p className='text-3xl font-bold'>The Challenge</p>
            <p className='ml-4 mt-6 mb-2 font-normal'>UX: <span className='font-light'>Users need a way to know if they’ll be able to access a meeting</span></p>
            <p className='ml-4 my-2 font-normal'>Technical: <span className='font-light'>Creating a system that works reliably and simply with a short development time frame</span></p>
          </div>

          {/* <p className='mt-8 mb-2'>At first we tried making Grab a Meeting work without reservations. We had a small team with limited resources so we wanted to find ways around problems if possible for our MVP.</p> */}
          {/* <p className='text-xl mt-8 font-normal'>The Nightmare Scenario</p> */}
          <p style={{textIndent: '1rem'}} className='mt-8 mb-4'>On Grab a Meeting, meetings start at fixed intervals every 15 minutes. The worst user experience we wanted to avoid was to have a user wait up to 45 minutes to join a meeting at 5:15 only to find it was full and have to wait at until 5:30 or even 6:00 to join another. Add on to that that our users are people in recovery trying to connect with a support community. There couldn't be a clearer user drop off point.</p>
          {/* <p className='my-2'>Not only is that a frustrating experience to have after investing up to 45 minutes of their time waiting to join a meeting, but they would have every reason to expect it would happen again if they tried again.</p> */}
          {/* <p className='my-2'>It became clear that the problem wasn't going away just by working around it.</p> */}

          <p style={{textIndent: '1rem'}} className='my-4'><span className='text-2xl mt-8 mr-1'>My Contribution</span> was to take the initiative to solve the problem and then commit to seeing it through.</p>
          {/* directly after weeks of us trying to work around the problem  */}

          {/* <p className='text-3xl mt-20 font-bold'>The Solution</p> */}
        </div>
      </div>
    </>
  )
};

export default GrabameetingPage;
