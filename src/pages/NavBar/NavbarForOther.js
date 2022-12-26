import React, { useState } from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import './Navbarforother.css'

const NavbarForOther = () => {
  const [loginModal, setLoginmodal] = useState(false);
  const [isLogined, setIslogined] = useState(false);
  const [userName, setUserName] = useState("");
  //this for open login modal
  const loginHandlermodal = (value) => {
    setLoginmodal(value);
  };

  //aftre login logout button
  const logoutButtonShow = (value) => {
    setIslogined(value);
  };

  //user Details hanlder
  const userDetailshandler = (details) => {
    const nameuser = details[0].name.firstname + details[0].name.lastname;
    setUserName(nameuser);
  };

  return (
    <div className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 toggledropdown"
            data-toggle="collapse"
            href="#navbar-vertical"
           
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light navoverplay"
            id="navbar-vertical"
           
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{height: "410px"}}
            >
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link" data-toggle="dropdown">
                  Dresses <i className="fa fa-angle-down float-right mt-1"></i>
                </Link>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  <Link to="/" className="dropdown-item">
                    Men's Dresses
                  </Link>
                  <Link to="/" className="dropdown-item">
                    Women's Dresses
                  </Link>
                  <Link to="/" className="dropdown-item">
                    Baby's Dresses
                  </Link>
                </div>
              </div>
              <Link to="/" className="nav-item nav-link">
                Shirts
              </Link>
              <Link to="/" className="nav-item nav-link">
                Jeans
              </Link>
              <Link to="/" className="nav-item nav-link">
                Swimwear
              </Link>
              <Link to="/" className="nav-item nav-link">
                Sleepwear
              </Link>
              <Link to="/" className="nav-item nav-link">
                Sportswear
              </Link>
              <Link to="/" className="nav-item nav-link">
                Jumpsuits
              </Link>
              <Link to="/" className="nav-item nav-link">
                Blazers
              </Link>
              <Link to="/" className="nav-item nav-link">
                Jackets
              </Link>
              <Link to="/" className="nav-item nav-link">
                Shoes
              </Link>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <Link to="/" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                <span className="heading">Shopper</span>
              </h1>
            </Link>
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
                <Link
                  to="/"
                  className="font-weight-bold nav-item nav-link items"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="font-weight-bold nav-item nav-link items"
                >
                  Shop
                </Link>
                <Link
                  href="/"
                  className="font-weight-bold nav-item nav-link items"
                >
                  Shop Detail
                </Link>
                <div className="font-weight-bold nav-item dropdown">
                  <Link
                    href="/pages"
                    className="nav-link dropdown-toggle items"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>

                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/cartcheck" className="dropdown-item items">
                      Shopping Cart
                    </Link>
                    <Link to="/checkout" className="dropdown-item items">
                      Checkout
                    </Link>
                  </div>
                </div>
                <Link
                  to="/contactus"
                  className="font-weight-bold nav-item nav-link items"
                >
                  Contact
                </Link>
              </div>
              {isLogined ? (
                <div className="navbar-nav cartCheck py-0">
                  <p className="font-weight-bold nav-item nav-link items">
                    {userName}
                  </p>
                  <p
                    onClick={() => setIslogined(false)}
                    className="loginButton font-weight-bold border-none nav-item nav-link items"
                  >
                    Logout
                  </p>
                </div>
              ) : (
                <div className="navbar-nav cartCheck py-0">
                  <p
                    onClick={() => setLoginmodal(true)}
                    className="loginButton font-weight-bold border-none nav-item nav-link items"
                  >
                    Login
                  </p>
                  <p className="font-weight-bold nav-item nav-link items">
                    Register
                  </p>
                </div>
              )}
            </div>
          </nav>
          {/* login page calling  */}
          {/* login section handler by venkateswara rao */}
          <div>
            {loginModal && (
              <Login
                logOutShow={logoutButtonShow}
                modalClose={loginHandlermodal}
                userDetailsGet={userDetailshandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarForOther;
