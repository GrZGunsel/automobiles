import React from "react";
import "./Registration.scss";
const Registration = () => {
  return (
    <div className="Registration">
      <div className="leftcontainer">
        <div className="topform">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <h3>Registration</h3>
          <p>Please kindly fillup the form</p>
        </div>
        <div className="form">
          <form>
            <div className="FirstName">
              <label for="FirstName">First Name* </label>
              <input
                type="text"
                id="First Name"
                placeholder="Enter Your First Name "
              />
            </div>
            <div className="LastName">
              <label for="LastName">Last Name* </label>
              <input
                type="text"
                id="LastName"
                placeholder="Enter Your Last Name"
              />
            </div>
            <div className="Address">
              <label for="Address">Address* </label>
              <input
                type="text"
                id="Address"
                placeholder="Enter Your Address"
              />
            </div>
            <div className="PhoneNumber">
              <label for="PhoneNumber">Phone Number* </label>
              <input
                type="text"
                id="PhoneNumber"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="Email">
              <label for="Email">Email* </label>
              <input
                type="text"
                id="Email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="Password">
              <label for="Password">Password* </label>
              <input
                type="text"
                id="Password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="ConfirmPassword">
              <label for="ConfirmPassword">Confirm Password* </label>
              <input
                type="text"
                id="ConfirmPassword"
                placeholder="Enter Your Confirm Password"
              />
            </div>

            <div className="button">
              <button className="btn">Registration</button>
              <p>
                Already have an account <a href=""> Sign in</a>
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

export default Registration;
