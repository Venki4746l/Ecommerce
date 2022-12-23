import React from "react";
import CarsoulImages from "./CarsoulImages";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 cateegioressection  d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{
                height: "65px",
                backgroundColor: "#D19C97",
                marginTop: "-1px",
                padding: "0 10px",
                ariaExpanded: "true",
              }}
            >
              <h6 className="font-weight-bold m-4 text-dark">Categories</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="m-3"
                style={{ height: "20px", width: "20px" }}
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </a>
            <nav
              className="navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 collapse show"
              id="navbar-vertical"
              style={{}}
            >
              <div
                className="navbar-nav w-100 overflow-hidden navslide"
                style={{ height: "410px" }}
              >
                <div className="nav-item dropdown">
                  <a
                    href="..."
                    className="font-weight-bold nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    role="button"
                    id="navbarDropdown"
                  >
                    Dresses
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="m-3"
                      style={{ height: "10px", width: "40px" }}
                    >
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </a>
                  <div
                    className="dropdown-menu position-absolute bg-light border-0 rounded-0 w-100 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <a href="..." className="dropdown-item">
                      Men's Dresses
                    </a>
                    <a href="..." className="dropdown-item">
                      Women's Dresses
                    </a>
                    <a href="..." className="dropdown-item">
                      Baby's Dresses
                    </a>
                  </div>
                </div>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Shirts
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Jeans
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Swimwear
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Sleepwear
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Sportswear
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Jumpsuits
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Blazers
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Jackets
                </a>
                <a href="..." className="font-weight-bold nav-item nav-link">
                  Shoes
                </a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="..." className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  <span className="heading">Shopper</span>
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between d-lg-block"
                id="navbarCollapse"
                style={{ height: "65px" }}
              >
                <div className="navbar-nav mr-auto py-0">
                  <a
                    href="..."
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Home
                  </a>
                  <a
                    href="..."
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Shop
                  </a>
                  <a
                    href="..."
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Shop Detail
                  </a>
                  <div className="font-weight-bold nav-item dropdown">
                    <a
                      href="..."
                      className="nav-link dropdown-toggle items"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a href="..." className="dropdown-item items">
                        Shopping Cart
                      </a>
                      <a href="..." className="dropdown-item items">
                        Checkout
                      </a>
                    </div>
                  </div>
                  <a
                    href="contact.html"
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Contact
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <a href="/Login" className="font-weight-bold border-none nav-item nav-link items">
                    Login
                  </a>
                  <a
                    href="..."
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Register
                  </a>
                </div>
              </div>
            </nav>

            <CarsoulImages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
