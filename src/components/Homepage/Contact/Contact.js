import React from "react";
import "./Contact.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Contact = () => {
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
                <p>loremispm</p>
              </div>
              <div className="Phonenumber flex align-center">
                <div className="icon flex align-center justify-center">
                  <HiOutlineLocationMarker size={18} />
                </div>
                <p>loremispm</p>
              </div>
              <div className="emailAddress flex align-center">
                <div className="icon flex align-center justify-center">
                  <HiOutlineLocationMarker size={18} />
                </div>
                <p>loremispm</p>
              </div>
              <div className="openingTime flex align-center">
                <div className="icon flex align-center justify-center">
                  <HiOutlineLocationMarker size={18} />
                </div>
                <p>loremispm</p>
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
                  <p>asd</p>
                  <html></html>
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
