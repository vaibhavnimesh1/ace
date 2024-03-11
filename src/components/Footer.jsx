import React from "react";

import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faHouse,
  faHouseChimney,
  faHouseCrack,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className=" container position-fixed  footer  ">
      <div className="row d-flex align-items-center justify-content-center ">
        <div className="col p-0  text-white d-flex  align-items-center  justify-content-around  ">
          <div className="footer-item ">
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faSearch} /> <p>Home</p>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faHouseChimney} />
            <p>Home</p>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faHouseCrack} />
            <p>Home</p>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faGamepad} />
            <p>Home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
