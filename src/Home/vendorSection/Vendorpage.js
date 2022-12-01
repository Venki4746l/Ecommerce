import React from "react";
import "./vendorPage.css";
import imagesData from "../../constants/vendorImagesData/vendorimageData";

const Vendorpage = () => {
  return (
    <div className="pl-5 pr-5 ">
      <div className="vendorBackgruond  p-2 d-flex ">
        {imagesData.map((image,index) => (
          <div key={index}  className="imageContainer p-4 mr-4">
            <img className="vendorimage" src={image} alt="" />
          </div>
        ))}
      </div>
      
    </div>
    // <div className="slider_wraper">
    //   <div className="slider_tracker">
    //     {imagesData.map((item)=><div className="venderSlideImages">
    //       <img src={item} alt=""/>

    //     </div>)}

    //   </div>
    // </div>
  );
};

export default Vendorpage;
