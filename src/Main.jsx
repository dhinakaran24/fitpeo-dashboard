import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Customers from "./components/Customers";
import Dashboard from "./components/Dashboard";
import Income from "./components/Income";
import Promote from "./components/Promote";
import Help from "./components/Help";
import { FaAnglesRight } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
const Main = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-2">
          <div className="vertical-bar  w-30 float-left ">
            <h3 className=" logo text-dark mx-2  mb-3 pt-2 ">
              <span className=" text-light mx-1  ">
                <LuLayoutDashboard />
              </span>
              Dashboard
            </h3>
            <br></br>
            <div classname="container-fluid bcontent ">
              <nav classname="navbar pb-5 ">
                <ul classname="text-center  ">
                  <h6 classname="nav-item ">
                    <Link
                      to="/"
                      className="list-unstyled  text-light fst-italic hover-effect-css "
                    >
                      <span className="px-2">
                        <FaAnglesRight />
                      </span>
                      Dashboard
                    </Link>
                  </h6>
                  <br></br>
                  <br></br>
                  <h6 classname="nav-item ">
                    <Link
                      to="/product"
                      className="list-unstyled text-light fst-italic hover-effect-css "
                    >
                      <span className="px-2">
                        <FaAnglesRight />
                      </span>
                      Product
                    </Link>
                  </h6>
                  <br></br>
                  <br></br>
                  <h6 classname="nav-item ">
                    <Link
                      to="/customers"
                      className="list-unstyled text-light fst-italic hover-effect-css"
                    >
                      <span className="px-2">
                        <FaAnglesRight />
                      </span>
                      Customers
                    </Link>
                  </h6>
                  <br></br>
                  <br></br>
                  <h6 classname="nav-item ">
                    <Link
                      to="/income"
                      className="list-unstyled text-light fst-italic hover-effect-css"
                    >
                      <span className="px-2">
                        <FaAnglesRight />
                      </span>
                      Income
                    </Link>
                  </h6>
                  <br></br>
                  <br></br>
                  <h6 classname="nav-item ">
                    <Link
                      to="/promote"
                      className="list-unstyled text-light fst-italic hover-effect-css"
                    >
                      <span className="px-2">
                        <FaAnglesRight />
                      </span>
                      Promote
                    </Link>
                  </h6>
                  <br></br>
                  <br></br>
                  <h6 classname="nav-item ">
                    <Link
                      to="/help"
                      className="list-unstyled  text-light fst-italic hover-effect-css"
                    >
                      <span className="px-2">
                        <FaAnglesRight />
                      </span>
                      Help
                    </Link>
                  </h6>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Main;
