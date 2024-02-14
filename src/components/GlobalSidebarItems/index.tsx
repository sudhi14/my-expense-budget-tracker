import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr) => {
  return (
    <div
      className={`group hover:bg-gray-100 hover:rounded-2xl hover:cursor-pointer py-2 px-2 ${curr.title === "Logout" ? "mt-auto" : ""}`}
    >
      <header></header>
      <section className="flex flex-row gap-5 items-center">
        <div className="group-hover:text-white group-hover:bg-secondaryOrange text-gray-500 p-2 bg-gray-100 rounded-2xl">{curr.icon}</div>
        <NavLink
          to={curr.link}
          className="w-20 group-hover:text-gray-800 text-gray-500 text-bold"
        >
          {curr.title}
        </NavLink>
      </section>
    </div>
  );
};

export default GlobalSidebarItems;
