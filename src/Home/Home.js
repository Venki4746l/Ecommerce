import React, { useState } from "react";
import Login from "../pages/Login/Login";
import Vendorpage from "./vendorSection/Vendorpage";

import ArrivedSection from './ArrivedSection/ArrivedSection'

import StayUpdated from "./StayUpdated/StayUpdated";

import TrendySection from './TrendySection/TrendySection'
import Feature from "./Features/Features"; 
import Product from './Products/Product';



const Home = () => {
  const [loginmodal, setLoginModal] = useState(false);
  return (
    <div>
      <button onClick={()=>setLoginModal(!loginmodal)}>Login</button>
      <Feature />
      <Product />
      <TrendySection />
      <StayUpdated />
      <ArrivedSection />
      <Vendorpage />
      <div>{loginmodal && <Login />}</div>
      
      
    </div>
  );
};

export default Home;
