const monthString = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const getJoinedDate = (date) => {
    const dateJoined = new Date(date);
    const year = dateJoined.getFullYear();
    const month = dateJoined.getMonth();
    const formattedDate = `${monthString[month]} ${year}`
    return formattedDate
}