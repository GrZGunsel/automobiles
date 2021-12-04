import React from "react";
import "./Admin.scss";
const Adminlogin = () => {
  return (
    <section id="Admin">
      <div className="container">
        <div className="adminlogin">
          <div className="loginpannel">
            <div className="loginheader">
              <h1>Admin Login</h1>
            </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password " />
            <button>Log in</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adminlogin;
