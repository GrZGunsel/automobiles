import React from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import Slider from "react-slick";

import "./CarDetail.scss";
import Parts from "../Homepage/Parts/Parts";
const CarDetail = () => {
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
      <section id="CarDetail">
        <div className="container">
          <div className="CardDetailImage">
            <img
              src="https://images.unsplash.com/photo-1610768583681-fc0ddc5c3986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt=""
            />
          </div>
          <div className="carMainbody">
            <h1>Product Description</h1>
            <div className="carDescription">
              <h1>Honda Creta</h1>
              <p>
                The facelifted Hyundai Creta was recently spotted testing again,
                this time around, revealing its front fascia. The overhauled
                fascia with the new grille and redesigned headlights and LED
                DRLs mimics the 2022 Tucson. The side and rear profile are
                likely to get updates, such as new alloy wheels, tail lamps, and
                a rear bumper. Hyundai is likely to unveil the facelifted Creta
                overseas by the end of 2021 and possibly launch it in India
                around 2022. It could command a premium over the current model
                priced from Rs 10 lakh (ex-showroom) onwards. It will renew its
                rivalry with the MG Astor, Kia Seltos, Skoda Kushaq, MG Hector,
                Tata Harrier, and VW Taigun. Hyundai Creta Specifications The
                Hyundai Creta comes equipped with three powertrains: a
                115PS/144Nm 1.5-litre NA petrol, 115PS/250Nm 1.5-litre diesel
                and a 140PS/242Nm 1.4-litre turbo-petrol unit. Transmission
                options include a 6-speed manual as standard, a CVT (for NA
                petrol), a 6-speed torque converter (for diesel unit) and a
                7-speed DCT (for the turbo-petrol motor). In terms of
                dimensions, the Creta is 4300mm long, 1635mm tall, 1790mm wide
                and has a 2610mm wheelbase Hyundai Creta Features The Hyundai
                Creta features an all-new exterior design. It is equipped with
                LED headlamps and taillamps, 17-inch dual-tone alloy wheels, and
                LED taillamps. The Creta’s interior is all-new as well, with
                climate control, a panoramic sunroof, ventilated front seats, a
                Bose sound system, cruise control, and a semi-digital instrument
                cluster. Its 10.25-inch touchscreen infotainment system features
                BlueLink connected car features with voice commands as well as
                Android Auto and Apple CarPlay. The SUV can be remotely
                monitored and some of its functions can be operated too. Hyundai
                Creta Competitors The Hyundai Creta rivals the MG Astor, Kia
                Seltos, MG Hector, Tata Harrier, Nissan Kicks, Mahindra XUV700,
                and the Skoda Kushaq. Read More
              </p>
            </div>
            <div className="parts">
              <h1> Parts for this car</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quam soluta provident! Modi expedita impedit, exercitationem
                natus quos illo veniam laboriosam sunt velit totam?
              </p>
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
      </section>
    </>
  );
};

export default CarDetail;
