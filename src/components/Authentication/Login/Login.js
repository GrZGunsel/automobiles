import React from "react";
import "./Login.scss";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <>
      <section id="Login">
        <div className="container">
          <div className="login">
            <div className="loginpannel">
              <div className="loginheader">
                <h1>Welcome to Auto Mobile Service</h1>
                <h4>Login Pannel</h4>
              </div>
              <button className="btn loginbtn flex align-center justify-center">
                <FaGoogle />
                <p>Sign with Google</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
