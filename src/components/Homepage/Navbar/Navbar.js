import React from "react";

import "./Navbar.scss";
function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="Nav_links">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Parts</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>
              <div className="Login">
                <h4>Login</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
