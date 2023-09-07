// JavaScript code to display the current day of the week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  currentDay;

// JavaScript code to display the current UTC time
const currentUTC = currentDate.toISOString().substr(11, 5);
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  currentUTC;
