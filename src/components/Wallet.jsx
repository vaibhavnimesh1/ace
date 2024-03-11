import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

const Wallet = () => {
  return (
    <>
      <div className="wallet d-flex">
        <div className="left d-flex flex-column m-0 ">
          <h5>Deposit</h5>
          <FontAwesomeIcon className="icon" icon={faAngleUp} />
          <FontAwesomeIcon className="icon" icon={faAngleUp} />
        </div>

        <div className="middle d-flex flex-column overflow-hidden ">
          <div className="main-logo ">
            <img src="../../images/main-logo.png" alt="Dummy Logo" />
          </div>
          <div className="">
            <h4 className="">WALLET BALANCE</h4>
            

            <h3 className=" d-flex  justify-content-center  align-items-center gap-md-4   gap-lg-4 " >
              {" "}
              <span className="">
                <FontAwesomeIcon className="icon" icon={faCoins} />
              </span>
              1,500
            </h3>
          </div>
        </div>

        <div className="right d-flex flex-column m-0">
          <h5 className="text-capitalize ">Withdrawal</h5>
          <FontAwesomeIcon className="icon" icon={faAngleDown} />
          <FontAwesomeIcon className="icon" icon={faAngleDown} />
        </div>

        {/* <div className="middle-wall d-flex flex-column position-absolute">
          <div className="main-logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVarShvJiuaGH2TgUbONeE8t7VCCKt6nieUb2fPoD9-A&s"
              alt="Dummy Logo"
            />
          </div>
          <h4 className="position-absolute bottom-50">WALLET BALANCE</h4>
        </div> */}
      </div>
    </>
  );
};

export default Wallet;
