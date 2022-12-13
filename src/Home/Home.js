import React from 'react'
import Navbar from './Navbar/Navbar'
import TopNavbar from './TopBar/Topbar'
import Features from './Features/Features'
import Product from './Products/Products';
import AllSections from './AllSections/AllSections';
import Cards from './CardOfferSection/Cards';
import Vendor from './vendorSection/Vendor'
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Features />
      <Product/>
      <Cards />
      <AllSections />
      <Vendor />
      <Footer />
      

    </div>
  )
}

export default Home
