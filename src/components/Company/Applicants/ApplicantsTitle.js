import React from 'react'
import "./../../../styles/Company/Applicants/ApplicantsTitle.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const ApplicantsTitle = () => {
  return (
    <div className='applicantsTitleContainer'>
        <IoMdArrowRoundBack size={35} style={{marginRight: 12}} color='#25324B'/>
        <div>
            <h2 className='at-title'>Social Media Assistant</h2>
            <div className='at-text-container'>
                <p className='at-p'>Design</p>
                <GoDotFill size={12} color='#25324B'/>
                <p className='at-p'>Chennai, India</p>
                <GoDotFill size={12} color='#25324B'/>
                <p className='at-p'>4 / 11 Shortlisted</p>
            </div>
        </div>
    </div>
  )
}

export default ApplicantsTitle