import React from "react";
import "./Service.scss";
const Service = ({ Title, subtitle, src }) => {
  return (
    <div className="Service">
      <div className="card">
        <div className="icon">
          <img src={src} alt="" />
        </div>
        <h4>{Title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Service;
