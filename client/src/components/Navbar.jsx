import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search-page?query=${encodeURIComponent(query.trim())}`);
    setQuery("");
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center md:flex-nowrap flex-wrap">
          {/* Logo */}
          <Link to="/" className="leading-tight">
            <h1 className="text-3xl md:text-4xl italic font-extrabold text-blue-900">
              Executive Inn
            </h1>
            <span className="text-base md:text-lg italic text-blue-900 font-bold block text-center">
              Chester, SC
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-10 text-gray-800 text-base font-medium">
            <Link to="/amenities" className="hover:text-blue-700">
              Amenities
            </Link>
            <Link to="/attractions" className="hover:text-blue-700">
              Attractions
            </Link>
            <Link to="/restaurants" className="hover:text-blue-700">
              Restaurants
            </Link>
            <Link to="/contact" className="hover:text-blue-700">
              Contact Us
            </Link>

            {/* BOOKING */}
            <div className="relative">
              <button
                onClick={() => {
                  setBookingDropdownOpen(!bookingDropdownOpen);
                  setSearchOpen(false);
                }}
                className="bg-[#b8913b] text-white font-medium tracking-widest px-6 py-3 hover:bg-[#a47f2c] transition duration-300"
              >
                BOOK A STAY
              </button>
              {bookingDropdownOpen && (
                <div className="absolute right-0 top-full min-w-[260px] bg-white border border-gray-300 border-t-2 border-t-blue-500 shadow-lg rounded-b-md z-40 mt-4">
                  <a
                    href="https://www.booking.com/hotel/us/executive-inn-chester.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Booking.com
                  </a>
                  <a
                    href="https://www.expedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Expedia.com
                  </a>
                </div>
              )}
            </div>

            {/* Search */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setBookingDropdownOpen(false);
              }}
              className="text-xl hover:text-blue-500 relative z-20"
            >
              {searchOpen ? <FiX /> : <FiSearch />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-3 text-xl">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-blue-500"
            >
              {searchOpen ? <FiX /> : <FiSearch />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:text-blue-500"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Search Dropdown */}
          {searchOpen && (
            <div className="absolute right-0 top-full min-w-[260px] bg-white border border-gray-300 border-t-2 border-t-blue-500 shadow-lg rounded-b-md mr-18 z-40 mt-2">
              <form
                onSubmit={submit}
                className="p-4 flex items-center space-x-2"
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border border-gray-400 px-3 py-2 text-sm focus:outline-none rounded-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-sm px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-sm"
                >
                  <FiSearch />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 pt-6 pb-8 space-y-6 text-base font-medium text-gray-800">
            {["/amenities", "/attractions", "/restaurants", "/contact"].map(
              (link, i) => (
                <Link
                  key={i}
                  to={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-blue-700 capitalize"
                >
                  {link.slice(1)}
                </Link>
              )
            )}
            <div className="relative">
              <button
                onClick={() => {
                  setBookingDropdownOpen(!bookingDropdownOpen);
                  setSearchOpen(false);
                }}
                className="w-full bg-[#b8913b] text-white font-medium tracking-widest px-6 py-3 hover:bg-[#a47f2c] transition duration-300"
              >
                BOOK A STAY
              </button>
              {bookingDropdownOpen && (
                <div className="mt-2 w-full bg-white border border-gray-300 border-t-2 border-t-blue-500 shadow-md rounded-b-md z-30">
                  <a
                    href="https://www.booking.com/hotel/us/executive-inn-chester.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Booking.com
                  </a>
                  <a
                    href="https://www.expedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Expedia.com
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
