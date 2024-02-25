const Card = ({ additionalClass, children }) => {
  console.log(additionalClass);
  return (
    <div className={`shadow-lg rounded-xl ${additionalClass}`}>
      {children}
    </div>
  );
};

export default Card;
