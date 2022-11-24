import React, { useState } from "react";
import Login from "../pages/Login/Login";
import Vendorpage from "./vendorSection/Vendorpage";

const Home = () => {
  const [loginmodal, setLoginModal] = useState(false);
  return (
    <div>
      <button onClick={()=>setLoginModal(!loginmodal)}>Login</button>
      <Vendorpage />
      <div>{loginmodal && <Login />}</div>
      
      
    </div>
  );
};

export default Home;
