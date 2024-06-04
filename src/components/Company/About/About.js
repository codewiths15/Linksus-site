import React from 'react';
import Navigation from '../../Freelancer/Sidebar/Navigation';
import './../../../styles/Company/About/About.css';
import CompanyOverview from './CompanyOverview';
import CompanyProfile from './CompanyProfile';
import TopNavigation from './TopNavigation';
import Contact from './Contact';

const About = () => {
  return (
    <div className='ab-container'>
        <Navigation />
      <div className='ab-main-content'>
        <TopNavigation />
        <CompanyOverview />
        <CompanyProfile />
        <Contact />
      </div>
    </div>
  )
}

export default About;
