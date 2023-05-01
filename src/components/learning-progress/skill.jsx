/* eslint-disable react/prop-types */
import clsx from "clsx";

const Skill = ({ title, progress, icon }) => (
  <article className="w-fit flex flex-col items-center gap-4 py-6 px-8 bg-white rounded-3xl shadow">
    <div className="w-fit p-6 rounded-full bg-pryblue">{icon}</div>
    <div className="flex flex-col items-center gap-0.5">
      <h3 className="text-xl capitalize">{title}</h3>
      <span className="text-sm text-gray-500">{progress}%</span>
    </div>
    <div
      className={clsx(
        "w-fit py-1 px-3 text-sm text-pryorange border border-pryorange rounded-full",
        { "text-white bg-pryorange": progress === 100 }
      )}
    >
      {progress === 100 && "Completed"}
      {progress < 100 && "Good work"}
    </div>
  </article>
);

export default Skill;
