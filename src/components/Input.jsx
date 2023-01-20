import React from "react";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";

const Input = () => {
    const [uploads, setUploads] = useState([])
  const [content, setContent] = useState({
    title: "",
    list: "",
  });

  const addItem= (event) => {
    const newValue = event.target.value;
  }

  const handleAdd = () => {

  };
  return (
    <div className="flex w-full h-full bg-[#eee] pt-5">
      <div className=" w-96 mx-auto bg-white h-36 flex flex-col p-4 rounded-lg shadwo-sm relative">
        <input
          onChange={addItem}
          type="text"
          className="h-[42px] mb-5 outline-none border-[1px] border-b-black"
          placeholder="Title"
        />
        <input
          onChange={addItem}
          type="text"
          className="h-[42px] outline-none border-[1px] border-b-black"
          placeholder="Take a jote.."
        />
        <div className="bg-yellow-300 w-10 h-10 rounded-full absolute bottom-[-20px] right-3 text-2xl flex items-center justify-center cursor-pointer">
          <BiPlusMedical onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default Input;
