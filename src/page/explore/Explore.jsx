import React from 'react'
import { CreatePost } from '../../components'

const Explore = () => {
  return (
    <div className='px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]'>
      <CreatePost />
    </div>
  )
}

export default Explore
