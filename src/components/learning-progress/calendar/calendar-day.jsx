/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const CalenderDay = ({children }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <button
          className={twMerge(
            clsx(
              "w-10 h-10 flex justify-center items-center rounded-full bg-white text-pryblue font-medium disabled:pointer-events-none, disabled:bg-gray-100",
              { "bg-pryblue": isComplete }
            )
          )}
          disabled={children ? false : true}
          onClick={() => setIsComplete((prev) => !prev)}
        >
          {isComplete ? <IoCheckmarkSharp className="text-white" /> : children}
        </button>
      </div>
    </>
  );
};

export default CalenderDay;
