import React from "react";
import { Link } from "react-router-dom";

const QuickLInks = () => {
  return (
    <div className="col-md-4 d-flex flex-column mb-4">
      <h3 className="quick-heading mb-4">Quick Links</h3>
      <Link className="footer-link mb-2" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
        Home
      </Link>
      <Link className="footer-link mb-2" to="/shop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
        Our Shop
      </Link>
      <Link className="footer-link mb-2" to="/shop/1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
        Shop Detail
      </Link>
      <Link className="footer-link mb-2" to="/cartcheck">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
        Shopping Cart
      </Link>
      <Link className="footer-link mb-2" to="/checkout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
        Checkout
      </Link>
      <Link className="footer-link" to="/contactus">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
        Contact Us
      </Link>
    </div>
  );
};

export default QuickLInks;
