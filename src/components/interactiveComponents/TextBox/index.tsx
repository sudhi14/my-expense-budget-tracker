const InputBox = ({ attrs, additionalClassName, type, placeholder, handleClick }) => {
  return (
    <input
      {...attrs}
      type={type}
      placeholder={placeholder}
      className={`h-10 w-full mb-5 rounded-lg px-3 outline-1 outline outline-gray-300  hover:outline-2 ${additionalClassName}`}
      onClick={handleClick}
    />
  );
};

export default InputBox;
