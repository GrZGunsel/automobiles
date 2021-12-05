import React from "react";
import Sidebar from "../Sidebar";
import "./dashboard.scss";
import AntDesign from "../../antdesign/AntDesign";
const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <Sidebar />
      <div className="maincontent">
        <div className="container">
          <AntDesign />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
