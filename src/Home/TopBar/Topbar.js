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
          <></>
          <div className="col-lg-6 d-none d-lg-block"> Top-Navbar
            <div className="d-inline-flex align-items-start justify-content-start">
              <a className="text-dark" href="...">FAQs</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark text-decoration-none" href="...">Help</a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark text-decoration-none" href="...">Support</a>
            </div>
          </div>
          {/* Top-Navbar section */}

          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="...">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height:'18px',width:'18px'}}><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </a>
              <a className="text-dark px-2" href="...">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:'18px',width:'18px'}}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
              </a>
              <a className="text-dark px-2" href="...">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height:'18px',width:'18px'}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
              </a>
              <a className="text-dark px-2" href="...">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height:'18px',width:'18px'}}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a className="text-dark pl-2" href="...">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{height:'18px',width:'18px'}}><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </a>
            </div>
          </div>
          {/* Icons imported from Fontawesome website & style used for icon size */}
        </div>

        <div className="row align-items-center py-3 px-xl-5">
          {/* row align-items-center is used for working in center alignment */}
          <div className="col-lg-3 d-none d-lg-block">
            <a href="..." className="text-decoration-none" style={{ color: "black" }}>
              <h1 className="m-0 font-weight-semi-bold">
                <span className="text-primary font-weight-bold px-2 border mr-1">E</span>
                {/* For E in box used border bootstrap className */}
                <span className="heading font-weight-bold">Shopper</span>
              </h1>
            </a>
          </div>

          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products"/>
                {/* For search bar used bootstrap form-control className */}
                {/* placeholder is used showing lite text */}
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:'18px',width:'18px'}} fill="#D19C97"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                    {/* Search icon imported from Fontawesome */}
                  </span>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-3 col-6 text-right">
            {/* col-lg-3 used for in large devices 3 columns will consider */}
            <a href="..." className="btn border">
              {/* href is used for giving access for link */}
              {/* btn border is a bootstrap className it used for looking border around button annd btn is used for working as a button */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:'18px',width:'18px'}} fill="#D19C97"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
              <span className="heading badge">0</span>
            </a>
            <a href="..." className="btn border">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{height:'18px',width:'18px'}} fill="#D19C97"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              <span className="heading badge">0</span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
