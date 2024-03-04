const Buttons = ({ attrs, additionalClassName, type, value, onClick }) => {
  return (
    <input
      {...attrs}
      type={type}
      value={value}
      className={`h-10 w-full mb-5 rounded-lg px-3 bg-customComponents text-white cursor-pointer ${additionalClassName}`}
      onClick={onClick}
    />
  );
};

export default Buttons;
