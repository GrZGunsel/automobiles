import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="about">
          <div className="leftcontainer">
            <h4>Contact</h4>
            <p>Get in touch with us</p>
            <div className="contactdetails">
              <div className="location">
                <div className="icon"></div>
                <p>loremispm</p>
              </div>
              <div className="Phonenumber">
                <div className="icon"></div>
                <p>loremispm</p>
              </div>
              <div className="emailAddress">
                <div className="icon"></div>
                <p>loremispm</p>
              </div>
              <div className="openingTime">
                <div className="icon"></div>
                <p>loremispm</p>
              </div>
            </div>
          </div>
          <div className="rightcontainer">
            <div className="form">
              <form action="">
                <div className="firstname">
                  <input type="text" />
                </div>
                <div className="lastname">
                  <input type="text" />
                </div>
                <div className="email">
                  <input type="text" />
                </div>
                <div className="number">
                  <input type="text" />
                </div>
                <div className="message">
                  <input type="text" />
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
