import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Review";

const Image =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/lawn-bgeffect.jpg";
const SlipperImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/SlipperImage.jpg";
const TestimonialImage =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/TestimonialImage.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AmenitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Bedroom", "Bathroom", "Other"];

  const amenities = [
    {
      icon: "🛏️",
      title: "Bed Linens",
      description: "Fresh linens provided for every guest.",
      category: "Bedroom",
    },
    {
      icon: "❄️",
      title: "Air Conditioning",
      description: "Stay cool with in-room air conditioning.",
      category: "Bedroom",
    },
    {
      icon: "🔥",
      title: "Heating",
      description: "Room heating for a cozy stay.",
      category: "Bedroom",
    },
    {
      icon: "📺",
      title: "Cable TV",
      description: "Enjoy a variety of channels.",
      category: "Bedroom",
    },
    {
      icon: "🧥",
      title: "Hangers",
      description: "Hang your clothes with provided hangers.",
      category: "Bedroom",
    },
    {
      icon: "☕",
      title: "Coffee Maker",
      description: "Brew fresh coffee any time.",
      category: "Other",
    },
    {
      icon: "🍽️",
      title: "Kitchen Table",
      description: "Dine comfortably at your own table.",
      category: "Other",
    },
    {
      icon: "🧊",
      title: "Refrigerator",
      description: "Store food and drinks easily.",
      category: "Other",
    },
    {
      icon: "🔌",
      title: "Microwave",
      description: "Heat your meals quickly.",
      category: "Other",
    },
    {
      icon: "🚿",
      title: "Hot Water",
      description: "Reliable hot water for kitchen and bath.",
      category: "Other",
    },
    {
      icon: "🧼",
      title: "Essentials",
      description: "Soap, toilet paper, and more provided.",
      category: "Bathroom",
    },
    {
      icon: "🧴",
      title: "Shampoo",
      description: "Shampoo included for your convenience.",
      category: "Bathroom",
    },
    {
      icon: "🪮",
      title: "Hair Dryer",
      description: "Dry your hair with in-room dryer.",
      category: "Bathroom",
    },
    {
      icon: "🧻",
      title: "Towels",
      description: "Clean towels provided daily.",
      category: "Bathroom",
    },
    {
      icon: "🛁",
      title: "Bathtub",
      description: "Relax in the bathtub after a long day.",
      category: "Bathroom",
    },
    {
      icon: "🪛",
      title: "Cloth Iron",
      description: "Iron provided to keep clothes neat.",
      category: "Bathroom",
    },
    {
      icon: "🅿️",
      title: "Free Parking",
      description: "Complimentary parking available.",
      category: "Other",
    },
    {
      icon: "📶",
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the property.",
      category: "Other",
    },
  ];

  const filteredAmenities =
    selectedCategory === "All"
      ? amenities
      : amenities.filter((a) => a.category === selectedCategory);
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] mt-10 overflow-hidden">
        <img
          src={Image}
          alt="coffee area"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-white font-semibold text-2xl md:text-4xl text-center pt-20 px-6">
            Book Today And Enjoy Your Stay At Executive Inn, Chester, SC
          </blockquote>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white text-center py-10 px-4">
        <p className="tracking-widest font-bold text-sm text-gray-800 mb-4">
          T E S T I M O N I A L S
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-indigo-700">
          We create memorable experiences
        </h2>
        <p className="mt-4 font-bold text-gray-600">
          The best Motel in Chester, SC, offering old-world charm and comfort
        </p>

        {/* Testimonial Card */}
        <div className="relative flex justify-center items-center py-20 px-6 bg-white overflow-hidden">
          <img
            src={SlipperImage}
            alt="Decorative Slipper"
            className="absolute -left-1/12 -bottom-30 w-[700px] h-[800px] rotate-[80deg] opacity-30 z-0 pointer-events-none"
          />
          <div className="relative z-10 shadow-[0_0_70px_-20px_rgba(0,0,0,0.4)] rounded-lg h-[500px] overflow-hidden max-w-5xl w-full bg-[#f1f1f1]">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 p-8 md:p-10 text-left">
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  Executive Inn was amazing. Service very friendly and
                  professional.
                </p>
                <p className="text-blue-700 font-semibold">Tommy Rivers</p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={TestimonialImage}
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-[#f0f4f8] py-4 px-4 min-h-screen  flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <h4 className="uppercase text-lg font-bold tracking-widest text-gray-500">
            Welcome to
          </h4>
          <h2 className="text-5xl font-bold text-blue-700">
            Executive Inn, Chester, SC
          </h2>
          <p className="text-gray-500  font-bold text-lg mt-2">
            A place to experience and enjoy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border border-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="w-full max-w-6xl"
        >
          {filteredAmenities.map((amenity, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center min-h-[400px] flex flex-col items-center justify-center hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {amenity.title}
                </h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Review />
      <Footer />
    </>
  );
}
