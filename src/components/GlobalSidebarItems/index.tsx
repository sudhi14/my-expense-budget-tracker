import { IconContext } from "react-icons";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr) => {
  return (
    <div className="flex flex-row gap-5 w-full mb-10 hover:cursor-pointer py-2 group hover:bg-[#388d70] hover:rounded-md">
      <div className=" w-2 rounded-sm bg-emerald-800 ml-1 mr-5 scale-0 group-hover:scale-100 delay-100 ease-in-out duration-300"></div>
      <div className="text-emerald-800 group-hover:text-white">{curr.icon}</div>
      <NavLink to={curr.link} className="text-emerald-800 w-20 group-hover:text-white">
        {curr.title}
      </NavLink>
    </div>
  );
};

export default GlobalSidebarItems;
