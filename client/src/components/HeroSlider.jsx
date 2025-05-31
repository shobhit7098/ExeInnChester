import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Front from "../assets/HomePage/front-copy.jpg";
import FrontSecond from "../assets/HomePage/front-2.jpg";
import FrontThird from "../assets/HomePage/night-poolArea.jpg";
// import Vid from "../assets/HomeVideo/Vid1.mp4";

import ec1 from "../assets/ec1.jpg";
import ec2 from "../assets/ec2.jpg";
import ec3 from "../assets/ec3.jpg";
import ec4 from "../assets/ec4.jpg";
import ec5 from "../assets/ec5.jpg";
import ec6 from "../assets/ec6.jpg";
import ec7 from "../assets/ec7.jpg";
import ec8 from "../assets/ec8.jpg";
import ec9 from "../assets/ec9.jpg";
import ec10 from "../assets/ec10.jpg";
import ec11 from "../assets/ec11.jpg";
import ec12 from "../assets/ec12.jpg";
import ec13 from "../assets/ec13.jpg";
import ec14 from "../assets/ec14.jpg";
import ec15 from "../assets/ec15.jpg";
import ec16 from "../assets/ec16.jpg";
import room4 from "../assets/Booking/LivingRoom2.jpg";

const facilityImages = [
  ec1,
  ec2,
  ec3,
  ec4,
  ec5,
  ec6,
  ec7,
  ec8,
  ec13,
  ec2,
  ec9,
  ec5,
  ec4,
  ec10,
  ec11,
  ec12,
  ec13,
  ec14,
  ec15,
  ec16,
];
const images = [
  {
    src: Front,
    alt: "Close-up of striped pillows on a bed in a hotel room with soft natural light",
  },
  {
    src: FrontSecond,
    alt: "Modern hotel room with a cozy ambiance and large windows",
  },
  {
    src: FrontThird,
    alt: "Elegant bedroom with decorative cushions and natural light",
  },
];

const HeroSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <main className="relative pt-20 min-h-screen bg-white">
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/20 backdrop-blur-sm z-[40] pointer-events-none transition-all duration-300"
          aria-hidden="true"
        />
      )}
      <header className="relative w-full z-[10]">
        <div className="relative w-full overflow-visible group">
          {/* <div className="absolute inset-0 bg-gray-400 opacity-30 z-0" /> */}
          <video
            src="https://executiveinn.s3.eu-north-1.amazonaws.com/HomeVideo/Vid1.mp4" // Replace with your video path
            autoPlay
            loop
            muted={false}
            className="w-full object-cover max-h-[600px]"
            width={800}
            height={600}
            playsInline
          >
            Your browser does not support the video tag.
          </video>

          {/* Triangle Bottom Cut */}
          <div
            className="absolute bottom-0 left-0 w-full z-10 transition-all duration-300 ease-in-out"
            style={{
              height: "10px",
              backgroundColor: "#007f66",
            }}
          />
        </div>
      </header>
      {/* Tagline */}
      <section className="py-8 px-4 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold" tabIndex={-1}>
            Extended Stay Available
          </h2>
        </div>
      </section>
      {/* Facility Section */}
      */
      <section
        /*  container */
        className="relative z-10 mx-auto w-2/3 overflow-hidden
          bg-[#f1f1f1] shadow-[0_0_70px_-20px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-16 py-10 lg:py-14 gap-8"
        aria-label="Facility images and description"
      >
        {/* 2 text block */}
        <motion.article
          className="flex-1 max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3
            className="mb-3 text-4xl sm:text-5xl text-center font-extrabold uppercase tracking-wide text-green-700"
            tabIndex={-1}
          >
            Our Facility
          </h3>

          {/* <hr className="mx-auto lg:mx-0  w-20 bg-gray-300 border-t-2 mt-2 " /> */}
          <hr className="border-t-3 border-gray-200 w-20 mt-2 mx-auto" />

          <motion.p
            className="text-center mt-6 whitespace-pre-line font-semibold leading-relaxed text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {`Executive Inn, Chester, SC is an excellent choice
for travelers visiting Chester and surrounding
areas. They offer many helpful amenities
designed to enhance your stay. Guest rooms
offer many amenities. If you like Italian
restaurants, Executive Hotel is conveniently
located near Italian Garden II. Plus, during your
trip, don’t forget to check out an art gallery, such
as Arts Council. Enjoy your stay in Executive Inn
Chester!`}
          </motion.p>
        </motion.article>

        {/* 3gallery */}
        <figure
          className="grid flex-1 max-w-2xl gap-[2px] sm:gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          aria-label="Facility gallery"
        >
          {facilityImages.map((src, i) => {
            const selected = isOpen && photoIndex === i;

            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPhotoIndex(i);
                  setIsOpen(true);
                }}
                aria-label={`Open facility image ${i + 1} in lightbox`}
                aria-pressed={selected}
                className="relative aspect-square overflow-hidden rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#023b4f]"
              >
                {/* dim thumbnail if it matches the lightbox image */}
                {selected && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                )}

                <img
                  src={src}
                  alt={`Facility ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </button>
            );
          })}
        </figure>
      </section>
      {/* Quote Section */}
      <section
        className="relative w-full h-[500px] mt-16  overflow-hidden shadow-xl"
        aria-label="Customer quote"
      >
        <img
          src={room4}
          alt="Hotel bedroom banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-white text-3xl font-medium text-center px-6 py-8  italic shadow-lg drop-shadow-md">
            “Comfortable Rooms, Friendly Staff, Free WiFi and HBO”
          </blockquote>
        </div>
      </section>
      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-transparent"
          aria-modal="true"
          role="dialog"
        >
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={facilityImages.map((src) => ({ src }))}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
            styles={{
              container: {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(2px)",
              },
              // Add custom styles here to set yellow bullet points and nav arrows
              // Example: Override CSS variables or provide classNames
            }}
          />
        </div>
      )}
    </main>
  );
};

export default HeroSlider;
