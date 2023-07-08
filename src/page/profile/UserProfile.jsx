import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { userSelector } from '../../features/usersSlice';
import { Post, UserProfileCard } from '../../components';
import { postsSelector } from '../../features/postsSlice';

const UserProfile = () => {
  const { username } = useParams();
  const { usersData } = useSelector(userSelector);
  const { postsData } = useSelector(postsSelector);

  const user = usersData?.find(user => user.username === username);
  const userPosts = postsData?.filter(post => post.username === user.username);
  console.log({userPosts});

  return (
    <div className="px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]">
      <UserProfileCard 
      usersData={usersData}
      user={user}
      />
      {
        userPosts?.map(postData => (
          <Post
          postData={postData}
          />
        ))
      }
    </div>
  )
}

export default UserProfile
