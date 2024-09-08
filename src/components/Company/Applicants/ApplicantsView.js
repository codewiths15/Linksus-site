import React, { useState } from 'react';
import "./../../../styles/Company/Applicants/ApplicantsView.css";
import { FiSearch } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import ApplicantsList from './ApplicantsList';
import FakeData from "./../fakeData.json";

const ApplicantsView = () => {
  const [searchApplicant, setSearchApplicant] = useState("");
  const [applicants, setApplicants] = useState(FakeData);

  const updateApplicantCategory = (name, newCategory) => {
    setApplicants(prevApplicants => 
      prevApplicants.map(applicant =>
        applicant.name === name ? { ...applicant, category: newCategory } : applicant
      )
    );
  };

  return (
    <div className='ApplicantsViewContainer'>
      <p className='av-p-title'>Applicants</p>
      <div>
        <div>
          <div className='av-inner-container-1'>
            <h3>Total Applicants: {applicants.length}</h3>
            <div className='av-inner-container-2'>
              <div className='av-search-bar'>
                <FiSearch size={25} color='#A8ADB7'/>
                <input 
                  className='av-search-bar-input'
                  placeholder='Search Applicants'
                  value={searchApplicant}
                  onChange={(e) => setSearchApplicant(e.target.value)}
                />
              </div>
              <button className='av-filter-btn'>
                <IoFilterSharp size={18} color='#25324B' style={{marginRight: 8}}/>
                <p style={{color: '#25324B'}}>Filter</p>
              </button>
            </div>
          </div>
          <div className='av-table'>
            <ApplicantsList 
              title="Applied" 
              accentColor="#FFB836" 
              applicants={applicants.filter(applicant => applicant.category === "Applied")}
              updateApplicantCategory={updateApplicantCategory}
            />
            <ApplicantsList 
              title="Shortlisted" 
              accentColor="#7B61FF" 
              applicants={applicants.filter(applicant => applicant.category === "Shortlisted")}
              updateApplicantCategory={updateApplicantCategory}
            />
            <ApplicantsList 
              title="Selected" 
              accentColor="#56CDAD" 
              applicants={applicants.filter(applicant => applicant.category === "Selected")}
              updateApplicantCategory={updateApplicantCategory}
            />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantsView;
