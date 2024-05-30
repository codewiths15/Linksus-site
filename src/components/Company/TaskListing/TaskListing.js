import React from 'react'
import "./../../../styles/Company/TaskListing/TaskListing.css"
import Navigation from '../../Freelancer/Sidebar/Navigation'
import TopNavigation from '../About/TopNavigation'
import TitleContainer from './TitleContainer'
import TaskTable from './TaskTable'

const TaskListing = () => {
  return (
    <div className='container'>
        <Navigation />
        <div className='mainContent'>
            <TopNavigation />
            <TitleContainer />
            <TaskTable />
        </div>
    </div>
  )
}

export default TaskListing