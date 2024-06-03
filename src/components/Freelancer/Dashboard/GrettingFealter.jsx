import React from 'react'
import calenderLogo from '../../../assests/images/calender.png'

function GrettingFealter() {
  return (
    <greetingfilter className="w-full px-3 flex justify-between items-center py-4">
        <gretting>
          <h3 className='font-bold font-poppins text-xl'>Good morning, Jake</h3>
          <p className='font-epilogue text-[#7C8493] py-1'>Here is what’s happening with your task search applications from July 19 - July 25.</p>
        </gretting>
        <dropdown className= 'border w-48 h-12 flex flex-row items-center justify-around'>
        <h4 className='font-epilogue'>Jul 19 - Jul 25</h4>
          <img src={calenderLogo} alt='calenderLogo' className='h6 w-6'/>
        </dropdown>
      </greetingfilter>
  )
}

export default GrettingFealter