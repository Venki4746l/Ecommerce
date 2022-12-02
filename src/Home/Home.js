import React from "react";


import Topbar from "./TopBar/Topbar";
import Navbar from "./Navbar/Navbar";


import Vendorpage from "./vendorSection/Vendorpage";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar /> 
      <Vendorpage />
    </div>
  );
};

export default Home;
