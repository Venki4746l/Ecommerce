import React from "react";
import "./Card.css";

function Cards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="small-container P-R d-flex flex-row justify-content-between">
            <img
              className="girl-image"
              alt="girlpic"
              src="https://technext.github.io/eshopper/img/offer-1.png"
            ></img>
            <div className=" text-cont-right">
              <h4 className="offer">20% OFF THE ALL ORDER</h4>
              <h1 className="card-heading">Spring Collection</h1>
              <a className="button" href="@">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-6  ">
          <div className="small-container P-L d-flex flex-row justify-content-between">
            <div>
              <h4 className="offer">20% OFF THE ALL ORDER</h4>
              <h1 className="card-heading">Winter Collection</h1>
              <a className="button" href="@">
                Shop Now
              </a>
            </div>
            <img
              className="girl-image"
              alt="girlpic"
              src="https://technext.github.io/eshopper/img/offer-2.png"
            ></img>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default Cards;
