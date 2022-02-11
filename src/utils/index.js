const monthString = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getJoinedDate = (date) => {
  const dateJoined = new Date(date);
  const year = dateJoined.getFullYear();
  const month = dateJoined.getMonth();
  const formattedDate = `${monthString[month]} ${year}`;
  return formattedDate;
};

export const baseURL = "http://localhost:8000";
export const debug = true;

export const getProfileImage = (user) => {
  const defaultImg = "/img/profile/default.jpg";
  
  if (user.avatar) {
    const userImg = debug ? baseURL + user.avatar : user.avatar;
    return userImg;
  }

  return defaultImg;
};

// this will return post image url
export const getImageURL = (data)=>{
  const imageURL = debug ? baseURL + data.image : data.image;
  return imageURL
}

// this will check if logged in user liked a particular post
export const isLiked = (user, post) => {
  const likes = post.likes;

  for (let x=0; x<likes.length; x++){
    if (user.username === likes[x].user) {
      return true;
    };
  }
  return false
}

// this will check if logged in user is following a particular user
export const isFollowing = (user, otherUser) => {
  const followers = otherUser.followers;

  for (let x = 0; x < followers.length; x++) {
    if (user.username === followers[x].follower.username) {
      return true;
    }
  }
  return false
}