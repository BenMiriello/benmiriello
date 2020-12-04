import React from 'react';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import medium from './assets/medium.png';

const SocialLinks = () => (
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
);

export default SocialLinks;
