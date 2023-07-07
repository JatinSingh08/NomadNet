import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { HiLogout } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, logoutUser } from '../../features/authSlice'

const Menubar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { foundUser } = useSelector(authSelector);

  const logoutUserHandler = () => {
    dispatch(logoutUser());
    navigate('/login');
  }
  return (
    <div className='card fixed px-12 rounded-2xl ml-[10rem]  top-28 py-6  h-auto flex justify-center'>
        <ul className='flex flex-col gap-10 items-start text-start justify-center text-xl'>
          <Link className='flex gap-6 items-center hover:cursor-pointer' to='/'>
            <AiFillHome className=' text-[#9E98B3] w-6 h-6'/>
            <span>Home</span>
          </Link>
          <Link className='flex gap-6 items-center hover:cursor-pointer ' to='/explore'>
            <MdExplore className=' text-[#9E98B3] w-6 h-6'/>
            <span>Explore</span>
          </Link>
          <Link className='flex gap-6 items-center hover:cursor-pointer' to='/bookmarks'>
            <BsFillBookmarksFill className=' text-[#9E98B3] w-5 h-5'/>
            <span>Bookmarks</span>
          </Link>
          <Link className='flex gap-6 items-center hover:cursor-pointer' to={`/profile/${foundUser.username}`}>
            <CgProfile className=' text-[#9E98B3] w-6 h-6'/>
            <span>Profile</span>
          </Link>
          <button 
          onClick={logoutUserHandler}
          className='flex gap-6 items-center hover:cursor-pointer'
          >
            <HiLogout className=' text-[#9E98B3] w-6 h-6' />
            <span >Log Out</span>
          </button>
        </ul>
    </div>
  )
}

export default Menubar
