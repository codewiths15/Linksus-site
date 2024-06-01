import React from 'react'
import "./../../../styles/Company/Applicants/ApplicantsList.css"
import { GoDotFill } from "react-icons/go";
import { SlOptions } from "react-icons/sl";
import ApplicantProfile from './ApplicantProfile';

const ApplicantsList = ({ title, accentColor, shortlisted }) => {
  return (
    <div className='al-container'>
        <div className='al-title-container' 
        style={{borderTopWidth: 2, borderTopColor: `${accentColor}`}}>
            <GoDotFill size={20} color={accentColor}/>
            <p>{title}</p>
            <p className='al-p-highlight'>{shortlisted}</p>
            <SlOptions size={20}/>
        </div>
        <div className='al-content-container'>
            <ApplicantProfile name={"Jake Gyll"} profileLink={"www.jakeglyll.com"} appliedOn={"13 July, 2022"} score={"4.0"}/>
            <ApplicantProfile />
        </div>
    </div>
  )
}

export default ApplicantsList