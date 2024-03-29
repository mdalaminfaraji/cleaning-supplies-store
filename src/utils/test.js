const dayjs = require("dayjs");

const dateTimeString = "2024-03-26T19:39:20.325Z";

// Parse the date
const parsedDateTime = dayjs(dateTimeString);
console.log(parsedDateTime);

// Add 10 days
const newDateTime = parsedDateTime.add(10, "day");

console.log("New Date and Time:", newDateTime.format());
