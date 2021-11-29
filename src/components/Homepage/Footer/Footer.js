import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <section id="Footer">
      <div className="container">
        <div className="footer">
          <div className="footer-grid">
            <div className="about">
              <h4>About</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                eaque beatae amet deleniti adipisci temporibus, et eum
                repellendus quis voluptatum. Similique molestias ex a!Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Minima eaque
                beatae amet deleniti adipisci temporibus, et eum repellendus
                quis voluptatum. Similique molestias ex a!
              </p>
            </div>
            <div className="quicklinks">
              <h4>Quicklinks</h4>
              <div className="links flex ">
                <div className="link">
                  <h5>Home</h5>
                  <h5>Services</h5>
                  <h5>Parts</h5>
                  <h5>About</h5>
                </div>
                <div className="link">
                  <h5>Contactus</h5>
                  <h5>FAQ</h5>
                  <h5>Login</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
