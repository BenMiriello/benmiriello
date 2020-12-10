import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import SocialLinks from './SocialLinks';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='w-full h-24 flex flex-no-wrap justify-between'>
      <Link to='/' className='font-bold font-oswald text-4xl p-8 flex items-center h-full'>BEN MIRIELLO</Link>
      <div className='flex flex-no-wrap'>
        <div className='hidden sm:block'>
          <SocialLinks />
        </div>
        <div
          className='h-24 w-24 flex flex-col items-center justify-center cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          <HamburgerMenu
            isOpen={open}
            // menuClicked={() => setOpen(!open)}
            width={30}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
