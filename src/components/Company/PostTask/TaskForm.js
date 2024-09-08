import React, { useState } from 'react';
import "./../../../styles/Company/PostTask/TaskForm.css";
import PostTaskTitle from './PostTaskTitle';
import PostForm1 from './PostForm1';
import PostForm2 from './PostForm2';

const TaskForm = () => {
  const [currentForm, setCurrentForm] = useState('form1');

  const handleNextStep = () => {
    setCurrentForm('form2');
  };

  const handlePreviousStep = () => {
    setCurrentForm('form1');
  };

  return (
    <div className='taskFormContent'>
      <PostTaskTitle currentForm={currentForm} />
      {currentForm === 'form1' && <PostForm1 onNextStep={handleNextStep} />}
      {currentForm === 'form2' && <PostForm2 onPreviousStep={handlePreviousStep} />}
    </div>
  );
};

export default TaskForm;
