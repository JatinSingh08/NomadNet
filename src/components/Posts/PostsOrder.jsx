import React from 'react'
import { BiTrendingUp } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai'
const PostsOrder = () => {
  return (
    <div className='w-full card rounded-lg h-14 flex justify-between'>
      <button
       className='flex items-center justify-center gap-2 text-lg w-[50%] hover:bg-rose-100 hover:rounded-e-2xl'>
        <BiTrendingUp />
        <span>Trending</span>
      </button>
      <button className='flex items-center justify-center gap-2 text-lg w-[50%] hover:bg-rose-100 hover:rounded-s-2xl'>
        <AiOutlineClockCircle />
        <span>Latest</span>
      </button>
    </div>
  )
}

export default PostsOrder
