import React, {useState} from 'react'
import "./../../../styles/Company/TaskListing/TitleContainer.css"
import { SlCalender } from "react-icons/sl";

const TitleContainer = () => {
  const [startDate, setStartDate] = useState(new Date());

  const formatDateRange = (date) => {
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 6);

    const formatOptions = { month: 'short', day: 'numeric' };
    const startStr = start.toLocaleDateString('en-US', formatOptions);
    const endStr = end.toLocaleDateString('en-US', formatOptions);

    return `${startStr} - ${endStr}`;
  };

  return (
    <div class="titleBarContainer">
        <div className='titleBar'>
            <p className='titleBarTitle'>Task Listing</p>
            <p className='titleBarSubText'>Here is your task listing status from July 19 - July 25</p>
        </div>
          <button className="scheduleBtn">
            <p className="scheduleBtnText">{formatDateRange(startDate)}</p>
            <SlCalender size={20} color="#0175C4" />
          </button>
    </div>
  )
}

export default TitleContainer