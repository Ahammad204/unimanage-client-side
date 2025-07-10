import { NavLink } from "react-router-dom";
import logo from "../../assets/navlogo.png";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("home");
      const handleClick = (name) => {
    setActive(name);
  };

  const navLink = (
    <>
      <li className="m-2 md:mr-5 text-lg">
        <a
          href="#home"
          onClick={() => handleClick("home")}
          className={
            active === "home"
              ? "text-[#2baffc] underline"
              : "hover:text-[#2baffc] hover:underline"
          }
          end
        >
          Home
        </a>
      </li>
      <li className="m-2 md:mr-5 text-lg">
        <a
          href="#about"
          onClick={() => handleClick("about")}
          className={
            active === "about"
              ? "text-[#2baffc] underline"
              : "hover:text-[#2baffc] hover:underline"
          }
        >
          About
        </a>
      </li>
      <li className="m-2 md:mr-5 text-lg">
        <a
          href="#features"
          onClick={() => handleClick("features")}
          className={
            active === "features"
              ? "text-[#2baffc] underline"
              : "hover:text-[#2baffc] hover:underline"
          }
        >
          Features
        </a>
      </li>
      <li className="m-2 md:mr-5 text-lg">
        <a
          href="#education"
          onClick={() => handleClick("education")}
          className={
            active === "education"
              ? "text-[#2baffc] underline"
              : "hover:text-[#2baffc] hover:underline"
          }
        >
          Education
        </a>
      </li>
    </>
  );


  return (
    <div className="navbar fixed z-10 max-w-screen-xl  bg-base-100 md:shadow-xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white 
            rounded-box w-52"
          >
            {navLink}
            <li>
              <a
                href="#contact"
                className="btn bg-gradient-to-r from-blue-500 to-teal-400 text-white mt-2"
              >
                Join Waitlist
              </a>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">Uni Manage</a> */}
        <a className=" normal-case text-xl">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <a
          href="#contact"
          className="btn bg-gradient-to-r from-blue-600 to-teal-500 text-white
           border-0 shadow-md hover:scale-105 transition"
        >
          Join Waitlist
        </a>
      </div>
    </div>
  );
};

export default Navbar;
