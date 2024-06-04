import React from 'react'
import "./../../../styles/Company/PostTask/PostForm1.css"

import { BsCurrencyDollar } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const PostForm1 = ({ onNextStep }) => {
  return (
    <div className="formSection">
                    <p style={{fontSize: 16, fontWeight: '600', color: "#25324B"}}>
                        Basic Information
                    </p>
                    <p style={{fontSize: 14, color: "#7C8493"}}>
                        This information will be displayed publicly
                    </p>
                    <div className="formGroup">
                        <div className='formGroupHorizontal'>
                            <span>Task Title</span>
                            <p>Task titles must describe one position.</p>
                        </div>
                        <div className='formGroupHorizontal2'>
                            <input type="text" className="titleInput" placeholder="e.g. Software Engineer" />
                            <p>At least 80 characters.</p>
                        </div>
                    </div>
                    <div className="formGroup">
                        <div className='formGroupHorizontal'>
                            <span>Stipend</span>
                            <p>Please specify the estimated stipend range for the role. *You can leave this blank.</p>
                        </div>
                        <div className='formGroupHorizontal2'>
                            <div className='stipendInputContainer'>
                                <BsCurrencyDollar color={"#202430"} size={20} className='dollarSign'/>
                                <input type="number" className="stipend" placeholder="e.g. $5,000" />
                            </div>
                        </div>
                    </div>
                    <div className="formGroup">
                        <div className='formGroupHorizontal'>
                            <span>Categories</span>
                            <p>You can select multiple task categories</p>
                        </div>
                        <div className='taskCategoriesSub2'>
                            <span>Select Task Categories</span>
                            <select>
                                <option value="" disabled selected>
                                    <p style={{color: "#A8ADB7"}}>Select Task Category</p>
                                </option>
                                <option style={{color: "#515B6F"}}>Development</option>
                                <option>Design</option>
                            {/* Add more categories as needed */}
                        </select>
                        </div>
                    </div>
                    <div className="formGroup">
                            <div className='formGroupHorizontal'>
                                <span>Required Skills</span>
                                <p>Add required skills for the task</p>
                            </div>
                            <div>
                                <button className="addSkillBtn">
                                    <FaPlus size={16} color='#0175C4'/>
                                    <p className='addSkillBtnText'>Add Skill</p>
                                </button>
                                <div className="skills"> 
                                    <div className="skillTag">
                                        <p className='skillTags'>Graphic Design</p>
                                        <button className="removeSkillBtn">
                                            <IoClose color='#0175C4' size={22}/>
                                        </button>
                                    </div>
                                    <div className="skillTag">
                                        <p className='skillTags'>Communication</p>
                                        <button className="removeSkillBtn">
                                            <IoClose color='#0175C4' size={22}/>
                                        </button>
                                    </div>
                                    <div className="skillTag">
                                        <p className='skillTags'>Illustrator</p>
                                        <button className="removeSkillBtn">
                                            <IoClose color='#0175C4' size={22}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='lastPostArea'>
                        <button onClick={onNextStep} className="nextStepBtn">Next Step</button>
                    </div>
                </div>
  )
}

export default PostForm1