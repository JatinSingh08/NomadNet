export const getIsLikedByUser = (postData, username) => postData?.likes?.likedBy?.find((data) => data?.username === username);

export const getIsBookmarkedByUser = (usersData, postId, username) => 
  usersData?.find(user => user?.username === username).bookmarks?.find(post => post._id === postId);