import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Living =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/reception-2.jpg";
// import lobby from "../assets/HomePage/.jpg";
const lobby2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeArea.jpg";
const lobby4 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeeArea5.jpg";
const lobby3 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeeArea2.jpg";
const lobby =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeeArea3.jpg";
const Fotter =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/footer.jpg";
const testimonials = [
  {
    quote: `“The room was spotless, and the staff was incredibly welcoming. It felt like a home away from home.”`,
    author: "Kaya Jennifer",
  },
  {
    quote: `“Clean rooms, comfortable beds, and reliable Wi-Fi – everything you need for a perfect stopover.”`,
    author: "Liam Carter",
  },
  {
    quote: `“The Executive Inn exceeded our expectations. The pool area at night is a hidden gem.”`,
    author: "Maya Patel",
  },
  {
    quote: `“Amazing hospitality and peaceful environment. I loved the coffee area in the lobby – so cozy!”`,
    author: "James Wilson",
  },
];


const Contact = () => {
  const images = [
    lobby,
    lobby2,
    lobby3,
    lobby4,
    // Add more images as needed
  ];
  const [isFlipped, setIsFlipped] = useState(false);
  const textSwiperRef = useRef(null);
  const imageSwiperRef = useRef(null);

  return (
    <>
      <Navbar />
      <section>
        <div className="w-full">
          {/* Hero Section */}
          <div
            className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${Living})` }}
          >
            <div className="absolute inset-0 bg-black opacity-60" />
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-80 h-56 [perspective:1000px] cursor-pointer"
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white/20 backdrop-blur-md text-white rounded-xl shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden] border border-white/30">
                  <h2 className="text-xl font-bold mb-2">Welcome!</h2>
                  <p className="mb-4 text-sm">Click below to contact us</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(true);
                    }}
                    className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
                  >
                    Contact Us
                  </button>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-white/20  backdrop-blur-md text-white rounded-xl shadow-lg flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/30">
                  <h2 className="text-lg font-bold mb-3">Contact Info</h2>
                  <a
                    href="mailto:satpaul@excecutiveinn-chester.com"
                    onClick={(e) => e.stopPropagation()}
                    className="text-lg text-white text-center hover:underline mb-2"
                  >
                    📧 satpaul@excecutiveinn-chester.com
                  </a>
                  <a
                    href="tel:(803) 581-2525"
                    onClick={(e) => e.stopPropagation()}
                    className="text-lg text-white hover:underline mb-4"
                  >
                    📞 +1 (803) 581-2525
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                    }}
                    className="text-sm text-white/80 hover:underline"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12">
          {/* Testimonial Slider */}
          <div className="bg-[#4a2600] text-white w-full md:w-1/2 lg:w-[40%] text-center flex items-center justify-center h-[300px] lg:h-[350px] xl:h-[400px]">
            <Swiper
              onSwiper={(swiper) => (textSwiperRef.current = swiper)}
              controller={{ control: imageSwiperRef.current }}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              modules={[Autoplay, Controller]}
              className="w-full h-full px-6  sm:px-10 lg:px-16"
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="flex flex-col justify-center items-center py-23 h-full text-center"
                >
                  <p className="italic font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
                    {item.quote}
                  </p>
                  <p className="mt-6 font-bold tracking-widest text-[#d2a87c] text-xs sm:text-sm md:text-base lg:text-lg uppercase">
                    {item.author}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Image Slider */}
          <div className="w-full md:w-1/2 lg:w-[45%] h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden relative shadow-lg">
            <Swiper
              onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
              controller={{ control: textSwiperRef.current }}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              modules={[Autoplay, Controller]}
              className="w-full h-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Hotel image ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[200px]">
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
      </section>

      {/* Book Now Section */}
      <section>
        <div
          className="w-full relative h-[400px] bg-cover mt-4 bg-center flex flex-col justify-center items-center text-white text-center"
          style={{
            backgroundImage: `url(${Fotter})`, // Make sure Fotter is a valid image import
          }}
        >
          {/* Blue overlay (blur effect) */}
          <div className="absolute inset-0 bg-blue-800 opacity-70 z-0" />

          {/* Text content on top */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold italic mb-4">
              Book A Room Now
            </h2>
            <p className="text-3xl md:text-4xl font-bold border-y-4 border-red-500 px-6 py-2">
              (803) 581-2525
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
