import React from 'react'
import "./../../../styles/Freelancer/Userauth/Middle.css";

function Middle({text, text2}) {
  return (
    <>
      <button className="google">
        <img
          src="https://pngteam.com/images/google_logo_high_resolution_hd_high_quality_transparent_1-2050x2050_39ec45c7_transparent.png"
          width={32}
          height={32}
          alt=""
        />
        <p>{text}</p>
      </button>
      <div className="email">
        <div className="line"></div>
        <p>{text2}</p>
        <div className="line"></div>
      </div>
    </>
  )
}

export default Middle
