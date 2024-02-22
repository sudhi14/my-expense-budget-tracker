import LoginLogo from "../../assets/images/login/login-bg-image.jpg";
import { useNavigate } from "react-router-dom";
import TextBox from "../../components/interactiveComponents/TextBox";
import Buttons from "../../components/interactiveComponents/Buttons";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Background for login page */}
      <div className="w-full flex flex-row h-screen">
        <div
          style={{ backgroundImage: `url(${LoginLogo})` }}
          className=" flex-1 h-screen bg-cover bg-no-repeat"
        ></div>
        <div className="flex-1 bg-[#f7ebcb]  h-screen">
          <div className="flex flex-col w-full h-full items-end justify-center">
            <p className="text-emerald-800 text-8xl font-bold">CoinCraze</p>
            <p className="text-emerald-800 text-sm font-bold -translate-x-4">
              The simplest way to track your expenses
            </p>
          </div>
        </div>
      </div>

      {/* Form to get username and password */}
      <form action="">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="p-10 bg-white rounded-2xl 2xl:w-1/4 flex flex-col space-y-8 lg:w-[30%] md:w-1/2 sm:w-full">
            <div>
              <h1 className="text-4xl text-center font-bold tracking-tighter text-black mb-1">
                Sign in
              </h1>

              <p className="text-center font-medium text-gray-400">
                Sign in with your email here
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <TextBox type="text" placeholder="Email" />

              <TextBox type="password" placeholder="Password" />

              <Buttons
                type="submit"
                value="Sign in"
                handleClick={() => navigate("/home")}
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
