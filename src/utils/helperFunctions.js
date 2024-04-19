// Define the months array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDateAfter = (days) => {
  // Get today's date
  let currentDate = new Date();

  // Add the number of days to the current date
  currentDate.setDate(currentDate.getDate() + days);

  // Get the month, day, and year
  let month = months[currentDate.getMonth()];
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();

  // Format the date
  let formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

export const getFormattedDate = (dateString) => {
  const thisDate = new Date(dateString);
  const day = thisDate.getDate();
  const month = months[thisDate.getMonth()];
  const year = thisDate.getFullYear();

  const hours = thisDate.getHours();
  const mins = thisDate.getMinutes();

  return `${month} ${day}, ${year}, ${hours}:${mins}`;
};
