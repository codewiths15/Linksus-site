import React from 'react';
import Navigation from '../../Freelancer/Sidebar/Navigation';
import './../../../styles/Company/About/About.css';
import CompanyOverview from './CompanyOverview';
import CompanyProfile from './CompanyProfile';
import TopNavigation from './TopNavigation';
import Contact from './Contact';

const About = () => {
  return (
    <div className='container'>
        <Navigation />
      <div className='mainContent'>
        <TopNavigation />
        <CompanyOverview />
        <CompanyProfile />
        <Contact />
      </div>
    </div>
  )
}

export default About;
