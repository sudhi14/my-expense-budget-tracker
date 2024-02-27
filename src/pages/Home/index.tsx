import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GlobalSidebar from "../../components/customComponents/GlobalSidebar";
import GlobalHeader from "../../components/customComponents/GlobalHeader";

const Home = () => {
  const auth = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    } else {
      navigate("dashboard");
    }
  }, [auth]);

  return (
    <>
      {auth ? (
        <div className="flex flex-col w-full h-screen pr-5">
          <GlobalHeader />
          <div className="flex flex-row w-full h-screen gap-10 mt-2">
            <GlobalSidebar />
            <Outlet />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
