import { IoFlameSharp } from "react-icons/io5";
import StatusRing from "./status-ring";
const Status = () => (
  <section className="flex items-center justify-between gap-6 px-4 py-2 border-[1.5px] border-pryblue rounded-2xl bg-white">
    <div>
      <span className="text-xs text-pryblue">Today&apos;s goal</span>
      <StatusRing />
    </div>
    <div className="flex flex-col gap-1.5 flex-1">
      <h2 className="text-[1.3rem] font-medium">Excellent!</h2>
      <p className="leading-tight text-base text-gray-600 font-thin">
        <span>
          You&apos;re almost there. <br />
          Finish the goal to achieve
        </span>
        <span className="flex items-center">
          <IoFlameSharp className="text-pryorange text-base" />
          <small className="text-sm text-pryorange font-medium">10</small>
        </span>
      </p>
    </div>
  </section>
);

export default Status;
