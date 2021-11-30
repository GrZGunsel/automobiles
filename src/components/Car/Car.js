import React from "react";
import "./Car.scss";
const Car = ({ src, Title, Description }) => {
  return (
    <div className="car" style={{ backgroundImage: `url(${src}})` }}>
      <div className="car-filter">
        <h4>Perelli</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          possimus tempore optio.
        </p>
      </div>
    </div>
  );
};

export default Car;
