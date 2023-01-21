import React from "react";

import { AiFillDelete } from "react-icons/ai";
const Note = ({ title, content, onDelete, id }) => {
  const handleDel = () => {
    onDelete(id);
  };

  return (
    <div className="mx-auto">
      <div className="flex  flex-col  bg-white  text-black w-96 md:w-72  h-96 md:h-72  shadow-md rounded-lg relative">
        <p
          className={`text-base font-bold bg-[#fbcf5f] p-2 w-full text-center mb-5`}
        >
          {title}
        </p>
        <p className="fle items-center p-2 text-sm">{content}</p>
        <button
          onClick={handleDel}
          className={`  absolute bottom-0 right-0 text-sm text-[#fbcf5f] text-semibold p-2 cursor-pointer `}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Note;
