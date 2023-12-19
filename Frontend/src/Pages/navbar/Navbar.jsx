import React from "react";
import "./navbar.css";
import { SlMagnifier } from "react-icons/sl";
import { IoLanguage } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <div className="searchicon">
          <SlMagnifier className="icon" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="items">
          <div className="item">
            <IoLanguage className="icon" />
          </div>
          <div className="item">
            <IoSunnySharp className="icon" />
          </div>
          <div className="item">
            <TbLayoutGridAdd className="icon" />
          </div>
          <div className="item">
            <FaRegBell className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
