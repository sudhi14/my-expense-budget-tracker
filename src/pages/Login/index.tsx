import LoginLogo from "../../assets/images/login/login-bg-image.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    // <div className="w-screen h-screen flex justify-center items-center">
    //   {/* The centered container for login page*/}
    //   <div className="w-3/4 h-3/4 bg-[#ffc04c] flex justify-start align-start relative mx-auto rounded-xl overflow-hidden">
    //     <div className="w-1/2"></div>

    //     {/* Container that holds the login image */}
    //     <div>
    //       <img
    //         src={LoginLogo}
    //         alt="Login logo"
    //         className="h-full"
    //       />
    //     </div>
    //   </div>
    // </div>

    // <div className-="bg-[image:(../../assets/images/login/login-bg-image.jpg)]"></div>
    // <>
    //   <div
    //     style={{
    //       backgroundImage: `url(${LoginLogo}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //       filter: "brightness(50%)",
    //       zIndex: "-999",
    //     }}
    //     className="h-screen flex justify-center items-center relative"
    //   >
    //     <div className="h-3/4 w-1/4 bg-white"></div>
    //   </div>
    // </>
    <>
      <div className="flex flex-row h-screen w-full">
        <div
          style={{ backgroundImage: `url(${LoginLogo})` }}
          className=" flex-1 h-screen bg-cover bg-no-repeat"
        ></div>
        <div className="bg-[#f7ebcb] flex-1 h-screen">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <p className="text-emerald-800 text-8xl font-bold -translate-x-14 mb-3">My</p>
            <p className="text-emerald-800 text-8xl font-bold translate-x-24 mb-3">expense</p>
            <p className="text-emerald-800 text-8xl font-bold translate-x-36">tracker!</p>
          </div>
        </div>
      </div>

      <form action="">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="p-10 bg-white rounded-2xl xl:w-1/4 flex flex-col space-y-8 lg:w-[30%] md:w-1/2 sm:w-full">
            <div>
              <h1 className="text-4xl text-center font-bold tracking-tighter text-black mb-1">
                Sign in
              </h1>
              <p className="text-center font-medium text-gray-400">
                Sign in with your email here
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <input
                type="text"
                placeholder="Email"
                className="h-10 w-full mb-5 rounded-lg px-3 outline-1 outline outline-gray-300  hover:outline-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-10 w-full mb-5 rounded-lg px-3 outline-1 outline outline-gray-300  hover:outline-2"
              />
              <input
                type="submit"
                value="Sign in"
                className="h-10 w-full mb-5 rounded-lg px-3 bg-emerald-700 text-white cursor-pointer"
                onClick={() => navigate("/home")}
              />
            </div>

            <hr className="border-b border-solid border-gray-200" />

            <div className="text-sm">
              <p className="text-center mb-2">
                Forgot password?{" "}
                <a href="" className="text-emerald-700">
                  Reset
                </a>
              </p>
              <p className="text-center">
                Don't have an account?{" "}
                <a href="" className="text-emerald-700">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
