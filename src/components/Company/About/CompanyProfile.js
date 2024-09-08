import React from 'react'
import "./../../../styles/Company/About/CompanyProfile.css"

import { TbEdit } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const CompanyProfile = () => {
  return (
    <div className='compProfileContainer'>
      <div className='profileContainer'>
            <div className='profileTextContainer'>
                <div className='cp-titleBar'>
                  <h2>Company Profile</h2>
                      <button className="editBtn" onClick={()=>{}}>
                          <TbEdit size={20} color='#0175C4' />
                      </button>
                </div>
                <p style={{color: "#515B6F"}}>
                Nomad is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
                </p>
              </div>
            <div className='techStack'>
              <div className='cp-titleBar'>
                <h2>Tech Stack</h2>
                <div>
                    <button className="editBtn" onClick={()=>{}}>
                        <FaPlus size={20} color='#0175C4' />
                    </button>
                    <button className="editBtn" onClick={()=>{}}>
                        <TbEdit size={20} color='#0175C4' />
                    </button>
                </div>
              </div>
              <div className='techIcons'>
                <div className='techIcon'><img src='html5_logo.png' alt='HTML5' />
                  <p style={{color: "#25324B"}}>HTML 5</p>
                </div>
                <div className='techIcon'><img src='css_logo.png' alt='CSS3' />
                  <p style={{color: "#25324B"}}>CSS 3</p>
                </div>
                <div className='techIcon'><img src='js_logo.png' alt='JavaScript' />
                  <p style={{color: "#25324B"}}>Javascript</p>
                </div>
                <div className='techIcon'><img src='ruby_logo.png' alt='Ruby' />
                  <p style={{color: "#25324B"}}>Ruby</p>
                </div>
                <div className='techIcon'><img src='mixpanel_logo.png' alt='Mixpanel' />
                  <p style={{color: "#25324B"}}>Mixpanel</p>
                </div>
                <div className='techIcon'><img src='framer_logo.png' alt='Framer' />
                  <p style={{color: "#25324B"}}>Framer</p>
                </div>
              </div>
              <a href='#' className='viewTechStack'>View tech stack &rarr;</a>
          </div>
        </div>
        </div>
  )
}

export default CompanyProfile