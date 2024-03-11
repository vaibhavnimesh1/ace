import React from "react";
import Carousel from "../components/Carousel";

const Dashboard = () => {
  return (
    <div className="container banner-box position-relative ">
      <div className="row">
        <div className="col p-lg-3 p-2 ">
          <Carousel  className="banner"/>
          <img className=" position-absolute Whatsapp " src="https://ss.manage90.com/go-punt/assetsv15/acepunt/img/whatsapp-icon.svg" alt="Whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
