import React, { useState } from "react";
import Login from "../pages/Login/Login";
import Vendorpage from "./vendorSection/Vendorpage";

import ArrivedSection from './ArrivedSection/ArrivedSection'

import StayUpdated from "./StayUpdated/StayUpdated";

import TrendySection from './TrendySection/TrendySection'
import Feature from "./Features/Features"; 
import Product from './Products/Product';
import Footer from "../Footer/Footer"
import Cards from "./CardOffer/Cards"

const Home = () => {
  const [loginmodal, setLoginModal] = useState(false);
  return (
    <div>
      <button onClick={()=>setLoginModal(!loginmodal)}>Login</button>
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
