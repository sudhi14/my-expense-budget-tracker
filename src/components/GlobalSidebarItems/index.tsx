import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr) => {
  return (
    <div>
      <div className="mb-10 flex gap-5">
        {curr.icon}
        <NavLink to={curr.link}>{curr.title}</NavLink>
      </div>
    </div>
  );
};

export default GlobalSidebarItems;
