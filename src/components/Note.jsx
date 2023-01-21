import React from "react";

const Note = ({ title, content }) => {
  return (
    <div className="mx-auto w-[95%]">
      <div className="flex  flex-col  bg-white  text-black w-72 h-72 p-4 shadow-md rounded-lg relative">
        <p className="text-base font-bold bg-[#fbcf5f] p-4 text-center mb-5">
          {title}
        </p>
        <p className="text-sm">{content}</p>
        <p className="absolute bottom-0 right-0 text-sm text-[#fbcf5f] text-semibold p-2">
          delete
        </p>
      </div>
    </div>
  );
};

export default Note;
