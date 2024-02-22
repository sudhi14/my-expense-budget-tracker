import { NavLink } from "react-router-dom";

const GlobalSidebarItems = (curr: {
  title: string;
  link: string;
  icon: string;
}) => {
  return (
    <div>
      <section className="flex flex-row gap-5 items-center">
        <div className={`p-2`}>{curr.icon}</div>
        <NavLink to={curr.link}>{curr.title}</NavLink>
      </section>
    </div>
  );
};

export default GlobalSidebarItems;
