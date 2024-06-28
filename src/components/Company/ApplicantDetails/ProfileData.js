import React from 'react'
import "./../../../styles/Company/ApplicantDetails/ProfileData.css"
import Applicant_Data from "./Applicant_Data.json"

const ProfileData = () => {

  const applicantData = Applicant_Data.applicantDetails;
  const birthYear = applicantData.personalInfo.dateOfBirth.slice(-4)
  const presentYear = new Date().getFullYear();
  const age = presentYear - birthYear;

  return (
    <div className='pd-container'>
        <div className='pd-top-container'>
            <h4>Personal Info</h4>
            <div className='pd-top-grid'>
              <div className='pd-pi-each'>
                <span>Full Name</span>
                <p>{applicantData.personalInfo.fullName}</p>
              </div>
              <div className='pd-pi-each'>
                <span>Gender</span>
                <p>{applicantData.personalInfo.gender}</p>
              </div>
              <div className='pd-pi-each'>
                <span>Date of Birth</span>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <p>{applicantData.personalInfo.dateOfBirth}</p>
                  <p style={{color: '#A8ADB7', marginLeft: 6}}>({age} y.o)</p>
                </div>
              </div>
              <div className='pd-pi-each'>
                <span>Language</span>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                {applicantData.personalInfo.languages.map((language, index) => (
                  <div key={index} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p>{language}</p>
                    {index < applicantData.personalInfo.languages.length - 1 ? <span>,&nbsp;</span> : <span>.</span>}
                  </div>
                ))}
                </div>
              </div>
              <div className='pd-pi-each'>
                <span>Address</span>
                <p>{applicantData.personalInfo.address}</p>
              </div>

            </div>
        </div>
        <div className='pd-bottom-container'>
          <h4 style={{marginTop: 12,}}>Professional Info</h4>
          <div>
            <div className='pd-pi-about'>
                <span>About Me</span>
                <p>{applicantData.professionalInfo.aboutMe}</p>
            </div>
            <div className='pd-bottom-grid'>  
              <div className='pd-pi-each'>
                <span>Current Task</span>
                <p>{applicantData.professionalInfo.currentTask.title}</p>
              </div>
              <div className='pd-pi-each'> 
                <span>Experience in Years</span>
                <p>{applicantData.professionalInfo.currentTask.experienceInYears}</p>
              </div>
              <div className='pd-pi-each'>
                <span>Highest Qualification Held</span>
                <p>{applicantData.professionalInfo.highestQualification}</p>
              </div>
              <div className='pd-pi-each'>
                <span>Skill Set</span>
                  <div className='pd-skills-container'>
                  {applicantData.professionalInfo.skillSet.map((skill, index) => (
                    <div key={index} className='pd-each-skill'>
                      <p style={{color: '#0175C4'}}>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileData