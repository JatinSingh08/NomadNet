import React from 'react'
import { CreatePost } from '../../components'

const Explore = () => {
  return (
    <div className='mt-20 px-20 py-10 flex flex-col gap-8 bg-[#F8F9FA] w-[calc(100%-40rem)]  ml-80'>
      This is Explore page.
      <CreatePost />
    </div>
  )
}

export default Explore
