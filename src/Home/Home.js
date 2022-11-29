import React, { useState } from "react";
import Login from "../pages/Login/Login";
import Vendorpage from "./vendorSection/Vendorpage";
import Navbar from "./NavbarSection/Navbar";
import Dropdowns from "./DropDown/Dropdowns";
import TopSection from "./TopSection/TopSection";

import ArrivedSection from './ArrivedSection/ArrivedSection'

import StayUpdated from "./StayUpdated/StayUpdated";

import TrendySection from './TrendySection/TrendySection'
import Feature from "./Features/Features"; 
import Product from './Products/Product';
import Footer from "../Footer/Footer"
import Cards from "./CardOffer/Cards"

const Home = () => {
  const [loginmodal, setLoginModal] = useState(false);
  const modalClose =(info)=>{
    setLoginModal(info)
  }
  return (
    <div>
      <button onClick={()=>setLoginModal(!loginmodal)}>Login</button>
      <TopSection/>
      <Navbar/>
      <Dropdowns/>
      <Vendorpage />
      <div>{loginmodal && <Login modalClose={modalClose} />}</div>
      <Feature />
      <Product />
      <Cards/>
      <TrendySection />
      <StayUpdated />
      <ArrivedSection />
      <Vendorpage />
      <Footer/>
      <div>{loginmodal && <Login />}</div>
      
      
    </div>
  );
};

export default Home;
