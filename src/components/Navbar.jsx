import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faArrowLeft,
  faChartLine,
  faBook,
  faHandPointUp,
  faCreditCard,
  faImage,
  faUsersViewfinder,
  // faWordpress,
  faAngleRight,
  faHouse,
  faChevronLeft,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "../App.css";
import { Link } from "react-router-dom";
import Wallet from "./Wallet";

const ListItem = ({ icon, title, right }) => (
  <li className="  d-flex justify-content-between align-items-center common-li mt-lg-3  mt-md-3  mt-sm-3 text-white ">
    <div className="card-body d-flex">
      <FontAwesomeIcon
        icon={icon}
        className=" me-4 text-center card-body-icon"
      />
      <p className="card-title py-1 fs-6  m-0  ">{title}</p>
    </div>
    <span className="rounded-pill">
      <FontAwesomeIcon className="  fw-bolder  fs-3 " icon={right} />
    </span>
  </li>
);

const Navbar = () => {
  return (
    <div className="bg-black container-fluid position-relative p-0  ">
      <div className="container- p-0 position-relative ">
        {/* MODAL */}

        <div
          className="modal fade position-absolute "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content p-2">
              <div className="modal-header border-0 d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0 p-0 d-flex flex-column   ">
                <div className="imagess ">
                  <img src="../../images/main-logo.png" alt="" />
                </div>
                <h5 className="text-light ">Welcome to club!</h5>
              </div>
              {/* <div className="form-floating mb-3">
  <input type="number" className="form-control" id="floatingInput" placeholder="90*******7" />
  <label htmlFor="floatingInput">Email address</label>
</div> */}
              <div className=" mob d-flex flex-column  position-relative ">
                <p className="text-light  d-flex float-start mb-2 fs-6  text-center align-content-center  ">
                  Enter the number *
                </p>
                <span>
                  {" "}
                  <img
                    src="../../images/indian-flag.png"
                    alt=""
                    className=" position-absolute "
                  />
                </span>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter the Phone number"
                  className="app-btn mb-3  outline-0 modal-input"
                />
              </div>

              <button
                type="button"
                className=" mb-3 logout-btn"
                // data-bs-dismiss="modal "
              >
                Get Otp
              </button>
              <button type="button" className="mb-3 app-btn">
                Login with DEMO ID
              </button>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {/* Navbar */}
        <nav className="navbar container navbar-expand-lg fixed-top position-relative">
          <div className="container-fluid text-primary top-bar  ">
            <a className="navbar-brand  m-0  text py-2  " href="#">
              <FontAwesomeIcon
                icon={faBars}
                className=" navbar-brand-a  text-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              />
            </a>
            <div className="  head-btn gap-lg-3 gap-md-2 gap-sm-1 ">
              <button
                className="login"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Login | Signup
              </button>
              <button className="demo">Demo ID</button>

              <a className="navbar-brand fs-2 text m-0  d-flex  " href="#">
                <FontAwesomeIcon icon={faHouse} className=" navbar-brand-a house " />
              </a>
            </div>
          </div>

          <Wallet />
        </nav>

        {/* Navbar */}

      

        {/* Card-section */}

        {/* Card-section */}
      </div>

      {/* Offcanvas Script */}
    </div>
  );
};

export default Navbar;
