import React, { useState } from 'react';
import "./../../../styles/Company/Applicants/ApplicantProfile.css";
import { FaStar } from "react-icons/fa";

const ApplicantProfile = ({ pfp, name, email, profileLink, appliedOn, score, currentCategory, updateApplicantCategory }) => {
  const [isHovered, setIsHovered] = useState(false);

  const otherCategories = ["Applied", "Shortlisted", "Selected"].filter(category => category !== currentCategory);

  const handleCategoryChange = async (name, category) => {
    try {
      const response = await fetch(`http://localhost:3005/applicant/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: category,
        }),
      });

      if (response.ok) {
        updateApplicantCategory(name, category);
        alert(`${name} has been moved to ${category}`);
      } else {
        alert(`Failed to update category for ${name}`);
      }
    } catch (error) {
      console.error('Error updating category:', error);
      alert(`Error updating category for ${name}`);
    }
  };

  return (
    <div 
      className='ap-container'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='ap-top-container'>
        <img alt="profile" src={"sample_user.png"} className='user-pfp' /> {/* change to profile link of user instead of dummy */}
        <div>
          <p style={{ fontWeight: '600' }}>{name}</p>
          <a href={profileLink} style={{ color: "#0175C4" }}>
            View Profile
          </a>
        </div>
      </div>
      <div className='ap-bottom-container'>
        <div className='ap-particular-container'>
          <p className='ap-grey-text'>Applied on</p>
          <p className='ap-p'>{appliedOn}</p>
        </div>
        <div className='ap-particular-container'>
          <p className='ap-grey-text'>Score</p>
          <div className='ap-score-container'>
            <FaStar size={17} color='FFB836' />
            <p className='ap-p'>{score}</p>
          </div>
        </div>
      </div>
      {isHovered && (
        <div className='ap-hover-buttons'>
          {otherCategories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(name, category)}
            >
              To {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApplicantProfile;
