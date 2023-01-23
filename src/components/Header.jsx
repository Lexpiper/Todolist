import React, { useState, useEffect } from "react";
import { BiAnchor } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const [theme, setTheme] = useState(null);
  const [change, setchange] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let userTheme = await localStorage.getItem("theme");
        if (!userTheme) {
          await localStorage.setItem("theme", "light");
          return document.documentElement.classList.remove("dark");
        }

        if (userTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else if (userTheme == "light") {
          document.documentElement.classList.remove("dark");
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [change]);

  const SwitchHandle = async () => {
    try {
      let userTheme = await localStorage.getItem("theme");
      if (userTheme === "dark") {
        await localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      } else {
        await localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
      setchange((prev) => !prev);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="bg-[#fbcf5f] h-20 p-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
      <h1 className="flex  items-center text-3xl text-black_gradient font-bold ">
        <BiAnchor /> Dev-Note
      </h1>

      <div
        onClick={() =>{
          setDark(!dark)
          SwitchHandle()
        } }
        className={`flex w-16 h-8 rounded-full ${
          dark ? "bg-black" : " bg-black"
        }`}
      >
        <span
          
          className={`${
            dark ? "ml-8" : null
          } h-8 w-8 bg-white rounded-full flex items-center justify-center  transition-all ease-in-out duration-300`}
        >
          {dark ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </span>
      </div>
    </div>
  );
};

export default Header;
