import React from 'react'
import { profileImage } from '../../assets'

const UserCard = () => { 
  return (
    <div className='px-6 py-4 h-48 card shadow rounded-lg flex-col items-center justify-center'>
      <div className='flex flex-col gap-1'>
        <img src={profileImage} alt="" className='w-20 h-20 rounded-full object-contain m-auto'/>
        <p className='font-medium text-sm'>Jatin Singh</p>
      </div>
      <button className='px-3 py-0.5 mt-7 rounded button text-slate-100'>Follow</button>
    </div>
  )
}

export default UserCard
