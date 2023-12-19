import React, { useState } from "react";
import "./sidebar.css";
import { RiHomeSmile2Line } from "react-icons/ri";
import { LuFiles } from "react-icons/lu";
import { TbShoppingCartPlus } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineTruck } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { TbFileInvoice } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>

      <div className="center">
        <ul>
          <li
            className={selectedItem === 0 ? "clicked" : ""}
            onClick={() => handleClick(0)}
          >
            <RiHomeSmile2Line className="icon" />
            <span>Dashboards</span>
          </li>
          <li
            className={selectedItem === 1 ? "clicked" : ""}
            onClick={() => handleClick(1)}
          >
            <LuFiles className="icon" />
            <span>Front Pages</span>
          </li>
          <p className="title">Apps & Pages</p>
          <li className={selectedItem === 2 ? "clicked" : ""} onClick={() => handleClick(2)}>
            <TbShoppingCartPlus className="icon" />
            <span>Ecommerce</span>
          </li>
          <li className={selectedItem === 3 ? "clicked" : ""} onClick={() => handleClick(3)}>
            <FiBookOpen className="icon" />
            <span>Academy</span>
          </li>
          <li className={selectedItem === 4 ? "clicked" : ""} onClick={() => handleClick(4)}>
            <HiOutlineTruck className="icon" />
            <span>Logistics</span>
          </li>
          <li className={selectedItem === 5 ? "clicked" : ""} onClick={() => handleClick(5)}>
            <CiMail className="icon" />
            <span>Email</span>
          </li>
          <li className={selectedItem === 6 ? "clicked" : ""} onClick={() => handleClick(6)}>
            <BiMessageRounded className="icon" />
            <span>Chat</span>
          </li>
          <li className={selectedItem === 7 ? "clicked" : ""} onClick={() => handleClick(7)}>
            <CiCalendarDate className="icon" />
            <span>Calendar</span>
          </li>
          <li className={selectedItem === 8 ? "clicked" : ""} onClick={() => handleClick(8)}>
            <TbFileInvoice className="icon" />
            <span>Invoice</span>
          </li>
          <li className={selectedItem === 9 ? "clicked" : ""} onClick={() => handleClick(9)}>
            <FiUsers className="icon" />
            <span>User</span>
          </li>
          <li
            className={selectedItem === 10 ? "clicked" : ""}
            onClick={() => handleClick(10)}
          >
            <IoSettingsOutline className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;