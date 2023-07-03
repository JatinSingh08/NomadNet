import React from 'react'
import { profileImage } from '../../assets'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

const Post = () => {
  return (
    <div className='shadow card p-5 rounded-xl'>
      <div className='flex justify-between'>
        <div className='flex items-start justify-center gap-3'>
          <img src={profileImage} alt="" className='w-16 h-16 rounded-full object-contain'/>
          <div className='flex-col gap-2 text-start'>
            <p>Jatin Singh</p>
            <p>Thu June 29 2023</p>
          </div> 
        </div>
        <IoEllipsisHorizontal className='font-bold'/>
      </div>
      <div className='text-start px-8'>
        <div className='mt-6'>
          Hey I'm Jatin !!
        </div>
        <div className='flex items-start text-[#64748B] justify-between text-2xl mt-6'>
          <AiOutlineLike className='hover:cursor-pointer'/>
          <AiOutlineDislike className='hover:cursor-pointer'/>
          <FaRegComment className='cursor-pointer'/>
          <AiOutlineShareAlt className='cursor-pointer'/>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Post
