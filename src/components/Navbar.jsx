import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Pricing");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-2 justify-between items-center bg-primary px-4 md:pt-4 ">
      <div className="flex items-center"> 
        <img src={logo} alt="hoobank" className="w-[30px] h-[30px] mr-3" />
        <h1 className="text-white font-poppins font-semibold">Zoominfo</h1>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center  text-dimWhite">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex-"
          } p-6 bg-black z-[5] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                  active === nav.title ? "text-white" : "text-ora"
                } ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } hover:text-secondary`}
                onClick={() => setActive(nav.title)}
              >
                <a className="hover::text-secondary" href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" text-white hidden md:flex items-center font-semibold ">
        Login
        <button className="ml-4 bg-ora py-2 px-6 rounded-full font-semibold">Free trial</button>
      </div>
    </div>
  );
};

export default Navbar;
