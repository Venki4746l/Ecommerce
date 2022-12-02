import React from 'react'
import './AllSection.css'

import ArrivedSection from '../ArrivedSection/ArrivedSection'

import StayUpdated from '../StayUpdated/StayUpdated'

import TrendySection from '../TrendySection/TrendySection';

const data = [
  {
    id: 1,
    imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "Colorful Stylish Shirt",
    price: 123.0,
    cross_price: 123,
  },
  {
    id: 2,
    imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 3,
    imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 4,
    imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 5,
    imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 6,
    imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 7,
    imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 8,
    imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
];

const AllSections = () => {
  return (
    <>
      <div className="heading-section">
        <h2 class="decorated">
          <span>Trendy Products</span>
        </h2>
      </div>
      <div className="trendy-container">
        {data.map((each) => {
          return <TrendySection key={each.id} shopDetails={each} />;
        })}
      </div>
      <StayUpdated />
      <div className="heading-section">
        <h2 class="decorated">
          <span>Just Arrived</span>
        </h2>
      </div>
      <div className="trendy-container">
        {data.map((each) => {
          return <ArrivedSection key={each.id} shopDetails={each} />;
        })}
      </div>
    </>
  )
}

export default AllSections
