import React from "react";
import "../App.css";
import earning from "../images/earning.jpg";
import orders from "../images/orders.png";
import balance from "../images/balance.jpg";
import sales from "../images/sales.png";
import pie from "../images/pie.png";
import abstract from "../images/abstract.jpg";
import illustration from "../images/illustration.png";

function Dashboard() {
  return (
    <div className="">
      <div className="bg-dashboard">
        <nav className="navbar  bg-light">
          <h5 className="">Hello Fitpeo 👋</h5>
          <div className="justify-content-end mr-5">
            <form className="form-inline  ">
              <input
                className="form-control ml-0  rounded"
                type="search"
                placeholder="🔍 Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>
      <br></br>
      {/* //cards */}
      <div>
        <div className="row">
          <div className="col">
            <div className="card " style={{ width: "14rem" }}>
              <div className="row">
                <img
                  className="card-img-top w-50 col"
                  src={earning}
                  alt="Card image cap"
                />
                <p className="card-text  col">
                  Earnings<br></br>
                  <b>$198k</b>
                  <br></br>
                  <h6>
                    <span className="text-success">↑ 37.8%</span> this month
                  </h6>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card " style={{ width: "14rem" }}>
              <div className="row">
                <img
                  className="card-img-top w-25 col"
                  src={orders}
                  alt="Card image cap"
                />
                <p className="card-text  col">
                  Orders<br></br>
                  <b>$2.4k</b>
                  <br></br>
                  <h6>
                    <span className="text-danger">↓ 2%</span> this month
                  </h6>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card " style={{ width: "14rem" }}>
              <div className="row">
                <img
                  className="card-img-top w-50 col"
                  src={balance}
                  alt="Card image cap"
                />
                <p className="card-text  col">
                  Balance<br></br>
                  <b>$2.4k</b>
                  <br></br>
                  <h6>
                    <span className="text-danger">↓ 2%</span> this month
                  </h6>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  " style={{ width: "14rem" }}>
              <div className="row">
                <img
                  className="card-img-top w-25 col"
                  src={sales}
                  alt="Card image cap"
                />
                <p className="card-text  col">
                  Total sales<br></br>
                  <b>$89k</b>
                  <br></br>
                  <h6>
                    <span className="text-success">↑ 11%</span> this month
                  </h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-8 ">
          <section className="bar-graph bar-graph-vertical bar-graph-two">
            <div className="bar-one bar-container">
              <div className="bar" data-percentage="40%" />
              <span className="year">Jan</span>
            </div>
            <div className="bar-two bar-container">
              <div className="bar" data-percentage="55%" />
              <span className="year">Feb</span>
            </div>
            <div className="bar-three bar-container">
              <div className="bar" data-percentage="68%" />
              <span className="year">Mar</span>
            </div>
            <div className="bar-one bar-container">
              <div className="bar" data-percentage="40%" />
              <span className="year">Apr</span>
            </div>
            <div className="bar-four bar-container">
              <div className="bar" data-percentage="82%" />
              <span className="year">May</span>
            </div>
            <div className="bar-one bar-container">
              <div className="bar" data-percentage="40%" />
              <span className="year">Jun</span>
            </div>
            <div className="bar-three bar-container">
              <div className="bar" data-percentage="68%" />
              <span className="year">Jul</span>
            </div>
            <div className="bar-four bar-container">
              <div className="bar" data-percentage="82%" />
              <span className="year">Aug</span>
            </div>
            <div className="bar-one bar-container">
              <div className="bar" data-percentage="40%" />
              <span className="year">Sep</span>
            </div>
            <div className="bar-two bar-container">
              <div className="bar" data-percentage="55%" />
              <span className="year">Oct</span>
            </div>
            <div className="bar-one bar-container">
              <div className="bar" data-percentage="40%" />
              <span className="year">Nov</span>
            </div>
            <div className="bar-four bar-container">
              <div className="bar" data-percentage="82%" />
              <span className="year">Dec</span>
            </div>
          </section>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <div
            className="card card-pie"
            style={{ width: "18rem", height: "19rem" }}
          >
            <div className="card-body">
              <b className="card-text">Customer</b>
            </div>
            <img className="card-img-top" src={pie} alt="Card image cap" />
          </div>
        </div>
      </div>
      <br></br>
      {/* products */}
      <div>
        <div className="list-group col-lg">
          <div>
            <div className="navbar navbar-light bg-light justify-content-between">
              <a className="navbar-brand text-dark">
                <b>Product shell </b>
              </a>
              <form className="form-inline  ">
                <input
                  className="form-control mr-sm-2  "
                  type="search"
                  placeholder="🔍 Search"
                  aria-label="Search"
                />
              </form>

              <div class="dropdown">
                <button
                  className="btn btn-light dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Last 30 days
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-start ">
            <a className="navbar-brand col-8" href="#">
              Product Name
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse col-4 navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ">
                <a className="nav-item nav-link px-3  " href="#">
                  Stock
                </a>
                <a className="nav-item nav-link px-3 " href="#">
                  Price
                </a>
                <a className="nav-item nav-link px-3 " href="#">
                  Total sales
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="list-group-item list-group-item-action  ">
            <img className=" product-shell   " src={abstract} />
            <span className="px-3">Abstract 3D</span>

            <span className="d-flex justify-content-end    ">
              <span className="px-3"> 32 in stock</span>
              <span className="px-3"> $45.99</span>
              <span className="px-3"> 20</span>
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <img className=" product-shell" src={illustration} />
            <span className="px-3">Sarphens illustration</span>
            <span className="d-flex justify-content-end    ">
              <span className="px-3"> 32 in stock</span>
              <span className="px-3"> $45.99</span>
              <span className="px-3"> 20</span>
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <img className=" product-shell" src={abstract} />
            <span className="px-3"> Morbi leo risus</span>
            <span className="d-flex justify-content-end    ">
              <span className="px-3"> 32 in stock</span>
              <span className="px-3"> $45.99</span>
              <span className="px-3"> 20</span>
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <img className=" product-shell" src={abstract} />
            <span className="px-3"> error quod, asperiores corrupti </span>
            <span className="d-flex justify-content-end    ">
              <span className="px-3"> 32 in stock</span>
              <span className="px-3"> $45.99</span>
              <span className="px-3"> 20</span>
            </span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action disabled"
          >
            <img className=" product-shell" src={abstract} />
            <span className="px-3"> asperiores corrupting </span>
            <span className="d-flex justify-content-end    ">
              <span className="px-3"> 32 in stock</span>
              <span className="px-3"> $45.99</span>
              <span className="px-3"> 20</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
