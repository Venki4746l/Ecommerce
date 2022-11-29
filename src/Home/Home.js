import React from "react";
//import Login from "../pages/Login/Login";

import Navbar from "./NavbarSection/Navbar";
import Dropdowns from "./DropDown/Dropdowns";
import TopSection from "./TopSection/TopSection";
import Feature from "./Features/Features";
import Product from "./Products/Product";
import Cards from "./CardOffer/Cards";
import TrendySection from "./TrendySection/TrendySection";
import StayUpdated from "./StayUpdated/StayUpdated";

import ArrivedSection from "./ArrivedSection/ArrivedSection";

import Vendorpage from "./vendorSection/Vendorpage";
import Footer from "../Footer/Footer";

const Home = () => {
  // const [loginmodal, setLoginModal] = useState(false);
  // const modalClose =(info)=>{
  //   setLoginModal(info)
  // }
  return (
    <div>
      <TopSection />
      <Navbar />
      <Dropdowns />
      <Vendorpage />

      <Feature />
      <Product />
      <Cards />
      <TrendySection />
      <StayUpdated />
      <ArrivedSection />
      <Vendorpage />
      <Footer />
    </div>
  );
};

export default Home;
