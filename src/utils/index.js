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


export const getImageURL = (data)=>{
  const imageURL = debug ? baseURL + data.image : data.image;
  return imageURL
}