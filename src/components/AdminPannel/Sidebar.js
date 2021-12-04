import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import {
  GiMechanicGarage,
  GiAncientScrew,
  GiSteeringWheel,
} from "react-icons/gi";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>logo</h1>
      </div>
      <div className="sidebarLinks">
        <div className="link active">
          <MdDashboard size={24} />

          <p>Dashboard</p>
        </div>
        <div className="link">
          <AiOutlineUser size={24} />

          <p>Users</p>
        </div>
        <div className="link">
          <AiFillCar size={24} />

          <p>Vehilce</p>
        </div>
        <div className="link">
          <GiMechanicGarage size={24} />

          <p>Service List</p>
        </div>
        <div className="link">
          <GiAncientScrew size={24} />
          <p>Mechanic</p>
        </div>
        <div className="link">
          <GiSteeringWheel size={24} />
          <p>Parts</p>
        </div>
        <div className="link">
          <RiFeedbackLine size={24} />

          <p>Feedback</p>
        </div>
        <div className="link logout">
          <FiLogOut size={24} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
