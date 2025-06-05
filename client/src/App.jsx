import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Amenities from "./pages/Amenities";
import Attractions from "./pages/Attractions";
import Restaurants from "./pages/Restaurants";
import SearchPage from "./pages/SearchPage";
import ScrollToTop from "./pages/ScrollToTop";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
