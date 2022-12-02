import React from "react";
import './TopBar.css'

const TopNavbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row py-2 px-xl-5"
          style={{ backgroundColor: "#EDF1FF" }}
        >
          <></>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-start justify-content-start">
              <a className="text-dark text-decoration-none" href="kd">
                FAQs
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark text-decoration-none" href="kd">
                Help
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark text-decoration-none" href="kd">
                Support
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="kd">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-dark px-2" href="kd">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-dark px-2" href="kd">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-dark px-2" href="kd">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-dark pl-2" href="kd">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              href="kd"
              className="text-decoration-none"
              style={{ color: "black" }}
            >
              <h1 className="m-0 font-weight-semi-bold">
                <span className="text-primary font-weight-bold px-2 border mr-1">
                  E
                </span>
                <span className="heading font-weight-bold">Shopper</span>
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a href="kd" className="btn border">
              <i className="fas fa-heart text-primary"></i>
              <span className="heading badge">0</span>
            </a>
            <a href="kd" className="btn border">
              <i className="fas fa-shopping-cart text-primary"></i>
              <span className="heading badge">0</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
