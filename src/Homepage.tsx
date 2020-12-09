import React from 'react';

import HeroCard from './HeroCard';
import SocialLinks from './SocialLinks';
import GrabameetingCard from './GrabameetingCard';

const Homepage = () => {
  return(
    <>
      <HeroCard />
      {/* <SocialLinks /> */}
      <div className='h-12'></div>
      <GrabameetingCard />
    </>
  )
};

export default Homepage;
