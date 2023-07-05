import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className='w-28 h-[192px] py-4 card drop-shadow-lg rounded-lg flex flex-col items-center justify-between'>
      <div className='flex flex-col gap-1 items-center'>
        <img
          src={userData?.profile}
          alt=''
          className='w-20 h-20 rounded-full object-contain m-auto'
        />
        <p className='font-medium text-[12px]'>
          {userData?.firstName + ' ' + userData?.lastName}
        </p>
      </div>
      <button className='px-3 py-0.5 rounded button text-slate-100  m-auto'>
        Follow
      </button>
    </div>
  );
};

export default UserCard;
