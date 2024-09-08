import React, {useState} from 'react'
import "./../../../styles/Company/TaskListing/TaskTable.css"
import { IoFilterSharp } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

const TaskTable = () => {

    const NofPages = 3
    const [selectedPage, setSelectedPage] = useState(1)
    const renderPageMarkers = () => {
        const pages = [];
        for (let i = 1; i <= NofPages; i++) {
          pages.push(
            <div 
            key={i} 
            className={i === selectedPage ? "pageMarkerSelected" : "pageMarker"} 
            onClick={() => setSelectedPage(i)}
            >
                {i}
            </div>
          );
        }
        return pages;
      };

    const [tasks, setTasks] = useState([
        {
          role: 'Junior Developer',
          status: 'Live',
          datePosted: '2024-05-01',
          dueDate: '2024-06-01',
          taskType: 'Develop',
          applicants: 5,
          needs: { current: 2, total: 3 },
        },
        {
          role: 'Senior Designer',
          status: 'Live',
          datePosted: '2024-05-15',
          dueDate: '2024-06-05',
          taskType: 'Design',
          applicants: 10,
          needs: { current: 1, total: 1 },
        },
        {
          role: 'Script Writer',
          status: 'Closed',
          datePosted: '2024-04-05',
          dueDate: '2024-05-25',
          taskType: 'Content',
          applicants: 25,
          needs: { current: 3, total: 5 },
        }
        // Add more tasks as needed
      ]);

  return (
    <div className='taskTableTitle'>
        <div className='taskTableTitleTop'>
            <p className='taskTableTitleText'>Task List</p>
            <button className='taskTableFiltersBtn'> 
                <IoFilterSharp size={18} color='#25324B'/>
                <p className='filterBtnText'>Filters</p>
            </button>
        </div>
                <table>
                <thead>
                <tr>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Date Posted</th>
                    <th>Due Date</th>
                    <th>Task Type</th>
                    <th>Applicants</th>
                    <th>Needs</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                    <td>{task.role}</td>
                    <td className='tdCentered'>
                        <span className={task.status==="Live"? "greenRoundBtn" : "redRoundBtn"}>
                            {task.status}
                        </span>
                    </td>
                    <td>{new Date(task.datePosted).toLocaleDateString()}</td>
                    <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                    <td className='tdCentered'>
                        <span className={task.taskType==="Develop"? "yellowRoundBtn" : "blueRoundBtn"}>
                            {task.taskType}
                        </span>
                    </td>
                    <td>{task.applicants}</td>
                    <td>{`${task.needs.current}/${task.needs.total}`}</td>
                    <td>
                        <button className='optionsBtn'>
                            <SlOptions size={20}/>
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className='tableControlContainer'>
                <div className='tcLeft'>
                    <span className='subTexts'>View</span>
                    <select className='applicantSelector'>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    </select>
                    <span className='subTexts'>Applicants per page</span>
                </div>
                <div className='tcRight'>
                    <FaAngleLeft size={20} color='#25324B'/>
                    {renderPageMarkers()}
                    <FaAngleRight size={20} color='#25324B'/>
                </div>
            </div>
        <div>

        </div>
    </div>
  )
}

export default TaskTable