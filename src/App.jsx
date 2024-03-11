import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowRightFromBracket, faChartLine, faBook, faHandPointUp, faCreditCard } from "@fortawesome/free-solid-svg-icons";


import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

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
  return (
    
    <BrowserRouter>
      <div className=" position-relative   d-flex   flex-column justify-content-center  align-items-center  ">
        <Navbar />
          {/* Offcanvas structure */}
        <div
  className="offcanvas offcanvas-start p-3   position-fixed  "
  style={{  width: '300px' }}
  data-bs-scroll="true"
  data-bs-backdrop="false"
  tabIndex="-1"
  id="offcanvasScrolling"
  aria-labelledby="offcanvasScrollingLabel"
>
          <div className="offcanvas-header upper-offcanvas position-relative rounded-4  ">
            <FontAwesomeIcon
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="fa-sharp position-absolute offcanvas-icon    text-white"
              icon={faChevronLeft}
            />
            <FontAwesomeIcon
              className="fa-sharp position-absolute offcanvas-icon-logout   text-white"
              icon={faArrowRightFromBracket}
            />
            ;
            <div className="logo container d-flex justify-content-start text-white  align-content-lg-center flex-column ">
              <img src="../../images/main-logo.png" alt="Dummy Logo" />
              <h6>Demo</h6>
              {/* <div className="line"></div> */}
              <hr className="linee" />
              <h5>WALLET BALANCE</h5>
              <h3>1,500</h3>
            </div>
          </div>
          <div className=" p-0   list-box overflow-auto">
            <ul className="border-white p-0   ">
              <Link to="/">
                <ListItem
                  className="offcanvas-icon "
                  icon={faChartLine}
                  title="Dashboard"
                />
              </Link>
              <Link to="/transaction">
                <ListItem icon={faBook} title="All Transactions" />
              </Link>
              <Link to="/lead">
                <ListItem icon={faHandPointUp} title="Lead" />
              </Link>
              <ListItem icon={faCreditCard} title="Sitewise Report" />
            </ul>
            <ul className="border-white p-0 d-flex flex-column  ">
              <Link to="/">
                <ListItem
                  className="offcanvas-icon "
                  icon={faChartLine}
                  title="Dashboard"
                />
              </Link>
              <Link to="/transaction">
                <ListItem icon={faBook} title="All Transactions" />
              </Link>
              <Link to="/lead">
                <ListItem icon={faHandPointUp} title="Lead" />
              </Link>
              <ListItem icon={faCreditCard} title="Sitewise Report" />
              <button className=" d-flex mt-2 app-btn">Download App</button>
              <button className=" d-flex mt-2 logout-btn">Logout</button>
            </ul>
          </div>
        </div>
        {/* Offcanvas structure */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="lead" element={<Lead />} />
          <Route path="transaction" element={<Transaction />} /> */}
        
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer className="position-absolute "/>
        </div>
      
    </BrowserRouter>  
  );
};

export default App;
