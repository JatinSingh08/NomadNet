import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { user } = useParams();
  return (
    <div className='text-2xl mt-48'>
      This is profile page for user { user }
    </div>
  )
}

export default Profile
