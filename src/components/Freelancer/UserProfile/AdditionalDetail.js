// AdditionalDetail.js
import React from 'react';
import editIcon from "./../../../assests/images/edit.png";
import "./../../../styles/Freelancer/UserProfile/AdditionalDetail.css";

const AdditionalDetail = ({ details, topic, showIcons = true }) => {
  return (
    <div className="additional-detail">
      <div className="detail1">
        <h2>{topic}</h2>
        <img src={editIcon} alt="Edit" />
      </div>
      <div className="detail2">
        {details.map((detail, index) => (
          <div className="detail22" key={index}>
            {showIcons && <img src={detail.icon} alt={detail.title} />}
            <div className="email1">
              <h3>{detail.title}</h3>
              <p>{detail.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalDetail;
