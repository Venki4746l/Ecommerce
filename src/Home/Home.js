import React from "react";
//import Login from "../pages/Login/Login";

import Navbar from "./NavbarSection/Navbar";
import Dropdowns from "./DropDown/Dropdowns";
import TopSection from "./TopSection/TopSection";

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
      {/* <button onClick={()=>setLoginModal(!loginmodal)}>Login</button> */}
      <TopSection />
      <div className="d-flex">
        <Dropdowns />
        <Navbar />
      </div>

      {/* <div>{loginmodal && <Login modalClose={modalClose} />}</div> */}
      
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
