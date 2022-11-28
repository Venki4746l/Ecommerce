import React, { useState } from "react";
import Login from "../pages/Login/Login";
import Vendorpage from "./vendorSection/Vendorpage";
import Navbar from "./NavbarSection/Navbar";
import Dropdowns from "./DropDown/Dropdowns";
import TopSection from "./TopSection/TopSection";

const Home = () => {
  const [loginmodal, setLoginModal] = useState(false);
  return (
    <div>
      <button onClick={()=>setLoginModal(!loginmodal)}>Login</button>
      <TopSection/>
      <Navbar/>
      <Dropdowns/>
      <Vendorpage />
      <div>{loginmodal && <Login />}</div>
      
      
    </div>
  );
};

export default Home;
