import React from 'react'
import "./../../../styles/Company/About/TopNavigation.css"
import { BiBell } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

const TopNavigation = () => {
  return (
    <div className='navContainer'>
      <BiBell size={25} color='#25324B'/>
      <button className='postTaskBtn'>
        <FaPlus size={20} color='#fff'/>
        <p className='postBtnText'>Post a task</p>
      </button>
    </div>
  )
}

export default TopNavigation