import React from "react";

import { AiFillDelete } from "react-icons/ai";
const Note = ({ title, content, onDelete, id }) => {
  const handleDel = () => {
    onDelete(id);
  };

  return (
    <div className="flex px-42 ">
      <div className=" flex flex-col bg-white dark:text-white dark:bg-black text-black w-96 md:w-72  h-96 md:h-72  shadow-md dark:shadow-dimWhite rounded-lg relative  transition-all ease-in-out duration-300">
        <div
          className={`text-base font-bold bg-[#fbcf5f] p-2 w-full text-center mb-5`}
        >
          {title}
        </div>
        <div className=" items-center p-2 text-sm dark:bg-black">{content}</div>
        <button
          onClick={handleDel}
          className={` absolute bottom-0 right-0 text-sm text-[#fbcf5f] text-semibold p-2 cursor-pointer `}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Note;
