import React from "react";
import "./Feedback.scss";
const Feedback = () => {
  return (
    <section>
      <div className="container">
        <div className="feddback">
          <h1>Feedback Form</h1>
          <p>Please kindly fill up the form</p>
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
                <button className="btn">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
