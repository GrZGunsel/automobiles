import React from "react";
import "./Contact.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
const Contact = () => {
  const sucess = {
    background: "green",
    padding: "15px",
    fontSize: "14px",
    width: "100%",
    color: "white",
    fontWeight: "600",
    borderRadius: "250px",
  };
  return (
    <section>
      <div className="container">
        <div className="about flex ">
          <div className="leftcontainer">
            <h4>Contact</h4>
            <h2>Get in touch with us</h2>
            <div className="contactdetails">
              <div className="location flex align-center">
                <div className="icon flex align-center justify-center">
                  <HiOutlineLocationMarker size={18} />
                </div>
                <div className="detail">
                  <h4>Location</h4>
                  <p>Kathmandu,Nepal</p>
                </div>
              </div>
              <div className="Phonenumber flex align-center">
                <div className="icon flex align-center justify-center">
                  <BiTime size={18} />
                </div>
                <div className="detail">
                  <h4>Opening Time</h4>
                  <p>9:30-10:00</p>
                </div>
              </div>
              <div className="emailAddress flex align-center">
                <div className="icon flex align-center justify-center">
                  <AiOutlineMail size={18} />
                </div>
                <div className="detail">
                  <h4>Mail</h4>
                  <p>Career@gmail.com</p>
                </div>
              </div>
              <div className="openingTime flex align-center">
                <div className="icon flex align-center justify-center">
                  <FiPhone size={18} />
                </div>
                <div className="detail">
                  <h4>Phone</h4>
                  <p>9808213333</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightcontainer">
            <div className="form">
              <form action="">
                <div className="firstname">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="lastname">
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="email">
                  <input type="text" placeholder="Email Address" />
                </div>
                <div className="number">
                  <input type="text" placeholder="Number" />
                </div>
                <div className="message">
                  <textarea
                    name=""
                    id=""
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="sad">
                  <button className="btn" style={sucess}>
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
