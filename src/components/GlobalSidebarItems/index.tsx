import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr: {
  title: string;
  link: string;
  icon: string;
}) => {
  return (
    <div
    // className={`group ${curr.title === "Dark mode" ? "bg-customGrayHighlight rounded-xl" : "hover:bg-customGrayHighlight hover:rounded-xl"} cursor-pointer py-1 px-1`}
    >
      <section className="flex flex-row gap-5 items-center">
        <div className={`p-2 text-emerald-900`}>{curr.icon}</div>
        <NavLink
          to={curr.link}
          // className="group-hover:text-gray-700 text-customGrayFont text-bold"
        >
          {curr.title}
        </NavLink>
      </section>
    </div>
  );
};

export default GlobalSidebarItems;
