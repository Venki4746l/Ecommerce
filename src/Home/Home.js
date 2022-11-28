import React, { useState } from "react";
import Login from "../pages/Login/Login";
import Vendorpage from "./vendorSection/Vendorpage";

import ArrivedSection from './ArrivedSection/ArrivedSection'

import StayUpdated from "./StayUpdated/StayUpdated";

import TrendySection from './TrendySection/TrendySection'


const Home = () => {
  const [loginmodal, setLoginModal] = useState(false);
  return (
    <div>
      <button onClick={()=>setLoginModal(!loginmodal)}>Login</button>
      <TrendySection />
      <StayUpdated />
      <ArrivedSection />
      <Vendorpage />
      <div>{loginmodal && <Login />}</div>
      
      
    </div>
  );
};

export default Home;
