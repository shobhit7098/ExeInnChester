import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Facility from "../components/Facility";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
// import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <HeroSlider />
      <Facility />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
