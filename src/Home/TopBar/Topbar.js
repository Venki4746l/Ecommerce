import React from "react";
import "./Topbar.css";

const TopNavbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row py-2 px-xl-5"
          style={{ backgroundColor: "#EDF1FF" }}
        >
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
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <a class="text-dark px-2" href="kd">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-dark px-2" href="kd">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-dark px-2" href="kd">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-dark px-2" href="kd">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-dark pl-2" href="kd">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row align-items-center py-3 px-xl-5">
          <div class="col-lg-3 d-none d-lg-block">
            <a
              href="kd"
              class="text-decoration-none"
              style={{ color: "black" }}
            >
              <h1 class="m-0 font-weight-semi-bold">
                <span class="text-primary font-weight-bold px-2 border mr-1">
                  E
                </span>
                <span class="heading font-weight-bold">Shopper</span>
              </h1>
            </a>
          </div>
          <div class="col-lg-6 col-6 text-left">
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for products"
                />
                <div class="input-group-append">
                  <span class="input-group-text bg-transparent text-primary">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-3 col-6 text-right">
            <a href="kd" class="btn border">
              <i class="fas fa-heart text-primary"></i>
              <span class="heading badge">0</span>
            </a>
            <a href="kd" class="btn border">
              <i class="fas fa-shopping-cart text-primary"></i>
              <span class="heading badge">0</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
