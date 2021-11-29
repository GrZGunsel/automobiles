import React from "react";

import Navbar from "./Navbar/Navbar";
import "./Homepage.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import Services from "./services/Services";
import Part from "./Parts/Part";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <section id="Homepage">
        <div className="container">
          <Navbar />
          <div className="homepageDetail">
            <h1>
              Get your Automobile <br />
              Serviced!
            </h1>
            <h5>Lorem ipsum Lorem ipsum Lorem ipsum </h5>
            <button className="primarybtn flex   align-center">
              <p>Lets Fix Your Vechile</p>
              <AiOutlineArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>
      <Services />
      <Part />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
