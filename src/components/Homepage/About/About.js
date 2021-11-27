import React from "react";
import "./About.scss";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="About flex align-center">
          <div className="leftcontainer">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </div>
          <div className="rightcontainer">
            <h2>Who are We?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="primarybtn">learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
