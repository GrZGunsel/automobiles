import React from "react";

import "./Navbar.scss";
function Navbar() {
  return (
    <section>
      <div className="container">
        <div className="Navbar">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="Nav_links">
            <ul>
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="authentication">
            <div className="Login">
              <h4>Login</h4>
            </div>
            <div className="Login">
              <h4>Registration</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
