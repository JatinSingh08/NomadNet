import React from 'react'
import { Outlet } from 'react-router-dom'

const FeedWrapper = () => {
  return (
    <div className='w-full'>
      {Outlet}
    </div>
  )
}

export default FeedWrapper
