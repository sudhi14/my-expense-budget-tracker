const Buttons = ({ attrs, additionalClassName, type, value, handleClick }) => {
  return (
    <input
      {...attrs}
      type={type}
      value={value}
      className={`h-10 w-full mb-5 rounded-lg px-3 bg-emerald-700 text-white cursor-pointer ${additionalClassName}`}
      onClick={handleClick}
    />
  );
};

export default Buttons;
