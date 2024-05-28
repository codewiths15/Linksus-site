// Profile.js
import React, { useState } from "react";
import Navigation from "../Sidebar/Navigation";
import Profile11 from "./Profile11";
import Profile12 from "./Profile12";
import ExperienceList from "./ExperienceList";
import SkillsSet from "./SkillsSet";
import AdditionalDetail from "./AdditionalDetail";
import "./../../../styles/Freelancer/UserProfile/Profile.css";
import edit from "./../../../assests/images/edit.png";
import twitter from "./../../../assests/images/twitter.png";
import emailIcon from "./../../../assests/images/email.png";
import phoneIcon from "./../../../assests/images/phone.png";
import languageIcon from "./../../../assests/images/language.png";
import instagram from "./../../../assests/images/instagram.png";
import twitter1 from "./../../../assests/images/twitter1.png";
import globe from "./../../../assests/images/globe.png";

function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const profileData = {
    name: "Jake Gyll",
    position: "Product Designer at Twitter",
    location: "Manchester, UK",
    openForOpportunities: true,
    aboutMe:
      "I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.",
  };

  const experiences = [
    {
      title: "Product Designer",
      company: "Twitter",
      location: "Chennai, India",
      description:
        "Created and executed social media plans for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
      logo: twitter,
      editIcon: edit,
    },
    {
      title: "Growth Marketing Designer",
      company: "GoDaddy",
      location: "Chennai, India",
      description:
        "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives.",
      logo: twitter,
      editIcon: edit,
    },
  ];

  const additionalDetails = [
    { icon: emailIcon, title: "Email", content: "jakegyll@email.com" },
    { icon: phoneIcon, title: "Phone", content: "+44 1245 572 135" },
    { icon: languageIcon, title: "Languages", content: "English, French" },
  ];
  const SocialLinks = [
    { icon: instagram, title: "Instagram", content: "instagram.com/jakegyll" },
    { icon: twitter1, title: "Twitter", content: "twitter.com/jakegyll" },
    { icon: globe, title: "Website", content: "www.jakegyll.com" },
  ];

  const Education = [
    { icon: instagram, title: "Bachelors", content: "SRMIST, Ramapuram" },
    { icon: twitter1, title: "Higher Secondary", content: "KC College" },
    { icon: globe, title: "School", content: "SKI High School" },
  ];
  const Portfolios = [
    { icon: globe, title: "Website", content: "www.jakegyll.com" },
    { icon: globe, title: "Website", content: "www.jakegyll.com" },
  ];

  return (
    <div className={`main2 ${menuOpen ? "menu-open" : ""}`}>
      <Navigation menuOpen={menuOpen} />
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <div className="second-section1">
        <div className="profile1">
          <Profile11 profileData={profileData} />
          <Profile12 profileData={profileData} />
          <ExperienceList experiences={experiences} />
          <SkillsSet />
        </div>
        <div className="profile2">
          <AdditionalDetail
            details={additionalDetails}
            topic="Additional Details"
          />
          <AdditionalDetail details={SocialLinks} topic="Social Links" />
          <AdditionalDetail
            details={Education}
            topic="Portfolios"
            showIcons={false}
          />
          <AdditionalDetail details={Portfolios} topic="Portfolios" />
          <div className="additional-detail">
            <div className="detail1">
              <h2>Resume</h2>
              <img src={edit} alt="Edit" />
            </div>
            <div className="detail2">
              <div className="detail22">
                <div className="email1">
                  <h3>View</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
