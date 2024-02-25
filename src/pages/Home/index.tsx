import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GlobalSidebar from "../../components/customComponents/GlobalSidebar";

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
        <div className="flex flex-row w-full h-screen gap-10">
          <GlobalSidebar />
          <Outlet />
        </div>
      ) : null}
    </>
  );
};

export default Home;
