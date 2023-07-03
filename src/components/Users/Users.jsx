import React from 'react'
import UserCard from './UserCard'

const Users = () => {
  return (
    <div className='flex gap-2'>
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  )
}

export default Users
