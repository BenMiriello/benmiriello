import React from 'react';
import './styles/tailwind.output.css';
import grabAMeetingCollage from './assets/grabameetingcollage.png'
import grabAMeetingGWhite from './assets/grabameeting-g-white.png'
import benMiriello from './assets/benmiriello.jpeg'

const App = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-24'>
        <div className='font-bold font-oswald font-sans text-4xl p-4 flex items-center h-full'>BEN MIRIELLO</div>
      </div>

      <div style={{height: '42rem', backgroundColor: '#222'}} className='m-4 flex justify-end'>
        <div style={{width: '26rem', minHeight: '40rem', backgroundImage: `url(${benMiriello})`}} className='max-w-3xl overflow-hidden bg-cover bg-no-repeat'>
          <div className='w-full h-full bg-opacity-30 bg-black p-8 sm:p-12'></div>
        </div>
      </div>

      <div style={{height: '48rem', backgroundImage: `url(${grabAMeetingCollage})`, backgroundPosition: 'center'}} className='mx-4 mb-4 overflow-hidden bg-cover bg-no-repeat'>
        <div className='w-full h-full bg-opacity-75 bg-black p-8 sm:p-12'>
          <div className='h-24 sm:h-16 mb-12 sm:mb-24 sm:flex sm:items-center'>
            <div className='flex'>
              <img className='h-12 mb-2' src={grabAMeetingGWhite} alt='g icon for grab a meeting' />
              <p className='font=lato text-3xl ml-4 pt-2'>Grab&nbsp;a&nbsp;Meeting</p>
            </div>
            {/* <div className='sm:ml-6 sm:text-base md:text-lg text-gray-400 flex '>a&nbsp;place&nbsp;for&nbsp;people&nbsp;in&nbsp;recovery&nbsp;to&nbsp;connect</div> */}
          </div>
          <p style={{letterSpacing: '0.25em'}} className='text-gray-400 font-oswald text-xl mb-12'>DEVELOPER</p>
          {/* <div className='mb-4 text-4xl sm:text-6xl font-bold'>FROM&nbsp;CONCEPT</div>
          <div className='mb-8 text-4xl sm:text-6xl ml-4 sm:ml-8 font-bold'>TO&nbsp;LAUNCH</div> */}
          <p className='font-oswald font-sans mb-6 text-5xl sm:text-7xl'>FROM&nbsp;CONCEPT TO&nbsp;MVP</p>
          <p className='text-xl tracking-wide max-w-xl'>As the primary developer in the early stages of Grab a Meeting, I built the website and designed its core functionalities.</p>
          <div className='cursor-pointer border-2 border-white mt-12 sm:mt-24 w-64 h-20 flex justify-center items-center font-oswald text-2xl tracking-wide'>
            VIEW CASE STUDY
          </div>
        </div>
      </div>

      <div style={{height: '42rem'}} className='mx-4 mb-4'></div>
    </div>
  )
}

export default App;
