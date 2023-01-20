import React from "react";
import cars from "./data"

const Note = () => {
 
  return (
    <div className="bg-[#eee]  p-4 h-screen">
      <div className="flex  flex-col justify-center bg-white i text-black w-52  p-4 shadow-md rounded-lg">
        <p>This is the Note title</p>
        <p>This is the note content</p>
      </div>

      
    </div>
  );
};

export default Note;
