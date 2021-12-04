import React from "react";
import Sidebar from "../Sidebar";
import "./dashboard.scss";
const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <Sidebar />
      <div className="maincontent">
        <div className="container">
          <h1>Dashboard</h1>
          <div className="counter">
            <div className="usercount"></div>
            <div className="vehiclecount"></div>
            <div className="servicelistcount"></div>
            <div className="mechaniccount"></div>
            <div className="partscounts"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
