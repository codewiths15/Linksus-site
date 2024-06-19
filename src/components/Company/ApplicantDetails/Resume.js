import React, {useState} from 'react'
import "./../../../styles/Company/ApplicantDetails/Resume.css"

const Resume = () => {
  return (
    <div className='r-container'>
        <object data="https://icseindia.org/document/sample.pdf" 
        type="application/pdf" className='r-pdf'
        width="90%" height="100%">
        </object>
    </div>
  )
}

export default Resume