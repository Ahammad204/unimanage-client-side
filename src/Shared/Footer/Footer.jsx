import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <img src={logo} alt="UniManage Logo" className="h-24 mb-4" />
          <p className=" ">
            UniManage bridges the gap between students, faculty, and administration to make academic life smarter and easier.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
            <li><a href="#price" className="hover:text-blue-400 transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Join Waitlist</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <p className="mb-3">Email: support@unimanage.com</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-500"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UniManage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
