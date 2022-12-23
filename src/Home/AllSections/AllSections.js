import React from "react";

import "./AllSections.css";


import TrendySection from "../TrendySection/TrendySection";
import StayUpdated from "../StayUpdated/StayUpdated";

const data = [
  {
    id: 31,
    imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "Colorful Womens Skirt",
    price: 235,
    cross_price: 453,
  },
  {
    id: 32,
    imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
    title: "Kids Stylish Shirt",
    price: 236,
    cross_price: 500,
  },
  {
    id: 33,
    imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
    title: "Men Stylish ",
    price: 300,
    cross_price: 500,
  },
  {
    id: 34,
    imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
    title: "Women Dress",
    price: 199,
    cross_price: 255,
  },
  {
    id: 35,
    imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
    title: "Kids Child Shirt",
    price: 200,
    cross_price: 400,
  },
  {
    id: 36,
    imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
    title: "Men Soot Shirt",
    price: 500,
    cross_price: 900,
  },
  {
    id: 37,
    imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
    title: "Women Shoot Shirt",
    price: 320,
    cross_price: 764,
  },
  {
    id: 38,
    imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
    title: "Kid new trend ",
    price: 1000,
    cross_price: 1200,
  },
];

const AllSections = () => {
  return (
    <>
      <div className="pt-5">
        
        <h2 className="decorated">
          <span>Trendy Products</span>
        </h2>
      
      </div>
      <div className="container-fluid trendy-shop-container">
        <div className="row">
          {data.map((each) => {
            return (
              <div
                key={each.id}
                className="col-lg-4 col-xl-3 col-md-6 col-sm-12"
              >
                <TrendySection key={each.id} shopDetails={each} />
              </div>
            );
          })}
        </div>
      </div>
      <StayUpdated />
      <div className="pt-5">
        
        <h2 className="decorated">
          <span>Just Arrived</span>
        </h2>
      
      </div>
      <div className="container-fluid trendy-shop-container">
        <div className="row">
          {data.map((each) => {
            return (
              <div
                key={each.id}
                className="col-lg-4 col-xl-3 col-md-6 col-sm-12"
              >
                <TrendySection key={each.id} shopDetails={each} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllSections;
