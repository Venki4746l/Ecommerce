import React from "react";
import SingleProduct from "./components/ShopDetail/SingleProduct/SingleProduct";
import Home from "./Home/Home";
import Shopingcarddipslay from "./components/ShopingCart/Shopingcarddipslay";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductComponent from "./components/ShopProducts/ProductComponent/ProductComponent";
import Checkout from "./components/CheckOut/Checkout";
import TopNavbar from "./Home/TopBar/Topbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ProductComponent />} />
          <Route exact path="/shop/:id" element={<SingleProduct />} />
          <Route exact path="/cartCheck" element={<Shopingcarddipslay />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
