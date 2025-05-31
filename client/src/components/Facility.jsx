import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
const lobby1 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Bedroom3.jpg";
const lobby3 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/bedroomNew.jpg";
const lobby4 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/bedroomNew2.jpg";
const lobby2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/bedroomNew3.jpg";
const lobby5 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/bedroom2.jpg";
const room1 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeArea.jpg";
const room2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeeArea2.jpg";
const room5 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeeArea3.jpg";
const room3 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeeArea4.jpg";
const room4 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/CoffeeArea5.jpg";
const kit1 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Room1.jpg";
const kit2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Room3.jpg";
const kit5 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/living7const";
const kit3 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/HomePage/day-poolArea.jpg";
const kit4 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/pool.jpg";
const rp1 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Living.jpg";
const rp2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Living3.jpg";
const rp3 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Living4.jpg";
const rp5 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/living6.jpg";
const rp =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/living5.jpg";
const con1 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/convenience.jpg";
const con2 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Convenience3.jpg";
const con3 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Convenience4.jpg";
const con5 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Convenience5.jpg";
const con4 =
  "https://executiveinn.s3.eu-north-1.amazonaws.com/assets/Booking/Conv.jpg";

const imageSet1 = [lobby1, lobby3, lobby4, lobby5, lobby2];
const imageSet2 = [room1, room2, room3, room4, room5];
const imageSet3 = [rp1, rp2, rp3, rp, rp5];
const imageSet4 = [kit1, kit2, kit3, kit4, kit5];
const imageSet5 = [con1, con2, con3, con4, con5];

const FacilityShowcase = () => {
  const sections = [
    { title: "Superior and Premium Rooms", images: imageSet1 },
    { title: "All about comfort", images: imageSet2 },
    { title: "As your own home", images: imageSet3 },
    { title: "Your experience matters", images: imageSet4 },
    {
      title: "Comfortable and luxurious",
      images: imageSet5,
    },
  ];

  return (
    <section
      className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16"
      aria-label="Facility showcase with image carousels"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {sections.map(({ title, images }, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={index}
              aria-label={title}
              className={`flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl   overflow-hidden`}
            >
              {/* Text Section */}
              <section className="w-full md:w-1/2 p-8 flex items-center justify-center">
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-4">
                    {title}
                  </h2>
                  <hr className="w-20 border-t-2 border-gray-300" />
                </div>
              </section>

              {/* Swiper Section */}
              <div className="w-full md:w-[450px] h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden relative">
                <Swiper
                  spaceBetween={0} // Removed gap between slides
                  slidesPerView={1}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  loop={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="w-full h-full"
                >
                  {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={src}
                        alt={`${title} image ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </article>
          );
        })}
      </div>

      {/* Custom styles for Swiper navigation arrows and pagination bullets */}
      <style jsx>{`
        /* Navigation arrow buttons */
        .swiper-button-next,
        .swiper-button-prev {
          width: 28px !important;
          height: 28px !important;
          color: white !important;
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.7));
        }

        /* Resize the actual arrow icons (inside pseudo-element) */
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px !important; /* smaller arrow icon */
        }

        /* Yellow pagination bullets */
        .swiper-pagination-bullet-active {
          background: #facc15; /* Tailwind yellow-400 */
          opacity: 1;
          transition: opacity 0.3s;
        }
      `}</style>
    </section>
  );
};

export default FacilityShowcase;
