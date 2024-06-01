import React from 'react'
import "./../../../styles/Company/Applicants/ApplicantProfile.css"
import { FaStar } from "react-icons/fa";

const ApplicantProfile = ({pfp, name, profileLink, appliedOn, score}) => {
  return (
    <div className='ap-container'>
      <div className='ap-top-container'>
        <img alt="profile" src='/sample_user.png' className='user-pfp'/>
        <div>
            <p style={{fontWeight: '600'}}>{name}</p>
            <a href={profileLink} style={{color: "#0175C4"}}>
                View Profile
            </a>
        </div>
      </div>
      <div className='ap-bottom-container'>
        <div className='ap-particular-container'>
            <p className='ap-grey-text'>Applied on</p>
            <p className='ap-p'>{appliedOn}</p>
        </div>
        <div className='ap-particular-container'>
            <p className='ap-grey-text'>Score</p>
            <div className='ap-score-container'>
                <FaStar size={17}/>
                <p className='ap-p'>{score}</p>
            </div>
        </div>  
      </div>  
    </div>
  )
}

export default ApplicantProfile