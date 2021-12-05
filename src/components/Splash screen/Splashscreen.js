import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import "./splashscreen.scss";

const Splashscreen = () => {
  return (
    <section>
      <div className="container">
        <div
          className="splashscreen flex align-center justify-center"
          style={{ gap: "40px" }}
        >
          <div className="leftcontainer">
            <div className="image">
              <BsCashCoin />
            </div>
            <h1>Cash in hand</h1>
          </div>
          <div className="rightcontainer">
            <div className="image">
              <MdPayment />
            </div>
            <h1>Online Payment</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splashscreen;
