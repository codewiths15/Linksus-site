import React from 'react'
import '../../../styles/Freelancer/Dashboard/Style.css';
import TopNav from './TopNav';
import GrettingFealter from './GrettingFealter';
import StatsContent from './StatsContent';



function Dashboard() {
  return (
    <mainscreen className="h-full w-full flex flex-col " >
   
     
    <TopNav/>
    <GrettingFealter/>
    <StatsContent/>
    
         
          <recent>
            4
          </recent>
        </mainscreen>
  )
}

export default Dashboard