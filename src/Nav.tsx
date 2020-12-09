import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className='w-full h-24'>
    <Link to='/' className='font-bold font-oswald text-4xl p-4 flex items-center h-full'>BEN MIRIELLO</Link>
  </nav>
);

export default Nav;
