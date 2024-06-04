import React from 'react';
import { HiOutlineBriefcase } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./../../../styles/Company/PostTask/PostTaskTitle.css";

const PostTaskTitle = ({ currentForm }) => {
  return (
    <div>
      <div className='titleBarWithBack'>
        <IoMdArrowRoundBack size={35} />
        <h1 style={{ marginLeft: 12 }}>Post a Task</h1>
      </div>
      <div className="steps">
        <div className={`step ${currentForm === 'form1' ? 'active' : ''}`}>
          <HiOutlineBriefcase size={17} className={currentForm === 'form1' ? 'postTaskStepsIconsSelected' : 'postTaskStepsIcons'} />
          <div className='stepSub'>
            <span className='label1'>Step 1/3: </span>
            <span className='label2'>Task Information</span>
          </div>
        </div>
        <div className={`step ${currentForm === 'form2' ? 'active' : ''}`}>
          <LuClipboardList size={20} className={currentForm === 'form2' ? 'postTaskStepsIconsSelected' : 'postTaskStepsIcons'} />
          <div className='stepSub'>
            <span className='label1'>Step 2/3: </span>
            <span className='label2'>Task Description</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTaskTitle;
