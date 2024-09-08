import React from 'react'
import "./../../../styles/Company/ApplicantDetails/ApplicantDetails.css"
import Navigation from '../../Freelancer/Sidebar/Navigation'
import ApplicantArea from './ApplicantArea'
import TopNavigation from "./../About/TopNavigation"

const ApplicantDetails = () => {
  return (
    <div className='ad-container'>
        <Navigation />
        <div className='ad-main-content'>
            <TopNavigation />
            <ApplicantArea />
        </div>
    </div>
  )
}

export default ApplicantDetails