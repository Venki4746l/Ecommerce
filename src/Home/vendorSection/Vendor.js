import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Vendor.css";
import imagesData from "../../constants/vendorImagesData/vendorimageData";
import options from './../../constants/vendorImagesData/vendorResponsive';

const Vendor = () => {
  return (
    <div class="container-fluid vendorContainer">
      <OwlCarousel {...options}>
        {imagesData.map((item) => (
          <div className="vendorImageContainer">
            <img className="img" src={item} alt="" />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Vendor;
