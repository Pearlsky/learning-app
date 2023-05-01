/* eslint-disable react/prop-types */
import clsx from "clsx";
import ProgressBar from "./progress-bar";

const LessonItem = ({title, thumbnail, duration, frequency}) => {
  return (
    <section className="basis-[calc(100%/2.5)] flex-[0_0_100%] w-full flex flex-col gap-3">
      <div className="p-4 rounded-3xl bg-white">
        <div
          className={clsx(
            thumbnail,
            "h-16 bg-contain bg-no-repeat bg-center"
          )}
        ></div>
      </div>
      <ProgressBar />
      <div className="flex flex-col">
        <h3 className="text-base">{title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-gray-400">
          <span>{duration}</span>
          <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
          <span>{frequency}</span>
        </p>
      </div>
    </section>
  );
};

export default LessonItem;
