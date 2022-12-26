import React from "react";

import "./AllSections.css";

import TrendySection from "../TrendySection/TrendySection";
import StayUpdated from "../StayUpdated/StayUpdated";

const data = [
  {
    id: 31,
    imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "Colorful Stylish Shirt",
    price: 123.0,
    cross_price: 123,
  },
  {
    id: 32,
    imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 33,
    imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 34,
    imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 35,
    imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 36,
    imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 37,
    imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 38,
    imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
];

const AllSections = () => {
  return (
    <>
      <div className="pt-5">
        <h2 class="decorated">
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
        <h2 class="decorated">
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
