import React from "react";
import { SiConvertio } from "react-icons/si";
import { FaCalculator } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const GlobalUtils = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="p-3 bg-gray-300 rounded-xl hover:cursor-pointer">
        <SiConvertio size={15} />
      </div>
      <div className="p-3 bg-gray-300 rounded-xl hover:cursor-pointer">
        <FaCalculator size={15} />
      </div>
      <div className="p-3 bg-gray-300 rounded-xl hover:cursor-pointer">
        <FaCalendarAlt size={15} />
      </div>
    </div>
  );
};

export default GlobalUtils;
