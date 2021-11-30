import React from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import "./Car.scss";

import { FiSearch } from "react-icons/fi";
import Car from "./Car";
const Cars = () => {
  return (
    <>
      <section style={{ padding: "0px" }}>
        <div className="container">
          <Navbar />
        </div>
      </section>
      <section id="Cars">
        <div className="container">
          <div className="carHeader flex justify-between align-center">
            <div className="leftcontainer">
              <h1>Cars</h1>
              <h4>Lists of Cars</h4>
            </div>
            <div className="rightcontainer">
              <div className="SearchSection flex align-center">
                <FiSearch size={24} />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Cars......"
                />
              </div>
            </div>
          </div>
          <div className="carMainbody">
            <div className="car-grid">
              <Car
                src="https://images.unsplash.com/photo-1542046272227-d247df21628a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=800"
                Title="Sad"
                Description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores et accusantium impedit ipsa ipsum, placeat praesentium
                doloribus non eaque in dolore ullam, asperiores nihil inventore!"
              />
              <Car
                src="https://images.unsplash.com/photo-1542046272227-d247df21628a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=800"
                Title="Sad"
                Description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores et accusantium impedit ipsa ipsum, placeat praesentium
                doloribus non eaque in dolore ullam, asperiores nihil inventore!"
              />
              <Car
                src="https://images.unsplash.com/photo-1610768583681-fc0ddc5c3986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                Title="Sad"
                Description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores et accusantium impedit ipsa ipsum, placeat praesentium
                doloribus non eaque in dolore ullam, asperiores nihil inventore!"
              />
              <Car
                src="https://images.unsplash.com/photo-1542046272227-d247df21628a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=800"
                Title="Sad"
                Description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores et accusantium impedit ipsa ipsum, placeat praesentium
                doloribus non eaque in dolore ullam, asperiores nihil inventore!"
              />
              <Car
                src="https://images.unsplash.com/photo-1542046272227-d247df21628a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=800"
                Title="Sad"
                Description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores et accusantium impedit ipsa ipsum, placeat praesentium
                doloribus non eaque in dolore ullam, asperiores nihil inventore!"
              />
              <Car
                src="https://images.unsplash.com/photo-1542046272227-d247df21628a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=800"
                Title="Sad"
                Description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores et accusantium impedit ipsa ipsum, placeat praesentium
                doloribus non eaque in dolore ullam, asperiores nihil inventore!"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
