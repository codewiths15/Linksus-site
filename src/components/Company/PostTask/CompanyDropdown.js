import React from 'react'
import "./../../../styles/Company/PostTask/CompanyDropdown.css"
import { FaAngleDown } from "react-icons/fa6";

const CompanyDropdown = () => {
  return (
    <div className='companyDropdownContainer'>
        <div>
            <img src="Company_Logo.png" height={40} width={40} alt="CompanyImg" />
        </div>
        <div className='subCompanyDropdownDivider'>
            <span className='subCompanyDropdownTitle'>Company</span>
            <div className='subCompanyDropdown'>
                <span className='subCompanyDropdownName'>Nomad</span>
                <FaAngleDown size={18} color='#25324B'/>
            </div>
        </div>
    </div>
  )
}

export default CompanyDropdown