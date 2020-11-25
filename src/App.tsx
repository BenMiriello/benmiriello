import React from 'react';
import './styles/tailwind.output.css';
// import doodle from './doodle.svg'
import grabAMeetingCollage from './assets/grabameetingcollage.png'

const App = () => {
  return (
    <div style={{backgroundColor: '#333'}} className='w-screen h-screen'>
      <div className='w-full h-24'>
        <div className='font-bold text-2xl text-white p-2 flex items-center h-full'>BEN MIRIELLO</div>
      </div>
      <div style={{height: '36rem'}} className='mx-4 mb-4 bg-gray-700'>
        <img src={grabAMeetingCollage} alt='grab a meeting interface collage' />
      </div>
      <div style={{height: '36rem'}} className='mx-4 mb-4 bg-gray-700'></div>
      
      {/* <img className='absolute w-full opacity-50 mx-auto' src={doodle} alt='doodle' /> */}
    </div>
  )
}

export default App;
