import React from "react";
import { BiAnchor } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-[#fbcf5f] h-20 p-4 shadow-md sticky top-0 z-50">
      <h1 className="flex  items-center text-3xl text-black_gradient font-bold "><BiAnchor/> Dev-Note</h1>
      
    </div>
  );
};

export default Header;
