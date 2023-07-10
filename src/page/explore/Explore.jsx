import React from 'react'
import { CreatePost, Post } from '../../components'
import { useSelector } from 'react-redux'
import { postsSelector } from '../../features/postsSlice'

const Explore = () => {
  const { postsData } = useSelector(postsSelector);
  return (
    <div className='px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]'>
      {
        postsData?.map(postData => (
          <Post 
          postData={postData}
          />
        ))
      }
      {/* <CreatePost /> */}
    </div>
  )
}

export default Explore
