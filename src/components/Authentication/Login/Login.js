import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="leftcontainer">
        <div className="topform">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <h3>Login</h3>
          <p>Please kindly fillup the form using login credential</p>
        </div>
        <div className="form">
          <form>
            <div className="Email">
              <label for="Email">Email* </label>
              <input
                type="text"
                id="Email"
                placeholder="Enter your Email Address"
              />
            </div>
            <div className="Password">
              <label for="Password">Password* </label>
              <input
                type="text"
                id="Password"
                placeholder="Enter your Password"
              />
            </div>

            <div className="bottomform">
              <div className="RemeberMe">
                <input type="checkbox" id="Remeberme" />
                <label for="Remeberme"> Remember Me</label>
              </div>
              <div className="forget">
                <a href="">
                  <p>Forget Password?</p>
                </a>
              </div>
            </div>
            <div className="button">
              <button className="btn">Login</button>
              <p>
                Not Registered Yet? <a href=""> Create an Account</a>
              </p>
            </div>
          </form>
        </div>
        <div className="bottomfooter">
          <p>&copy; 2015 SrishtiNoob.com</p>
        </div>
      </div>
      <div className="rightcontainer">
        <div className="blackfilter">
          <h3>Services</h3>
          <div className="lists">
            <div className="list">
              <h4>Loremipsum</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda aut quisquam!
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Loremipsum</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda aut quisquam!
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Loremipsum</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda aut quisquam!
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Loremipsum</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda aut quisquam!
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Loremipsum</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda aut quisquam!
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Loremipsum</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda aut quisquam!
                </li>
              </ul>
            </div>{" "}
            <div className="list">
              <h4>Loremipsum</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                  assumenda aut quisquam!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
