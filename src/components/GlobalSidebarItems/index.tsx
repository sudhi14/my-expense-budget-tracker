import { IconContext } from "react-icons";
import { MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr) => {
  return (
    <div
      className={`hover:rounded-r-md flex flex-row gap-5 w-full mb-5 hover:cursor-pointer group hover:bg-emerald-600`}
    >
      <div className="w-2 bg-emerald-800 scale-0 group-hover:scale-100 delay-100 ease-in-out duration-300"></div>

      <div className="group-hover:text-white">{curr.icon}</div>

      <NavLink to={curr.link} className="w-20 group-hover:text-white">
        {curr.title}
      </NavLink>
    </div>
  );
};

export default GlobalSidebarItems;
