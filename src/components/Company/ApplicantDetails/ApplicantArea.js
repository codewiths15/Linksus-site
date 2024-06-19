import React, { useState } from 'react';
import "./../../../styles/Company/ApplicantDetails/ApplicantArea.css";
import ApplicantData from "./Applicant_Data.json";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { SlGlobe } from "react-icons/sl";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import ProfileData from './ProfileData';
import Resume from './Resume';

const ApplicantArea = () => {
    const [currentView, setCurrentView] = useState(0); // 0 for ProfileData, 1 for Resume

    const applicantDetails = ApplicantData.applicantDetails;

    // Define mapping for skill levels
    const skillLevels = {
        "Bad": { parts: 1, color: '#FF0000' },
        "Okay": { parts: 2, color: '#FF8F00' },
        "Very Good": { parts: 3, color: '#3DC2EC' },
        "Perfect": { parts: 4, color: '#40A578' }
    };

    // Define mapping for stage levels
    const stageLevels = {
        "Application Submitted": { parts: 1, color: '#FF0000' },
        "Shortlisted": { parts: 2, color: '#FF8F00' },
        "Interview": { parts: 3, color: '#3DC2EC' },
        "Selected": { parts: 4, color: '#40A578' }
    };

    // Get the skill level from the data
    const skillLevel = applicantDetails.skills.level;
    const stageLevel = applicantDetails.stage.level;

    // Determine the number of parts and color based on skill level
    const { parts: skillParts, color: skillColor } = skillLevels[skillLevel];
    const { parts: stageParts, color: stageColor } = stageLevels[stageLevel];

    // Generate the parts of the status bar based on the determined parts
    const statusBarParts = Array.from({ length: 4 }, (_, index) => (
        <div
            key={index}
            className='status-bar-part'
            style={{
                width: `${index < skillParts ? 100 / skillParts : 0}%`,
                backgroundColor: index < skillParts ? skillColor : 'transparent'
            }}
        />
    ));

    const stageBarParts = Array.from({ length: 4 }, (_, index) => (
        <div
            key={index}
            className='status-bar-part'
            style={{
                width: `${index < stageParts ? 100 / stageParts : 0}%`,
                backgroundColor: index < stageParts ? stageColor : 'transparent'
            }}
        />
    ));

    return (
        <div className='aa-main-container'>
            <div className='aa-title-container'>
                <IoMdArrowRoundBack size={35} style={{marginRight: 12}} color='#25324B'/>
                <p style={{margin: 0, color: '#25324B', fontSize: 28, fontWeight: '600'}}>Applicant Details</p>
            </div>
            <div className='aa-btn-container'>
                {currentView === 0 ? (
                    <button className='aa-next-btn' onClick={() => setCurrentView(currentView + 1)}>
                        <p style={{color: '#0175C4', fontSize: 14}}>Next</p>
                    </button>
                ) : (
                    <button className='aa-prev-btn' onClick={() => setCurrentView(currentView - 1)}>
                        <p style={{color: '#0175C4', fontSize: 14}}>Previous</p>
                    </button>
                )}
            </div>
            <div className='aa-container'>
                <div className='aa-applicant-left'>
                    <div className='aa-applicant-basic'>
                        <img src={applicantDetails.profilePicture} width={80} height={80} alt="Applicant" />
                        <div className='aa-applicant-text-det'>
                            <h3>{applicantDetails.name}</h3>
                            <span>{applicantDetails.jobTitle}</span>
                            <div className='aa-rating-container'>
                                <FaStar size={17} color='#FFB836' />
                                <p>4.0</p>
                            </div>
                        </div>
                    </div>
                    <div className='aa-task-container'>
                        <div>
                            <span style={{color: '#25324B', fontWeight: '300'}}>Applied Tasks</span>
                        </div>
                        {applicantDetails.appliedTasks.map((task, index) => (
                            <div className='aa-applied-task' key={index}>
                                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <p style={{fontWeight: '600'}}>{task.taskName}</p>
                                    <span style={{color: '#7C8493'}}>{task.appliedDate}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    {task.categories.map((category, idx) => (
                                        <React.Fragment key={idx}>
                                            <span style={{color: '#515B6F'}}>{category}</span>
                                            {idx < task.categories.length - 1 && (
                                                <GoDotFill size={10} color='#515B6F' style={{ marginLeft: 8, marginRight: 8 }} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {currentView === 0 ? 
                    <div className='aa-skills-container'>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <span style={{fontWeight: '500', fontSize: 16}}>Skills</span>
                            <span style={{fontWeight: '300', color: '#AAA'}}>{applicantDetails.skills.level}</span>
                        </div>
                        <div className="status-bar-container">
                            {statusBarParts}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 16}}>
                            <button>
                                Shortlist
                            </button>
                            <BiMessageAltDetail size={24} color='#0175C4' className='aa-msg' />
                        </div>
                    </div>
                    :
                    <div className='aa-skills-container'>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <span style={{fontWeight: '500', fontSize: 16}}>Stage</span>
                            <span style={{fontWeight: '300', color: '#AAA'}}>{applicantDetails.stage.level}</span>
                        </div>
                        <div className="status-bar-container">
                            {stageBarParts}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 16}}>
                            <button>
                                Schedule Interview
                            </button>
                            <BiMessageAltDetail size={24} color='#0175C4' className='aa-msg' />
                        </div>
                    </div>
                    }
                    <div className='aa-contact-container'>
                        <h5>Contact</h5>
                        <div className='aa-indi-contact'>
                            <MdOutlineEmail size={25} color='#7C8493'/>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 12, rowGap: 8}}>
                            <span style={{color: '#7C8493'}}>Email</span>
                            <span style={{color: '#25324B'}}>{applicantDetails.contact.email}</span>
                        </div>
                        </div>
                        <div className='aa-indi-contact'>
                            <MdPhoneIphone size={25} color='#7C8493'/>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 12, rowGap: 8}}>
                            <span style={{color: '#7C8493'}}>Phone</span>
                            <span style={{color: '#25324B'}}>{applicantDetails.contact.phone}</span>
                        </div>
                        </div>
                        <div className='aa-indi-contact'>
                            <FaInstagram size={25} color='#7C8493'/>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 12, rowGap: 8}}>
                            <span style={{color: '#7C8493'}}>Instagram</span>
                        {applicantDetails.contact.socialLinks.instagram ? 
                            <a target="_blank" href={applicantDetails.contact.socialLinks.instagram}>
                                <span style={{color: "#0175C4"}}>{applicantDetails.contact.socialLinks.instagram} </span>
                            </a> :
                            <span>"Not Available"</span>
                        }
                        </div>
                        </div>
                        <div className='aa-indi-contact'>
                            <TbBrandTwitter size={25} color='#7C8493'/>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 12, rowGap: 8}}>
                            <span style={{color: '#7C8493'}}>Twitter</span>
                            {applicantDetails.contact.socialLinks.twitter ? 
                            <span style={{color: "#0175C4"}}>{applicantDetails.contact.socialLinks.twitter} </span> :
                            <span>"Not Available"</span>
                        }
                        </div>
                        </div>
                        <div className='aa-indi-contact'>
                            <SlGlobe size={25} color='#7C8493'/>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 12, rowGap: 8}}>
                            <span style={{color: '#7C8493'}}>Website</span>
                            {applicantDetails.contact.socialLinks.website ? 
                            <span style={{color: "#0175C4"}}>{applicantDetails.contact.socialLinks.website} </span> :
                            <span>"Not Available"</span>
                        }
                        </div>
                        </div>
                    </div>
                </div>
                <div className='aa-applicant-right'>
                    {currentView === 0 ? 
                    <div className='aa-right-nav'>
                        <p className='aa-nav-item-active'>Applicant Profile</p>
                        <p className='aa-nav-item'>Resume</p>
                    </div>
                    :
                    <div className='aa-right-nav'>
                        <p className='aa-nav-item'>Applicant Profile</p>
                        <p className='aa-nav-item-active'>Resume</p>
                    </div>
                    }
                    {currentView === 0 ? <ProfileData /> : <Resume />}
                </div>
            </div>
        </div>
    );
}

export default ApplicantArea;
