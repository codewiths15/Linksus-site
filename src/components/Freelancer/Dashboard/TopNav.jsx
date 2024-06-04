import React from 'react'
import notificationLogo from '../../../assests/images/notification.png'


function TopNav() {
  return (
    <topnav className=" pb-7 flex items-center px-3 border-b-2">
    <div className='flex justify-between w-full'>
      <h3 className='font-bold font-poppins text-2xl'>Dashboard</h3>
      <img src={notificationLogo} alt='notification' className='h-8 w-8' />
      </div>
  </topnav>
  )
}

export default TopNav