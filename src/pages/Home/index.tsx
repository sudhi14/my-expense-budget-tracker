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
        <div className="bg-[#e6e6e6] flex flex-col justify-center items-center w-full h-screen">
          <div className="flex flex-row bg-white w-full h-full m-2 rounded-lg">
            <GlobalSidebar />
            <Outlet />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
