import React, { useState } from "react";

import { MdLogout } from "react-icons/md";
import "./Navbar.scss";
function Navbar() {
  const [dropdown, setdropdown] = useState("none");
  const profiledropdown = () => {
    if (dropdown === "none") {
      setdropdown("block");
    } else {
      setdropdown("none");
    }
  };

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
              <div className="Login" onClick={profiledropdown}>
                <h4>Login</h4>
                <div className="dropdown" style={{ display: `${dropdown}` }}>
                  <div className="profile flex align-center">
                    <div className="image ">
                      <img
                        src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                    </div>
                    <div className="profiledescription">
                      <h4>Kshitiz Moktan Tamang</h4>
                      <p>kshitizlama51@gmail.com</p>
                    </div>
                  </div>
                  <div className="logout">
                    <button className="logoutbtn">
                      <MdLogout size={24} />
                      <p>Logout</p>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
