import { NavLink } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi";

// note: (refactor): render nav items dynamically

const Nav = () => (
  <div className="fixed bottom-0 left-0 right-0 max-w-[400px] w-full mx-auto">
    <section className="py-6 px-8 bg-white rounded-t-3xl">
      <ul className="flex justify-between">
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <HiOutlineHome
                className={
                  isActive
                    ? "text-2xl text-pryblue fill-pryblue"
                    : "text-2xl text-gray-400"
                }
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/learning-progress">
            {({ isActive }) => (
              <HiOutlineChartBar
                className={
                  isActive
                    ? "text-2xl text-pryblue fill-pryblue"
                    : "text-2xl text-gray-400"
                }
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            {({ isActive }) => (
              <HiOutlineUsers
                className={
                  isActive
                    ? "text-2xl text-pryblue fill-pryblue"
                    : "text-2xl text-gray-400"
                }
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            {({ isActive }) => (
              <HiOutlineCog6Tooth
                className={
                  isActive
                    ? "text-2xl text-pryblue fill-pryblue"
                    : "text-2xl text-gray-400"
                }
              />
            )}
          </NavLink>
        </li>
      </ul>
    </section>
  </div>
);

export default Nav;
