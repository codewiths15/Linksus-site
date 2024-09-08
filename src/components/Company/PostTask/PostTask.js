import React from 'react'
import "./../../../styles/Company/PostTask/PostTask.css"
import Navigation from '../../Freelancer/Sidebar/Navigation'
import TopNavigation from '../About/TopNavigation'
import CompanyDropdown from './CompanyDropdown'
import TaskForm from './TaskForm'

const PostTask = () => {
  return (
    <div className='postTaskContainer'>
        <Navigation />
        <div className='postTaskMainContent'>
            <div className='postTaskHeaderDuo'>
                <CompanyDropdown />
                <TopNavigation />
            </div>
            <TaskForm />
        </div>
    </div>
  )
}

export default PostTask