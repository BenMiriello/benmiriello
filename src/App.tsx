import React from 'react';
import './styles/tailwind.output.css';
import grabAMeetingCollage from './assets/grabameetingcollage.png'
import grabAMeetingWhite from './assets/grabameeting-white.png'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-24'>
        <div className='font-bold font-teko text-4xl p-4 flex items-center h-full'>BEN MIRIELLO</div>
      </div>

      <div style={{height: '42rem', backgroundImage: `url(${grabAMeetingCollage})`, backgroundPosition: 'center'}} className='mx-4 mb-4 overflow-hidden bg-cover bg-no-repeat'>
        <div className='w-full h-full bg-opacity-75 bg-black p-8 sm:p-12'>
          <div className='h-24 sm:h-16 mb-8 sm:flex sm:items-center'>
            <img className='h-16 mb-2' src={grabAMeetingWhite} />
            <div className='sm:ml-6 text-lg sm:text-base md:text-lg text-gray-400 flex text-right sm:pb-6'>a&nbsp;place&nbsp;for&nbsp;people&nbsp;in&nbsp;recovery&nbsp;to&nbsp;connect</div>
          </div>
          <div style={{letterSpacing: '0.25em'}} className='text-gray-400 font-teko text-xl mb-10'>DEVELOPER</div>
          {/* <div className='mb-4 text-4xl sm:text-6xl font-bold'>FROM&nbsp;CONCEPT</div>
          <div className='mb-8 text-4xl sm:text-6xl ml-4 sm:ml-8 font-bold'>TO&nbsp;LAUNCH</div> */}
          <div className='font-teko mb-4 text-7xl'>FROM&nbsp;MOCKUP TO&nbsp;MVP</div>
          <div className='text-xl tracking-wide'>As the primary developer in the early stages of Grab a Meeting, I built the website and designed its core functionalities.</div>
          <div className='border-2 border-white mt-12 sm:mt-24 w-64 h-20 flex justify-center items-center font-teko text-2xl tracking-wide'>
            VIEW CASE STUDY
          </div>
        </div>
      </div>

      <div style={{height: '42rem'}} className='mx-4 mb-4 bg-gray-700'></div>
    </div>
  )
}

export default App;
