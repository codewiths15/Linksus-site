import React from 'react'
import "./../../../styles/Company/Applicants/Applicants.css"
import Navigation from '../../Freelancer/Sidebar/Navigation'
import TopNavigation from '../About/TopNavigation'
import ApplicantsTitle from './ApplicantsTitle'
import ApplicantsView from './ApplicantsView'

const Applicants = () => {
  return (
    <div className='applicantsContainer'>
        <Navigation />
        <div className='applicantsMainContent'>
            <TopNavigation />
            <ApplicantsTitle />
            <ApplicantsView />
        </div>
    </div>
  )
}

export default Applicants