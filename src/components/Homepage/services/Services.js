import React from "react";
import Service from "./Service";
import { AiOutlineArrowRight } from "react-icons/ai";
import Payment from "../../../image/Payment.png";
import Part from "../../../image/Parts.png";
import pick from "../../../image/pick.png";
import Serviceicon from "../../../image/Service.png";
const Services = () => {
  return (
    <section id="Services">
      <div className="container">
        <div className="Services flex align-center">
          <div className="leftcontainer">
            <div className="Service-Grid    ">
              <Service
                Title="Autoparts"
                src={Part}
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Service
                Title="Pick and Deliver"
                src={pick}
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Service
                Title="Servicing"
                src={Serviceicon}
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Service
                Title="Payment"
                src={Payment}
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
          <div className="rightcontainer">
            <h2>Our Excellent Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="primarybtn flex   align-center">
              <p>Lets Fix Your Vechile</p>
              <AiOutlineArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
