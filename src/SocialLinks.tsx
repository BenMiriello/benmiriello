import React from 'react';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import medium from './assets/medium.png';

const SocialLinks = () => (
  <div className='h-24 flex justify-center items-center'>
  <a href='https://www.linkedin.com/in/benmiriello/' target='blank'>
    <img src={linkedin} alt='linkedin icon' className='h-8 w-8 mx-4 sm:mx-6'/>
  </a>
  <a href='https://github.com/benmiriello/' target='blank'>
    <img src={github} alt='github icon' className='h-8 w-8 mx-4 sm:mx-6'/>
  </a>
  <a href='https://medium.com/@benmiriello_36460' target='blank'>
    <img src={medium} alt='medium icon' className='h-8 w-8 mx-4 sm:mx-6'/>
  </a>
</div>
);

export default SocialLinks;
