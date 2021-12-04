import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Part.scss";
import Slider from "react-slick";
import Parts from "./Parts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Part = () => {
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
    <section id="parts">
      <div className="container">
        <div className="Part flex flex-column align-center">
          <h2>All the part you will ever need!</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <div className="searchsection">
            <FiSearch size={24} />
            <input type="text" name="" id="" placeholder="Type Something " />
            <button className="primarybtn">search</button>
          </div>

          <div className="slider">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              style={{ marginBottom: "2rem" }}
            >
              <>
                <SwiperSlide>
                  {" "}
                  <Parts
                    title="Car, Bike tryre "
                    subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Parts
                    title="Car, Bike tryre "
                    subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Parts
                    title="Car, Bike tryre "
                    subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Parts
                    title="Car, Bike tryre "
                    subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    src="https://images.unsplash.com/photo-1588007438126-be22e38c1841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                </SwiperSlide>
              </>
            </Swiper>
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
  );
};

export default Part;
