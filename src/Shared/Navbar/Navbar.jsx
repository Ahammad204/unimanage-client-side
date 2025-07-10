import { NavLink } from "react-router-dom";
import logo from "../../assets/navlogo.png";

const Navbar = () => {
  const navLink = (
    <>
      <li className="m-2 md:mr-5 text-lg hover:text-[#2baffc] hover:underline">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="m-2 md:mr-5 text-lg hover:text-[#2baffc] hover:underline">
        <a href="#about">About</a>
      </li>
      <li className="m-2 md:mr-5 text-lg hover:text-[#2baffc] hover:underline">
        <a href="#features">Features</a>
      </li>
      <li className="m-2 md:mr-5 text-lg hover:text-[#2baffc] hover:underline">
        <a href="#education">Education</a>
      </li>
    </>
  );

  return (
    <div className="navbar  bg-base-100 md:shadow-xl ">
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
