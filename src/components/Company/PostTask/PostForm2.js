import React, { useState } from 'react'
import "./../../../styles/Company/PostTask/PostForm2.css"
import { FaRegFaceSmile } from "react-icons/fa6";
import { FiBold } from "react-icons/fi";
import { PiTextItalicBold } from "react-icons/pi";
import { RiListOrdered2 } from "react-icons/ri";
import { HiListBullet } from "react-icons/hi2";
import { FaLink } from "react-icons/fa6";

const PostForm2 = ({ onPreviousStep }) => {

    const [desc, setDesc] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [whoYou, setWhoYou] = useState("");
    const [nice, setNice] = useState("");

    return (
        <div>
            <div className='pf-2-title'>
                <h4>Details</h4>
                <p>Add description of the task, responsibilities, who you are and nice-to-haves.</p>
            </div>
            <div className='pf-2-sub-container'>
                <div>
                    <h4>Task Descriptions</h4>
                    <p className='pf-2-gen-p'>Task titles must describe at least one position.</p>
                </div>
                <div className='pf-2-sub-container-2'>
                    <textarea 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder='Enter task description'
                        className='pf-2-input-container'
                        maxLength={500}
                    />
                    <div className='emo-container'>
                        <FaRegFaceSmile size={20} color='#7C8493'/>
                        <FiBold size={20} color='#7C8493'/>
                        <PiTextItalicBold size={20} color='#7C8493'/>
                        <RiListOrdered2 size={20} color='#7C8493'/>
                        <HiListBullet size={20} color='#7C8493'/>
                        <FaLink size={20} color='#7C8493'/>
                    </div>
                    <div className='pf-mc-container'>
                        <p className='pf-2-mc-p'>Maximum 500 characters</p>
                        <p className='pf-2-mc-p'>{desc.length}/500</p>
                    </div>
                </div>
            </div>
            <div className='pf-2-sub-container'>
                <div>
                    <h4>Responsibilities</h4>
                    <p className='pf-2-gen-p'>Outline the core responsibilities of the position.</p>
                </div>
                <div className='pf-2-sub-container-2'>
                    <textarea 
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                        placeholder='Enter task responsibilities'
                        className='pf-2-input-container'
                        maxLength={500}
                    />
                    <div className='emo-container'>
                        <FaRegFaceSmile size={20} color='#7C8493'/>
                        <FiBold size={20} color='#7C8493'/>
                        <PiTextItalicBold size={20} color='#7C8493'/>
                        <RiListOrdered2 size={20} color='#7C8493'/>
                        <HiListBullet size={20} color='#7C8493'/>
                        <FaLink size={20} color='#7C8493'/>
                    </div>
                    <div className='pf-mc-container'>
                        <p className='pf-2-mc-p'>Maximum 500 characters</p>
                        <p className='pf-2-mc-p'>{responsibilities.length}/500</p>
                    </div>
                </div>
            </div>
            <div className='pf-2-sub-container'>
                <div>
                    <h4>Who You Are</h4>
                    <p className='pf-2-gen-p'>Add your preferred candidates qualifications.</p>
                </div>
                <div className='pf-2-sub-container-2'>
                    <textarea 
                        value={whoYou}
                        onChange={(e) => setWhoYou(e.target.value)}
                        placeholder='Enter qualifications'
                        className='pf-2-input-container'
                        maxLength={500}
                    />
                    <div className='emo-container'>
                        <FaRegFaceSmile size={20} color='#7C8493'/>
                        <FiBold size={20} color='#7C8493'/>
                        <PiTextItalicBold size={20} color='#7C8493'/>
                        <RiListOrdered2 size={20} color='#7C8493'/>
                        <HiListBullet size={20} color='#7C8493'/>
                        <FaLink size={20} color='#7C8493'/>
                    </div>
                    <div className='pf-mc-container'>
                        <p className='pf-2-mc-p'>Maximum 500 characters</p>
                        <p className='pf-2-mc-p'>{whoYou.length}/500</p>
                    </div>
                </div>
            </div>
            <div className='pf-2-sub-container'>
                <div>
                    <h4>Nice-To-Haves</h4>
                    <p className='pf-2-gen-p'>Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply.</p>
                </div>
                <div className='pf-2-sub-container-2'>
                    <textarea 
                        value={nice}
                        onChange={(e) => setNice(e.target.value)}
                        placeholder='Enter nice-to-haves'
                        className='pf-2-input-container'
                        maxLength={500}
                    />
                    <div className='emo-container'>
                        <FaRegFaceSmile size={20} color='#7C8493'/>
                        <FiBold size={20} color='#7C8493'/>
                        <PiTextItalicBold size={20} color='#7C8493'/>
                        <RiListOrdered2 size={20} color='#7C8493'/>
                        <HiListBullet size={20} color='#7C8493'/>
                        <FaLink size={20} color='#7C8493'/>
                    </div>
                    <div className='pf-mc-container'>
                        <p className='pf-2-mc-p'>Maximum 500 characters</p>
                        <p className='pf-2-mc-p'>{nice.length}/500</p>
                    </div>
                </div>
            </div>
            <div className='pf-lastPostArea'>
                <button onClick={onPreviousStep} className='pf-backStepBtn'>Previous</button>
                <button className="pf-nextStepBtn">Submit</button>
            </div>
        </div>
    )
}

export default PostForm2;