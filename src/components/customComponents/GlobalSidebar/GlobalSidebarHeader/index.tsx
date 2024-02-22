import MainLogo from "../../../assets/images/logo/main-logo.png";

export const GlobalSidebarHeader = () => {
  return (
    <>
      <div className="border-2 border-solid border-emerald-700 rounded-full">
        <img
          src={MainLogo}
          alt=""
          className="object-contain h-16 w-16 rounded-full"
        />
      </div>
      <p className="font-bold text-lg tracking-widest">CoinCraze</p>
    </>
  );
};

export default GlobalSidebarHeader;
