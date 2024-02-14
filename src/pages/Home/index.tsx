import { Outlet } from "react-router-dom";
import GlobalSidebar from "../../components/GlobalSidebar/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const auth = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth]);

  return (
    <>
      {auth ? (
        <div className="flex flex-row bg-whites w-full h-screen">
          <GlobalSidebar />
          <Outlet />
        </div>
      ) : null}
    </>
  );
};

export default Home;
