import React from "react";

import Navbar from "./Navbar/Navbar";
import TopNavbar from "./TopBar/Topbar";

import Cards from "./CardOffer/Cards";
import TrendySection from "./TrendySection/TrendySection";
import StayUpdated from "./StayUpdated/StayUpdated";

import ArrivedSection from "./ArrivedSection/ArrivedSection";

import Vendorpage from "./vendorSection/Vendorpage";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />

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
