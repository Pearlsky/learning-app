import {
  endOfMonth,
  getWeeksInMonth,
  differenceInDays,
  startOfMonth,
  getMonth,
} from "date-fns";

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

export const getFullMonthDetails = (date) => {
  const startDay = startOfMonth(date);
  const endDay = endOfMonth(date);
  const monthIndex = getMonth(date);
  const monthNumber = monthIndex + 1;
  const month = months[monthIndex];
  const monthWeeks = getWeeksInMonth(date);
  const monthDays = differenceInDays(endDay, startDay) + 1;
  const preDays = startDay.getDay();
  const postDays = endDay.getDay();

  return {
    month,
    monthIndex,
    monthNumber,
    monthWeeks,
    monthDays,
    preDays,
    postDays,
  };
};
