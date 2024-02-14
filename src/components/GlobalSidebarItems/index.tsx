import { IconContext } from "react-icons";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr) => {
  return (
    <div className="flex flex-row gap-5 w-full mb-10 hover:cursor-pointer py-2 group hover:bg-[#1dae7e]">
      <div className=" w-2 rounded-sm bg-emerald-800 ml-1 mr-5 scale-0 group-hover:scale-100 delay-100 ease-in-out duration-300"></div>
      <div className="text-white  border-slate-200 rounded-full bg-gradient-to-b from-emerald-800 to-emerald-700 p-4">
        {curr.icon}
      </div>
      <NavLink to={curr.link} className="text-emerald-800 w-20">
        {curr.title}
      </NavLink>
    </div>
  );
};

export default GlobalSidebarItems;
