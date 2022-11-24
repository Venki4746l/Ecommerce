import React from "react";
import "./vendorPage.css";
import imagesData from "../../constants/vendorImagesData/vendorimageData";

const Vendorpage = () => {
  return (
    <div className="p-4 ">
      <div className="vendorBackgruond  p-5 d-flex ">
        {imagesData.map((image,index) => (
          <div key={index}  className="imageContainer p-4 mr-4">
            <img className="vendorimage" src={image} alt="" />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Vendorpage;
