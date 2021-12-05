import React from "react";
import "./Billing.scss";
const Billing = () => {
  return (
    <section>
      <div className="container">
        <div className="billing">
          <h1>Billing</h1>
          <div className="billingheader">
            <div className="name ">
              <h1>Name</h1>
              <p>Kshitiz Moktan</p>
            </div>
            <div className="email">
              <h1>Email</h1>
              <p>Kshitizmoktan98@gmail.com</p>
            </div>
            <div className="phonenumber">
              <h1>Phone</h1>
              <p>9808202421</p>
            </div>
          </div>
          <div className="billinggrid">
            <div className="leftcontainer">
              <h1>Things has been done</h1>
              <div className="billingbody">
                <div className="servicing">
                  <h1>Servicing</h1>
                  <p>
                    Rs <span>10000</span>
                  </p>
                </div>
                <div className="mobile">
                  <h1>Mobile</h1>
                  <p>
                    Rs <span>10000</span>
                  </p>
                </div>
                <div className="parts">
                  <h1>Brake</h1>
                  <p>
                    Rs <span>10000</span>
                  </p>
                </div>
                <div className="total">
                  <h1>Total</h1>
                  <p>Rs 30000</p>
                </div>
              </div>
            </div>

            <div className="payment">
              <button>Check out</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
