import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid footer-container text-dark p-5">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <a href="@" className="shopper-heading">
              <h1 className="to-bold">
                <span className="e-special">E</span>Shopper
              </h1>
            </a>

            <p className="footer-description">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <p>
              <svg
                className="pink-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
              123 Street, New York, USA
            </p>
            <p>
              <svg
                className="pink-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              info@example.com
            </p>
            <p>
              <svg
                className="pink-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              +012 345 67890
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-4 d-flex flex-column mb-3">
                <h3 className="quick-heading">Quick Links</h3>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Home
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Our Shop
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Shop Detail
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Shopping Cart
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Checkout
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Contact Us
                </a>
              </div>
              <div className="col-md-4 d-flex flex-column mb-3">
                <h3 className="quick-heading">Quick Links</h3>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Home
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Our Shop
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Shop Detail
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Shopping Cart
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Checkout
                </a>
                <a className="footer-link" href="@">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                    viewBox="0 0 320 512"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                  Contact Us
                </a>
              </div>
              <div className="col-md-4 mb-3">
                <h3 className="quick-heading">Newsletter</h3>
                <form>
                  <input
                    className="footer-input-field"
                    placeholder="Your Name"
                    type="text"
                    required
                  ></input>
                  <input
                    className="footer-input-field"
                    placeholder="Your Email"
                    type="email"
                    required
                  ></input>
                  <button className="footer-button">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

