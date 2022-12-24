import React from "react";

const Button = () => {
  return (
    <button
      type="button"
      className={`Button py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none${styles} bg-blue-gradient rounded-[10px] mt-4  hover:scale-125 transition duration-500 ease-in-out `}
    >Free trial</button>
  );
};

export default Button;
