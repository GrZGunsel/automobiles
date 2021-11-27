import React from "react";
import "./Part.scss";
const Parts = ({ src, title, subtitle }) => {
  return (
    <div className="parts">
      <div className="card" style={{ backgroundImage: `url(${src}})` }}>
        <div className="background-filter">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Parts;
