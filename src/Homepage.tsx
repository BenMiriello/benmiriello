import React from 'react';

import Nav from './Nav';
import HeroCard from './HeroCard';
import SocialLinks from './SocialLinks';
import GrabameetingCard from './GrabameetingCard';

const Homepage = () => {
  return(
    <>
      <Nav />
      <HeroCard />
      <SocialLinks />
      <GrabameetingCard />
      <div className='w-full h-12'></div>
    </>
  )
};

export default Homepage;
