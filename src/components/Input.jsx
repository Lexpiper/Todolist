import React from "react";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";


const Input = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [write, setWrite] = useState(false);

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
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  return (
    <div className="flex w-full h-full bg-transparent pt-5 ">
      <div className=" w-[400px] mx-auto bg-white h-fit flex flex-col p-4 rounded-lg shadow-lg relative">
        {write && (
          <input
            onChange={addItem}
            name="title"
            value={note.title}
            type="text"
            className="h-[42px] mb-5 outline-none border-[1px] border-b-black"
            placeholder="Title"
          />
        )}

        <textarea
          onClick={() => {
            setWrite(true);
          }}
          onChange={addItem}
          type="text"
          name="content"
          value={note.content}
          className="h-42 flex outline-none resize-none "
          placeholder="Take a note.."
        ></textarea>
        {write && (
          <button
            onClick={submitNote}
            className="bg-yellow-300 w-7 h-7 rounded-full  hover:bg-slate-400 transition-all duration-200 ease-in-out absolute bottom-[-20px] right-3 text-sm flex items-center justify-center cursor-pointer"
          >
            <BiPlusMedical />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
