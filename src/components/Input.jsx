import React from "react";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";

const Input = ({onAdd}) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

 
  const addItem = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote, 
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    onAdd(note);
    event.preventDefault();
  };
  return (
    <div className="flex w-full h-full bg-[#eee] pt-5 ">
      <div className=" w-[400px] mx-auto bg-white h-44 flex flex-col p-4 rounded-lg shadwo-sm relative">
        <input
          onChange={addItem}
          name="title"
          value={note.title}
          type="text"
          className="h-[42px] mb-5 outline-none border-[1px] border-b-black"
          placeholder="Title"
        />
        <input
          onChange={addItem}
          type="text"
          name="content"
          value={note.list}
          className="h-[42px] outline-none border-[1px] border-b-black"
          placeholder="Take a note.."
        />
        <button
          onClick={submitNote}
          className="bg-yellow-300 w-10 h-10 rounded-full absolute bottom-[-20px] right-3 text-2xl flex items-center justify-center cursor-pointer"
        >
          <BiPlusMedical />
        </button>
      </div>
    </div>
  );
};

export default Input;
