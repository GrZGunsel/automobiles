import "./App.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Dashboard from "./components/AdminPannel/Dashboard/Dashboard";
import Login from "./components/Authentication/Login/Login";
import Cars from "./components/Car/Cars";
import CarDetail from "./components/CarDetail/CarDetail";
import Homepage from "./components/Homepage/Homepage";
import PartDetail from "./components/PartDetail/PartDetail";
import PartGrid from "./components/Parts/PartGrid";

import ServiceForm from "./components/Service form/ServiceForm";
import Adminlogin from "./components/Adminlogin/Adminlogin";

function App() {
  return (
    <>
      <Adminlogin />
    </>
  );
}

export default App;
