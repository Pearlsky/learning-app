/* eslint-disable react/prop-types */
import CalenderDay from "./calendar-day";
import { useEffect, useState } from "react";
import Weekday from "./weekday";
import Button from "@/components/button";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { getFullMonthDetails } from "@/utils";

/**
 * getMonthDays, paginate weeks.
 * get next month & monthdays @ the end of individual month weeks
 */

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [currentDate] = useState(() => new Date().getDate());
  const [daysInMonthArray, setDaysInMonthsArray] = useState([]);
  const [fullMonthDetails, setFullMonthDetails] = useState({});
  const { month, monthIndex, monthWeeks } = fullMonthDetails;

  const [currWeek, setCurrWeek] = useState(1);
  const [daysPerWeek] = useState(7);

  useEffect(() => {
    const data = getFullMonthDetails(date);
    const { preDays, monthDays, postDays } = data;
    setDaysInMonthsArray(() => [
      ...Array.from({ length: preDays }).map((_, index) => (
        <CalenderDay key={`${index + 1}-${Math.random()}`}>{}</CalenderDay>
      )),
      ...Array.from({ length: monthDays }).map((_, index) => (
        <CalenderDay
          key={`${index + 1}-${Math.random()}`}
          weekDate={index + 1}
          currentDate={currentDate}
        >
          {index + 1}
        </CalenderDay>
      )),
      ...Array.from({ length: postDays }).map((_, index) => (
        <CalenderDay key={`${index + 1}-${Math.random()}`}>{}</CalenderDay>
      )),
    ]);
    setFullMonthDetails(data);
  }, [date, currentDate]);

  // | note: (refactor) to util helper function
  //   date wrangling

  //   pagination of weeks
  const indexOfLastDay = currWeek * daysPerWeek;
  const indexOfFirstDay = indexOfLastDay - daysPerWeek;
  const currentDays = daysInMonthArray.slice(indexOfFirstDay, indexOfLastDay);

  //   pagination handlers
  const prevWeekHandler = () => {
    if (currWeek === 1 && monthIndex !== 0) {
      setDate(() => new Date(2023, monthIndex - 1));
      //note: (refactor) this value should not be hardcode
      setCurrWeek(() => 5);

      console.log(date);
    }

    if (currWeek > 1) {
      setCurrWeek((prev) => prev - 1);
    }
  };

  const nextWeekHandler = () => {
    if (currWeek === monthWeeks) {
      setDate(() => new Date(2023, monthIndex + 1, 1));
      setCurrWeek(() => 1);
    }

    if (currWeek < monthWeeks) {
      setCurrWeek((prev) => prev + 1);
    }
  };

  return (
    <div>
      <article className="flex flex-col gap-8">
        <section>
          <div className="flex items-center justify-between">
            <Button
              label="previous"
              onClick={() => {
                prevWeekHandler();
              }}
            >
              <CiSquareChevLeft className="text-pryblue text-3xl" />
            </Button>
            <div>
              <h2 className="text-xl font-medium">{month}</h2>
            </div>
            <Button
              label="next"
              onClick={() => {
                nextWeekHandler();
              }}
            >
              <CiSquareChevRight className="text-pryblue text-3xl" />
            </Button>
          </div>
        </section>
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-7 gap-3">{currentDays}</div>
          <div className="grid grid-cols-7 text-center gap-3">
            {weekDays.map((weekday, index) => (
              <Weekday key={`${index + 1}-${weekday}`} weekday={weekday} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Calendar;
