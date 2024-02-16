import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr, location) => {
  console.log("location", location);
  return (
    <div
      className={`group ${curr.title === "Dark mode" ? "bg-customGrayHighlight rounded-xl" : "hover:bg-customGrayHighlight hover:rounded-xl"} cursor-pointer py-1 px-1`}
    >
      <section className="flex flex-row gap-5 items-center">
        <div
          className={`${curr.title === "Dark mode" ? "text-white bg-gray-900" : "group-hover:text-white group-hover:bg-customOrange"} text-customGrayFont p-2 bg-GrayHighlight rounded-xl`}
        >
          {curr.icon}
        </div>
        <NavLink
          to={curr.link}
          className="group-hover:text-gray-700 text-customGrayFont text-bold"
        >
          {curr.title}
        </NavLink>
      </section>
    </div>
  );
};

export default GlobalSidebarItems;
