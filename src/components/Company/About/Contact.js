import React from 'react'
import "./../../../styles/Company/About/Contact.css"

import { TbEdit } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='contact'>
        <div className='titleBar'>
            <h2>Contact</h2>
            <div>
                <button className="editBtn" onClick={()=>{}}>
                    <FaPlus size={20} color='#0175C4' />
                </button>
                <button className="editBtn" onClick={()=>{}}>
                    <TbEdit size={20} color='#0175C4' />
                </button>
            </div>
        </div>
        <div className='contactIcons'>
            <div className='contactIcon'>
                <FaTwitter size={18} color='#0175C4'/>
                <a href='https://twitter.com/Nomad' className="contactLabelText">twitter.com/Nomad</a>
            </div>
            <div className='contactIcon'>
                <CgFacebook   size={18} color='#0175C4'/>
                <a href='https://facebook.com/NomadHQ' className="contactLabelText">facebook.com/NomadHQ</a>
            </div>
            <div className='contactIcon'>
                <FaLinkedin size={18} color='#0175C4'/>
                <a href='https://linkedin.com/company/nomad' className="contactLabelText">linkedin.com/company/nomad</a>
                </div>
            <div className='contactIcon'>
                <GoMail size={18} color='#0175C4'/>
                <a href='mailto:nomad@gmail.com' className="contactLabelText">nomad@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Contact