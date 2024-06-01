import React, { useState } from 'react'
import "./../../../styles/Company/Applicants/ApplicantsView.css"
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import ApplicantsList from './ApplicantsList';

const ApplicantsView = () => {

    const [searchApplicant, setSearchApplicant] = useState("");

  return (
    <div className='ApplicantsViewContainer'>
        <p className='av-p-title'>Applicants</p>
        <div>
            <div>
                <div className='av-inner-container-1'>
                    <h3>Total Applicants: 19</h3>
                    <div className='av-inner-container-2'>
                        <div className='av-search-bar'>
                            <FiSearch size={25} color='#A8ADB7'/>
                            <input 
                            className='av-search-bar-input'
                            placeholder='Search Applicants'
                            value={searchApplicant}
                            onChange={(e)=>{setSearchApplicant(e.target.value)}}
                            />
                        </div>
                        <button className='av-filter-btn'>
                            <IoFilterSharp size={18} color='#25324B' style={{marginRight: 8}}/>
                            <p style={{color: '#25324B'}}>Filter</p>
                        </button>
                    </div>
                </div>
                <div className='av-table'>
                    <ApplicantsList title="In Review" accentColor="#FFB836" shortlisted="10"/>
                    <ApplicantsList title="Shortlisted" accentColor="#7B61FF" shortlisted="8"/>
                    <ApplicantsList title="Not Shortlisted" accentColor="#26A4FF" shortlisted="11"/>
                    <ApplicantsList title="Waitlist" accentColor="#56CDAD" shortlisted="3"/>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default ApplicantsView