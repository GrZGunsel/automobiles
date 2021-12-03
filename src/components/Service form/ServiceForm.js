import React from "react";
import "./ServiceForm.scss";
const ServiceForm = () => {
  return (
    <section id="Servicingform">
      <div className="container">
        <div className="Servicing">
          <h1>Servicing From</h1>
          <p>Please kindly fill up the form</p>
          <div className="form">
            <form
              action="
              "
            >
              <div className="vechiledescription">
                <h4>Vehilce Description</h4>
                <div className="formgroup">
                  <select name="" id="">
                    <option value=""> Category</option>
                    <option value=""> Car</option>
                    <option value=""> Bike</option>
                  </select>
                </div>
                <div className="formgroup">
                  <input type="text" placeholder="Vehicle Name" />
                </div>
                <div className="formgroup">
                  <input type="text" placeholder="Vehicle Brand" />
                </div>
                <div className="formgroup">
                  <input type="text" placeholder="Vehicle Brand" />
                </div>
              </div>
              <div className="row">
                <div className="parts">
                  <h4>parts to be added</h4>
                  <div className="fromgroup">
                    <select name="" id="">
                      <option value=""> Category</option>
                      <option value=""> Car</option>
                      <option value=""> Bike</option>
                    </select>
                  </div>
                  <div className="formgroup"></div>
                </div>
                <div className="parts">
                  <h4>Servicing Date </h4>
                  <div className="fromgroup">
                    <input type="date" placeholder="Servicing Date" />
                  </div>
                  <div className="fromgroup">
                    <input type="date" placeholder="Servicing Date" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="Parts to added">
                  <h4>Parts to be added</h4>
                  <div className="fromgroup">
                    <select name="" id="">
                      <option value=""> Category</option>
                      <option value=""> Car</option>
                      <option value=""> Bike</option>
                    </select>
                  </div>
                  <div className="formgroup"></div>
                </div>
                <div className="location">
                  <h4>Location</h4>
                  <div className="fromgroup">
                    <input type="text" placeholder="locationDirection" />
                  </div>
                  <div className="formgroup"></div>
                </div>
              </div>
              <div className="Message">
                <h4>Message to be added</h4>
                <div className="fromgroup">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="btn">
                <button className="successbtn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;
