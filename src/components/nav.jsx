import { Link } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi";

const Nav = () => (
  <div className="fixed bottom-0 left-0 right-0 max-w-[400px] w-full mx-auto">
    <section className="py-6 px-8 bg-white rounded-t-3xl">
      <ul className="flex justify-between">
        <li>
          <Link to="/">
            <HiOutlineHome className="text-2xl text-gray-400" />
          </Link>
        </li>
        <li>
          <Link to="/learning-progress">
            <HiOutlineChartBar className="text-2xl text-gray-400" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <HiOutlineUsers className="text-2xl text-gray-400" />
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <HiOutlineCog6Tooth className="text-2xl text-gray-400" />
          </Link>
        </li>
      </ul>
    </section>
  </div>
);

export default Nav;
