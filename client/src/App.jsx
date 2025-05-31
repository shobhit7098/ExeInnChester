import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Amenities from "./pages/Amenities";
import Attractions from "./pages/Attractions";
import Restaurants from "./pages/Restaurants";
import SearchPage from "./pages/SearchPage";
// import Contact from "./pages/Contact";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
