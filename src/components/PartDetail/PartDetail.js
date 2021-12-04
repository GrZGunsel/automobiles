import React from "react";
import Slider from "react-slick";
import Navbar from "../Homepage/Navbar/Navbar";
import Parts from "../Homepage/Parts/Parts";
import "./partDetail.scss";

const PartDetail = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section style={{ padding: "0px" }}>
        <div className="container">
          <Navbar />
        </div>
      </section>
      <section id="PartsDetail">
        <div className="container">
          <div className="parts">
            <h1>Brake</h1>
            <h4>Brembo Brake</h4>

            <div className="partDescription flex align-center">
              <div className="leftcontainer">
                <p>
                  Brembo was established in Paladina, Italy on January 11, 1961
                  by Emilio Bombassei and Italo Breda, father and uncle,
                  respectively, to the current Chairman Alberto Bombassei.[3][4]
                  Soon after the company was formed, it specialized in disc
                  brakes, which were imported from the UK at the time. The
                  company entered into a supply contract with Alfa Romeo in
                  1964. It became the supplier of brake components to Moto Guzzi
                  in 1966. In the 1980s, Brembo began supplying BMW, Chrysler,
                  Ferrari, Mercedes-Benz, Nissan, and Porsche with brakes. The
                  company went public on the Milan Stock Exchange in 1995. The
                  company was named after the Brembo river, as Bombassei lived
                  in a village on the coast of the river before moving to Milan.
                  Brembo's corporate headquarters are in Stezzano, and the
                  company has more than 10,634[5] employees within Italy and at
                  branches in Brazil, China, Japan, Mexico, the US, Poland,
                  Spain, Sweden, and the UK. In 2000, Brembo purchased the
                  UK-based racing brake and clutch manufacturer AP Racing (a
                  former division of Automotive Products).
                </p>
              </div>
              <div className="rightcontainer">
                <div className="image">
                  <img
                    src="
                      https://images.unsplash.com/photo-1635519944195-85ce82d71f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="similarParts">
              <h5>Similar Parts</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus delectus facilis at!
              </p>
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <Parts
                      title="Car, Bike tryre "
                      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    />
                  </div>
                  <div>
                    <Parts
                      title="Car, Bike tryre "
                      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      src="https://images.unsplash.com/photo-1588007438126-be22e38c1841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    />
                  </div>
                  <div>
                    <Parts
                      title="Car, Bike tryre "
                      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      src="https://images.unsplash.com/photo-1518308229454-f6b8237bced1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </div>
                  <div>
                    <Parts
                      title="Car, Bike tryre "
                      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    />
                  </div>
                  <div>
                    <Parts
                      title="Car, Bike tryre "
                      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      src="https://images.unsplash.com/photo-1588007438126-be22e38c1841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    />
                  </div>
                  <div>
                    <Parts
                      title="Car, Bike tryre "
                      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      src="https://images.unsplash.com/photo-1518308229454-f6b8237bced1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartDetail;
