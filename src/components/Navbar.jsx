import React from "react";
import Logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <nav className="container mx-auto py-7">
      <div className="flex justify-between">
        {/* logo */}
        <div>
          <img src={Logo} alt="" />
        </div>
        {/* text */}
        <div>
          <ul className="flex space-x-7">
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Blog</li>
            <li className="nav-link">Case Studies</li>
            <li className="nav-link">Library</li>
          </ul>
        </div>
        {/* button */}
        <div>
          <button className="btn">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
