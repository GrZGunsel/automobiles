import React from "react";
import "./Part-grid.scss";
import { FiSearch } from "react-icons/fi";
import Parts from "../Homepage/Parts/Parts";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const PartGrid = () => {
  return (
    <>
      <section style={{ padding: "0px" }}>
        <div className="container">
          <Navbar />
        </div>
      </section>
      <section id="Part_grid">
        <div className="container">
          <div className="partHeader flex justify-between align-center">
            <div className="leftcontainer">
              <h1>Parts</h1>
              <h4>Lists of Parts</h4>
            </div>
            <div className="rightcontainer">
              <div className="SearchSection flex align-center">
                <FiSearch size={24} />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Parts......"
                />
              </div>
            </div>
          </div>
          <div className="partmainbody">
            <div className="part-grid">
              <Parts
                title="Car, Bike tryre "
                subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
              <Parts
                title="Car, Bike tryre "
                subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
              <Parts
                title="Car, Bike tryre "
                subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
              <Parts
                title="Car, Bike tryre "
                subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
              <Parts
                title="Car, Bike tryre "
                subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
              <Parts
                title="Car, Bike tryre "
                subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PartGrid;
