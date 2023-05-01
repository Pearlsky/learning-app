/* eslint-disable react/prop-types */
import { IoFlameSharp } from "react-icons/io5";
import { HiOutlineArrowUp } from "react-icons/hi2";

const LeaderboardItem = ({ name, country, score }) => (
  <article className="flex items-center gap-4 p-4 rounded-2xl bg-white">
    <div>
      <article className="w-fit p-6 border-[2.5px] border-secorange rounded-full"></article>
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-normal">{name}</span>
      <span className="text-sm text-gray-400 font-extralight">{country}</span>
    </div>
    <div className="flex items-center gap-2 ml-auto">
      <HiOutlineArrowUp className="text-green-700" />
      <span className="flex items-center">
        <IoFlameSharp className="text-pryorange text-base" />
        <small className="text-sm text-pryorange font-bold">{score}</small>
      </span>
    </div>
  </article>
);

export default LeaderboardItem;
