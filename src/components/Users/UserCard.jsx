import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className='flex justify-between items-center gap-2'>
     <div className='flex gap-2'>
      <img src={userData?.profile} alt="avatar" className='w-11 h-11 rounded-full object-contain'/>
      <div className='flex flex-col text-start'>
        <h1 className='font-medium'>{userData?.firstName}</h1>
        <p className='text-[12px] text-[#A6A0B9]'>@{userData?.username}</p>
      </div>
     </div>
     <button className='bg-[#6B4DE6] px-2 text-sm w-24 h-7 rounded-2xl text-slate-50'>
      Follow
     </button>
    </div>
  );
};

export default UserCard;
