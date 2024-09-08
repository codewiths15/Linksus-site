import React from 'react'
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { PiGearSixBold } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";
import "./../../../styles/Company/About/CompanyOverview.css"

const CompanyOverview = () => {
  return (
    <div className='profileHeader'>
      <div>
        <button className="editBtnAbsolute" onClick={()=>{}}>
            <TbEdit size={20} color='#0175C4' />
        </button>
        <img src='/Company_Logo.png' alt='Company Logo' className='companyLogo' />
      </div>
      <div className='companyInfo'>
        <div className='companyTitleBar'>
          <div>
            <h1 className='companyName'>Nomad</h1>
            <a href='https://nomad.com' className='companyWebsite'>https://nomad.com</a>
          </div>
          <button className='editProfBtn'>
            <PiGearSixBold size={20} color='#0175C4'/>
            <p className="editProfText">Edit Profile</p>
          </button>
        </div>
        <div className='companyInfoContainer'>
          <div className='infoContainerSingle'>
            <div className='iconOutline'>
              <AiOutlineFire size={22} color='#26A4FF'/>
            </div>
            <div className='infoContainerText'>
              <p className='companyDetails' style={{color: "#515B6F"}}>Founded: </p>
              <p className='companyDetails' style={{color: "#25324B"}}>July 31, 2011</p>
            </div>
          </div>
          <div className='infoContainerSingle'>
            <div className='iconOutline'>
              <MdOutlinePeopleAlt size={22} color='#26A4FF'/>
            </div>
            <div className='infoContainerText'>
              <p className='companyDetails' style={{color: "#515B6F"}}>Employees: </p>
              <p className='companyDetails' style={{color: "#25324B"}}>4000+</p>
            </div>
          </div>
          <div className='infoContainerSingle'>
            <div className='iconOutline'>
              <IoLocationOutline size={22} color='#26A4FF'/>
            </div>
            <div className='infoContainerText'>
              <p className='companyDetails' style={{color: "#515B6F"}}>Location: </p>
              <p className='companyDetails' style={{color: "#25324B"}}>20 countries</p>
            </div>
          </div>
          <div className='infoContainerSingle'>
            <div className='iconOutline'>
              <RiBuilding2Line size={22} color='#26A4FF'/>
            </div>
            <div className='infoContainerText'>
              <p className='companyDetails' style={{color: "#515B6F"}}>Industry: </p>
              <p className='companyDetails' style={{color: "#25324B"}}>Social & Non-Profit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyOverview