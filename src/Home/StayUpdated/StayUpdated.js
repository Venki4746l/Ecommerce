import React from "react";

import "./StayUpdated.css";




const StayUpdated = () => {
  return (
    <>
      <div style={{backgroundColor: '#edf7fe'}}>
        <div className="container-fluid  my-5">
          <div className="row justify-content-md-center py-5 px-xl-5">
            <div className="col-md-6 col-12 py-5">
              <div className="text-center mb-2 pb-2">
                <div className="product-container">
                  <h1 className="deco">
                    <span className="description">Stay Updated</span>
                  </h1>
                </div>
                <h3>
                  Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                  diam labore at justo ipsum eirmod duo labore labore.
                </h3>
              </div>
              <form className='mb-5'>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-4"
                    placeholder="Email Goes Here"
                  />
                  <div className="input-group-append">
                    <button className="input-button px-4">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayUpdated;
