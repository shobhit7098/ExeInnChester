import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFax } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
const Bedroom2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/bedroom2.jpg";
const room1 = "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/ec5.jpg";
const Parking =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/parking.jpg";
const ec5 = "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/ec5.jpg";
const ec6 = "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/ec6.jpg";
const ec7 = "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/ec7.jpg";
const Front =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/front-day.jpg";
const Parking2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/parking2.jpg";

const frontImages = [Front, ec5, Parking, ec6, Parking2, ec7];

const Gallery = () => {
  return (
    <>
      <section className="relative text-center py-50 text-white overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-fixed z-0"
          style={{ backgroundImage: `url(${room1})` }}
          role="img"
          aria-label="Hotel room with modern furnishings"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0" />

        {/* Foreground content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
            Convenient Location
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-10">
            Executive Inn Chester is only 30 minutes from Rockhill, SC, and 45
            minutes from Charlotte, NC. Our reception staff will assist you
            during your stay with itineraries, guided tours, and restaurant
            suggestions.
          </p>

          <div className="relative w-full">
            {/* Arrow buttons OUTSIDE the slider content */}
            <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10" />
            <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10  " />

            {/* Swiper container with internal padding */}
            <div className="px-6">
              <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {frontImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-5">
                      {/* Padding on each image box */}
                      <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                        <img
                          src={src}
                          alt={`Room ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION */}
      <section
        className="max-w-screen-xl mx-auto px-6 lg:px-16 py-16 bg-white"
        aria-labelledby="contact-heading"
      >
        <div
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 bg-[#f1f1f1] p-6 sm:p-10 shadow-[0_0_70px_-20px_rgba(0,0,0,0.4)] rounded-lg"
          aria-label="Contact and Image Section"
        >
          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={Bedroom2}
              alt="Executive Inn Bedroom"
              className="w-full h-auto max-h-[500px] object-cover rounded-md shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Left: Text and Map */}
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl font-extrabold text-yellow-600"
            >
              VISIT US
            </h2>
            <hr className="border-t-2 border-gray-300 w-20" />

            <address className="space-y-4 text-gray-700 text-md font-medium not-italic">
              <p className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-gray-500" />
                1632 J A Cochran Byp, Chester, SC 29706
              </p>
              <p className="flex items-center gap-4">
                <FaEnvelope className="text-gray-500" />
                <a
                  href="mailto:satpaul@excecutiveinn-chester.com"
                  className="hover:underline"
                >
                  satpaul@excecutiveinn-chester.com
                </a>
              </p>
              <p className="flex items-center gap-4">
                <FaPhone className="text-gray-500" />
                <a href="tel:+18035812525" className="hover:underline">
                  (803) 581-2525
                </a>
              </p>
              <p className="flex items-center gap-4">
                <FaFax className="text-gray-500" />
                (315) 435-7733
              </p>
            </address>

            {/* Map stays inside this text column */}
            <div className="w-full h-[400px] pt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5378086517956!2d-81.1942169!3d34.696512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885642c1f6c0f151%3A0x7e6af43173f49649!2sExecutive%20Inn%20Chester!5e0!3m2!1sen!2sus!4v1689999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Executive Inn Chester Map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
