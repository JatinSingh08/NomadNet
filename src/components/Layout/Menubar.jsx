import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../features/authSlice'

const Menubar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUserHandler = () => {
    dispatch(logoutUser());
    navigate('/login');
  }
  return (
    <div className='card layout-shadow fixed w-80  top-20 py-10 h-[100vh] flex justify-center'>
        <ul className='flex flex-col gap-10 text-start text-xl'>
          <Link className='flex gap-4 items-center hover:cursor-pointer' to='/'>
            <AiFillHome className='text-2xl'/>
            <span>Home</span>
          </Link>
          <Link className='flex gap-4 items-center hover:cursor-pointer' to='/explore'>
            <MdExplore className='text-2xl'/>
            <span>Explore</span>
          </Link>
          <Link className='flex gap-4 items-center hover:cursor-pointer' to='/bookmarks'>
            <BsFillBookmarksFill className='text-2xl'/>
            <span>Bookmarks</span>
          </Link>
          <Link className='flex gap-4 items-center hover:cursor-pointer' to='/liked'>
            <AiFillHeart className='text-2xl'/>
            <span>Liked Posts</span>
          </Link>
          <Link className='flex gap-4 items-center hover:cursor-pointer' to='/profile/1'>
            <CgProfile className='text-2xl'/>
            <span>Profile</span>
          </Link>
          <button 
          onClick={logoutUserHandler}
          >
            Logout 📴
          </button>
        </ul>
    </div>
  )
}

export default Menubar
