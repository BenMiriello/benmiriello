import React from 'react';
import './styles/tailwind.output.css';
// import doodle from './doodle.svg'
import grabAMeetingCollage from './assets/grabameetingcollage.png'
import grabAMeetingGWhite from './assets/grabameeting-g-white.png'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full h-24'>
        <div className='font-bold text-2xl text-white p-2 flex items-center h-full'>BEN MIRIELLO</div>
      </div>

      <div style={{height: '36rem', backgroundImage: `url(${grabAMeetingCollage})`, backgroundPosition: 'center'}} className='mx-4 mb-4 overflow-hidden bg-cover bg-no-repeat'>
        <div className='w-full h-full bg-opacity-70 bg-black p-4'>
          <div className='h-16 flex flex-no-wrap items-center'>
            <img className='h-10 px-4' src={grabAMeetingGWhite} />
            <div className='text-white text-2xl font-bold'>Grab a Meeting</div>
          </div>
        </div>
      </div>

      <div style={{height: '36rem'}} className='mx-4 mb-4 bg-gray-700'></div>
      
      {/* <img className='absolute w-full opacity-50 mx-auto' src={doodle} alt='doodle' /> */}
    </div>
  )
}

export default App;
