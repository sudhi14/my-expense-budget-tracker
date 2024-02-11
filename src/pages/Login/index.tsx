import LoginLogo from "../../assets/images/login/login-bg-image.jpg";

const Login = () => {
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

    <header style={{ background: "black", overflow: "hidden" }}>
      <img
        src={LoginLogo}
        alt=" Login logo"
        style={{ objectFit: "cover", opacity: 0.4 }}
      />
      <section className="h-3/4 w-1/4 bg-white">
        {/* <div className="h-3/4 w-1/4 bg-white">test</div> */}
      </section>
    </header>
  );
};

export default Login;
